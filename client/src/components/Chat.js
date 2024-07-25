import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../Chat.css";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Function to handle incoming messages
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // Listen for chat messages
    socket.on("chat message", handleMessage);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      socket.off("chat message", handleMessage);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("chat message", input);
      setInput("");
    }
  };

  return (
    <div className="Chat">
     
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
     
      <div className="SendMessage-Container">
        <input
          className="SendMessageInputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="SendMessageButton" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

// Socket {
//     _events: [Object: null prototype] { error: [Function: noop] },
//     _eventsCount: 1,
//     _maxListeners: undefined,
//     nsp: <ref *2> Namespace {
//       _events: [Object: null prototype] { connection: [Function (anonymous)] },
//       _eventsCount: 1,
//       _maxListeners: undefined,
//       sockets: Map(1) { 'dOe84zFhFp1qlnhYAAAB' => [Circular *1] },
//       _fns: [],
//       _ids: 0,
//       server: Server {
//         _events: [Object: null prototype] {},
//         _eventsCount: 0,
//         _maxListeners: undefined,
//         _nsps: [Map],
//         parentNsps: Map(0) {},
//         parentNamespacesFromRegExp: Map(0) {},
//         _path: '/socket.io',
//         clientPathRegex: /^\/socket\.io\/socket\.io(\.msgpack|\.esm)?(\.min)?\.js(\.map)?(?:\?|$)/,
//         _connectTimeout: 45000,
//         _serveClient: true,
//         _parser: [Object],
//         encoder: [Encoder],
//         opts: [Object],
//         _adapter: [class Adapter extends EventEmitter],
//         sockets: [Circular *2],
//         eio: [Server],
//         httpServer: [Server],
//         engine: [Server],
//         _corsMiddleware: [Function: corsMiddleware],
//         [Symbol(kCapture)]: false
//       },
//       name: '/',
//       adapter: Adapter {
//         _events: [Object: null prototype] {},
//         _eventsCount: 0,
//         _maxListeners: undefined,
//         nsp: [Circular *2],
//         rooms: [Map],
//         sids: [Map],
//         encoder: [Encoder],
//         [Symbol(kCapture)]: false
//       },
//       [Symbol(kCapture)]: false
//     },
//     client: Client {
//       sockets: Map(1) { 'dOe84zFhFp1qlnhYAAAB' => [Circular *1] },
//       nsps: Map(1) { '/' => [Circular *1] },
//       server: Server {
//         _events: [Object: null prototype] {},
//         _eventsCount: 0,
//         _maxListeners: undefined,
//         _nsps: [Map],
//         parentNsps: Map(0) {},
//         parentNamespacesFromRegExp: Map(0) {},
//         _path: '/socket.io',
//         clientPathRegex: /^\/socket\.io\/socket\.io(\.msgpack|\.esm)?(\.min)?\.js(\.map)?(?:\?|$)/,
//         _connectTimeout: 45000,
//         _serveClient: true,
//         _parser: [Object],
//         encoder: [Encoder],
//         opts: [Object],
//         _adapter: [class Adapter extends EventEmitter],
//         sockets: [Namespace],
//         eio: [Server],
//         httpServer: [Server],
//         engine: [Server],
//         _corsMiddleware: [Function: corsMiddleware],
//         [Symbol(kCapture)]: false
//       },
//       conn: Socket {
//         _events: [Object: null prototype],
//         _eventsCount: 3,
//         _maxListeners: undefined,
//         _readyState: 'open',
//         upgrading: false,
//         upgraded: false,
//         writeBuffer: [Array],
//         packetsFn: [],
//         sentCallbackFn: [],
//         cleanupFn: [Array],
//         id: 'YbZj2nX8a_yonzOnAAAA',
//         server: [Server],
//         request: [IncomingMessage],
//         protocol: 4,
//         remoteAddress: '::1',
//         pingTimeoutTimer: Timeout {
//           _idleTimeout: 45000,
//           _idlePrev: [TimersList],
//           _idleNext: [TimersList],
//           _idleStart: 24536,
//           _onTimeout: [Function (anonymous)],
//           _timerArgs: undefined,
//           _repeat: null,
//           _destroyed: false,
//           [Symbol(refed)]: true,
//           [Symbol(kHasPrimitive)]: false,
//           [Symbol(asyncId)]: 30,
//           [Symbol(triggerId)]: 29
//         },
//         pingIntervalTimer: Timeout {
//           _idleTimeout: 25000,
//           _idlePrev: [TimersList],
//           _idleNext: [TimersList],
//           _idleStart: 24528,
//           _onTimeout: [Function (anonymous)],
//           _timerArgs: undefined,
//           _repeat: null,
//           _destroyed: false,
//           [Symbol(refed)]: true,
//           [Symbol(kHasPrimitive)]: false,
//           [Symbol(asyncId)]: 16,
//           [Symbol(triggerId)]: 0
//         },
//         transport: [Polling],
//         [Symbol(kCapture)]: false
//       },
//       encoder: Encoder { replacer: undefined },
//       decoder: Decoder { reviver: undefined, _callbacks: [Object] },
//       id: 'YbZj2nX8a_yonzOnAAAA',
//       onclose: [Function: bound onclose],
//       ondata: [Function: bound ondata],
//       onerror: [Function: bound onerror],
//       ondecoded: [Function: bound ondecoded],
//       connectTimeout: undefined
//     },
//     recovered: false,
//     data: {},
//     connected: true,
//     acks: Map(0) {},
//     fns: [],
//     flags: {},
//     server: <ref *3> Server {
//       _events: [Object: null prototype] {},
//       _eventsCount: 0,
//       _maxListeners: undefined,
//       _nsps: Map(1) { '/' => [Namespace] },
//       parentNsps: Map(0) {},
//       parentNamespacesFromRegExp: Map(0) {},
//       _path: '/socket.io',
//       clientPathRegex: /^\/socket\.io\/socket\.io(\.msgpack|\.esm)?(\.min)?\.js(\.map)?(?:\?|$)/,
//       _connectTimeout: 45000,
//       _serveClient: true,
//       _parser: {
//         protocol: 5,
//         PacketType: [Object],
//         Encoder: [class Encoder],
//         Decoder: [class Decoder extends Emitter]
//       },
//       encoder: Encoder { replacer: undefined },
//       opts: { cors: [Object], cleanupEmptyChildNamespaces: false },
//       _adapter: [class Adapter extends EventEmitter],
//       sockets: <ref *2> Namespace {
//         _events: [Object: null prototype],
//         _eventsCount: 1,
//         _maxListeners: undefined,
//         sockets: [Map],
//         _fns: [],
//         _ids: 0,
//         server: [Circular *3],
//         name: '/',
//         adapter: [Adapter],
//         [Symbol(kCapture)]: false
//       },
//       eio: Server {
//         _events: [Object: null prototype],
//         _eventsCount: 1,
//         _maxListeners: undefined,
//         middlewares: [Array],
//         clients: [Object],
//         clientsCount: 1,
//         opts: [Object],
//         ws: [WebSocketServer],
//         [Symbol(kCapture)]: false
//       },
//       httpServer: Server {
//         maxHeaderSize: undefined,
//         insecureHTTPParser: undefined,
//         requestTimeout: 300000,
//         headersTimeout: 60000,
//         keepAliveTimeout: 5000,
//         connectionsCheckingInterval: 30000,
//         requireHostHeader: true,
//         joinDuplicateHeaders: undefined,
//         rejectNonStandardBodyWrites: false,
//         _events: [Object: null prototype],
//         _eventsCount: 5,
//         _maxListeners: undefined,
//         _connections: 1,
//         _handle: [TCP],
//         _usingWorkers: false,
//         _workers: [],
//         _unref: false,
//         allowHalfOpen: true,
//         pauseOnConnect: false,
//         noDelay: true,
//         keepAlive: false,
//         keepAliveInitialDelay: 0,
//         highWaterMark: 16384,
//         httpAllowHalfOpen: false,
//         timeout: 0,
//         maxHeadersCount: null,
//         maxRequestsPerSocket: 0,
//         _connectionKey: '6::::5000',
//         [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//         [Symbol(ServerResponse)]: [Function: ServerResponse],
//         [Symbol(kCapture)]: false,
//         [Symbol(async_id_symbol)]: 5,
//         [Symbol(kUniqueHeaders)]: null,
//         [Symbol(http.server.connections)]: ConnectionsList {},
//         [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//           _idleTimeout: 30000,
//           _idlePrev: [TimersList],
//           _idleNext: [TimersList],
//           _idleStart: 119,
//           _onTimeout: [Function: bound checkConnections],
//           _timerArgs: undefined,
//           _repeat: 30000,
//           _destroyed: false,
//           [Symbol(refed)]: false,
//           [Symbol(kHasPrimitive)]: false,
//           [Symbol(asyncId)]: 7,
//           [Symbol(triggerId)]: 6
//         }
//       },
//       engine: Server {
//         _events: [Object: null prototype],
//         _eventsCount: 1,
//         _maxListeners: undefined,
//         middlewares: [Array],
//         clients: [Object],
//         clientsCount: 1,
//         opts: [Object],
//         ws: [WebSocketServer],
//         [Symbol(kCapture)]: false
//       },
//       _corsMiddleware: [Function: corsMiddleware],
//       [Symbol(kCapture)]: false
//     },
//     adapter: <ref *4> Adapter {
//       _events: [Object: null prototype] {},
//       _eventsCount: 0,
//       _maxListeners: undefined,
//       nsp: <ref *2> Namespace {
//         _events: [Object: null prototype],
//         _eventsCount: 1,
//         _maxListeners: undefined,
//         sockets: [Map],
//         _fns: [],
//         _ids: 0,
//         server: [Server],
//         name: '/',
//         adapter: [Circular *4],
//         [Symbol(kCapture)]: false
//       },
//       rooms: Map(1) { 'dOe84zFhFp1qlnhYAAAB' => [Set] },
//       sids: Map(1) { 'dOe84zFhFp1qlnhYAAAB' => [Set] },
//       encoder: Encoder { replacer: undefined },
//       [Symbol(kCapture)]: false
//     },
//     id: 'dOe84zFhFp1qlnhYAAAB',
//     handshake: {
//       headers: {
//         host: 'localhost:5000',
//         connection: 'keep-alive',
//         'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
//         accept: '*/*',
//         'sec-ch-ua-mobile': '?0',
//         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
//         'sec-ch-ua-platform': '"macOS"',
//         origin: 'http://localhost:3000',
//         'sec-fetch-site': 'same-site',
//         'sec-fetch-mode': 'cors',
//         'sec-fetch-dest': 'empty',
//         referer: 'http://localhost:3000/',
//         'accept-encoding': 'gzip, deflate, br, zstd',
//         'accept-language': 'en-US,en;q=0.9'
//       },
//       time: 'Tue May 28 2024 22:15:07 GMT-0400 (Eastern Daylight Saving Time)',
//       address: '::1',
//       xdomain: true,
//       secure: false,
//       issued: 1716948907181,
//       url: '/socket.io/?EIO=4&transport=polling&t=O_28JIV',
//       query: [Object: null prototype] {
//         EIO: '4',
//         transport: 'polling',
//         t: 'O_28JIV'
//       },
//       auth: {}
//     },
//     [Symbol(kCapture)]: false
//   }
