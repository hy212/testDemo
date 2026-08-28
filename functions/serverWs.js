addEventListener('fetch', (event) => {
    handleEvent(event);
});

function handleEvent(event) {
    const headers = event.request.headers;
    if (
        headers.get('Connection') === 'Upgrade' &&
        headers.get('Upgrade') === 'websocket'
    ) {
        const ws = event.upgrade();
        console.log('[Server WS] enter WS handleEvent');
        ws.send('[Server WS] enter Server WS handleEvent');
        ws.onopen = () => {
            ws.send('[Server WS] WS open');
            console.log('[Server WS] onopen');
        };
        ws.onclose = (ev) => {
            console.log('[Server WS] onclose:', ev);
        };
        ws.onerror = (ev) => {
            console.log('[Server WS] onerror:', ev);
        };
        // 接收来自 ws proxy 的消息，并透传消息给 ws proxy
        ws.onmessage = async (ev) => {
            ws.send('[Server WS] 接收到了来自 ws proxy 的消息：' + ev.data);
        };
    } else {
        event.respondWith(new Response("Can't Upgrade WebSocket\n"));
    }
}