import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const MAPPING = {
    '1': 'ONE.html',
    '2': 'TWO.html',
    '3': 'THREE.html',
    '4': 'FOUR.html',
    '5': 'FIVE.html',
    '6': 'SIX.html',
    '7': 'SEVEN.html',
    '8': 'EIGHT.html',
    '9': 'NINE.html',
    '10': 'TEN.html',
    '11': 'ELVEN.html',
    '12': 'TWELVE.HTML',
    '13': 'THIRTEEN.HTML',
    '16': 'SIXTEEN.HTML',
    '17': 'SEVENTEEN.HTML',
    '21': 'TWENTYONE.HTML',
    '22': 'TWENTYTWO.HTML',
    '23': 'TWENTYTHREE.HTML',
    '24': 'TWENTYFOUR.HTML',
    '102': 'TEN2.html',
    '13-php': 'THIRTEEN.php',
    '12-txt': 'TWELVE.txt',
    '7-css': 'SEVENstyle.css'
};

export async function GET(request, { params }) {
    const id = params.id;
    const fileName = MAPPING[id];

    if (!fileName) {
        return new NextResponse('File not found', { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'downloads', fileName);

    if (!fs.existsSync(filePath)) {
        return new NextResponse('File missing on server', { status: 500 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    
    // Determine content type based on extension
    const ext = path.extname(fileName).toLowerCase();
    let contentType = 'application/octet-stream';
    if (ext === '.html') contentType = 'text/html';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.txt') contentType = 'text/plain';
    if (ext === '.php') contentType = 'text/plain'; // Serve PHP as text for download

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': contentType,
            'Content-Disposition': `attachment; filename="${fileName}"`,
        },
    });
}
