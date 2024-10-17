'use strict';

const Models = [
    {
        name: 'None'
    },
    {
        name: 'Lanczos'
    },
    {
        name: 'Nearest'
    },
    {
        name: 'DAT x2'
    },
    {
        name: 'DAT x3'
    },
    {
        name: 'DAT x4'
    },
    {
        name: 'ESRGAN_4x'
    },
    {
        name: 'LDSR'
    },
    {
        name: 'R-ESRGAN 4x+'
    },
    {
        name: 'R-ESRGAN 4x+ Anime6B'
    },
    {
        name: 'ScuNET GAN'
    },
    {
        name: 'ScuNET PSNR'
    },
    {
        name: 'SwinIR 4x'
    }
];

addEventListener('fetch', async (event) => {
    const res = await handleRequest(event.request);
    event.respondWith(res);
});

async function handleRequest(req) {
    const { method } = req;
    if (method !== 'GET') {
        return new Response('404', {
            status: 404
        });
    }
    try {
        const list = getUpscalers();
        const rsp = {
            code: 0,
            msg: '',
            data: list
        };
        return new Response(JSON.stringify(rsp));
    } catch (e) {
        const rsp = {
            code: -100,
            msg: e.message
        };
        return new Response(JSON.stringify(rsp), { status: 500 });
    }
}

function getUpscalers() {
    const list = Models;
    return list.map((v) => ({ ...v, id: v.name }));
}
