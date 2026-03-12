import pool from '$lib/server/database.js';

function checkAuth(request) {
    const auth = request.headers.get('authorization');

    if (!auth || !auth.startsWith('Basic ')) {
        return false;
    }

    const [user, pass] = atob(auth.split(' ')[1]).split(':');

    return user === 'admin' && pass === 'albania2024';
}

// GET /api/religious-sites
export async function GET() {
    const [rows] = await pool.query('SELECT * FROM religious_sites');
    return Response.json(rows, { status: 200 });
}

// POST /api/religious-sites
export async function POST({ request }) {

    if (!checkAuth(request)) {
        return Response.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { name, location, type, built_year, religion } = await request.json();

    if (!name || !location || !type) {
        return Response.json(
            { message: 'Missing required fields' },
            { status: 400 }
        );
    }

    const [result] = await pool.query(
        `INSERT INTO religious_sites 
        (name, location, type, built_year, religion) 
        VALUES (?, ?, ?, ?, ?)`,
        [name, location, type, built_year, religion]
    );

    return Response.json(
        { message: 'Religious site created', id: result.insertId },
        { status: 201 }
    );
}