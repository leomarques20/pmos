<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/jsmind@0.4.6/style/jsmind.css" rel="stylesheet"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Public Management OS</title>
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23007AFF'/%3E%3Cpath fill='%23FFFFFF' d='M69.7,31.4c-1-3.2-3.6-5.8-6.9-6.9C58.9,23.4,54.6,23,50,23s-8.9,0.4-12.8,1.5c-3.2,1-5.8,3.6-6.9,6.9 C29.2,35.3,28.8,39.6,28.8,44.2v29.1c0,2.3,1.3,4.3,3.4,5.3l8.3,4.2c2.6,1.3,5.8,1.3,8.4,0l8.3-4.2c2.1-1,3.4-3,3.4-5.3V44.2 C62.5,39.6,62.1,35.3,69.7,31.4z M50,52.8c-4.9,0-8.8-4-8.8-8.8s4-8.8,8.8-8.8s8.8,4,8.8,8.8S54.9,52.8,50,52.8z'/%3E%3Cpath fill='%23FFFFFF' d='M44.7,73.2l-9.4,4.7c-0.8,0.4-1.7,0.4-2.5,0l-2.4-1.2c-1-0.5-1.4-1.7-0.9-2.7l7-12.2c0.5-0.8,1.5-1.2,2.4-0.9l4.9,1.8C54.7,73,55.1,74.1,54.7,73.2z'/%3E%3Cpath fill='%23FFFFFF' d='M56.6,74.4l-7,12.2c-0.5,1-1.7,1.4-2.7,0.9l-2.4-1.2c-0.8-0.4-1.2-1.5-0.9-2.4l4.7-9.4 c0.4-0.8,1.5-1.2,2.4-0.9l4.9,1.8C56.6,75.2,57,76.3,56.6,74.4z'/%3E%3C/svg%3E">
    <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23007AFF'/%3E%3Cpath fill='%23FFFFFF' d='M69.7,31.4c-1-3.2-3.6-5.8-6.9-6.9C58.9,23.4,54.6,23,50,23s-8.9,0.4-12.8,1.5c-3.2,1-5.8,3.6-6.9,6.9 C29.2,35.3,28.8,39.6,28.8,44.2v29.1c0,2.3,1.3,4.3,3.4,5.3l8.3,4.2c2.6,1.3,5.8,1.3,8.4,0l8.3-4.2c2.1-1,3.4-3,3.4-5.3V44.2 C62.5,39.6,62.1,35.3,69.7,31.4z M50,52.8c-4.9,0-8.8-4-8.8-8.8s4-8.8,8.8-8.8s8.8,4,8.8,8.8S54.9,52.8,50,52.8z'/%3E%3Cpath fill='%23FFFFFF' d='M44.7,73.2l-9.4,4.7c-0.8,0.4-1.7,0.4-2.5,0l-2.4-1.2c-1-0.5-1.4-1.7-0.9-2.7l7-12.2c0.5-0.8,1.5-1.2,2.4-0.9l4.9,1.8C54.7,73,55.1,74.1,54.7,73.2z'/%3E%3Cpath fill='%23FFFFFF' d='M56.6,74.4l-7,12.2c-0.5,1-1.7,1.4-2.7,0.9l-2.4-1.2c-0.8-0.4-1.2-1.5-0.9-2.4l4.7-9.4 c0.4-0.8,1.5-1.2,2.4-0.9l4.9,1.8C56.6,75.2,57,76.3,56.6,74.4z'/%3E%3C/svg%3E">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23007AFF'/%3E%3Cpath fill='%23FFFFFF' d='M69.7,31.4c-1-3.2-3.6-5.8-6.9-6.9C58.9,23.4,54.6,23,50,23s-8.9,0.4-12.8,1.5c-3.2,1-5.8,3.6-6.9,6.9 C29.2,35.3,28.8,39.6,28.8,44.2v29.1c0,2.3,1.3,4.3,3.4,5.3l8.3,4.2c2.6,1.3,5.8,1.3,8.4,0l8.3-4.2c2.1-1,3.4-3,3.4-5.3V44.2 C62.5,39.6,62.1,35.3,69.7,31.4z M50,52.8c-4.9,0-8.8-4-8.8-8.8s4-8.8,8.8-8.8s8.8,4,8.8,8.8S54.9,52.8,50,52.8z'/%3E%3Cpath fill='%23FFFFFF' d='M44.7,73.2l-9.4,4.7c-0.8,0.4-1.7,0.4-2.5,0l-2.4-1.2c-1-0.5-1.4-1.7-0.9-2.7l7-12.2c0.5-0.8,1.5-1.2,2.4-0.9l4.9,1.8C54.7,73,55.1,74.1,54.7,73.2z'/%3E%3Cpath fill='%23FFFFFF' d='M56.6,74.4l-7,12.2c-0.5,1-1.7,1.4-2.7,0.9l-2.4-1.2c-0.8-0.4-1.2-1.5-0.9-2.4l4.7-9.4 c0.4-0.8,1.5-1.2,2.4-0.9l4.9,1.8C56.6,75.2,57,76.3,56.6,74.4z'/%3E%3C/svg%3E">
    <link rel="shortcut icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23007AFF'/%3E%3Cpath fill='%23FFFFFF' d='M69.7,31.4c-1-3.2-3.6-5.8-6.9-6.9C58.9,23.4,54.6,23,50,23s-8.9,0.4-12.8,1.5c-3.2,1-5.8,3.6-6.9,6.9 C29.2,35.3,28.8,39.6,28.8,44.2v29.1c0,2.3,1.3,4.3,3.4,5.3l8.3,4.2c2.6,1.3,5.8,1.3,8.4,0l8.3-4.2c2.1-1,3.4-3,3.4-5.3V44.2 C62.5,39.6,62.1,35.3,69.7,31.4z M50,52.8c-4.9,0-8.8-4-8.8-8.8s4-8.8,8.8-8.8s8.8,4,8.8,8.8S54.9,52.8,50,52.8z'/%3E%3Cpath fill='%23FFFFFF' d='M44.7,73.2l-9.4,4.7c-0.8,0.4-1.7,0.4-2.5,0l-2.4-1.2c-1-0.5-1.4-1.7-0.9-2.7l7-12.2c0.5-0.8,1.5-1.2,2.4-0.9l4.9,1.8C54.7,73,55.1,74.1,54.7,73.2z'/%3E%3Cpath fill='%23FFFFFF' d='M56.6,74.4l-7,12.2c-0.5,1-1.7,1.4-2.7,0.9l-2.4-1.2c-0.8-0.4-1.2-1.5-0.9-2.4l4.7-9.4 c0.4-0.8,1.5-1.2,2.4-0.9l4.9,1.8C56.6,75.2,57,76.3,56.6,74.4z'/%3E%3C/svg%3E">
    <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23007AFF'/%3E%3Cpath fill='%23FFFFFF' d='M69.7,31.4c-1-3.2-3.6-5.8-6.9-6.9C58.9,23.4,54.6,23,50,23s-8.9,0.4-12.8,1.5c-3.2,1-5.8,3.6-6.9,6.9 C29.2,35.3,28.8,39.6,28.8,44.2v29.1c0,2.3,1.3,4.3,3.4,5.3l8.3,4.2c2.6,1.3,5.8,1.3,8.4,0l8.3-4.2c2.1-1,3.4-3,3.4-5.3V44.2 C62.5,39.6,62.1,35.3,69.7,31.4z M50,52.8c-4.9,0-8.8-4-8.8-8.8s4-8.8,8.8-8.8s8.8,4,8.8,8.8S54.9,52.8,50,52.8z'/%3E%3Cpath fill='%23FFFFFF' d='M44.7,73.2l-9.4,4.7c-0.8,0.4-1.7,0.4-2.5,0l-2.4-1.2c-1-0.5-1.4-1.7-0.9-2.7l7-12.2c0.5-0.8,1.5-1.2,2.4-0.9l4.9,1.8C54.7,73,55.1,74.1,54.7,73.2z'/%3E%3Cpath fill='%23FFFFFF' d='M56.6,74.4l-7,12.2c-0.5,1-1.7,1.4-2.7,0.9l-2.4-1.2c-0.8-0.4-1.2-1.5-0.9-2.4l4.7-9.4 c0.4-0.8,1.5-1.2,2.4-0.9l4.9,1.8C56.6,75.2,57,76.3,56.6,74.4z'/%3E%3C/svg%3E">
    <style>
        :root {
            /* Tema Sonoma Claro (Padrão) */
            --accent-light: #007AFF;
            --background-light: #f0f0f5;
            --text-light: #1d1d1f;
            --secondary-text-light: #6e6e73;
            --window-bg-light: rgba(248, 248, 250, 0.90);
            --toolbar-bg-light: rgba(240, 240, 245, 0.82);
            --button-bg-light: rgba(225, 225, 230, 0.98);
            --button-text-light: #1d1d1f;
            --input-bg-light: #ffffff;
            --input-border-light: #d1d1d6;
            --separator-light: rgba(60, 60, 67, 0.29);
            --hover-highlight-light: rgba(0, 122, 255, 0.1);
            --accent-light-translucent: rgba(0, 122, 255, 0.1);
            --window-bg-light-rgb: 248,248,250; /* Para Stage Manager */
            --background-light-rgb: 240,240,245;


            /* Tema Sonoma Escuro */
            --accent-dark: #0A84FF;
            --background-dark: #121212;
            --text-dark: #f5f5f7;
            --secondary-text-dark: #8a8a8e;
            --window-bg-dark: rgba(32, 32, 34, 0.90);
            --toolbar-bg-dark: rgba(44, 44, 46, 0.82);
            --button-bg-dark: rgba(72, 72, 74, 0.98);
            --button-text-dark: #f5f5f7;
            --input-bg-dark: #2c2c2e;
            --input-border-dark: #545458;
            --separator-dark: rgba(84, 84, 88, 0.65);
            --hover-highlight-dark: rgba(10, 132, 255, 0.15);
            --accent-dark-translucent: rgba(10, 132, 255, 0.15);
            --window-bg-dark-rgb: 32,32,34; /* Para Stage Manager */
            --background-dark-rgb: 18,18,18;


            /* Variáveis Ativas */
            --accent-color: var(--accent-light);
            --background: var(--background-light);
            --text-color: var(--text-light);
            --secondary-text-color: var(--secondary-text-light);
            --window-bg: var(--window-bg-light);
            --toolbar-bg: var(--toolbar-bg-light);
            --button-bg: var(--button-bg-light);
            --button-text-color: var(--button-text-light);
            --input-bg: var(--input-bg-light);
            --input-border-color: var(--input-border-light);
            --separator-color: var(--separator-light);
            --hover-highlight-color: var(--hover-highlight-light);
            --current-window-bg-rgb: var(--window-bg-light-rgb);
            --current-background-rgb-for-stage: var(--background-light-rgb);


            /* Constantes de Layout e Estilo */
            --sonoma-blur: blur(28px);
            --taskbar-height: 48px;
            --dock-item-size: 58px; /* Controla o tamanho base dos ícones */
            --dock-padding: 10px;
            --dock-gap: 14px;
            --dock-total-bottom-offset: calc(var(--taskbar-height) + 10px);
            --shadow: 0 12px 32px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.15);
            --window-border-radius: 12px;
            --button-border-radius: 8px;
            --font-family-system: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        /* Reset e Base */
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: var(--font-family-system); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { font-size: 16px; }
        body {
            background-color: var(--background);
            /* [MODIFICADO] Wallpaper padrão do repositório GitHub */
            background-image: url('https://raw.githubusercontent.com/leonardomverona/PublicManagementOS/main/Public%20Management%20OS.png');
            background-size: cover; background-position: center; background-attachment: fixed;
            height: 100vh; overflow: hidden; color: var(--text-color);
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, background-image 0.5s ease-in-out; user-select: none;
        }
        body.dragging, body.resizing { cursor: grabbing !important; }

        /* Login UI Styling */
        body.logged-out .desktop,
        body.logged-out .dock,
        body.logged-out .taskbar {
            display: none !important;
            visibility: hidden;
        }
        body.logged-in #loginContainer {
            display: none !important;
        }
        #loginContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            backdrop-filter: blur(10px) brightness(0.8);
            padding: 20px;
        }
        #loginContainer h1 { font-size: 2.5em; margin-bottom: 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.3); color: #fff; }
        #loginContainer p { font-size: 1.2em; margin-bottom: 30px; color: #f0f0f0; text-shadow: 0 1px 3px rgba(0,0,0,0.3);}
        
        .login-form {
            background-color: var(--window-bg-light);
            padding: 30px;
            border-radius: var(--window-border-radius);
            box-shadow: var(--shadow);
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .dark-mode .login-form { background-color: var(--window-bg-dark); }
        .login-form input {
            width: 100%; padding: 12px; font-size: 1em;
            border: 1px solid var(--input-border-light); background: var(--input-bg-light); color: var(--text-light);
            border-radius: var(--button-border-radius);
        }
        .dark-mode .login-form input {
             border-color: var(--input-border-dark); background: var(--input-bg-dark); color: var(--text-dark);
        }
        .login-form .app-button { width: 100%; }
        .login-form-toggle { color: var(--accent-color); cursor: pointer; font-size: 0.9em; text-decoration: underline; }

        #userProfile { display: none; align-items: center; gap: 10px; }
        body.logged-in #userProfile { display: flex; }
        #userProfile img { width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--separator-color); }
        #userProfile span { font-weight: 500; font-size: 0.9em; color: var(--text-color); }
        #logoutBtn { font-size: 0.85em !important; padding: 6px 12px !important; }

        /* Área de Trabalho */
        .desktop { height: calc(100vh - var(--taskbar-height)); position: relative; overflow: hidden; }

        /* Barra de Tarefas (Inferior) */
        .taskbar {
            position: fixed; bottom: 0; width: 100%; height: var(--taskbar-height);
            background: var(--toolbar-bg); backdrop-filter: var(--sonoma-blur); -webkit-backdrop-filter: var(--sonoma-blur);
            display: flex; align-items: center; padding: 0 15px;
            border-top: 1px solid var(--separator-color); z-index: 2000;
            justify-content: space-between;
        }
        .taskbar-left-cluster {
            display: flex;
            align-items: center;
            flex-grow: 1;
            overflow: hidden;
        }
        .taskbar-right-cluster {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-shrink: 0;
        }

        /* Dock de Aplicativos */
        .dock {
            position: fixed; bottom: var(--dock-total-bottom-offset); left: 50%;
            transform: translateX(-50%); display: flex; gap: var(--dock-gap);
            background: rgba(230, 230, 230, 0.35); border: 1px solid rgba(255, 255, 255, 0.2);
            padding: var(--dock-padding); border-radius: 22px; z-index: 2001;
            backdrop-filter: var(--sonoma-blur); -webkit-backdrop-filter: var(--sonoma-blur);
            box-shadow: 0 8px 24px rgba(0,0,0,0.3); transition: background-color 0.3s ease, padding 0.2s ease, gap 0.2s ease;
            perspective: 800px; /* Para efeito 3D nos ícones */
        }
        .dark-mode .dock { background: rgba(25, 25, 27, 0.70); border: 1px solid rgba(255,255,255,0.12); }
        .dock-item {
            width: var(--dock-item-size); height: var(--dock-item-size);
            background: transparent; border-radius: 16px;
            display: flex; align-items: center; justify-content: center; cursor: pointer;
            font-size: calc(var(--dock-item-size) * 0.55); color: var(--text-color);
            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease;
            transform-style: preserve-3d; /* Para efeito 3D */
        }
        .dock-item:hover {
            transform: translateY(-12px) scale(1.25) rotateY(10deg) rotateX(5deg) translateZ(10px); /* Efeito 3D sutil */
            filter: brightness(1.1);
        }
        .dark-mode .dock-item { color: var(--text-dark); }

        /* Estilo de Janelas */
        .window {
            position: absolute; background: var(--window-bg);
            border-radius: var(--window-border-radius); box-shadow: var(--shadow);
            min-width: 380px; min-height: 280px;
            display: flex; flex-direction: column;
            transition: opacity 0.25s ease-out, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.2s ease-out, height 0.2s ease-out;
            overflow: hidden; border: 1px solid var(--separator-color);
            backdrop-filter: var(--sonoma-blur); -webkit-backdrop-filter: var(--sonoma-blur);
            transform-origin: bottom center;
        }
        .window.maximized {
            width: 100% !important;
            height: calc(100vh - var(--taskbar-height)) !important;
            top: 0 !important; left: 0 !important; border-radius: 0; border: none; backdrop-filter: none;
        }
        .window.minimized {
            transform: translateY(calc(100vh - var(--taskbar-height) + 70px)) scale(0.1) skewX(30deg);
            opacity: 0; pointer-events: none;
        }

        /* Barra de Título da Janela */
        .title-bar {
            height: 40px; padding: 0 12px; background: transparent !important;
            color: var(--text-color); display: flex; align-items: center; justify-content: flex-start;
            position: relative; cursor: grab; user-select: none; flex-shrink: 0;
        }
        .window.dragging .title-bar { cursor: grabbing; }
        .window-controls { display:flex; gap:8px; align-items: center; padding-right: 10px; }
        .title-bar .window-title-text {
            flex-grow: 1; text-align: center; font-size: 0.88em; color: var(--text-color);
            font-weight: 600; line-height: 40px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .dark-mode .title-bar .window-title-text { color: var(--text-dark); }
        .window-control { width: 12px; height: 12px; border: none; border-radius: 50%; cursor:pointer; transition:filter 0.15s ease; text-indent: -9999px; }
        .window-control.close { background-color: #ff5f57; }
        .window-control.minimize { background-color: #ffbd2e; }
        .window-control.maximize { background-color: #28c940; }
        .window-control:hover { filter: brightness(0.85); }
        .window-control:active { filter: brightness(0.7); }

        .window-content { flex:1; overflow:auto; display: flex; flex-direction: column; border-top: 1px solid var(--separator-color); }
         /* Global padding removal for specific app containers */
        .window-content:not([class*="-container"]):not([class*="jsmind_layout"]):not([class*="-grid"]):not([class*="-diagram-area"]):not([class*="ishikawa-diagram-app-container"]):not([class*="bpmn-modeler-app-container"]):not([class*="kanban-board-app"]):not([class*="sipoc-matrix-app-container"]) {
            padding: 15px;
        }


        .resize-handle { width: 16px; height: 16px; position: absolute; bottom: 0; right: 0; cursor: se-resize; z-index: 1; }
        .window.maximized .resize-handle { display: none; }

        .taskbar-items { display:flex; gap:8px; height:100%; align-items:center; overflow-x: auto; margin-left: 15px;}
        .taskbar-item {
            padding: 6px 12px; border-radius: var(--button-border-radius); background: var(--button-bg);
            color: var(--button-text-color); cursor: pointer; transition:all 0.2s ease;
            display:flex; align-items:center; gap:6px; height: calc(var(--taskbar-height) - 16px);
            font-size: 0.85em; max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
            border: 1px solid transparent; position: relative;
        }
        .taskbar-item:hover { filter: brightness(0.95); }
        .taskbar-item.active { background: var(--accent-color); color: white; border-color: var(--accent-color); font-weight: 600; }
        .clock { font-weight: 600; color:var(--text-color); padding: 6px 10px; border-radius: var(--button-border-radius); background: var(--button-bg); font-variant-numeric: tabular-nums; font-size: 0.9em; }

        /* Estilos Comuns para Aplicativos */
        .app-input, .app-textarea, .app-select { width: 100%; padding: 9px 12px; margin-bottom: 12px; border-radius: var(--button-border-radius); border: 1px solid var(--input-border-color); background-color: var(--input-bg); color: var(--text-color); font-size: 0.95em; transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .app-input:focus, .app-textarea:focus, .app-select:focus { border-color: var(--accent-color); box-shadow: 0 0 0 2px var(--accent-light-translucent, rgba(0,122,255,0.2)); outline:none;}
        .dark-mode .app-input:focus, .dark-mode .app-textarea:focus, .dark-mode .app-select:focus { box-shadow: 0 0 0 2px var(--accent-dark-translucent, rgba(10,132,255,0.25)); }
        .app-textarea { min-height: 80px; line-height: 1.5; }
        .app-button { padding: 9px 16px; border-radius: var(--button-border-radius); border: none; background-color: var(--accent-color); color: white; cursor: pointer; font-weight: 600; font-size:0.9em; transition: filter 0.15s ease, transform 0.1s ease; }
        .app-button:hover { filter: brightness(1.1); } .app-button:active { transform: scale(0.98); }
        .app-button.secondary { background-color: var(--button-bg); color: var(--button-text-color); border: 1px solid var(--input-border-color); }
        .app-button.danger { background-color: #ff453a; color:white;}
        .dark-mode .app-button.danger { background-color: #ff453a; }
        .app-toolbar { display:flex; gap:8px; padding:10px; background:var(--toolbar-bg); border-bottom:1px solid var(--separator-color); flex-wrap:wrap; align-items: center; flex-shrink: 0; }
        .app-toolbar .app-button, .app-toolbar .app-select, .app-toolbar input[type="color"], .app-toolbar input[type="text"], .app-toolbar label.editor-button, .app-toolbar label.app-button { font-size: 0.85em; padding: 6px 9px; margin-bottom: 0; }
        .app-toolbar input[type="file"] { display: none; }
        .app-toolbar label.app-button { display: inline-flex; align-items: center; justify-content: center; }
        .app-section { margin-bottom: 20px; padding: 15px; background-color: rgba(var(--current-window-bg-rgb), 0.5); border-radius: var(--button-border-radius); border: 1px solid var(--separator-color); }
        .app-section h4 { margin-bottom: 10px; font-size: 1.05em; color: var(--accent-color); border-bottom: 1px solid var(--separator-color); padding-bottom: 6px; }
        .app-table { width: 100%; border-collapse: collapse; font-size: 0.9em; margin-top: 10px; }
        .app-table th, .app-table td { border: 1px solid var(--separator-color); padding: 8px; text-align: left; }
        .app-table th { background-color: var(--button-bg); font-weight: 600; }
        .app-table input, .app-table select { width: auto; min-width: 80px; font-size: 0.9em; padding: 4px 6px; margin-bottom: 0; }
        .app-table .action-button { font-size:0.8em !important; padding: 4px 8px !important; margin-left:5px;}

        /* Explorador de Arquivos */
        .file-explorer { display:flex; height:100%; background-color: var(--window-bg);}
        .file-tree { width:230px; border-right:1px solid var(--separator-color); padding:10px; overflow-y:auto; flex-shrink: 0; }
        .file-tree-item { padding: 7px 5px; cursor: pointer; display: flex; align-items: center; border-radius: 5px; font-size: 0.9em;}
        .file-tree-item:hover { background-color: var(--accent-color); }
        .dark-mode .file-tree-item:hover { background-color: var(--accent-color); }
        .file-tree-item.selected { background-color: var(--accent-color); color:white; }
        .file-tree-item span { margin-left: 7px; } .file-tree-item .item-icon { margin-right: 7px; width: 18px; display: inline-block; text-align: center; opacity: 0.8; }
        .file-tree-item:hover .item-icon { opacity: 1; } .file-tree-folder-content { margin-left: 14px; border-left: 1px dashed var(--input-border-color); padding-left: 9px; display: none; }
        .file-tree-item.open > .file-tree-folder-content { display: block; } .file-content { flex:1; padding:12px; overflow-y: auto; }
        #fileDetailsFs h4 {margin-bottom: 6px; font-weight: 600;} #fileDetailsFs ul { list-style-type: none; padding-left: 5px;} #fileDetailsFs li { padding: 3px 0; }
        /* Estilos para Drag & Drop no File Explorer */
        .file-tree-item.dragging-fs-item { opacity: 0.5; background: rgba(var(--accent-rgb), 0.2); }
        .file-tree-item.drop-target { background-color: var(--hover-highlight-color) !important; border: 1px dashed var(--accent-color) !important; }
        .dark-mode .file-tree-item.drop-target { background-color: var(--accent-dark-translucent) !important; }


        /* Mapa Mental */
        .mindmap-toolbar { padding: 8px 10px; background: var(--toolbar-bg); border-bottom: 1px solid var(--separator-color); display: flex; gap: 8px; align-items: center; flex-shrink: 0; flex-wrap: wrap; }
        .mindmap-toolbar button, .mindmap-toolbar input[type="color"], .mindmap-toolbar label.editor-button { font-size: 0.85em; padding: 6px 9px; background-color: var(--button-bg); color:var(--button-text-color); border: 1px solid var(--input-border-color); border-radius:var(--button-border-radius); cursor:pointer; margin-bottom: 0;}
        .mindmap-toolbar button:hover, .mindmap-toolbar label.editor-button:hover { background-color: var(--accent-color); color:white;}
        .mindmap-toolbar input[type="color"] { padding: 2px; width:30px; height:30px;}
        .mindmap-toolbar input[type="text"] { padding: 6px 8px; width: 120px; background-color: var(--input-bg); border: 1px solid var(--input-border-color); border-radius: var(--button-border-radius); color: var(--text-color); margin-bottom: 0;}
        .mindmap-container { flex-grow: 1; overflow: hidden; background: var(--window-bg); }

        /* Tarefas de Projeto */
        .project-tasks-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .project-tasks-input-area { display: flex; gap: 10px; flex-wrap: wrap; align-items: flex-end; padding: 10px; border-bottom: 1px solid var(--separator-color); }
        .project-tasks-input-area .app-input, .project-tasks-input-area .app-select { margin-bottom: 0; }
        .project-tasks-controls { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; padding:10px; border-bottom: 1px solid var(--separator-color); }
        .project-tasks-list-container { flex-grow: 1; overflow-y: auto; padding: 10px; }
        .project-tasks-list-container ul { list-style: none; padding: 0; }
        .project-tasks-list-container li.task-item { display: flex; flex-direction: column; padding: 10px; margin-bottom: 10px; background-color: var(--input-bg); border-radius: var(--button-border-radius); border: 1px solid var(--input-border-color); font-size: 0.95em; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .task-main-info { display: flex; align-items: flex-start; justify-content: space-between; }
        .task-item.completed .task-text { text-decoration: line-through; color: var(--secondary-text-color); }
        .task-item.completed .task-meta { opacity: 0.7; }
        .task-checkbox { margin-right: 10px; margin-top: 5px; width:18px; height:18px; accent-color: var(--accent-color); flex-shrink: 0; }
        .task-details { display: flex; flex-direction: column; flex-grow: 1; gap: 4px; }
        .task-text { font-weight: 600; }
        .task-meta { font-size: 0.8em; color: var(--secondary-text-color); display: flex; flex-wrap: wrap; gap: 0 10px; align-items: center; }
        .task-actions { display:flex; gap: 5px; align-items:center; }
        .task-actions button { padding: 5px 9px; font-size: 0.8em; margin-left: 6px; }
        .subtasks-container { margin-left: 30px; margin-top: 8px; border-left: 2px solid var(--accent-light-translucent); padding-left: 10px; }
        .dark-mode .subtasks-container { border-left-color: var(--accent-dark-translucent); }
        .subtask-item { font-size: 0.9em; padding: 5px 0; display: flex; align-items: center; }
        .subtask-item .task-checkbox { margin-top:0; }
        .ai-priority-indicator {
            font-size: 0.75em; padding: 2px 5px; border-radius: 4px;
            background-color: var(--button-bg); border: 1px solid var(--input-border-color);
            margin-left: 8px; display: inline-flex; align-items: center; gap: 4px;
        }
        .ai-priority-indicator .fa-brain { opacity: 0.6; }
        .ai-feedback-buttons button { font-size: 0.7em !important; padding: 2px 5px !important; margin-left: 4px; }


        /* SWOT Analysis App */
        .swot-analysis-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .swot-grid-container { flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 10px; padding: 10px;}
        .swot-quadrant { background-color: var(--input-bg); border: 1px solid var(--input-border-color); border-radius: var(--button-border-radius); padding: 10px; display: flex; flex-direction: column; }
        .swot-quadrant h3 { margin-bottom: 8px; font-size: 1.1em; color: var(--accent-color); border-bottom: 1px solid var(--separator-color); padding-bottom: 5px;}
        .swot-quadrant textarea { flex-grow: 1; width: 100%; background-color: transparent; border: none; resize: none; outline: none; color: var(--text-color); font-size: 0.95em; line-height: 1.5; padding: 5px;}

        /* OKR Tracker App */
        .okr-tracker-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .okr-objectives-container { flex-grow: 1; overflow-y: auto; padding: 15px; }
        .okr-objective { margin-bottom: 20px; padding: 15px; background-color: var(--input-bg); border: 1px solid var(--input-border-color); border-radius: var(--button-border-radius); }
        .okr-objective-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 10px; }
        .okr-objective-header h3 { font-size: 1.2em; color: var(--accent-color); margin:0; }
        .okr-objective-title-input { flex-grow:1; margin-bottom:0 !important;}
        .okr-objective-cycle-input { width: 150px !important; margin-bottom:0 !important;}
        .okr-keyresult { display: grid; grid-template-columns: 3fr 1fr 1fr 1fr 1fr auto; gap: 8px; align-items: center; padding: 8px 0; border-bottom: 1px dashed var(--separator-color); }
        .okr-keyresult:last-child { border-bottom: none; }
        .okr-keyresult .app-input, .okr-keyresult .app-select { margin-bottom:0; font-size: 0.9em; padding: 6px 8px;}
        .okr-keyresult .progress-bar-container { width: 100%; height: 10px; background-color: var(--button-bg); border-radius: 5px; overflow:hidden; border: 1px solid var(--input-border-color); }
        .okr-keyresult .progress-bar { height: 100%; background-color: var(--accent-color); width: 0%; transition: width 0.3s ease; }

        /* Contract Manager App */
        .contract-manager-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .contract-main-form { padding: 15px; border-bottom: 1px solid var(--separator-color); }
        .contract-main-form .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; }
        .contract-main-form .form-grid .app-textarea { grid-column: span 2; }
        .contract-status-select { width: 200px !important; }
        .contract-tracking-tabs { display: flex; background-color: var(--toolbar-bg); border-bottom: 1px solid var(--separator-color); flex-shrink:0; }
        .contract-tab-button { padding: 10px 15px; cursor: pointer; border: none; background: none; color: var(--text-color); font-size: 0.95em; }
        .contract-tab-button.active { background-color: var(--window-bg); border-bottom: 2px solid var(--accent-color); font-weight: 600; }
        .contract-tab-content { flex-grow: 1; padding: 15px; overflow-y: auto; }
        .contract-tab-content .app-button.small-add { font-size:0.8em !important; padding: 5px 10px !important; margin-bottom:10px; }


        /* Gantt Chart */
        .gantt-chart-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .gantt-controls { padding:10px; border-bottom:1px solid var(--separator-color); display:flex; gap:10px; align-items:center; flex-wrap: wrap; }
        .gantt-main-area { display:flex; flex-grow:1; overflow:hidden; }
        .gantt-table-wrapper { width: 60%; border-right: 1px solid var(--separator-color); overflow-y: auto; display:flex; flex-direction: column;}
        .gantt-table-header, .gantt-task-table-row { display: grid; grid-template-columns: 35px 2.5fr 1fr 1fr 0.8fr 0.7fr 1.5fr 1.2fr auto; gap: 5px; align-items: center; padding: 6px; border-bottom: 1px solid var(--separator-color); font-size: 0.82em; }
        .gantt-table-header { font-weight:bold; background-color: var(--button-bg); position:sticky; top:0; z-index:1;}
        .gantt-task-table-row .app-input, .gantt-task-table-row .app-select { font-size: 0.9em; padding: 3px 5px; width:100%; margin-bottom:0;}
        .gantt-chart-area-wrapper { flex-grow: 1; overflow-x: auto; padding: 10px; background-color: var(--input-bg); }
        .gantt-timeline-header { white-space: nowrap; margin-bottom: 5px;}
        .gantt-bar-row { position: relative; height: 25px; margin-bottom: 2px; }
        .gantt-bar { position: absolute; height: 20px; top: 2.5px; /* background-color default set by JS task.color */ border-radius: 4px; color: white; font-size: 0.75em; line-height: 20px; padding: 0 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border:1px solid rgba(0,0,0,0.2); transition: background-color 0.3s ease; }
        .gantt-bar .progress { position:absolute; left:0; top:0; height:100%; background-color: rgba(255,255,255,0.4); /* Progress overlay */ border-radius: 4px; }
        .gantt-bar.gantt-bar-complete { filter: saturate(1.2) brightness(1.1); }
        .gantt-bar.gantt-bar-complete .progress { background-color: rgba(255,255,255,0.6); }


        /* Ishikawa Diagram (Enhanced Visual Structure) */
        .ishikawa-diagram-app-container { padding: 0 !important; } /* Remove global padding */
        .ishikawa-diagram-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .ishikawa-controls { padding:10px; border-bottom:1px solid var(--separator-color); display:flex; gap:10px; align-items:center; flex-shrink:0; }
        .ishikawa-main-content { flex-grow:1; display:flex; flex-direction:column; position:relative; overflow:auto; padding:20px; align-items: stretch; } /* Modified for list-like layout */

        .ishikawa-category-content {
            margin-bottom: 15px;
        }
        .ishikawa-category-content h5 { color: var(--accent-color); margin-bottom:5px; display:flex; justify-content:space-between; align-items:center;}
        .ishikawa-category-content input.category-name-input { font-size:0.95em; border:none; background:transparent; color:var(--accent-color); width:auto; flex-grow:1; padding:0;}

        .ishikawa-category-content .causes-list { list-style:none; padding-left:0;}
        .ishikawa-category-content .cause-item {
            margin-bottom:8px; padding-left:10px;
            border-left:3px solid var(--accent-light-translucent);
            position:relative;
        }
        .dark-mode .ishikawa-category-content .cause-item { border-left-color: var(--accent-dark-translucent); }
        .ishikawa-category-content .cause-item::before {
            content: ''; position: absolute; left: -5px; top: 18px;
            width: 10px; height: 2px; background-color: var(--separator-color);
        }
        .ishikawa-category-content .cause-item .app-input { margin-bottom:3px !important; font-size:0.9em; padding:3px 5px;}

        .ishikawa-category-content .subcauses-list {
            list-style:none; padding-left:20px; margin-top: 8px;
        }
        .ishikawa-category-content .subcause-item {
            margin-bottom:4px; padding: 4px 0; padding-left:15px;
            border-left:2px dotted var(--separator-color); position:relative;
        }
         .ishikawa-category-content .subcause-item::before {
            content: ''; position: absolute; left: 0px; top: 50%; transform: translateY(-50%);
            width: 10px; height: 1px; background-color: var(--separator-color);
        }
        .ishikawa-category-content .subcauses-list .app-input {font-size:0.85em; padding:2px 4px;}
        .app-button.small-action { font-size:0.75em !important; padding:3px 6px !important; margin-left:4px; line-height:1; }
        .app-button.small-action i { margin-right: 3px;}


        /* BPMN Modeler (Enhanced Visuals) */
        .bpmn-modeler-app-container { padding:0 !important; }
        .bpmn-modeler-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .bpmn-controls { padding:10px; border-bottom:1px solid var(--separator-color); display:flex; gap:10px; align-items:center; flex-shrink:0;}
        .bpmn-main-content { flex-grow:1; display:flex; overflow:hidden; }
        .bpmn-elements-panel { width:45%; border-right:1px solid var(--separator-color); padding:10px; overflow-y:auto; }
        .bpmn-flows-panel { width:55%; padding:10pxClaro; overflow-y:auto; }
        .bpmn-section h4 { margin-bottom:10px; color: var(--accent-color); display:flex; align-items:center; gap:8px;}
        .bpmn-element-item, .bpmn-flow-item { background-color:var(--input-bg); border:1px solid var(--input-border-color); border-radius:var(--button-border-radius); padding:10px; margin-bottom:10px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);}
        .bpmn-element-item-header { display:flex; align-items:center; gap:8px; margin-bottom:8px;}
        .bpmn-element-item-header i { font-size: 1.2em; color: var(--accent-color); opacity:0.8; width:20px; text-align:center;}
        .bpmn-element-item .form-grid, .bpmn-flow-item .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px 12px; align-items:center; }
        .bpmn-element-item .app-input, .bpmn-element-item .app-select, .bpmn-flow-item .app-input, .bpmn-flow-item .app-select { margin-bottom:0 !important; font-size:0.9em; }
        .bpmn-element-item .app-input[data-field="name"] { grid-column: span 2; }
        .bpmn-flow-item .app-input[data-field="condition"] { grid-column: span 2; }
        .bpmn-flow-connection { display:flex; align-items:center; justify-content:space-around; margin-bottom:8px;}
        .bpmn-flow-connection i.fa-long-arrow-alt-right {font-size:1.2em; color: var(--secondary-text-color);}

        /* Quality Tools */
        .quality-tool-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .quality-tool-content-area { flex-grow:1; display: flex; flex-direction: column; overflow-y:auto; padding:15px;}
        .quality-tool-form-section { margin-bottom: 15px; padding: 15px; background-color: var(--input-bg); border:1px solid var(--input-border-color); border-radius: var(--button-border-radius); }
        .quality-tool-form-section h4 { margin-top:0; margin-bottom:10px; color: var(--accent-color); }
        .quality-tool-form-section .form-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:10px 15px;}
        .quality-tool-list-section { margin-top:15px; }
        .quality-tool-list-section h4 { margin-bottom:10px; }
        .quality-tool-list-section ul { list-style:none; padding:0; }
        .quality-tool-list-section li { background-color: var(--input-bg); border:1px solid var(--input-border-color); border-radius: var(--button-border-radius); padding:12px 15px; margin-bottom:10px; display:flex; justify-content: space-between; align-items: flex-start; box-shadow: 0 1px 2px rgba(0,0,0,0.07);}
        .quality-tool-list-section li .item-details { flex-grow:1; }
        .quality-tool-list-section li .item-details strong { font-size: 1.05em; display:flex; align-items:center; gap:8px;}
        .quality-tool-list-section li .item-details strong i { color: var(--accent-color); opacity:0.7;}
        .quality-tool-list-section li .item-details small { color: var(--secondary-text-color); font-size:0.85em; display:block; margin-top:4px; line-height:1.4;}
        .quality-tool-list-section li .item-details p { font-size:0.9em; margin-top:6px; padding-left:10px; border-left: 2px solid var(--separator-color);}
        .quality-tool-list-section li .item-details details summary { font-size:0.9em; cursor:pointer; color: var(--accent-color); font-weight:500; margin-top:5px;}
        .quality-tool-list-section li .item-actions { display:flex; gap: 5px; align-items:center; margin-left:10px; flex-shrink:0;}
        .quality-tool-list-section li .item-actions button { font-size:0.8em !important; padding: 4px 8px !important;}

        /* Kanban Board App */
        .kanban-board-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .kanban-toolbar { display: flex; gap: 8px; padding: 10px; background: var(--toolbar-bg); border-bottom: 1px solid var(--separator-color); flex-wrap: wrap; align-items: center; flex-shrink: 0; }
        .kanban-board-container {
            display: flex;
            flex-grow: 1;
            overflow-x: auto; /* Permite scroll horizontal das colunas */
            overflow-y: hidden;
            padding: 15px;
            gap: 15px;
            align-items: flex-start; /* Alinha as colunas no topo */
        }
        .kanban-column {
            background-color: var(--input-bg);
            border: 1px solid var(--input-border-color);
            border-radius: var(--button-border-radius);
            width: 300px; /* Largura da coluna */
            flex-shrink: 0; /* Impede que as colunas encolham */
            display: flex;
            flex-direction: column;
            max-height: 100%; /* Para o scroll interno da coluna funcionar */
        }
        .kanban-column-header {
            padding: 10px;
            border-bottom: 1px solid var(--separator-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .kanban-column-title {
            font-weight: 600;
            color: var(--accent-color);
            font-size: 1.05em;
            border: none;
            background: transparent;
            padding: 5px;
            width: calc(100% - 70px); /* Ajuste para botões */
        }
        .kanban-column-title:focus {
            outline: 1px solid var(--accent-color);
            background-color: var(--window-bg);
        }
        .kanban-column-actions button {
            padding: 4px 8px;
            font-size: 0.8em;
            margin-left: 5px;
        }
        .kanban-cards-container {
            padding: 10px;
            flex-grow: 1;
            overflow-y: auto; /* Scroll vertical para os cards */
            min-height: 100px; /* Altura mínima para o drop funcionar */
        }
        .kanban-card {
            background-color: var(--window-bg);
            border: 1px solid var(--separator-color);
            border-radius: var(--button-border-radius);
            padding: 10px;
            margin-bottom: 10px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            cursor: grab;
            font-size: 0.95em;
        }
        .kanban-card:last-child { margin-bottom: 0; }
        .kanban-card.dragging { opacity: 0.5; transform: rotate(3deg); }
        .kanban-card-title {
            font-weight: 500;
            margin-bottom: 5px;
            display: block; /* para overflow */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .kanban-card-description {
            font-size: 0.85em;
            color: var(--secondary-text-color);
            margin-bottom: 8px;
            white-space: pre-wrap; /* Mantém quebras de linha */
            max-height: 60px; /* Limita altura da descrição visível */
            overflow-y: auto; /* Permite scroll na descrição se for longa */
        }
        .kanban-card-meta {
            font-size: 0.75em;
            color: var(--secondary-text-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .kanban-card-actions { display: flex; gap: 5px; }
        .kanban-card-actions button { padding: 3px 6px; font-size: 0.75em; }
        .kanban-add-card-btn {
            width: calc(100% - 20px);
            margin: 0 10px 10px 10px;
            padding: 8px;
        }
        .kanban-drop-placeholder {
            background-color: var(--accent-light-translucent);
            border: 2px dashed var(--accent-color);
            border-radius: var(--button-border-radius);
            height: 50px;
            margin-bottom: 10px;
        }

        /* SIPOC Matrix App */
        .sipoc-matrix-app-container { padding: 0 !important; } /* Remove global padding for this specific app */
        .sipoc-matrix-app { display: flex; flex-direction: column; height: 100%; background-color: var(--window-bg); }
        .sipoc-toolbar { display: flex; gap: 8px; padding: 10px; background: var(--toolbar-bg); border-bottom: 1px solid var(--separator-color); flex-wrap: wrap; align-items: center; flex-shrink: 0; }
        .sipoc-main-content {
            flex-grow: 1;
            display: grid;
            grid-template-columns: repeat(5, 1fr); /* 5 colunas para S-I-P-O-C */
            gap: 10px;
            padding: 15px;
            overflow-y: auto;
        }
        .sipoc-column {
            background-color: var(--input-bg);
            border: 1px solid var(--input-border-color);
            border-radius: var(--button-border-radius);
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .sipoc-column h3 {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: var(--accent-color);
            border-bottom: 1px solid var(--separator-color);
            padding-bottom: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .sipoc-column h3 i { margin-right: 6px; opacity: 0.7; }
        .sipoc-column .app-button.small-add-item {
            font-size: 0.8em !important;
            padding: 4px 8px !important;
            margin-top: 5px;
        }
        .sipoc-items-list {
            list-style: none;
            padding: 0;
            margin: 0;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .sipoc-item {
            background-color: var(--window-bg);
            border: 1px solid var(--separator-color);
            border-radius: calc(var(--button-border-radius) - 2px);
            padding: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9em;
        }
        .sipoc-item input[type="text"] {
            flex-grow: 1;
            border: none;
            background-color: transparent;
            color: var(--text-color);
            padding: 3px;
            margin-right: 5px;
        }
        .sipoc-item input[type="text"]:focus {
            outline: 1px solid var(--accent-color);
            background-color: rgba(var(--current-window-bg-rgb), 0.3);
        }
        .sipoc-item .app-button.danger.small-action {
            padding: 3px 6px !important;
            font-size: 0.7em !important;
            line-height: 1;
        }


        /* Tema Escuro */
        .dark-mode {
            --accent-color: var(--accent-dark); --background: var(--background-dark);
            --text-color: var(--text-dark); --secondary-text-color: var(--secondary-text-dark);
            --window-bg: var(--window-bg-dark); --toolbar-bg: var(--toolbar-bg-dark);
            --button-bg: var(--button-bg-dark); --button-text-color: var(--button-text-dark);
            --input-bg: var(--input-bg-dark); --input-border-color: var(--input-border-dark);
            --separator-color: var(--separator-dark);
            --hover-highlight-color: var(--hover-highlight-dark);
            --current-window-bg-rgb: var(--window-bg-dark-rgb);
            --current-background-rgb-for-stage: var(--background-dark-rgb);
        }

        /* Notificações */
        #notification { position:fixed; bottom: calc(var(--taskbar-height) + 15px); right:20px; background:rgba(28,28,30,0.9); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); color:white; padding:12px 20px; border-radius: var(--button-border-radius); display:none; z-index:3000; transition: opacity 0.3s ease, transform 0.3s ease; opacity: 0; transform: translateY(20px); box-shadow: 0 5px 15px rgba(0,0,0,0.35); font-size: 0.95em; }
        #notification.show { display: block; opacity: 1; transform: translateY(0); }

        /* Menu de Contexto da Área de Trabalho */
        .desktop-context-menu { position: fixed; background:var(--window-bg); backdrop-filter:var(--sonoma-blur); -webkit-backdrop-filter:var(--sonoma-blur); border-radius: var(--button-border-radius); box-shadow: var(--shadow); padding: 6px; z-index: 10000; display: none; border: 1px solid var(--separator-color); min-width: 250px; }
        .context-menu-item { padding: 8px 14px; cursor: pointer; transition: background-color 0.1s ease; color: var(--text-color); font-size: 0.9em; border-radius: 5px; display:flex; align-items:center; gap: 10px;}
        .context-menu-item:hover { background: var(--accent-color); color: white !important; }
        .context-menu-item svg, .context-menu-item i.fas, .context-menu-item i.far  { width: 16px; height: 16px; opacity: 0.7; margin-right: 8px;}
        .context-menu-item:hover svg, .context-menu-item:hover i.fas, .context-menu-item:hover i.far { opacity: 1; fill: white !important; color: white !important;}
        .context-menu-separator { height: 1px; background-color: var(--separator-color); margin: 6px 4px; }
        .context-menu-color-palette-container { padding: 8px 14px; }
        .context-menu-color-palette { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-start; }
        .context-menu-color-palette .color-option { width: 24px; height: 24px; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: border-color 0.2s ease, transform 0.1s ease; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }
        .context-menu-color-palette .color-option:hover { transform: scale(1.1); }
        .context-menu-color-palette .color-option.selected { border-color: var(--text-color); box-shadow: 0 0 0 2px var(--window-bg), 0 0 0 3.5px var(--text-color); }
        .desktop-context-menu .switch { position: relative; display: inline-block; width: 34px; height: 20px; }
        .desktop-context-menu .switch input { opacity: 0; width: 0; height: 0; }
        .desktop-context-menu .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--button-bg); transition: .3s; border-radius: 20px; border: 1px solid var(--input-border-color); }
        .desktop-context-menu .slider:before { position: absolute; content: ""; height: 14px; width: 14px; left: 2px; bottom: 2px; background-color: var(--text-color); opacity: 0.7; transition: .3s; border-radius: 50%; }
        .desktop-context-menu input:checked + .slider { background-color: var(--accent-color); border-color: var(--accent-color); }
        .desktop-context-menu input:checked + .slider:before { transform: translateX(14px); background-color: white; opacity: 1;}

        /* Stage Manager (Organizador Visual) */
        #stageManagerToggle { margin-left: 10px; }
        .stage-manager-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: calc(100% - var(--taskbar-height));
            z-index: 1500;
            display: none;
            align-items: center; padding: 20px;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            opacity: 0; visibility: hidden;
            background: rgba(var(--current-background-rgb-for-stage, 240, 240, 245),0.4) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
        }
        .dark-mode .stage-manager-overlay {
            background: rgba(var(--current-background-rgb-for-stage, 18, 18, 18),0.4) !important;
        }
        .stage-manager-overlay.active { opacity: 1; visibility: visible; display: flex; }
        .stage-main-window-area {
             flex-grow: 1; display: flex; justify-content: center; align-items: center;
             transition: transform 0.3s ease;
        }
        .stage-sidebar {
            width: 160px !important;
            height: calc(100% - 40px);
            max-height: 90vh;
            display: flex; flex-direction: column; gap: 15px;
            overflow-y: auto; padding: 15px 10px;
            background: var(--toolbar-bg);
            border-radius: 12px; margin-right: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            opacity: 0.95;
            z-index: 1501;
        }
        .dark-mode .stage-sidebar { background: var(--toolbar-bg-dark); }
        .stage-app-thumbnail {
            width: 120px !important;
            height: 90px !important;
            background-color: var(--button-bg);
            border: 1px solid var(--separator-color); border-radius: 8px;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            font-size: 10px; text-align: center; padding: 5px;
            cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            overflow: hidden; position: relative;
        }
         .stage-app-thumbnail:hover { transform: scale(1.08); box-shadow: 0 4px 10px rgba(0,0,0,0.25); }
        .stage-app-thumbnail img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;}
        .stage-app-thumbnail .placeholder-icon { font-size: 24px; color: var(--secondary-text-color); }
        .stage-app-thumbnail .thumbnail-title {
            position: absolute; bottom: 3px; left:3px; right:3px;
            font-size: 9px; color: var(--text-color);
            background-color: rgba(var(--current-window-bg-rgb), 0.7);
            padding: 1px 3px; border-radius: 3px;
            white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
         background: rgba(0,0,0,0.5); color: #fff; }

        /* Menu de contexto para fechar na taskbar */
        .taskbar-item-context-menu {
            display: none; position: absolute; bottom: 100%;
            left: 50%; transform: translateX(-50%);
            background-color: var(--window-bg);
            border: 1px solid var(--separator-color);
            border-radius: var(--button-border-radius);
            padding: 5px; z-index: 2010;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }
        .taskbar-item-context-menu button {
            display: block; width: 100%; text-align: left;
            padding: 8px 12px; background: none; border: none;
            color: var(--text-color); cursor: pointer; font-size: 0.9em;
        }
        .taskbar-item-context-menu button:hover {
            background-color: var(--hover-highlight-color);
        }

        /* === macOS Sonoma Design Enhancements === */
        /* Enhanced depth & translucency */
        :root {
            --window-shadow-sonoma: 0 20px 50px rgba(0,0,0,0.45), 0 8px 16px rgba(0,0,0,0.25);
            --dock-shadow-sonoma: 0 15px 40px rgba(0,0,0,0.35);
        }
        .window {
            box-shadow: var(--window-shadow-sonoma);
            backdrop-filter: blur(30px) saturate(1.5);
            -webkit-backdrop-filter: blur(30px) saturate(1.5);
        }
        .dock {
            box-shadow: var(--dock-shadow-sonoma);
            background: rgba(255,255,255,0.35);
        }
        .dark-mode .dock {
            background: rgba(34,34,36,0.70);
        }
        /* Dock magnification */
        @media (hover: hover) {
            .dock-item {
                transition: transform 0.18s cubic-bezier(.34,1.56,.64,1), filter 0.18s;
            }
            .dock-item:hover {
                transform: translateY(-16px) scale(1.35) rotateY(8deg) rotateX(4deg);
            }
        }
        /* Window opening animation */
        .window {
            animation: sonomaFadeIn 0.45s ease-out;
        }
        @keyframes sonomaFadeIn {
            from { transform: scale(0.95) translateY(12px); opacity: 0; }
            to { transform: scale(1) translateY(0); opacity: 1; }
        }
        /* Rounded corners accent for inputs on focus */
        .app-input:focus, .app-textarea:focus {
            box-shadow: 0 0 0 3px var(--accent-light-translucent);
        }
        .dark-mode .app-input:focus, .dark-mode .app-textarea:focus {
            box-shadow: 0 0 0 3px var(--accent-dark-translucent);
        }
        /* Blur & Tint behind desktop context menu */
        .desktop-context-menu {
            background: rgba(var(--current-window-bg-rgb, 248,248,250),0.85);
            backdrop-filter: blur(25px) saturate(1.3);
            -webkit-backdrop-filter: blur(25px) saturate(1.3);
        }
        .dark-mode .desktop-context-menu {
            background: rgba(var(--current-window-bg-rgb, 32,32,34),0.85);
        }
        /* Taskbar glass effect */
        .taskbar {
            background: rgba(var(--current-window-bg-rgb, 248,248,250), 0.88);
            backdrop-filter: blur(25px) saturate(1.4);
            -webkit-backdrop-filter: blur(25px) saturate(1.4);
        }
        .dark-mode .taskbar {
            background: rgba(var(--current-window-bg-rgb, 32,32,34), 0.88);
        }
        /* Accent gradient buttons */
        .app-button:not(.secondary):not(.danger) {
            background: linear-gradient(135deg, var(--accent-color) 0%, color-mix(in srgb, var(--accent-color) 70%, #ffffff) 100%);
        }
        .app-button:not(.secondary):not(.danger):hover {
            filter: brightness(1.08) saturate(1.2);
        }
        /* === END Enhancements === */


        /* ===========================
        Sonoma Design System – v1.0
        (c) 2025 Public Management OS
        =========================== */
        :root {
            --accent-rgb-light: 0, 122, 255;
            --accent-rgb-dark: 10, 132, 255;
            --accent-rgb: var(--accent-rgb-light);
            --window-shadow-sonoma: 0 4px 32px rgba(0,0,0,0.32);
            --separator-color: rgba(255,255,255,0.18);
        }

        .dark-mode {
            --accent-rgb: var(--accent-rgb-dark);
        }

        /* Scrollbars */
        ::-webkit-scrollbar       { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb {
            background: rgba(var(--accent-rgb), 0.45);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(var(--accent-rgb), 0.65);
        }

        /* Dock / Taskbar common */
        @keyframes dockPulse {
            0% { transform: translateY(-16px) scale(1.35); }
            50% { transform: translateY(-18px) scale(1.40); }
            100% { transform: translateY(-16px) scale(1.35); }
        }
        .dock-item.active {
            animation: dockPulse 1.2s ease-in-out infinite;
        }
        .dock::after {
            content: "";
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(180deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.05) 40%, transparent 100%);
            pointer-events: none;
            border-radius: inherit;
            mask-image: linear-gradient(180deg, black 60%, transparent 100%);
        }

        /* Window styling */
        .window {
            background: rgba(255,255,255,0.65);
            backdrop-filter: blur(30px) saturate(160%);
        }
        .dark-mode .window {
            background: rgba(30,30,30,0.55);
        }
        .window.active {
            box-shadow: var(--window-shadow-sonoma), 0 0 0 2px rgba(var(--accent-rgb), 0.55);
        }
        .window.dragging {
            transition: transform 0.12s cubic-bezier(.34,1.56,.64,1);
        }

        /* Focus rings */
        :where(.app-input, .app-textarea, .app-select, .app-button, button):focus-visible {
            outline: 2px solid rgba(var(--accent-rgb), 0.7);
            outline-offset: 2px;
        }

        /* Taskbar separators */
        .taskbar-item:not(:last-child)::after {
            content: "";
            width: 1px; height: 60%;
            background: var(--separator-color);
            margin-left: 10px;
            opacity: 0.4;
        }

        /* [NOVO] Estilos de Impressão para PDF */
        @media print {
            body, html {
                background: #FFF !important; /* Fundo branco para impressão */
                color: #000 !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .taskbar, .dock, .desktop-context-menu, .stage-manager-overlay, #notification, body > script {
                display: none !important;
            }

            body.printing-mode > *:not(.window-to-print) {
                display: none !important;
            }
            
            .window-to-print {
                position: static !important;
                width: 100% !important;
                height: auto !important;
                min-height: unset !important;
                left: 0 !important; top: 0 !important;
                box-shadow: none !important;
                border: none !important;
                display: block !important;
                page-break-after: always;
                overflow: visible !important;
                background: #FFF !important;
                backdrop-filter: none !important;
                -webkit-backdrop-filter: none !important;
            }

            .window-to-print .title-bar,
            .window-to-print .resize-handle,
            .window-to-print .app-toolbar,
            .window-to-print .task-actions,
            .window-to-print .item-actions,
            .window-to-print .action-button,
            .window-to-print .kanban-column-actions,
            .window-to-print .kanban-add-card-btn,
            .window-to-print .sipoc-column .small-add-item,
            .window-to-print .ishikawa-category-content h5 span {
                display: none !important;
            }
            .window-to-print .window-content {
                overflow: visible !important;
                height: auto !important;
                border-top: 1px solid #ccc !important;
                padding: 10px !important;
            }
            .window-to-print .app-section {
                 border: 1px solid #ccc; background-color: #f9f9f9; page-break-inside: avoid;
            }
            .window-to-print h3, .window-to-print h4 { color: #000 !important; border-color: #ccc !important;}
            .window-to-print .app-input, .window-to-print .app-select, .window-to-print .app-textarea {
                border: 1px solid #ddd !important;
                background-color: #fdfdfd !important;
            }
             .window-to-print .kanban-board-container { flex-wrap: wrap; height: auto; }
             .window-to-print .kanban-column { page-break-inside: avoid; }
             .window-to-print .sipoc-main-content { display: block; }
             .window-to-print .sipoc-column { page-break-inside: avoid; margin-bottom: 20px;}
             .window-to-print .gantt-main-area { flex-direction: column; height:auto !important; }
             .window-to-print .gantt-table-wrapper { width:100% !important; border-right:none !important; height:auto; }
             .window-to-print .gantt-chart-area-wrapper { display:none; } /* Esconder gantt visual, tabela é mais útil */

        }
</style>
<style>
/* Ajustes para tablets (iPad) */
@media (max-width: 1024px) {
    .dock {
        overflow-x: auto;
        width: 90%;
        justify-content: flex-start;
    }
    .dock-item {
        min-width: 70px;
        min-height: 70px;
        font-size: 35px;
    }
    .window {
        width: 90% !important;
        left: 5% !important;
        top: 5% !important;
        height: auto !important;
    }
    .taskbar-item, .clock, .app-button {
        padding: 12px;
        font-size: 1.2em;
    }
}

/* Ajustes para mobile */
@media (max-width: 768px) {
    .dock {
        bottom: 0;
        border-radius: 0;
        padding: 5px;
        overflow-x: auto;
        width: 100%;
        justify-content: flex-start;
    }
    .dock-item {
        min-width: 50px;
        min-height: 50px;
        font-size: 28px;
    }
    .taskbar {
        flex-direction: column;
        height: auto;
        padding: 5px;
    }
    .taskbar-item, .clock, .app-button {
        width: 100%;
        padding: 10px;
        margin-bottom: 5px;
    }
    .window {
        width: 95% !important;
        left: 2.5% !important;
        top: 2.5% !important;
        height: auto !important;
    }
    .window-content, .title-bar {
        padding: 10px;
    }
}

/* Melhorias gerais para touch */
.window-control, .dock-item, .taskbar-item, .app-button {
    touch-action: manipulation; /* otimiza eventos de toque */
}
</style>
</head>
<body class="logged-out">

<!-- [MODIFICADO] Container de Login agora com formulário -->
<div id="loginContainer">
    <h1>Public Management OS</h1>
    <p>Acesse sua conta para salvar seus projetos na nuvem.</p>
    <div class="login-form">
        <input type="email" id="emailInput" placeholder="E-mail" required>
        <input type="password" id="passwordInput" placeholder="Senha" required>
        <button id="loginBtn" class="app-button">Entrar</button>
        <button id="registerBtn" class="app-button secondary">Criar Conta</button>
        <span id="loginError" style="color: red; font-size: 0.9em; text-align: center; display: none;"></span>
        <!-- [NOVO] Link para recuperação de senha -->
        <a href="#" id="forgotPasswordLink" class="login-form-toggle" style="text-align: center; margin-top: 10px;">Esqueceu a senha?</a>
    </div>
</div>

<div class="desktop" id="desktop">
</div>

<div class="dock" id="appDock">
    <!-- O ícone do Explorador de Arquivos agora abre o explorador do Firestore -->
    <div class="dock-item" data-action="open-file-system" title="Explorador de Arquivos (Nuvem)">📁</div>
    <div class="dock-item" data-action="open-gantt-chart" title="Cronograma (Gantt)">📊</div>
    <div class="dock-item" data-action="open-project-tasks" title="Tarefas de Projeto (com MapNeural AI)">✅</div>
    <div class="dock-item" data-action="open-kanban-board" title="Kanban Board">📋</div>
    <div class="dock-item" data-action="open-swot-analysis" title="Matriz SWOT">📝</div>
    <div class="dock-item" data-action="open-sipoc-matrix" title="Matriz SIPOC">🧩</div>
    <div class="dock-item" data-action="open-okr-tracker" title="Monitor OKR">🎯</div>
    <div class="dock-item" data-action="open-ishikawa-diagram" title="Diagrama de Ishikawa">🐠</div>
    <div class="dock-item" data-action="open-bpmn-modeler" title="Modelador BPMN (Simplificado)">🔄</div>
    <div class="dock-item" data-action="open-mind-map" title="Mapa Mental">🧠</div>
    <div class="dock-item" data-action="open-contract-manager" title="Gestão de Contratos">📜</div>
    <div class="dock-item" data-action="open-checklist-tool" title="Ferramenta de Checklist">☑️</div>
    <div class="dock-item" data-action="open-ncr-tool" title="Relatório de Não Conformidade">⚠️</div>
    <div class="dock-item" data-action="open-pdca-tool" title="Ciclo PDCA">🔁</div>
    <div class="dock-item" data-action="open-5w2h-tool" title="Ferramenta 5W2H">❓</div>
</div>

<div class="taskbar">
    <div class="taskbar-left-cluster">
        <div class="taskbar-items" id="taskbarItems">
            </div>
    </div>
    <div class="taskbar-right-cluster">
        <button class="app-button secondary" id="stageManagerToggle" title="Organizador Visual">🔳</button>
        <button class="app-button secondary" id="darkModeToggle" title="Modo Escuro">🌙</button>
        <div class="clock" id="clock">00:00</div>
        <div id="userProfile">
            <!-- A imagem de perfil não está mais disponível sem o provedor do Google, então vamos usar um ícone -->
            <span style="font-size: 24px; margin-right: 8px;">👤</span>
            <span id="userProfileName"></span>
            <button id="logoutBtn" class="app-button secondary" title="Sair">Sair</button>
        </div>
    </div>
</div>

<div id="notification">Mensagem de Notificação</div>

<div class="desktop-context-menu" id="desktopContextMenu">
</div>
<div class="stage-manager-overlay" id="stageManagerOverlay">
<div class="stage-sidebar" id="stageManagerSidebar">
</div>
<div class="stage-main-window-area" id="stageManagerMainArea">
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/jsmind@0.4.6/js/jsmind.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jsmind@0.4.6/js/jsmind.draggable.js"></script>

<!-- [MODIFICADO] Bloco de Script de Módulo -->
<script type="module">
    // Importações do Firebase
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
    import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
    import { getFirestore, collection, doc, setDoc, getDoc, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
    
    // [MODIFICADO] Configuração da API - Google foi removido
    const ApiConfig = {
        firebase: {
            apiKey: "AIzaSyCbpWXt9stM8jnIL3UIggZuvr3V7nwvPcQ",
            authDomain: "publicmanagementos.firebaseapp.com",
            projectId: "publicmanagementos",
            storageBucket: "publicmanagementos.firebasestorage.app",
            messagingSenderId: "publicmanagementos.firebasestorage.app",
            appId: "1:829309037744:web:3276773141117bb8255f75",
        }
    };

    // --- Instâncias Globais ---
    let authManager, firestoreManager;
    
    /**
     * [NOVO] Gerencia a interação com o Cloud Firestore.
     * Substitui o GoogleDriveManager.
     */
    class FirestoreManager {
        constructor(db, userId) {
            if (!db || !userId) {
                throw new Error("Firestore DB e User ID são necessários para o manager.");
            }
            this.db = db;
            this.userId = userId;
            // Cria uma referência para a coleção de arquivos do usuário
            this.filesCollection = collection(db, "users", this.userId, "files");
        }

        async listFiles() {
            try {
                const querySnapshot = await getDocs(this.filesCollection);
                const files = [];
                querySnapshot.forEach((doc) => {
                    files.push({ id: doc.id, ...doc.data() });
                });
                // Ordena por data de modificação, se existir
                files.sort((a, b) => (b.modifiedTime || 0) - (a.modifiedTime || 0));
                return files;
            } catch (error) {
                console.error("Erro ao listar arquivos do Firestore:", error);
                showNotification("Erro ao listar arquivos da nuvem.", 4000);
                return [];
            }
        }
        
        async readFile(fileId) {
            try {
                const docRef = doc(this.filesCollection, fileId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    // O conteúdo JSON é armazenado diretamente no campo 'content'
                    return JSON.stringify(docSnap.data().content);
                } else {
                    throw new Error("Arquivo não encontrado.");
                }
            } catch (error) {
                console.error("Erro ao ler arquivo do Firestore:", error);
                showNotification("Erro ao ler arquivo da nuvem.", 4000);
                throw error;
            }
        }
        
        async saveFile(fileMetadata, content) {
            try {
                const docId = fileMetadata.fileId || generateId('fsDoc');
                const docRef = doc(this.filesCollection, docId);
                const dataToSave = {
                    name: fileMetadata.name,
                    appDataType: fileMetadata.appDataType || 'pmo-file',
                    content: JSON.parse(content), // Salva o objeto JSON diretamente
                    modifiedTime: Date.now()
                };

                await setDoc(docRef, dataToSave, { merge: true }); // 'merge: true' atualiza ou cria
                
                return { id: docId, name: fileMetadata.name };
            } catch (error) {
                console.error("Erro ao salvar arquivo no Firestore:", error);
                showNotification("Erro ao salvar arquivo na nuvem.", 4000);
                throw error;
            }
        }
        
        async renameFile(fileId, newName) {
             try {
                const docRef = doc(this.filesCollection, fileId);
                await updateDoc(docRef, {
                    name: newName,
                    modifiedTime: Date.now()
                });
            } catch (error) {
                 console.error("Erro ao renomear arquivo:", error);
                 showNotification("Erro ao renomear arquivo.", 4000);
            }
        }
        
        async deleteFile(fileId) {
             try {
                const docRef = doc(this.filesCollection, fileId);
                await deleteDoc(docRef);
            } catch (error) {
                 console.error("Erro ao excluir arquivo:", error);
                 showNotification("Erro ao excluir arquivo.", 4000);
            }
        }
    }
    
    /**
     * [MODIFICADO] Gerencia a autenticação do Firebase.
     */
    class AuthManager {
        constructor() {
            this.firebaseApp = initializeApp(ApiConfig.firebase);
            this.auth = getAuth(this.firebaseApp);
            this.db = getFirestore(this.firebaseApp); // Instância do Firestore
            this.user = null;
        }

        init() {
            onAuthStateChanged(this.auth, this.handleAuthState.bind(this));
            
            // Listeners para os botões do formulário
            document.getElementById('loginBtn').onclick = () => this.signInWithEmail();
            document.getElementById('registerBtn').onclick = () => this.registerWithEmail();
            document.getElementById('logoutBtn').onclick = () => this.signOut();
            // [NOVO] Listener para o link de recuperação de senha
            document.getElementById('forgotPasswordLink').onclick = (e) => {
                e.preventDefault();
                this.sendPasswordReset();
            };
        }

        async signInWithEmail() {
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;
            const errorEl = document.getElementById('loginError');
            errorEl.style.display = 'none';

            try {
                await signInWithEmailAndPassword(this.auth, email, password);
                // O onAuthStateChanged vai cuidar do resto
            } catch (error) {
                console.error("Erro no login:", error.code, error.message);
                errorEl.textContent = "E-mail ou senha inválidos.";
                errorEl.style.display = 'block';
            }
        }
        
        async registerWithEmail() {
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;
            const errorEl = document.getElementById('loginError');
            errorEl.style.display = 'none';

            if (password.length < 6) {
                errorEl.textContent = "A senha deve ter pelo menos 6 caracteres.";
                errorEl.style.display = 'block';
                return;
            }

            try {
                await createUserWithEmailAndPassword(this.auth, email, password);
                // O onAuthStateChanged vai cuidar do resto
            } catch (error) {
                console.error("Erro no registro:", error.code, error.message);
                if (error.code === 'auth/email-already-in-use') {
                    errorEl.textContent = "Este e-mail já está em uso.";
                } else {
                    errorEl.textContent = "Erro ao criar conta. Verifique o e-mail.";
                }
                errorEl.style.display = 'block';
            }
        }

        /**
         * [NOVO] Envia um e-mail de redefinição de senha.
         */
        async sendPasswordReset() {
            const email = document.getElementById('emailInput').value;
            const errorEl = document.getElementById('loginError');
            errorEl.style.display = 'none';

            if (!email) {
                errorEl.textContent = "Por favor, digite seu e-mail para redefinir a senha.";
                errorEl.style.display = 'block';
                return;
            }

            try {
                await sendPasswordResetEmail(this.auth, email);
                showNotification(`E-mail de redefinição enviado para ${email}. Verifique sua caixa de entrada.`, 5000);
            } catch (error) {
                console.error("Erro ao enviar e-mail de redefinição:", error.code, error.message);
                errorEl.textContent = "Não foi possível enviar o e-mail. Verifique se o endereço está correto.";
                errorEl.style.display = 'block';
            }
        }
        
        signOut() {
            signOut(this.auth); // Não precisa de .then(), onAuthStateChanged vai pegar
        }
        
        handleAuthState(user) {
            if (user) {
                this.user = user;
                // [NOVO] Inicializa o FirestoreManager com o ID do usuário
                firestoreManager = new FirestoreManager(this.db, user.uid);
                window.firestoreManager = firestoreManager; // Torna globalmente acessível

                document.body.classList.add('logged-in');
                document.body.classList.remove('logged-out');
                this.updateUI(true);
            } else {
                this.user = null;
                firestoreManager = null; // Limpa o manager ao deslogar
                window.firestoreManager = null;
                document.body.classList.remove('logged-in');
                document.body.classList.add('logged-out');
                this.updateUI(false);
            }
        }
        
        updateUI(isLoggedIn) {
            if (isLoggedIn && this.user) {
                // Como não temos mais foto, usamos o e-mail ou a primeira parte dele como nome
                const userEmail = this.user.email;
                document.getElementById('userProfileName').textContent = userEmail.split('@')[0];
                initializeWebOS();
            } else {
                // Limpa a UI se deslogado
                if (window.webOSInitialized) {
                    window.location.reload(); // A forma mais simples de resetar o estado
                }
            }
        }
    }
    
    // --- Ponto de Entrada Global para a Lógica de Auth/API ---
    document.addEventListener('DOMContentLoaded', () => {
        authManager = new AuthManager();
        authManager.init();
        window.authManager = authManager;
    });
</script>

<script>
    // Todo o restante do script principal permanece aqui, com as seguintes modificações:
    // 1. Substituir todas as chamadas a `googleDriveManager` por `firestoreManager`.
    // 2. Simplificar `openFileWithPicker` pois não usamos mais o Google Picker.
    // 3. Ajustar `openFileSystem` para ler do Firestore.
    // 4. `handleSaveAction` e `handleSaveAsAction` usarão `firestoreManager`.
    // ... O código completo e adaptado continua abaixo ...
</script>

<!-- Script Principal Adaptado -->
<script>
        // --- Início do Script Principal ---
        
        // --- Instâncias Globais (definidas no script de módulo) ---
        // authManager, firestoreManager
        
        const STORAGE_KEYS = {
            WALLPAPER: 'webosWallpaper_gestaop_v1.6',
            THEME_DARK_MODE: 'darkMode_gestaop_v1.6',
            THEME_ACCENT_COLOR: 'accentColor_gestaop_v1.6',
            MAP_NEURAL_STATE: 'webos_map_neural_state_v1.0',
            MAP_NEURAL_TRAINING_DATA: 'webos_map_neural_training_v1.0'
        };
        const AppMimeType = "application/json";
        
        function generateId(prefix = 'id') {
            return prefix + '_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        }

        function showNotification(message, duration = 3000) {
            const notificationElement = document.getElementById('notification');
            if (!notificationElement) {
                console.warn("Elemento de notificação '#notification' não encontrado.");
                return;
            }
            notificationElement.textContent = message;
            notificationElement.classList.add('show');
            setTimeout(() => {
                notificationElement.classList.remove('show');
            }, duration);
        }
        
        // ---- MANIPULAÇÃO DE ARQUIVOS (usando Firestore) ----
        
        async function handleSaveAction(appState) {
            if (!firestoreManager) {
                showNotification("Acesso à nuvem não está pronto.", 3000);
                return;
            }
            if (appState.fileId) {
                const winData = windowManager.windows.get(appState.winId);
                showNotification(`Salvando "${winData.title.replace('*','').trim()}"...`, 2000);
                try {
                    const dataToSave = appState.getData();
                    const jsonString = JSON.stringify(dataToSave, null, 2);
                    const fileMetadata = {
                        fileId: appState.fileId,
                        name: winData.title.replace('*','').trim(),
                        appDataType: appState.appDataType
                    };
                    
                    await firestoreManager.saveFile(fileMetadata, jsonString);
                    appState.markClean();
                    showNotification(`"${fileMetadata.name}" salvo na nuvem.`, 2500);
                } catch(e) {
                     showNotification("Falha ao salvar. Verifique o console.", 4000);
                }
            } else {
                await handleSaveAsAction(appState);
            }
        }
        
        async function handleSaveAsAction(appState) {
             if (!firestoreManager) {
                showNotification("Acesso à nuvem não está pronto.", 3000);
                return;
            }
            const dataToSave = appState.getData();
            const defaultFilename = (appState.fileId && windowManager.windows.get(appState.winId)?.title) ?
                windowManager.windows.get(appState.winId).title.replace('*','').trim() : appState.defaultFileName;
            
            const newFilename = prompt("Salvar arquivo na nuvem como:", defaultFilename);
            if (!newFilename || newFilename.trim() === '') return;
            
            showNotification(`Salvando "${newFilename}"...`, 2000);
            try {
                const jsonString = JSON.stringify(dataToSave, null, 2);
                const fileMetadata = {
                    fileId: null, // Null indica um novo arquivo
                    name: newFilename,
                    appDataType: appState.appDataType
                };
                
                const savedFile = await firestoreManager.saveFile(fileMetadata, jsonString);

                appState.fileId = savedFile.id;
                appState.markClean();
                windowManager.updateWindowTitle(appState.winId, savedFile.name);
                showNotification(`Arquivo salvo como "${savedFile.name}" na nuvem.`, 3000);

            } catch(e) {
                showNotification("Falha ao salvar. Verifique o console.", 4000);
            }
        }

       function handleExportToPDF(winId) {
            const winData = windowManager.windows.get(winId);
            if (!winData) {
                showNotification("Janela não encontrada para exportação.", 3000);
                return;
            }

            const winEl = winData.element;
            const titleEl = winEl.querySelector('.window-title-text');
            const originalTitle = document.title;
            
            document.title = titleEl ? titleEl.textContent.replace('*','') : 'Exportação PMOS';
            document.body.classList.add('printing-mode');
            winEl.classList.add('window-to-print');
            
            showNotification("Preparando para exportação. Use 'Salvar como PDF' na caixa de impressão.", 4000);

            setTimeout(() => {
                window.print();
                const cleanupPrintStyles = () => {
                    document.body.classList.remove('printing-mode');
                    winEl.classList.remove('window-to-print');
                    document.title = originalTitle;
                };
                if (window.onafterprint !== undefined) {
                    window.onafterprint = cleanupPrintStyles;
                } else {
                    setTimeout(cleanupPrintStyles, 500);
                }
            }, 250);
        }

        // As classes WindowManager, ThemeManager, e StageManager permanecem as mesmas
        // O código delas não precisa de alteração para essa mudança de Auth/DB.
        class WindowManager {
            constructor() {
                this.windows = new Map(); // Armazena dados das janelas abertas
                this.zIndex = 100; // Controla a sobreposição das janelas
                this.activeWindowId = null; // ID da janela ativa
                this.taskbarItemsContainer = document.getElementById('taskbarItems');
                this.stageManager = new StageManager(this); // Instância do StageManager
                this.appLaunchActions = {}; // Mapeia ações de botões para funções de abrir apps
            }

            createWindow(title, content, options = {}) {
                const winId = generateId('win');
                this.zIndex++;

                const win = document.createElement('div');
                win.id = winId;
                win.className = 'window';
                win.style.width = options.width || '700px';
                win.style.height = options.height || '500px';

                const taskbarHeightVal = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--taskbar-height'), 10) || 48;
                const maxLeft = window.innerWidth - parseInt(win.style.width, 10) - 20;
                const maxTop = window.innerHeight - parseInt(win.style.height, 10) - taskbarHeightVal - 20;
                win.style.left = options.left || `${Math.max(10, Math.random() * maxLeft)}px`;
                win.style.top = options.top || `${Math.max(10, Math.random() * maxTop)}px`;
                win.style.zIndex = this.zIndex;

                const titleBar = document.createElement('div');
                titleBar.className = 'title-bar';

                const controls = document.createElement('div');
                controls.className = 'window-controls';
                ['close', 'minimize', 'maximize'].forEach(type => {
                    const btn = document.createElement('button');
                    btn.className = `window-control ${type}`;
                    btn.title = type.charAt(0).toUpperCase() + type.slice(1);
                    btn.onclick = (e) => {
                        e.stopPropagation();
                        if (type === 'close') this.closeWindow(winId);
                        else if (type === 'minimize') this.minimizeWindow(winId);
                        else if (type === 'maximize') this.maximizeWindow(winId);
                    };
                    controls.appendChild(btn);
                });

                const titleText = document.createElement('span');
                titleText.className = 'window-title-text';
                titleText.textContent = title;

                const windowContent = document.createElement('div');
                windowContent.className = 'window-content';
                if (options.appType) {
                    windowContent.classList.add(`${options.appType.split(' ')[0]}-app`);
                     if (['swot-analysis', 'okr-tracker', 'contract-manager', 'gantt-chart',
                          'ishikawa-diagram', 'bpmn-modeler', 'project-tasks', 'quality-tool',
                          'kanban-board', 'sipoc-matrix'].some(type => options.appType.startsWith(type))) {
                       windowContent.classList.add(`${options.appType.split(' ')[0]}-app-container`);
                    }
                }

                if (typeof content === 'string') {
                    windowContent.innerHTML = content;
                } else if (content instanceof HTMLElement) {
                    windowContent.appendChild(content);
                }

                const resizeHandle = document.createElement('div');
                resizeHandle.className = 'resize-handle';
                
                win.addEventListener('keydown', async (e) => {
                    if (e.ctrlKey && e.key.toLowerCase() === 's') {
                        e.preventDefault();
                        const activeWinData = this.windows.get(this.activeWindowId);
                        if (activeWinData && activeWinData.currentAppInstance) {
                            await handleSaveAction(activeWinData.currentAppInstance);
                        }
                    }
                });


                titleBar.appendChild(controls);
                titleBar.appendChild(titleText);

                win.appendChild(titleBar);
                win.appendChild(windowContent);
                win.appendChild(resizeHandle);

                document.getElementById('desktop').appendChild(win);

                const winData = {
                    element: win,
                    title: title,
                    minimized: false,
                    maximized: false,
                    originalRect: null,
                    appType: options.appType || 'generic',
                    currentAppInstance: null,
                    jmInstance: null,
                    getScreenshot: async () => {
                        try {
                            const controlsEl = win.querySelector('.window-controls');
                            const resizeHandleEl = win.querySelector('.resize-handle');
                            if(controlsEl) controlsEl.style.visibility = 'hidden';
                            if(resizeHandleEl) resizeHandleEl.style.visibility = 'hidden';

                            const canvas = await html2canvas(win, {
                                scale: 0.25, logging: false, useCORS: true,
                                width: win.offsetWidth, height: win.offsetHeight,
                                windowWidth: win.scrollWidth, windowHeight: win.scrollHeight,
                                foreignObjectRendering: true, removeContainer: true,
                                backgroundColor: null
                            });
                             if(controlsEl) controlsEl.style.visibility = 'visible';
                             if(resizeHandleEl) resizeHandleEl.style.visibility = 'visible';
                            return canvas.toDataURL('image/png');
                        } catch (err) {
                            console.warn("Erro ao gerar screenshot da janela:", err, winData.title);
                            const appIconActionKey = `open-${winData.appType.replace(/([A-Z])/g, '-$1').toLowerCase().split(' ')[0]}`;
                            const appIconEl = document.querySelector(`.dock-item[data-action="${appIconActionKey}"]`);
                            const appIconText = appIconEl ? appIconEl.textContent : '⚙️';
                            const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--button-bg').trim();
                            const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();
                            return `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="75" viewBox="0 0 100 75"><rect width="100" height="75" fill="${bgColor}"/><text x="50" y="45" font-size="30" text-anchor="middle" dominant-baseline="middle" fill="${fgColor}">${appIconText || '🖼️'}</text><text x="50" y="65" font-size="10" text-anchor="middle" dominant-baseline="middle" fill="${fgColor}">${winData.title.substring(0,12)}</text></svg>`;
                        }
                    }
                };
                this.windows.set(winId, winData);
                this.makeActive(winId);
                this._addDragAndResize(win, titleBar, resizeHandle, winId);
                this._createTaskbarItem(winId, title, options.appType);

                win.addEventListener('mousedown', () => this.makeActive(winId));
                if(this.stageManager.isActive) this.stageManager.updateStageThumbnails();
                return winId;
            }

            makeActive(winId) {
                if (this.activeWindowId && this.windows.has(this.activeWindowId)) {
                    this.windows.get(this.activeWindowId).element.classList.remove('active');
                }
                if (this.windows.has(winId)) {
                    const winData = this.windows.get(winId);
                    this.zIndex++;
                    winData.element.style.zIndex = this.zIndex;
                    winData.element.classList.add('active');
                    this.activeWindowId = winId;
                    this._updateTaskbarActiveState(winId);
                    if (this.stageManager.isActive) {
                        this.stageManager.focusApp(winId);
                    }
                }
            }

            closeWindow(winId) {
                if (this.windows.has(winId)) {
                    const winData = this.windows.get(winId);
                    if (winData.currentAppInstance && winData.currentAppInstance.isDirty) {
                        if (!confirm('Você possui alterações não salvas nesta janela. Deseja fechar mesmo assim e descartar as alterações?')) {
                            return;
                        }
                    }
                    if (winData.currentAppInstance && typeof winData.currentAppInstance.cleanup === 'function') {
                         winData.currentAppInstance.cleanup();
                    }
                    if (winData.jmInstance && typeof winData.jmInstance.destroy === 'function') {
                        winData.jmInstance = null;
                    }
                    winData.element.remove();
                    this.windows.delete(winId);
                    this._removeTaskbarItem(winId);
                    if (this.activeWindowId === winId) this.activeWindowId = null;
                    if(this.stageManager.isActive) this.stageManager.updateStageThumbnails();
                }
            }

            minimizeWindow(winId) {
                if (this.windows.has(winId)) {
                    const winData = this.windows.get(winId);
                    const dock = document.getElementById('appDock');
                    const dockRect = dock.getBoundingClientRect();
                    const targetX = dockRect.left + (dockRect.width / 2);
                    const targetY = dockRect.top + (dockRect.height / 2);
                    winData.element.style.transformOrigin = `${targetX - winData.element.offsetLeft}px ${targetY - winData.element.offsetTop}px`;
                    winData.element.classList.add('minimized');
                    winData.minimized = true;
                    this._updateTaskbarItemVisual(winId, true);
                    if(this.stageManager.isActive) this.stageManager.updateStageThumbnails();
                }
            }

            maximizeWindow(winId) {
                if (this.windows.has(winId)) {
                    const winData = this.windows.get(winId);
                    const winEl = winData.element;
                    if (winData.maximized) {
                        winEl.classList.remove('maximized');
                        if (winData.originalRect) {
                            winEl.style.width = winData.originalRect.width;
                            winEl.style.height = winData.originalRect.height;
                            winEl.style.top = winData.originalRect.top;
                            winEl.style.left = winData.originalRect.left;
                        }
                        winData.maximized = false;
                    } else {
                        winData.originalRect = {
                            width: winEl.style.width, height: winEl.style.height,
                            top: winEl.style.top, left: winEl.style.left
                        };
                        winEl.classList.add('maximized');
                        winData.maximized = true;
                    }
                     if(this.stageManager.isActive) this.stageManager.updateStageThumbnails();
                }
            }
            restoreWindow(winId) {
                if (this.windows.has(winId)) {
                    const winData = this.windows.get(winId);
                    winData.element.style.transformOrigin = 'bottom center';
                    winData.element.classList.remove('minimized');
                    winData.minimized = false;
                    this.makeActive(winId);
                    this._updateTaskbarItemVisual(winId, false);
                   if(this.stageManager.isActive) this.stageManager.updateStageThumbnails();
                }
            }
            updateWindowTitle(winId, newTitle) {
                if (this.windows.has(winId)) {
                    const winData = this.windows.get(winId);
                    winData.title = newTitle;
                    winData.element.querySelector('.window-title-text').textContent = newTitle;
                    this._updateTaskbarItemTitle(winId, newTitle);
                     if(this.stageManager.isActive) this.stageManager.updateStageThumbnails();
                }
            }
            _addDragAndResize(win, titleBar, resizeHandle, winId) {
                let offsetX, offsetY, initialWidth, initialHeight, initialMouseX, initialMouseY;
                titleBar.onmousedown = (e) => {
                    if (e.target.classList.contains('window-control') || e.target.closest('.window-control')) return;
                    const winData = this.windows.get(winId);
                    if (winData.maximized || (this.stageManager.isActive && this.stageManager.focusedAppId === winId)) return;
                    this.makeActive(winId);
                    offsetX = e.clientX - win.offsetLeft;
                    offsetY = e.clientY - win.offsetTop;
                    document.body.classList.add('dragging');
                    win.classList.add('dragging');
                    document.onmousemove = (moveEvent) => {
                        win.style.left = `${moveEvent.clientX - offsetX}px`;
                        win.style.top = `${moveEvent.clientY - offsetY}px`;
                    };
                    document.onmouseup = () => {
                        document.onmousemove = document.onmouseup = null;
                        document.body.classList.remove('dragging');
                        win.classList.remove('dragging');
                    };
                };

                resizeHandle.onmousedown = (e) => {
                    e.preventDefault();
                    const winData = this.windows.get(winId);
                    if (winData.maximized || (this.stageManager.isActive && this.stageManager.focusedAppId === winId)) return;
                    this.makeActive(winId);
                    initialWidth = win.offsetWidth;
                    initialHeight = win.offsetHeight;
                    initialMouseX = e.clientX;
                    initialMouseY = e.clientY;
                    document.body.classList.add('resizing');
                    win.classList.add('resizing');

                    document.onmousemove = (moveEvent) => {
                        const newWidth = initialWidth + (moveEvent.clientX - initialMouseX);
                        const newHeight = initialHeight + (moveEvent.clientY - initialMouseY);
                        win.style.width = `${Math.max(parseInt(getComputedStyle(win).minWidth), newWidth)}px`;
                        win.style.height = `${Math.max(parseInt(getComputedStyle(win).minHeight), newHeight)}px`;
                    };
                    document.onmouseup = () => {
                        document.onmousemove = document.onmouseup = null;
                        document.body.classList.remove('resizing');
                        win.classList.remove('resizing');
                        if(this.stageManager.isActive) this.stageManager.updateStageThumbnails();
                    };
                };
            }
            _createTaskbarItem(winId, title, appType) {
                const item = document.createElement('div');
                item.className = 'taskbar-item';
                item.id = `taskbar-item-${winId}`;
                let actionKeyBase = appType ? appType.replace(/([A-Z])/g, '-$1').toLowerCase().split(' ')[0] : 'generic';
                let actionKey = `open-${actionKeyBase}`;
                if (!this.appLaunchActions[actionKey] && this.appLaunchActions[`new-${actionKeyBase}`]) {
                     actionKey = `new-${actionKeyBase}`;
                } else if (!this.appLaunchActions[actionKey]) {
                    const allActionKeys = Object.keys(this.appLaunchActions);
                    const matchingActionKey = allActionKeys.find(k => k.endsWith(actionKeyBase));
                    if (matchingActionKey) actionKey = matchingActionKey;
                    else actionKey = null;
                }
                const appIconEl = actionKey ? document.querySelector(`.dock-item[data-action="${actionKey}"]`) : null;
                const appIconText = appIconEl ? appIconEl.textContent : '⚙️';


                item.innerHTML = `<span class="taskbar-item-icon" style="font-size: 1.2em; margin-right: 5px;">${appIconText}</span> <span class="taskbar-item-title">${title}</span>`;
                item.title = title;

                item.onclick = () => {
                    const winData = this.windows.get(winId);
                    if (this.stageManager.isActive) {
                        this.stageManager.focusApp(winId);
                        if (winData.minimized) this.restoreWindow(winId);
                    } else {
                        if (winData.minimized) this.restoreWindow(winId);
                        else if (this.activeWindowId === winId) this.minimizeWindow(winId);
                        else this.makeActive(winId);
                    }
                };
                item.oncontextmenu = (e) => { e.preventDefault(); e.stopPropagation(); this._showTaskbarItemContextMenu(e, winId, item); };
                this.taskbarItemsContainer.appendChild(item);
                this._updateTaskbarActiveState(winId);
            }
            _showTaskbarItemContextMenu(event, winId, taskbarItemElement) {
                const existingMenu = document.getElementById('taskbarContext');
                if (existingMenu) existingMenu.remove();

                const menu = document.createElement('div');
                menu.id = 'taskbarContext';
                menu.className = 'taskbar-item-context-menu';

                const closeButton = document.createElement('button');
                closeButton.innerHTML = `<i class="fas fa-times" style="margin-right: 5px;"></i> Fechar Janela`;
                closeButton.onclick = (e) => { e.stopPropagation(); this.closeWindow(winId); menu.remove(); };
                menu.appendChild(closeButton);

                document.body.appendChild(menu);
                const menuRect = menu.getBoundingClientRect();
                const itemRect = taskbarItemElement.getBoundingClientRect();
                let top = itemRect.top - menuRect.height - 5;
                let left = itemRect.left + (itemRect.width / 2) - (menuRect.width / 2);

                if (top < 0) top = itemRect.bottom + 5;
                if (left < 0) left = 5;
                if (left + menuRect.width > window.innerWidth) left = window.innerWidth - menuRect.width - 5;

                menu.style.top = `${top}px`;
                menu.style.left = `${left}px`;
                menu.style.display = 'block';

                const closeMenuHandler = (clickEvent) => {
                    if (!menu.contains(clickEvent.target)) {
                        if(menu.parentNode) menu.remove();
                        document.removeEventListener('click', closeMenuHandler, true);
                    }
                };
                setTimeout(() => document.addEventListener('click', closeMenuHandler, true), 0);
            }
            _removeTaskbarItem(winId) { const item = document.getElementById(`taskbar-item-${winId}`); if (item) item.remove(); }
            _updateTaskbarItemTitle(winId, newTitle) { const item = document.getElementById(`taskbar-item-${winId}`); if (item) { const titleEl = item.querySelector('.taskbar-item-title'); if(titleEl) titleEl.textContent = newTitle; item.title = newTitle; } }
            _updateTaskbarActiveState(winIdToActivate) { this.taskbarItemsContainer.querySelectorAll('.taskbar-item').forEach(item => item.classList.remove('active')); const activeItem = document.getElementById(`taskbar-item-${winIdToActivate}`); if (activeItem) activeItem.classList.add('active'); }
            _updateTaskbarItemVisual(winId, isMinimized) { const item = document.getElementById(`taskbar-item-${winId}`); if (item) { item.style.opacity = isMinimized ? '0.7' : '1'; } }
        }

        class ThemeManager {
            constructor(palettes) {
                this.isDark = localStorage.getItem(STORAGE_KEYS.THEME_DARK_MODE) === 'true';
                this.accentColor = localStorage.getItem(STORAGE_KEYS.THEME_ACCENT_COLOR) || (this.isDark ? 'var(--accent-dark)' : 'var(--accent-light)');
                this.palettes = palettes;
                this._applyInitialTheme();
            }
            _applyInitialTheme() {
                if (this.isDark) document.body.classList.add('dark-mode');
                this._setAccentColorVariableInternal(this.accentColor);
                this.applyThemeVariables();
            }
            toggleDarkMode() {
                this.isDark = !this.isDark;
                document.body.classList.toggle('dark-mode');
                localStorage.setItem(STORAGE_KEYS.THEME_DARK_MODE, this.isDark);
                if (this.accentColor === (this.isDark ? 'var(--accent-light)' : 'var(--accent-dark)')) {
                    this.setAccentColor(this.isDark ? 'var(--accent-dark)' : 'var(--accent-light)');
                } else {
                     this.applyThemeVariables();
                }
                 this._updatePaletteSelection();
                 windowManager.windows.forEach(winData => {
                    if (winData.appType === 'mindmap' && winData.jmInstance) {
                        winData.jmInstance.set_theme(this.isDark ? 'dark' : 'primary');
                    }
                });
            }
            setAccentColor(colorNameOrValue) {
                this._setAccentColorVariableInternal(colorNameOrValue);
                this.accentColor = colorNameOrValue;
                localStorage.setItem(STORAGE_KEYS.THEME_ACCENT_COLOR, colorNameOrValue);
                this.applyThemeVariables();
                this._updatePaletteSelection();
            }
            _setAccentColorVariableInternal(colorVarOrHex) {
                const rootEl = document.documentElement;
                let actualColorValue = colorVarOrHex;
                if (colorVarOrHex.startsWith('var(--')) {
                    actualColorValue = getComputedStyle(document.documentElement).getPropertyValue(colorVarOrHex.replace('var(', '').replace(')', '')).trim();
                }
                document.documentElement.style.setProperty('--accent-color', actualColorValue);
                rootEl.style.setProperty('--accent-light', actualColorValue);
                rootEl.style.setProperty('--accent-dark', actualColorValue);
                if (actualColorValue.startsWith('#')) {
                    const r = parseInt(actualColorValue.slice(1, 3), 16);
                    const g = parseInt(actualColorValue.slice(3, 5), 16);
                    const b = parseInt(actualColorValue.slice(5, 7), 16);
                    document.documentElement.style.setProperty('--accent-light-translucent', `rgba(${r},${g},${b},0.1)`);
                    document.documentElement.style.setProperty('--accent-dark-translucent', `rgba(${r},${g},${b},0.15)`);
                } else if (actualColorValue.startsWith('rgba')) {
                     const match = actualColorValue.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
                     if(match) {
                        document.documentElement.style.setProperty('--accent-light-translucent', `rgba(${match[1]},${match[2]},${match[3]},0.1)`);
                        document.documentElement.style.setProperty('--accent-dark-translucent', `rgba(${match[1]},${match[2]},${match[3]},0.15)`);
                     }
                }
            }
            applyThemeVariables() {
                const root = document.documentElement;
                const themePrefix = this.isDark ? 'dark' : 'light';
                const propsToUpdate = ['background', 'text-color', 'secondary-text-color', 'window-bg', 'toolbar-bg', 'button-bg', 'button-text-color', 'input-bg', 'input-border-color', 'separator-color', 'hover-highlight-color', 'current-window-bg-rgb', 'current-background-rgb-for-stage'];
                propsToUpdate.forEach(prop => {
                    let varName = prop.replace('-color', '').replace('-rgb','').replace('-for-stage','');
                    let cssVarName = `--${varName}-${themePrefix}`;
                     if (prop.includes('-rgb')) cssVarName += '-rgb';
                    root.style.setProperty(`--${prop}`, `var(${cssVarName})`);
                });
                 this._updateUIColorDependents();
            }
             _updateUIColorDependents() {
                windowManager.windows.forEach(winData => {
                    if (winData.appType === 'mindmap' && winData.jmInstance) {
                        winData.jmInstance.set_theme(this.isDark ? 'dark' : 'primary');
                         const bgColorPicker = winData.element.querySelector('input[id^="bgColorPicker_"]');
                         const fgColorPicker = winData.element.querySelector('input[id^="fgColorPicker_"]');
                         if(bgColorPicker) bgColorPicker.value = this.isDark ? '#555555' : '#FFFFFF';
                         if(fgColorPicker) fgColorPicker.value = this.isDark ? '#FFFFFF' : '#000000';
                    }
                });
            }
            _setupAccentPalette() {
                const paletteContainer = document.getElementById('accentColorPaletteMenu');
                const darkModeToggle = document.getElementById('darkModeToggleMenu');
                if (!paletteContainer || !darkModeToggle) return;
                paletteContainer.innerHTML = '';
                const currentPalette = this.isDark ? this.palettes.dark : this.palettes.light;
                currentPalette.forEach(item => {
                    const colorOption = document.createElement('div');
                    colorOption.className = 'color-option';
                    colorOption.style.backgroundColor = item.color.startsWith('var(') ?
                        getComputedStyle(document.documentElement).getPropertyValue(item.color.replace('var(','').replace(')','')).trim() :
                        item.color;
                    colorOption.title = item.name;
                    colorOption.dataset.colorValue = item.color;
                    colorOption.onclick = (e) => { e.stopPropagation(); this.setAccentColor(item.color); };
                    paletteContainer.appendChild(colorOption);
                });
                darkModeToggle.checked = this.isDark;
                const newDarkModeToggle = darkModeToggle.cloneNode(true);
                darkModeToggle.parentNode.replaceChild(newDarkModeToggle, darkModeToggle);
                newDarkModeToggle.onchange = (e) => { e.stopPropagation(); this.toggleDarkMode(); this._setupAccentPalette(); };
                 this._updatePaletteSelection();
             }
             _updatePaletteSelection() {
                const paletteContainer = document.getElementById('accentColorPaletteMenu');
                if (!paletteContainer) return;
                paletteContainer.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                const selectedOption = paletteContainer.querySelector(`.color-option[data-color-value="${this.accentColor}"]`);
                if (selectedOption) selectedOption.classList.add('selected');
             }
        }

        class StageManager {
            constructor(windowMgr) { this.windowManager = windowMgr; this.isActive = false; this.overlay = document.getElementById('stageManagerOverlay'); this.sidebar = document.getElementById('stageManagerSidebar'); this.mainArea = document.getElementById('stageManagerMainArea'); this.toggleButton = document.getElementById('stageManagerToggle'); this.focusedAppId = null; this.originalWindowStates = new Map(); if(this.toggleButton) this.toggleButton.onclick = () => this.toggle(); }
            toggle() { this.isActive = !this.isActive; this.overlay.classList.toggle('active', this.isActive); if(this.toggleButton) this.toggleButton.classList.toggle('active', this.isActive); if (this.isActive) { this.windowManager.windows.forEach((winData, winId) => { if (!winData.minimized && winData.element.style.display !== 'none') { this.originalWindowStates.set(winId, { left: winData.element.style.left, top: winData.element.style.top, width: winData.element.style.width, height: winData.element.style.height, zIndex: winData.element.style.zIndex, transform: winData.element.style.transform || '' }); } }); const activeOrFirstVisible = this.windowManager.activeWindowId || Array.from(this.windowManager.windows.keys()).find(id => !this.windowManager.windows.get(id).minimized && this.windowManager.windows.get(id).element.style.display !== 'none' ); if (activeOrFirstVisible) { this.focusApp(activeOrFirstVisible); } else { this.updateStageThumbnails(); } } else { this.restoreWindows(); this.originalWindowStates.clear(); } }
            async updateStageThumbnails() { if (!this.sidebar) return; this.sidebar.innerHTML = ''; const openWindows = []; this.windowManager.windows.forEach(winData => { if (!winData.minimized && winData.element.style.display !== 'none') { openWindows.push(winData); } }); for (const winData of openWindows) { if (winData.element.id === this.focusedAppId && this.isActive) continue; const thumb = document.createElement('div'); thumb.className = 'stage-app-thumbnail'; thumb.dataset.winId = winData.element.id; const titleSpan = document.createElement('span'); titleSpan.className = 'thumbnail-title'; titleSpan.textContent = winData.title.substring(0, 15) + (winData.title.length > 15 ? '...' : ''); try { const screenshotSrc = await winData.getScreenshot(); if (screenshotSrc.startsWith('data:image/svg+xml')) { const tempDiv = document.createElement('div'); tempDiv.innerHTML = screenshotSrc; const svgEl = tempDiv.firstChild; if(svgEl.querySelector('text:last-child')) svgEl.querySelector('text:last-child').textContent = titleSpan.textContent; thumb.appendChild(svgEl); } else { const img = document.createElement('img'); img.src = screenshotSrc; img.alt = winData.title; thumb.appendChild(img); thumb.appendChild(titleSpan); } } catch (e) { const appIconActionKey = `open-${winData.appType.replace(/([A-Z])/g, '-$1').toLowerCase().split(' ')[0]}`; const appIconEl = document.querySelector(`.dock-item[data-action="${appIconActionKey}"]`); const appIconText = appIconEl ? appIconEl.textContent : '⚙️'; thumb.innerHTML = `<div class="placeholder-icon">${appIconText}</div>`; thumb.appendChild(titleSpan); } thumb.onclick = () => { if (this.isActive) this.focusApp(winData.element.id); else this.windowManager.makeActive(winData.element.id); }; this.sidebar.appendChild(thumb); } }
            focusApp(winId) { this.focusedAppId = winId; this.windowManager.windows.forEach((winData, id) => { const winEl = winData.element; if (id === winId) { winEl.style.display = 'flex'; const mainAreaRect = this.mainArea.getBoundingClientRect(); const sidebarWidth = this.sidebar.offsetWidth + 20; const availableWidth = mainAreaRect.width - (this.isActive ? sidebarWidth : 0); let targetWidth = Math.min(parseFloat(this.originalWindowStates.get(id)?.width || winEl.offsetWidth), availableWidth * 0.75); let targetHeight = (targetWidth / parseFloat(this.originalWindowStates.get(id)?.width || winEl.offsetWidth)) * parseFloat(this.originalWindowStates.get(id)?.height || winEl.offsetHeight); if (targetHeight > mainAreaRect.height * 0.85) { targetHeight = mainAreaRect.height * 0.85; targetWidth = (targetHeight / parseFloat(this.originalWindowStates.get(id)?.height || winEl.offsetHeight)) * parseFloat(this.originalWindowStates.get(id)?.width || winEl.offsetWidth); } winEl.style.width = `${targetWidth}px`; winEl.style.height = `${targetHeight}px`; winEl.style.left = `${(this.isActive ? sidebarWidth : 0) + (availableWidth - targetWidth) / 2}px`; winEl.style.top = `${(mainAreaRect.height - targetHeight) / 2}px`; winEl.style.transform = 'scale(1)'; } else { winEl.style.display = 'none'; } }); this.updateStageThumbnails(); }
            restoreWindows() { this.windowManager.windows.forEach((winData, winId) => { const originalState = this.originalWindowStates.get(winId); if (originalState) { winData.element.style.left = originalState.left; winData.element.style.top = originalState.top; winData.element.style.width = originalState.width; winData.element.style.height = originalState.height; winData.element.style.zIndex = originalState.zIndex; winData.element.style.transform = originalState.transform; } if (!winData.minimized) winData.element.style.display = 'flex'; }); this.focusedAppId = null; if(this.windowManager.activeWindowId) this.windowManager.makeActive(this.windowManager.activeWindowId); this.updateStageThumbnails(); }
        }
        
        // --- Instâncias Globais ---
        let windowManager, themeManager;

        const accentPalettes = { light: [{ name: "Azul Padrão", color: "var(--accent-light)" }, { name: "Rosa", color: "#FF2D55" }, { name: "Verde", color: "#34C759" }, { name: "Laranja", color: "#FF9500" }, { name: "Roxo", color: "#AF52DE" }, { name: "Amarelo", color: "#FFCC00" }, { name: "Grafite", color: "#8E8E93"}, { name: "Ciano", color: "#5AC8FA"}], dark: [{ name: "Azul Padrão", color: "var(--accent-dark)" }, { name: "Rosa", color: "#FF375F" }, { name: "Verde", color: "#30D158" }, { name: "Laranja", color: "#FF9F0A" }, { name: "Roxo", color: "#BF5AF2" }, { name: "Amarelo", color: "#FFD60A" }, { name: "Grafite", color: "#98989D"}, { name: "Ciano", color: "#64D2FF"} ] };
        
        /**
         * [MODIFICADO] Retorna a função de abertura de app com base no metadado `appDataType`
         */
        function getAppOpenerForFile(file) {
            const appFileMap = {
                'swot-analysis': openSWOTAnalysis,
                'okr-tracker': openOKRTracker,
                'gantt-chart': openGanttChart,
                'project-tasks': openProjectTasks,
                'ishikawa-diagram': openIshikawaDiagram,
                'bpmn-modeler': openBPMNModeler,
                'mindmap': openMindMap,
                'contract-manager': openContractManager,
                'checklist': openChecklistTool,
                'ncr': openNCRTool,
                'pdca': openPDCATool,
                '5w2h': open5W2HTool,
                'kanban-board': openKanbanBoard,
                'sipoc-matrix': openSIPOCMatrix
            };
            return appFileMap[file.appDataType] || null;
        }

        // --- Funções de Abertura de Aplicativos (Adaptadas) ---
        
        function getStandardAppToolbarHTML() {
            return `
                <button data-action="save" class="app-button" title="Salvar (Ctrl+S)"><i class="fas fa-save"></i> Salvar na Nuvem</button>
                <button data-action="save-as" class="app-button secondary" title="Salvar Como..."><i class="fas fa-file-export"></i> Salvar Como...</button>
                <!-- O botão de abrir agora é uma ação, não um input de arquivo -->
                <button data-action="open-cloud" class="app-button secondary" title="Abrir da Nuvem..."><i class="fas fa-cloud-download-alt"></i> Abrir da Nuvem</button>
                <button data-action="export-pdf" class="app-button secondary" title="Exportar como PDF"><i class="fas fa-file-pdf"></i> Exportar PDF</button>
            `;
        }

        function initializeFileState(appState, defaultTitle, defaultFileName, appDataType) {
            appState.isDirty = false;
            appState.fileId = null; // ID do documento no Firestore
            appState.defaultFileName = defaultFileName;
            appState.appDataType = appDataType;

            appState.markDirty = function() {
                if (!this.isDirty) {
                    this.isDirty = true;
                    const currentWin = windowManager.windows.get(this.winId);
                    if (currentWin && !currentWin.title.startsWith('*')) {
                        windowManager.updateWindowTitle(this.winId, '*' + currentWin.title);
                    }
                }
            };
            
            appState.markClean = function() {
                this.isDirty = false;
                const currentWin = windowManager.windows.get(this.winId);
                if (currentWin && currentWin.title.startsWith('*')) {
                     windowManager.updateWindowTitle(this.winId, currentWin.title.substring(1));
                }
            };

            windowManager.updateWindowTitle(appState.winId, defaultTitle);
        }

        /**
         * [MODIFICADO] Abre o explorador de arquivos, lendo do Firestore.
         */
        async function openFileSystem() {
            const uniqueSuffix = generateId('fs');
            const content = `
                <div class="file-explorer" style="flex-direction: column;">
                    <div style="padding: 10px; border-bottom: 1px solid var(--separator-color); display:flex; align-items:center; gap:10px;">
                        <h3 style="margin:0; flex-grow:1;">Meus Arquivos (Nuvem)</h3>
                        <button id="refreshFsBtn_${uniqueSuffix}" class="app-button secondary" title="Atualizar Lista"><i class="fas fa-sync-alt"></i></button>
                    </div>
                    <div class="file-content" id="fileListContainer_${uniqueSuffix}" style="flex-grow:1;">
                        <p>Carregando arquivos...</p>
                    </div>
                </div>`;
            const winId = windowManager.createWindow('Explorador de Arquivos', content, {
                width: '800px',
                height: '550px',
                appType: 'filesystem'
            });

            const winData = windowManager.windows.get(winId);
            if (!winData) return;
            const fileListContainer = winData.element.querySelector(`#fileListContainer_${uniqueSuffix}`);
            
            async function renderFileList() {
                if (!firestoreManager) {
                    fileListContainer.innerHTML = '<p style="color:red;">Não conectado à nuvem.</p>';
                    return;
                }
                fileListContainer.innerHTML = '<p>Carregando arquivos...</p>';
                try {
                    const files = await firestoreManager.listFiles();
                    fileListContainer.innerHTML = '';
                    if (files.length === 0) {
                        fileListContainer.innerHTML = '<p style="text-align:center; padding: 20px; color: var(--secondary-text-color);">Nenhum arquivo encontrado na nuvem.</p>';
                        return;
                    }
                    
                    const table = document.createElement('table');
                    table.className = 'app-table';
                    table.innerHTML = `<thead><tr><th>Nome do Arquivo</th><th>Tipo</th><th>Modificado em</th><th>Ações</th></tr></thead><tbody></tbody>`;
                    const tbody = table.querySelector('tbody');
                    
                    files.forEach(file => {
                        const appType = file.appDataType || 'Desconhecido';
                        const appIcons = { 'swot-analysis': '📝', 'okr-tracker': '🎯', 'gantt-chart': '📊', 'project-tasks': '✅', 'ishikawa-diagram': '🐠', 'bpmn-modeler': '🔄', 'mindmap': '🧠', 'contract-manager': '📜', 'checklist': '☑️', 'ncr': '⚠️', 'pdca': '🔁', '5w2h': '❓', 'kanban-board': '📋', 'sipoc-matrix': '🧩' };
                        const appIcon = appIcons[appType] || '📄';

                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td><span class="item-icon">${appIcon}</span> ${file.name}</td>
                            <td>${appType}</td>
                            <td>${new Date(file.modifiedTime).toLocaleString('pt-BR')}</td>
                            <td>
                                <button class="app-button action-button" data-action="open" data-file-id="${file.id}" data-file-name="${file.name}" title="Abrir"><i class="fas fa-folder-open"></i></button>
                                <button class="app-button secondary action-button" data-action="rename" data-file-id="${file.id}" data-file-name="${file.name}" title="Renomear"><i class="fas fa-edit"></i></button>
                                <button class="app-button danger action-button" data-action="delete" data-file-id="${file.id}" data-file-name="${file.name}" title="Excluir"><i class="fas fa-trash"></i></button>
                            </td>
                        `;
                        tbody.appendChild(tr);
                    });

                    fileListContainer.appendChild(table);

                } catch (e) {
                    fileListContainer.innerHTML = `<p style="color:red;">Erro ao carregar arquivos: ${e.message}</p>`;
                }
            }

            fileListContainer.addEventListener('click', async (e) => {
                const button = e.target.closest('button[data-action]');
                if (!button) return;
                
                const fileId = button.dataset.fileId;
                const fileName = button.dataset.fileName;
                const action = button.dataset.action;

                if (action === 'open') {
                    showNotification(`Abrindo "${fileName}"...`, 2000);
                    try {
                        const fileContentString = await firestoreManager.readFile(fileId);
                        const filesList = await firestoreManager.listFiles();
                        const fileMeta = filesList.find(f => f.id === fileId);

                        const appOpener = getAppOpenerForFile(fileMeta);
                        if (!appOpener) {
                             showNotification(`Não há aplicativo para abrir "${fileMeta.name}".`, 3000);
                             return;
                        }
                        
                        const newWinId = appOpener();
                        const newWinData = windowManager.windows.get(newWinId);
                        // A função loadData do app espera a string JSON e o objeto de metadados
                        newWinData.currentAppInstance.loadData(fileContentString, {id: fileId, name: fileName, ...fileMeta});

                    } catch(err) {
                        console.error("Error opening file: ", err);
                        showNotification(`Falha ao abrir o arquivo.`, 4000);
                    }

                } else if (action === 'rename') {
                    const newName = prompt(`Novo nome para "${fileName}":`, fileName);
                    if(newName && newName.trim() !== '') {
                        await firestoreManager.renameFile(fileId, newName);
                        showNotification("Arquivo renomeado.", 2000);
                        renderFileList();
                    }
                } else if (action === 'delete') {
                    if (confirm(`Tem certeza que deseja excluir "${fileName}" da nuvem?`)) {
                        await firestoreManager.deleteFile(fileId);
                        showNotification("Arquivo excluído.", 2000);
                        renderFileList();
                    }
                }
            });

            winData.element.querySelector(`#refreshFsBtn_${uniqueSuffix}`).onclick = renderFileList;
            renderFileList();
        }

        /**
         * [MODIFICADO] Abre o explorador de arquivos para que o usuário escolha um arquivo para abrir em um app.
         */
        async function openFileForApp() {
            // Reutiliza a janela do explorador se já estiver aberta
            let fsWin = Array.from(windowManager.windows.values()).find(w => w.appType === 'filesystem');
            if (fsWin) {
                windowManager.makeActive(fsWin.element.id);
                return;
            }
            // Se não, abre uma nova
            openFileSystem();
        }
        
        // O restante das funções de abrir aplicativos (`openMindMap`, etc.) permanecem as mesmas,
        // pois a lógica de salvamento foi abstraída em `handleSaveAction`.
        // A única mudança é na toolbar, para chamar `openFileForApp` em vez de um input.

        function setupAppToolbarActions(appState) {
             const toolbar = windowManager.windows.get(appState.winId).element.querySelector('.app-toolbar');
             if(!toolbar) return;
             
             toolbar.addEventListener('click', async (e) => {
                const button = e.target.closest('button[data-action]');
                if(!button) return;
                const action = button.dataset.action;
                
                if (action === 'save') await handleSaveAction(appState);
                else if (action === 'save-as') await handleSaveAsAction(appState);
                else if (action === 'open-cloud') await openFileForApp(); // Ação modificada
                else if (action === 'export-pdf') handleExportToPDF(appState.winId);
             });
        }
    
    // --- Funções Completas de Abertura de Aplicativos ---
    
    function openMindMap() {
        const uniqueSuffix = generateId('mm');
        const winId = windowManager.createWindow('Novo Mapa Mental', '', {
            width: '950px',
            height: '650px',
            appType: 'mindmap'
        });
        const content = `
            <div class="mindmap-toolbar app-toolbar" id="mmToolbar_${uniqueSuffix}">
                ${getStandardAppToolbarHTML()}
                <span class="toolbar-separator" style="width:1px; background-color: var(--separator-color); margin:0 4px;"></span>
                 <button class="app-button secondary" data-action="export-png" title="Exportar PNG"><i class="fas fa-image"></i> PNG</button>
                <button class="app-button" data-action="add-node" title="Adicionar Nó Filho"><i class="fas fa-plus-circle"></i> Nó</button>
                <button class="app-button" data-action="remove-node" title="Remover Nó"><i class="fas fa-minus-circle"></i> Remover</button>
                <span class="toolbar-separator" style="width:1px; background-color: var(--separator-color); margin:0 4px;"></span>
                <label for="bgColorPicker_${uniqueSuffix}">Fundo:</label>
                <input type="color" id="bgColorPicker_${uniqueSuffix}" value="${themeManager.isDark ? '#555555' : '#FFFFFF'}">
                <label for="fgColorPicker_${uniqueSuffix}">Texto:</label>
                <input type="color" id="fgColorPicker_${uniqueSuffix}" value="${themeManager.isDark ? '#FFFFFF' : '#000000'}">
            </div>
            <div class="mindmap-container" id="jsmindContainer_${uniqueSuffix}"></div>`;
        const winData = windowManager.windows.get(winId);
        if (!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;
        winData.element.querySelector('.window-content').style.padding = '0';

        const appState = {
            winId,
            appDataType: 'mindmap',
            getData: function() { return winData.jmInstance ? winData.jmInstance.get_data('node_tree') : {}; },
            loadData: function(dataString, fileMeta) {
                try {
                    const data = JSON.parse(dataString);
                    if (data.format === "node_tree" && data.data) {
                        winData.jmInstance.show(data);
                        this.fileId = fileMeta.id;
                        this.markClean();
                        windowManager.updateWindowTitle(this.winId, fileMeta.name);
                    } else {
                        showNotification("Formato de arquivo inválido.", 3000);
                    }
                } catch (e) {
                     showNotification("Erro: Arquivo de mapa mental inválido.", 3000);
                }
            },
            jsmindContainerId: `jsmindContainer_${uniqueSuffix}`,
            cleanup: () => { winData.jmInstance = null; }
        };
        
        initializeFileState(appState, "Novo Mapa Mental", "novo_mapa.wosmm", "mindmap");
        winData.currentAppInstance = appState;
        setupAppToolbarActions(appState);
        
        setTimeout(() => {
            if (typeof jsMind !== 'undefined') {
                try {
                    const mindData = { meta: { name: "WebOS_MindMap", author: "User", version: "1.0" }, format: "node_tree", data: { id: "root", topic: "Tema Central", children: [] } };
                    const options = { container: appState.jsmindContainerId, editable: true, theme: themeManager.isDark ? 'dark' : 'primary' };
                    winData.jmInstance = new jsMind(options);
                    winData.jmInstance.show(mindData);
                    
                    const toolbar = winData.element.querySelector(`#mmToolbar_${uniqueSuffix}`);
                    toolbar.addEventListener('click', (e) => {
                         const button = e.target.closest('button[data-action]');
                         if(!button) return;
                         const action = button.dataset.action;
                         const jm = winData.jmInstance;
                         
                         if (action === 'export-png') exportMindMapPNG(jm, appState.jsmindContainerId);
                         else if(action === 'add-node') addMindMapNodeInteractive(jm, appState);
                         else if(action === 'remove-node') removeMindMapNodeInteractive(jm, appState);
                    });
                    
                    toolbar.querySelector(`#bgColorPicker_${uniqueSuffix}`).oninput = (e) => setMindMapNodeColor(winData.jmInstance, e.target.value, null, appState);
                    toolbar.querySelector(`#fgColorPicker_${uniqueSuffix}`).oninput = (e) => setMindMapNodeColor(winData.jmInstance, null, e.target.value, appState);
                    winData.element.querySelector('.jsmind_editor').addEventListener('input', () => appState.markDirty());
                } catch (e) { console.error("Erro ao inicializar Mapa Mental:", e); }
            }
        }, 150);
        return winId;
    }
    function exportMindMapPNG(jmInstance, containerId) {
         const mind = jmInstance.mind;
         const filename = (mind.data.topic || mind.meta.name || 'mapa_mental') + '.png';
         html2canvas(document.getElementById(containerId)).then(canvas => {
            const link = document.createElement('a');
            link.download = filename;
            link.href = canvas.toDataURL("image/png");
            link.click();
         });
    }
    function addMindMapNodeInteractive(jm, appState) { const n = jm.get_selected_node(); if(!n) return; const t=prompt("Nome:"); if(t) {jm.add_node(n.id, jsMind.util.uuid.newid(),t); appState.markDirty();}}
    function removeMindMapNodeInteractive(jm, appState) {const n=jm.get_selected_node(); if(n && !n.isroot && confirm("Remover?")){jm.remove_node(n.id);appState.markDirty();}}
    function setMindMapNodeColor(jm, bg, fg, appState){const n=jm.get_selected_node(); if(n){jm.set_node_color(n.id,bg,fg); appState.markDirty();}}
        
    function openGanttChart() {
        const uniqueSuffix = generateId('gantt');
        const winId = windowManager.createWindow('Cronograma Gantt', '', { width: '1150px', height: '650px', appType: 'gantt-chart' });
        const content = `
            <div class="app-toolbar gantt-controls">
                 ${getStandardAppToolbarHTML()}
                 <button id="addGanttTaskBtn_${uniqueSuffix}" class="app-button" style="margin-left: auto;"><i class="fas fa-plus"></i> Nova Tarefa</button>
                <span style="margin-left:15px; font-size:0.9em;">Escala:</span>
                <select id="ganttTimeScale_${uniqueSuffix}" class="app-select" style="width:100px;"> <option value="days">Dias</option> <option value="weeks">Semanas</option> <option value="months">Meses</option> </select>
                <span style="margin-left:10px; font-size:0.9em;">Zoom: </span>
                <input type="range" id="ganttZoom_${uniqueSuffix}" min="20" max="150" value="30" style="width:100px;">
            </div>
            <div class="gantt-main-area">
                <div class="gantt-table-wrapper" id="ganttTableWrapper_${uniqueSuffix}">
                    <div class="gantt-table-header"> <span>ID</span><span>Nome</span><span>Início</span><span>Fim</span><span>Dura.</span><span>%</span><span>Recursos</span><span>Deps.</span><span>Ações</span> </div>
                    <div id="ganttTableBody_${uniqueSuffix}" style="flex-grow:1; overflow-y:auto;"></div>
                </div>
                <div class="gantt-chart-area-wrapper" id="ganttChartAreaWrapper_${uniqueSuffix}">
                    <div class="gantt-timeline-header" id="ganttTimelineHeader_${uniqueSuffix}"></div>
                    <div id="ganttChartBars_${uniqueSuffix}" style="position:relative;"></div>
                </div>
            </div>`;
        const winData = windowManager.windows.get(winId); if(!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;

        const appState = {
            winId, tasks: [], appDataType: 'gantt-chart',
            tableBody: winData.element.querySelector(`#ganttTableBody_${uniqueSuffix}`), chartBarsContainer: winData.element.querySelector(`#ganttChartBars_${uniqueSuffix}`), timelineHeader: winData.element.querySelector(`#ganttTimelineHeader_${uniqueSuffix}`), addTaskBtn: winData.element.querySelector(`#addGanttTaskBtn_${uniqueSuffix}`), zoomSlider: winData.element.querySelector(`#ganttZoom_${uniqueSuffix}`), timeScaleSelect: winData.element.querySelector(`#ganttTimeScale_${uniqueSuffix}`),
            getData: function() { return this.tasks; },
            loadData: function(dataString, fileMeta) { 
                try { 
                    const data = JSON.parse(dataString);
                    this.tasks = Array.isArray(data) ? data : []; 
                    this.fileId = fileMeta.id; 
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                    this.renderAll(); 
                } catch (e) { 
                    showNotification("Erro ao ler arquivo Gantt.", 3000); 
                } 
            },
            init: function() { setupAppToolbarActions(this); this.addTaskBtn.onclick = () => this.addTask(); this.zoomSlider.oninput = () => this.renderChart(); this.timeScaleSelect.onchange = () => this.renderChart(); this.tableBody.addEventListener('input', (e) => this.handleTableInput(e)); this.tableBody.addEventListener('click', (e) => this.handleTableAction(e)); this.renderAll(); },
            renderAll: function() { this.renderTable(); this.renderChart(); },
            renderTable: function() { this.tableBody.innerHTML = ''; this.tasks.forEach((task) => { const row = document.createElement('div'); row.className = 'gantt-task-table-row'; row.dataset.taskId = task.id; row.innerHTML = `<span>${task.id.slice(-4)}</span> <input type="text" class="app-input" value="${task.name}" data-field="name" title="${task.name}"> <input type="date" class="app-input" value="${task.start || ''}" data-field="start"> <input type="date" class="app-input" value="${task.end || ''}" data-field="end"> <input type="number" class="app-input" value="${task.duration || ''}" data-field="duration" min="0" title="Duração (dias)"> <input type="number" class="app-input" value="${task.progress || 0}" data-field="progress" min="0" max="100" title="% Concluída"> <input type="text" class="app-input" value="${task.resources || ''}" data-field="resources" placeholder="Ex: Rec1, Rec2"> <input type="text" class="app-input" value="${task.dependencies || ''}" data-field="dependencies" placeholder="IDs: ${task.id.slice(-4)}"> <div><button class="app-button danger action-button" data-action="delete" title="Excluir"><i class="fas fa-trash"></i></button></div>`; this.tableBody.appendChild(row); }); },
            renderChart: function() { this.chartBarsContainer.innerHTML = ''; this.timelineHeader.innerHTML = ''; if (this.tasks.length === 0) return; let minDateOverall = null, maxDateOverall = null; this.tasks.forEach(task => { if (task.start) { const startDate = new Date(task.start + "T00:00:00Z"); if (!minDateOverall || startDate < minDateOverall) minDateOverall = startDate; } if (task.end) { const endDate = new Date(task.end + "T00:00:00Z"); if (!maxDateOverall || endDate > maxDateOverall) maxDateOverall = endDate; } }); if (!minDateOverall || !maxDateOverall || minDateOverall > maxDateOverall) { this.chartBarsContainer.innerHTML = '<p style="padding:10px; color:var(--secondary-text-color)">Datas inválidas.</p>'; return; } const timeScale = this.timeScaleSelect.value; const unitVisualWidth = parseInt(this.zoomSlider.value) || 30; const paddedMinDate = new Date(minDateOverall); paddedMinDate.setUTCDate(paddedMinDate.getUTCDate() - (timeScale === 'months' ? 30 : (timeScale === 'weeks' ? 14 : 7))); const paddedMaxDate = new Date(maxDateOverall); paddedMaxDate.setUTCDate(paddedMaxDate.getUTCDate() + (timeScale === 'months' ? 60 : (timeScale === 'weeks' ? 28 : 14))); let currentTimelineDate = new Date(paddedMinDate); let timelineHTML = ''; let totalVisualUnits = 0; const getDaysBetween = (d1, d2) => Math.ceil(Math.abs(d1 - d2) / (864e5)); if (timeScale === "days") { while(currentTimelineDate <= paddedMaxDate) { timelineHTML += `<span style="display:inline-block; width:${unitVisualWidth}px; text-align:center; border-right:1px solid var(--separator-color); font-size:0.8em;">${currentTimelineDate.getUTCDate()}/${currentTimelineDate.getUTCMonth()+1}</span>`; currentTimelineDate.setUTCDate(currentTimelineDate.getUTCDate() + 1); totalVisualUnits++; } } else if (timeScale === "weeks") { currentTimelineDate = new Date(paddedMinDate); currentTimelineDate.setUTCDate(currentTimelineDate.getUTCDate() - currentTimelineDate.getUTCDay()); while(currentTimelineDate <= paddedMaxDate) { const weekEnd = new Date(currentTimelineDate); weekEnd.setUTCDate(currentTimelineDate.getUTCDate() + 6); timelineHTML += `<span style="display:inline-block; width:${unitVisualWidth}px; text-align:center; border-right:1px solid var(--separator-color); font-size:0.8em;" title="Semana de ${currentTimelineDate.toLocaleDateString()} a ${weekEnd.toLocaleDateString()}">S${currentTimelineDate.getUTCDate()}/${currentTimelineDate.getUTCMonth()+1}</span>`; currentTimelineDate.setUTCDate(currentTimelineDate.getUTCDate() + 7); totalVisualUnits++; } } else if (timeScale === "months") { currentTimelineDate = new Date(paddedMinDate); currentTimelineDate.setUTCDate(1); while(currentTimelineDate <= paddedMaxDate) { const monthName = currentTimelineDate.toLocaleString('pt-BR', { month: 'short', year: '2-digit' }); timelineHTML += `<span style="display:inline-block; width:${unitVisualWidth}px; text-align:center; border-right:1px solid var(--separator-color); font-size:0.8em;">${monthName}</span>`; currentTimelineDate.setUTCMonth(currentTimelineDate.getUTCMonth() + 1); totalVisualUnits++; } } this.timelineHeader.innerHTML = timelineHTML; this.chartBarsContainer.style.width = `${totalVisualUnits * unitVisualWidth}px`; this.tasks.forEach((task, index) => { const tableRowEl = this.tableBody.querySelector(`.gantt-task-table-row[data-task-id="${task.id}"]`); const rowHeight = tableRowEl ? tableRowEl.offsetHeight : 30; if (!task.start || !task.end) return; const startDate = new Date(task.start + "T00:00:00Z"); const endDate = new Date(task.end + "T00:00:00Z"); if (startDate > endDate) return; let barOffsetUnits, barDurationUnits; let effectivePaddedMinDate = new Date(paddedMinDate); if (timeScale === "days") { barOffsetUnits = getDaysBetween(effectivePaddedMinDate, startDate); barDurationUnits = getDaysBetween(startDate, endDate) + 1; } else if (timeScale === "weeks") { effectivePaddedMinDate.setUTCDate(effectivePaddedMinDate.getUTCDate() - effectivePaddedMinDate.getUTCDay()); barOffsetUnits = Math.floor(getDaysBetween(effectivePaddedMinDate, startDate) / 7); barDurationUnits = Math.ceil((getDaysBetween(startDate, endDate) + 1) / 7); } else if (timeScale === "months") { effectivePaddedMinDate.setUTCDate(1); const startMonthSeq = startDate.getUTCFullYear() * 12 + startDate.getUTCMonth(); const endMonthSeq = endDate.getUTCFullYear() * 12 + endDate.getUTCMonth(); const minMonthSeq = effectivePaddedMinDate.getUTCFullYear() * 12 + effectivePaddedMinDate.getUTCMonth(); barOffsetUnits = startMonthSeq - minMonthSeq; barDurationUnits = (endMonthSeq - startMonthSeq) + 1; } barDurationUnits = Math.max(barDurationUnits, 0.1); const barRow = document.createElement('div'); barRow.className = 'gantt-bar-row'; barRow.style.height = `${rowHeight}px`; barRow.style.lineHeight = `${rowHeight}px`; const bar = document.createElement('div'); bar.className = 'gantt-bar'; bar.style.backgroundColor = task.color || 'var(--accent-color)'; const progress = task.progress || 0; if (progress >= 100) bar.classList.add('gantt-bar-complete'); bar.style.left = `${barOffsetUnits * unitVisualWidth}px`; bar.style.width = `${barDurationUnits * unitVisualWidth - 2}px`; bar.style.top = `calc((${rowHeight}px - 20px) / 2)`; bar.title = `${task.name} (${progress}%) - ${new Date(task.start + "T00:00:00Z").toLocaleDateString()} a ${new Date(task.end + "T00:00:00Z").toLocaleDateString()}`; bar.textContent = `${task.name} (${progress}%)`; const progressBarEl = document.createElement('div'); progressBarEl.className = 'progress'; progressBarEl.style.width = `${progress}%`; bar.appendChild(progressBarEl); barRow.appendChild(bar); this.chartBarsContainer.appendChild(barRow); }); },
            calculateDuration: function(start, end) { if (!start || !end) return null; const startDate = new Date(start + "T00:00:00Z"); const endDate = new Date(end + "T00:00:00Z"); if (endDate < startDate) return null; return Math.ceil(Math.abs(endDate - startDate) / (864e5)) + 1; },
            calculateEndDate: function(start, duration) { if (!start || !duration || duration <= 0) return null; const startDate = new Date(start + "T00:00:00Z"); startDate.setUTCDate(startDate.getUTCDate() + parseInt(duration) -1); return startDate.toISOString().split('T')[0]; },
            handleTableInput: function(e) { const rowEl = e.target.closest('.gantt-task-table-row'); if (!rowEl) return; const taskId = rowEl.dataset.taskId; const task = this.tasks.find(t => t.id === taskId); if (!task) return; const field = e.target.dataset.field; task[field] = e.target.value; if (field === 'start' || field === 'end') { if(task.start && task.end) { task.duration = this.calculateDuration(task.start, task.end); rowEl.querySelector('input[data-field="duration"]').value = task.duration || ''; } } else if (field === 'duration') { if(task.start && task.duration > 0) { task.end = this.calculateEndDate(task.start, task.duration); rowEl.querySelector('input[data-field="end"]').value = task.end || ''; } } this.markDirty(); this.renderChart(); },
            handleTableAction: function(e) { const button = e.target.closest('button[data-action="delete"]'); if (button) { const taskId = button.closest('.gantt-task-table-row').dataset.taskId; this.tasks = this.tasks.filter(t => t.id !== taskId); this.markDirty(); this.renderAll(); } },
            addTask: function() { const defaultColors = ['#007AFF', '#34C759', '#FF9500', '#AF52DE', '#FF2D55', '#5AC8FA', '#FFCC00', '#8E8E93']; const color = defaultColors[this.tasks.length % defaultColors.length]; this.tasks.push({id: generateId('gtsk'), name: 'Nova Tarefa', start: '', end: '', duration: 1, progress: 0, resources: '', dependencies: '', color: color}); this.markDirty(); this.renderAll(); },
            cleanup: () => {}
        };
        
        initializeFileState(appState, "Novo Cronograma", "cronograma.gantt", "gantt-chart");
        winData.currentAppInstance = appState;
        appState.init();
        return winId;
    }

    function openProjectTasks() {
        const uniqueSuffix = generateId('ptasks');
        const winId = windowManager.createWindow('Tarefas de Projeto', '', { width: '1000px', height: '700px', appType: 'project-tasks' });
        const content = `
            <div class="app-toolbar">
                ${getStandardAppToolbarHTML()}
                <button id="trainAiBtn_${uniqueSuffix}" class="app-button" style="margin-left:auto;" title="Treinar IA MapNeural com o feedback fornecido"><i class="fas fa-brain"></i> Treinar IA</button>
            </div>
            <div class="project-tasks-input-area">
                <input type="text" id="taskInput_${uniqueSuffix}" class="app-input" placeholder="Nova tarefa de projeto..." style="flex-grow:2;">
                <input type="text" id="taskResponsibleInput_${uniqueSuffix}" class="app-input" placeholder="Responsável" style="flex-grow:1;">
                <input type="date" id="taskDueDateInput_${uniqueSuffix}" class="app-input" title="Data de Conclusão" style="flex-grow:1;">
                <select id="taskPriorityInput_${uniqueSuffix}" class="app-select" style="flex-grow:1;">
                    <option value="baixa">Baixa Prioridade</option> <option value="media" selected>Média Prioridade</option> <option value="alta">Alta Prioridade</option>
                </select>
                <button id="addTaskBtn_${uniqueSuffix}" class="app-button"><i class="fas fa-plus" style="margin-right:5px;"></i> Adicionar</button>
            </div>
            <div class="project-tasks-controls">
                <label for="taskFilterPriority_${uniqueSuffix}" style="font-size:0.9em;">Prioridade:</label>
                <select id="taskFilterPriority_${uniqueSuffix}" class="app-select" style="width: 150px;"> <option value="todas">Todas</option><option value="baixa">Baixa</option> <option value="media">Média</option> <option value="alta">Alta</option> </select>
                <label for="taskFilterResponsible_${uniqueSuffix}" style="font-size:0.9em; margin-left:10px;">Responsável:</label>
                <input type="text" id="taskFilterResponsible_${uniqueSuffix}" class="app-input" style="width:150px; margin-bottom:0;" placeholder="Nome...">
                <label for="taskSortBy_${uniqueSuffix}" style="font-size:0.9em; margin-left:10px;">Ordenar Por:</label>
                <select id="taskSortBy_${uniqueSuffix}" class="app-select" style="width: 170px;"> <option value="dataCriacao">Criação</option> <option value="dataConclusao">Conclusão</option> <option value="prioridade">Prioridade</option> <option value="responsavel">Responsável</option> <option value="aiPriority">Prioridade (IA)</option> </select>
            </div>
            <div class="project-tasks-list-container" id="taskListContainer_${uniqueSuffix}"><ul></ul></div>`;

        const winData = windowManager.windows.get(winId); if (!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;

        const appState = {
            winId, tasks: [], editingTaskId: null, appDataType: 'project-tasks',
            taskInput: winData.element.querySelector(`#taskInput_${uniqueSuffix}`),
            responsibleInput: winData.element.querySelector(`#taskResponsibleInput_${uniqueSuffix}`),
            dueDateInput: winData.element.querySelector(`#taskDueDateInput_${uniqueSuffix}`),
            priorityInput: winData.element.querySelector(`#taskPriorityInput_${uniqueSuffix}`),
            addBtn: winData.element.querySelector(`#addTaskBtn_${uniqueSuffix}`),
            listContainerUl: winData.element.querySelector(`#taskListContainer_${uniqueSuffix} ul`),
            filterPrioritySelect: winData.element.querySelector(`#taskFilterPriority_${uniqueSuffix}`),
            filterResponsibleInput: winData.element.querySelector(`#taskFilterResponsible_${uniqueSuffix}`),
            sortBySelect: winData.element.querySelector(`#taskSortBy_${uniqueSuffix}`),
            trainAiBtn: winData.element.querySelector(`#trainAiBtn_${uniqueSuffix}`),

            getData: function() { return this.tasks.map(({ aiPredictedPriority, ...taskToSave }) => taskToSave); },
            loadData: function(dataString, fileMeta) { 
                try { 
                    const data = JSON.parse(dataString);
                    this.tasks = Array.isArray(data) ? data : []; 
                    this.fileId = fileMeta.id; 
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                    this.renderTasks(); 
                } catch (e) { 
                    showNotification("Erro ao ler arquivo de tarefas.", 3000); 
                } 
            },
            renderTaskItem: function(task, parentUl, depth = 0) { const li = document.createElement('li'); li.className = 'task-item' + (task.completed ? ' completed' : ''); li.style.marginLeft = `${depth * 20}px`; const aiPrediction = mapNeuralManager.getTaskPriorityPrediction(task); task.aiPredictedPriority = aiPrediction; let aiPriorityDisplay = `<span class="ai-priority-indicator" title="Prioridade Sugerida pela IA MapNeural: ${aiPrediction.toFixed(2)}"><i class="fas fa-brain"></i> IA: ${aiPrediction.toFixed(2)}</span>`; li.innerHTML = `<div class="task-main-info"> <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}"> <div class="task-details"> <span class="task-text">${task.text}</span> <div class="task-meta"> ${task.responsible ? `<span><i class="fas fa-user"></i> ${task.responsible}</span>` : ''} ${task.dueDate ? `<span><i class="fas fa-calendar-alt"></i> ${new Date(task.dueDate + 'T00:00:00').toLocaleDateString('pt-BR')}</span>` : ''} <span><i class="fas fa-flag"></i> Prioridade: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span> ${aiPriorityDisplay} </div> </div> <div class="task-actions"> <div class="ai-feedback-buttons"> <button class="app-button secondary action-button" data-action="ai-feedback-important" data-id="${task.id}" title="Marcar como Importante (Treinar IA)"><i class="fas fa-thumbs-up"></i></button> <button class="app-button secondary action-button" data-action="ai-feedback-not-important" data-id="${task.id}" title="Marcar como Menos Importante (Treinar IA)"><i class="fas fa-thumbs-down"></i></button> </div> <button class="app-button secondary action-button" data-action="edit" data-id="${task.id}" title="Editar Tarefa"><i class="fas fa-edit"></i></button> <button class="app-button secondary action-button" data-action="add-subtask" data-id="${task.id}" title="Adicionar Subtarefa"><i class="fas fa-plus"></i></button> <button class="app-button danger action-button" data-action="delete" data-id="${task.id}" title="Excluir Tarefa"><i class="fas fa-trash"></i></button> </div> </div> ${task.subtasks?.length > 0 ? `<div class="subtasks-container" id="subtasksContainer_${task.id}_${uniqueSuffix}"><ul></ul></div>` : ''}`; parentUl.appendChild(li); if (task.subtasks?.length > 0) { const subtasksUl = li.querySelector(`#subtasksContainer_${task.id}_${uniqueSuffix} ul`); task.subtasks.forEach(subtask => this.renderTaskItem(subtask, subtasksUl, depth + 1)); } },
            renderTasks: function() { this.listContainerUl.innerHTML = ''; let filteredTasks = [...this.tasks]; const filterPriority = this.filterPrioritySelect.value; if (filterPriority !== 'todas') { filteredTasks = filteredTasks.filter(t => this.taskMatchesFilter(t, 'priority', filterPriority)); } const filterResponsible = this.filterResponsibleInput.value.toLowerCase(); if (filterResponsible) { filteredTasks = filteredTasks.filter(t => this.taskMatchesFilter(t, 'responsible', filterResponsible)); } const sortBy = this.sortBySelect.value; filteredTasks.sort((a, b) => { if (sortBy === 'dataCriacao') return new Date(a.id.split('_').pop()) - new Date(b.id.split('_').pop()); if (sortBy === 'dataConclusao') { if (!a.dueDate && !b.dueDate) return 0; if (!a.dueDate) return 1; if (!b.dueDate) return -1; return new Date(a.dueDate) - new Date(b.dueDate); } if (sortBy === 'prioridade') { const pOrder = { alta: 1, media: 2, baixa: 3 }; return (pOrder[a.priority] || 4) - (pOrder[b.priority] || 4); } if (sortBy === 'responsavel') return (a.responsible || '').localeCompare(b.responsible || ''); if (sortBy === 'aiPriority') { return (b.aiPredictedPriority ?? -1) - (a.aiPredictedPriority ?? -1); } return 0; }); filteredTasks.forEach(task => this.renderTaskItem(task, this.listContainerUl)); },
            taskMatchesFilter: function(task, field, value) { let match = false; if (field === 'priority' && task.priority === value) match = true; if (field === 'responsible' && task.responsible?.toLowerCase().includes(value)) match = true; if (match) return true; return task.subtasks?.some(st => this.taskMatchesFilter(st, field, value)) ?? false; },
            findTaskById: function(taskId, tasksArray = this.tasks) { for (const task of tasksArray) { if (task.id === taskId) return task; if (task.subtasks) { const foundInSubtask = this.findTaskById(taskId, task.subtasks); if (foundInSubtask) return foundInSubtask; } } return null; },
            deleteTaskRecursive: function(taskId, tasksArray = this.tasks) { for (let i = 0; i < tasksArray.length; i++) { if (tasksArray[i].id === taskId) { tasksArray.splice(i, 1); return true; } if (tasksArray[i].subtasks && this.deleteTaskRecursive(taskId, tasksArray[i].subtasks)) return true; } return false; },
            cleanup: () => {}
        };
        initializeFileState(appState, "Nova Lista de Tarefas", "projeto_tarefas.tasks", "project-tasks"); 
        winData.currentAppInstance = appState;
        setupAppToolbarActions(appState);
        appState.addBtn.onclick = () => { const text = appState.taskInput.value.trim(); if (!text) { showNotification("A descrição da tarefa não pode estar vazia.", 2000); return; } const newTaskData = { text: text, responsible: appState.responsibleInput.value.trim(), dueDate: appState.dueDateInput.value || null, priority: appState.priorityInput.value, completed: false, subtasks: [] }; if (appState.editingTaskId) { const taskToUpdate = appState.findTaskById(appState.editingTaskId); if (taskToUpdate) Object.assign(taskToUpdate, { ...newTaskData, id: appState.editingTaskId, subtasks: taskToUpdate.subtasks }); appState.editingTaskId = null; appState.addBtn.innerHTML = '<i class="fas fa-plus" style="margin-right:5px;"></i> Adicionar'; } else { newTaskData.id = generateId('task'); appState.tasks.push(newTaskData); } appState.taskInput.value = ''; appState.responsibleInput.value = ''; appState.dueDateInput.value = ''; appState.priorityInput.value = 'media'; appState.markDirty(); appState.renderTasks(); };
        [appState.filterPrioritySelect, appState.filterResponsibleInput, appState.sortBySelect].forEach(el => el.oninput = () => appState.renderTasks());
        appState.listContainerUl.addEventListener('click', (e) => { const targetButton = e.target.closest('button'); const targetCheckbox = e.target.closest('.task-checkbox'); let hasChanged = false; if (targetCheckbox) { const taskId = targetCheckbox.dataset.id; const task = appState.findTaskById(taskId); if (task) task.completed = targetCheckbox.checked; hasChanged = true; } else if (targetButton) { const action = targetButton.dataset.action; const taskId = targetButton.dataset.id; const task = appState.findTaskById(taskId); if (action === 'delete') { if (confirm("Tem certeza que deseja excluir esta tarefa e suas subtarefas?")) { appState.deleteTaskRecursive(taskId); hasChanged = true; } } else if (action === 'add-subtask' && task) { const subtaskText = prompt("Descrição da nova subtarefa:"); if (subtaskText) { if (!task.subtasks) task.subtasks = []; task.subtasks.push({ id: generateId('subtask'), text: subtaskText, responsible: task.responsible, dueDate: task.dueDate, priority: task.priority, completed: false, subtasks: [] }); hasChanged = true; } } else if (action === 'edit' && task) { appState.taskInput.value = task.text; appState.responsibleInput.value = task.responsible || ''; appState.dueDateInput.value = task.dueDate || ''; appState.priorityInput.value = task.priority || 'media'; appState.addBtn.innerHTML = '<i class="fas fa-save" style="margin-right:5px;"></i> Atualizar'; appState.editingTaskId = taskId; } else if (action === 'ai-feedback-important' && task) { mapNeuralManager.addTrainingSample(task, 0.9); showNotification(`Feedback "Importante" registrado.`, 2000); } else if (action === 'ai-feedback-not-important' && task) { mapNeuralManager.addTrainingSample(task, 0.1); showNotification(`Feedback "Menos Importante" registrado.`, 2000); } } if(hasChanged) { appState.markDirty(); appState.renderTasks(); } });
        appState.trainAiBtn.onclick = () => { mapNeuralManager.trainNetwork(); showNotification("IA MapNeural treinada!", 2500); appState.renderTasks(); };
        appState.renderTasks();
        return winId;
    }

    function openKanbanBoard() {
        const uniqueSuffix = generateId('kanban');
        const winId = windowManager.createWindow('Kanban Board', '', { width: '1000px', height: '650px', appType: 'kanban-board' });
        const content = `
            <div class="app-toolbar kanban-toolbar">
                ${getStandardAppToolbarHTML()}
                <button id="addKanbanColumnBtn_${uniqueSuffix}" class="app-button" style="margin-left:auto;"><i class="fas fa-plus-square"></i> Nova Coluna</button>
            </div>
            <div class="kanban-board-container" id="kanbanBoardContainer_${uniqueSuffix}"></div>`;

        const winData = windowManager.windows.get(winId); if (!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;
        
        const appState = {
            winId, boardData: { columns: [] }, appDataType: 'kanban-board',
            containerEl: winData.element.querySelector(`#kanbanBoardContainer_${uniqueSuffix}`),
            draggedCard: null, draggedCardData: null, sourceColumnId: null,
            getData: function() { return this.boardData; },
            loadData: function(dataString, fileMeta) { 
                let data;
                try { data = JSON.parse(dataString); } catch (e) { showNotification("Erro ao ler arquivo Kanban.", 3000); this.loadDefaultBoard(); this.renderBoard(); return; } 
                this.boardData = (data && data.columns) ? data : { columns: [] }; 
                (this.boardData.columns || []).forEach(col => { col.id = col.id || generateId('col'); (col.cards || []).forEach(card => { card.id = card.id || generateId('card'); }); }); 
                this.fileId = fileMeta.id; 
                this.markClean(); 
                windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                this.renderBoard(); 
            },
            init: function() { 
                setupAppToolbarActions(this);
                winData.element.querySelector(`#addKanbanColumnBtn_${uniqueSuffix}`).onclick = () => this.addColumn(); 
                this.containerEl.addEventListener('click', (e) => this.handleBoardClick(e)); 
                this.containerEl.addEventListener('input', (e) => this.handleBoardInput(e)); 
                this.containerEl.addEventListener('dragstart', (e) => this.handleDragStart(e)); 
                this.containerEl.addEventListener('dragend', (e) => this.handleDragEnd(e)); 
                this.containerEl.addEventListener('dragover', (e) => this.handleDragOver(e)); 
                this.containerEl.addEventListener('drop', (e) => this.handleDrop(e)); 
                if(!this.boardData.columns.length) this.loadDefaultBoard(); 
                this.renderBoard(); 
            },
            loadDefaultBoard: function() { this.boardData = { columns: [ { id: generateId('col'), title: 'A Fazer', cards: [] }, { id: generateId('col'), title: 'Em Andamento', cards: [] }, { id: generateId('col'), title: 'Concluído', cards: [] } ] }; },
            renderBoard: function() { this.containerEl.innerHTML = ''; this.boardData.columns.forEach(column => this.renderColumn(column)); },
            renderColumn: function(columnData) { const colEl = document.createElement('div'); colEl.className = 'kanban-column'; colEl.dataset.columnId = columnData.id; colEl.innerHTML = `<div class="kanban-column-header"><input type="text" class="kanban-column-title" value="${columnData.title}" placeholder="Título"><div class="kanban-column-actions"><button class="app-button danger small-action" data-action="delete-column" title="Excluir Coluna"><i class="fas fa-trash"></i></button></div></div><div class="kanban-cards-container"></div><button class="app-button secondary kanban-add-card-btn" data-action="add-card"><i class="fas fa-plus"></i> Adicionar Cartão</button>`; const cardsContainer = colEl.querySelector('.kanban-cards-container'); (columnData.cards || []).forEach(card => this.renderCard(cardsContainer, card)); this.containerEl.appendChild(colEl); },
            renderCard: function(cardsContainerEl, cardData) { const cardEl = document.createElement('div'); cardEl.className = 'kanban-card'; cardEl.dataset.cardId = cardData.id; cardEl.draggable = true; cardEl.innerHTML = `<span class="kanban-card-title">${cardData.title}</span> ${cardData.description ? `<div class="kanban-card-description">${cardData.description}</div>` : ''} <div class="kanban-card-meta"><span class="kanban-card-id">#${cardData.id.slice(-5)}</span> <div class="kanban-card-actions"><button class="app-button secondary action-button" data-action="edit-card" title="Editar"><i class="fas fa-edit"></i></button> <button class="app-button danger action-button" data-action="delete-card" title="Excluir"><i class="fas fa-trash"></i></button></div></div>`; cardsContainerEl.appendChild(cardEl); },
            addColumn: function() { const title = prompt("Nome da nova coluna:", "Nova Coluna"); if (title) { this.boardData.columns.push({ id: generateId('col'), title: title, cards: [] }); this.markDirty(); this.renderBoard(); } },
            addCard: function(columnId) { const title = prompt("Título do cartão:", "Nova Tarefa"); if (!title) return; const description = prompt("Descrição:", ""); const column = this.boardData.columns.find(c => c.id === columnId); if (column) { column.cards.push({ id: generateId('card'), title, description }); this.markDirty(); this.renderBoard(); } },
            editCard: function(columnId, cardId) { const column = this.boardData.columns.find(c => c.id === columnId); if (!column) return; const card = column.cards.find(ca => ca.id === cardId); if (!card) return; const newTitle = prompt("Novo título:", card.title); if (newTitle === null) return; const newDescription = prompt("Nova descrição:", card.description || ""); if (newDescription === null) return; card.title = newTitle; card.description = newDescription; this.markDirty(); this.renderBoard(); },
            deleteColumn: function(columnId) { if (confirm("Excluir coluna e cartões?")) { this.boardData.columns = this.boardData.columns.filter(c => c.id !== columnId); this.markDirty(); this.renderBoard(); } },
            deleteCard: function(columnId, cardId) { if (confirm("Excluir cartão?")) { const column = this.boardData.columns.find(c => c.id === columnId); if (column) { column.cards = column.cards.filter(c => c.id !== cardId); this.markDirty(); this.renderBoard(); } } },
            handleBoardClick: function(e) { const button = e.target.closest('button[data-action]'); if (!button) return; const action = button.dataset.action; const columnEl = button.closest('.kanban-column'); const columnId = columnEl?.dataset.columnId; const cardEl = button.closest('.kanban-card'); const cardId = cardEl?.dataset.cardId; if (action === 'add-card') this.addCard(columnId); else if (action === 'delete-column') this.deleteColumn(columnId); else if (action === 'edit-card') this.editCard(columnId, cardId); else if (action === 'delete-card') this.deleteCard(columnId, cardId); },
            handleBoardInput: function(e) { if (e.target.classList.contains('kanban-column-title')) { const columnId = e.target.closest('.kanban-column').dataset.columnId; const column = this.boardData.columns.find(c => c.id === columnId); if (column) { column.title = e.target.value; this.markDirty();} } },
            handleDragStart: function(e) { if (!e.target.classList.contains('kanban-card')) return; this.draggedCard = e.target; this.draggedCard.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; this.sourceColumnId = this.draggedCard.closest('.kanban-column').dataset.columnId; const sourceColData = this.boardData.columns.find(c => c.id === this.sourceColumnId); this.draggedCardData = sourceColData.cards.find(c => c.id === this.draggedCard.dataset.cardId); },
            handleDragEnd: function() { if (this.draggedCard) { this.draggedCard.classList.remove('dragging'); } this.draggedCard = null; this.draggedCardData = null; this.sourceColumnId = null; document.querySelectorAll('.kanban-drop-placeholder').forEach(p => p.remove()); },
            handleDragOver: function(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; const targetColumnEl = e.target.closest('.kanban-column'); if (!targetColumnEl) return; const cardsContainer = targetColumnEl.querySelector('.kanban-cards-container'); const afterElement = [...cardsContainer.querySelectorAll('.kanban-card:not(.dragging)')].reduce((closest, child) => { const box = child.getBoundingClientRect(); const offset = e.clientY - box.top - box.height / 2; return (offset < 0 && offset > closest.offset) ? { offset: offset, element: child } : closest; }, { offset: Number.NEGATIVE_INFINITY }).element; document.querySelectorAll('.kanban-drop-placeholder').forEach(p => p.remove()); const placeholder = document.createElement('div'); placeholder.className = 'kanban-drop-placeholder'; if (afterElement == null) { cardsContainer.appendChild(placeholder); } else { cardsContainer.insertBefore(placeholder, afterElement); } },
            handleDrop: function(e) { e.preventDefault(); document.querySelectorAll('.kanban-drop-placeholder').forEach(p => p.remove()); if (!this.draggedCardData) return; const targetColumnEl = e.target.closest('.kanban-column'); if (!targetColumnEl) return; const targetColumnId = targetColumnEl.dataset.columnId; const afterElement = [...targetColumnEl.querySelectorAll('.kanban-card:not(.dragging)')].reduce((closest, child) => { const box = child.getBoundingClientRect(); const offset = e.clientY - box.top - box.height / 2; return (offset < 0 && offset > closest.offset) ? { offset: offset, element: child } : closest; }, { offset: Number.NEGATIVE_INFINITY }).element; const sourceColData = this.boardData.columns.find(c => c.id === this.sourceColumnId); const cardIndex = sourceColData.cards.findIndex(c => c.id === this.draggedCardData.id); if (cardIndex > -1) { sourceColData.cards.splice(cardIndex, 1); } const targetColData = this.boardData.columns.find(c => c.id === targetColumnId); const targetCardId = afterElement ? afterElement.dataset.cardId : null; let insertAtIndex = targetColData.cards.length; if (targetCardId) { insertAtIndex = targetColData.cards.findIndex(c => c.id === targetCardId); } if (insertAtIndex === -1) insertAtIndex = targetColData.cards.length; targetColData.cards.splice(insertAtIndex, 0, this.draggedCardData); this.markDirty(); this.renderBoard(); },
            cleanup: () => {}
        };
        initializeFileState(appState, "Novo Kanban Board", "board.kanban", "kanban-board");
        winData.currentAppInstance = appState;
        appState.init();
        return winId;
    }

    function openSWOTAnalysis() {
        const uniqueSuffix = generateId('swot');
        const winId = windowManager.createWindow('Análise SWOT', '', { width: '800px', height: '600px', appType: 'swot-analysis' });
        const content = `
            <div class="app-toolbar"> ${getStandardAppToolbarHTML()} </div>
            <div class="swot-grid-container">
                <div class="swot-quadrant"> <h3><i class="fas fa-thumbs-up" style="color:green;"></i> Forças (Strengths)</h3> <textarea id="swotStrengths_${uniqueSuffix}" placeholder="Pontos fortes internos..."></textarea> </div>
                <div class="swot-quadrant"> <h3><i class="fas fa-thumbs-down" style="color:red;"></i> Fraquezas (Weaknesses)</h3> <textarea id="swotWeaknesses_${uniqueSuffix}" placeholder="Pontos fracos internos..."></textarea> </div>
                <div class="swot-quadrant"> <h3><i class="fas fa-lightbulb" style="color:orange;"></i> Oportunidades (Opportunities)</h3> <textarea id="swotOpportunities_${uniqueSuffix}" placeholder="Fatores externos positivos..."></textarea> </div>
                <div class="swot-quadrant"> <h3><i class="fas fa-exclamation-triangle" style="color:purple;"></i> Ameaças (Threats)</h3> <textarea id="swotThreats_${uniqueSuffix}" placeholder="Fatores externos negativos..."></textarea> </div>
            </div>`;
        const winData = windowManager.windows.get(winId); if (!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;

        const appState = {
            winId, appDataType: 'swot-analysis',
            strengthsEl: winData.element.querySelector(`#swotStrengths_${uniqueSuffix}`), 
            weaknessesEl: winData.element.querySelector(`#swotWeaknesses_${uniqueSuffix}`), 
            opportunitiesEl: winData.element.querySelector(`#swotOpportunities_${uniqueSuffix}`), 
            threatsEl: winData.element.querySelector(`#swotThreats_${uniqueSuffix}`),
            getData: function() { return { strengths: this.strengthsEl.value, weaknesses: this.weaknessesEl.value, opportunities: this.opportunitiesEl.value, threats: this.threatsEl.value }; },
            loadData: function(dataString, fileMeta) { 
                try { 
                    const data = JSON.parse(dataString);
                    this.strengthsEl.value = data.strengths || ''; 
                    this.weaknessesEl.value = data.weaknesses || ''; 
                    this.opportunitiesEl.value = data.opportunities || ''; 
                    this.threatsEl.value = data.threats || ''; 
                    this.fileId = fileMeta.id; 
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                } catch (e) { 
                    showNotification("Erro ao ler arquivo SWOT.", 3000); 
                } 
            },
            cleanup: () => {}
        };
        initializeFileState(appState, "Nova Análise SWOT", "analise.swot", "swot-analysis");
        winData.currentAppInstance = appState;
        setupAppToolbarActions(appState);
        [appState.strengthsEl, appState.weaknessesEl, appState.opportunitiesEl, appState.threatsEl].forEach(el => el.oninput = () => appState.markDirty());
        return winId;
    }

    function openSIPOCMatrix() {
        const uniqueSuffix = generateId('sipoc');
        const winId = windowManager.createWindow('Matriz SIPOC', '', { width: '1100px', height: '600px', appType: 'sipoc-matrix' });
        const content = `
            <div class="app-toolbar sipoc-toolbar">
                ${getStandardAppToolbarHTML()}
                <input type="text" id="sipocProcessName_${uniqueSuffix}" class="app-input" placeholder="Nome do Processo Principal" style="margin-left: auto; width: 300px;">
            </div>
            <div class="sipoc-main-content" id="sipocMainContent_${uniqueSuffix}"></div>`;
        const winData = windowManager.windows.get(winId); if (!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;
        
        const appState = {
            winId, appDataType: 'sipoc-matrix',
            sipocData: { processName: "", suppliers: [], inputs: [], process: [], outputs: [], customers: [] },
            mainContentEl: winData.element.querySelector(`#sipocMainContent_${uniqueSuffix}`), 
            processNameInput: winData.element.querySelector(`#sipocProcessName_${uniqueSuffix}`),
            getData: function() { this.sipocData.processName = this.processNameInput.value; return this.sipocData; },
            loadData: function(dataString, fileMeta) { 
                try { 
                    const data = JSON.parse(dataString);
                    this.sipocData = data || { processName: "", suppliers: [], inputs: [], process: [], outputs: [], customers: [] }; 
                    ['suppliers', 'inputs', 'process', 'outputs', 'customers'].forEach(key => { 
                        this.sipocData[key] = (this.sipocData[key] || []).map(item => (typeof item === 'string') ? {id: generateId('sipocItem'), text: item} : {...item, id: item.id || generateId('sipocItem')}); 
                    }); 
                    this.fileId = fileMeta.id; 
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                    this.renderSIPOC();
                } catch (e) { 
                    showNotification("Erro ao ler arquivo SIPOC.", 3000); 
                } 
            },
            init: function() { 
                setupAppToolbarActions(this);
                this.processNameInput.oninput = () => { this.markDirty(); this.sipocData.processName = this.processNameInput.value; }; 
                this.mainContentEl.addEventListener('click', (e) => this.handleSipocClick(e)); 
                this.mainContentEl.addEventListener('input', (e) => this.handleSipocInput(e)); 
                this.renderSIPOC(); 
            },
            renderSIPOC: function() { this.mainContentEl.innerHTML = ''; this.processNameInput.value = this.sipocData.processName; const columns = [ { key: 'suppliers', title: 'Fornecedores (S)', icon: 'fa-truck' }, { key: 'inputs', title: 'Entradas (I)', icon: 'fa-sign-in-alt' }, { key: 'process', title: 'Processo (P)', icon: 'fa-cogs' }, { key: 'outputs', title: 'Saídas (O)', icon: 'fa-sign-out-alt' }, { key: 'customers', title: 'Clientes (C)', icon: 'fa-users' }]; columns.forEach(col => { const colEl = document.createElement('div'); colEl.className = 'sipoc-column'; colEl.dataset.columnKey = col.key; colEl.innerHTML = `<h3><i class="fas ${col.icon}"></i> ${col.title}</h3> <ul class="sipoc-items-list"></ul> <button class="app-button secondary small-add-item" data-action="add-item"><i class="fas fa-plus"></i> Item</button>`; const itemsListUl = colEl.querySelector('.sipoc-items-list'); (this.sipocData[col.key] || []).forEach(item => this.renderSipocItem(itemsListUl, item)); this.mainContentEl.appendChild(colEl); }); },
            renderSipocItem: function(listUl, itemData) { const itemLi = document.createElement('li'); itemLi.className = 'sipoc-item'; itemLi.dataset.itemId = itemData.id; itemLi.innerHTML = `<input type="text" class="app-input" value="${itemData.text}" placeholder="..."><button class="app-button danger small-action" data-action="delete-item" title="Excluir"><i class="fas fa-times"></i></button>`; listUl.appendChild(itemLi); },
            addItemToColumn: function(columnKey) { if (!this.sipocData[columnKey]) this.sipocData[columnKey] = []; this.sipocData[columnKey].push({ id: generateId('sipocItem'), text: "" }); this.markDirty(); this.renderSIPOC(); },
            deleteSipocItem: function(columnKey, itemId) { if (this.sipocData[columnKey]) { this.sipocData[columnKey] = this.sipocData[columnKey].filter(item => item.id !== itemId); this.markDirty(); this.renderSIPOC(); } },
            updateSipocItemText: function(columnKey, itemId, newText) { if (this.sipocData[columnKey]) { const item = this.sipocData[columnKey].find(i => i.id === itemId); if (item) { item.text = newText; this.markDirty(); } } },
            handleSipocClick: function(e) { const button = e.target.closest('button[data-action]'); if (!button) return; const action = button.dataset.action; const columnEl = button.closest('.sipoc-column'); const columnKey = columnEl?.dataset.columnKey; const itemEl = button.closest('.sipoc-item'); const itemId = itemEl?.dataset.itemId; if (action === 'add-item') this.addItemToColumn(columnKey); else if (action === 'delete-item') this.deleteSipocItem(columnKey, itemId); },
            handleSipocInput: function(e) { if (e.target.tagName === 'INPUT' && e.target.closest('.sipoc-item')) { const itemEl = e.target.closest('.sipoc-item'); const itemId = itemEl.dataset.itemId; const columnEl = itemEl.closest('.sipoc-column'); const columnKey = columnEl.dataset.columnKey; this.updateSipocItemText(columnKey, itemId, e.target.value); } },
            cleanup: () => {}
        };
        initializeFileState(appState, "Nova Matriz SIPOC", "matriz.sipoc", "sipoc-matrix");
        winData.currentAppInstance = appState;
        appState.init();
        return winId;
    }

    function openOKRTracker() {
        const uniqueSuffix = generateId('okr');
        const winId = windowManager.createWindow('Monitor de OKRs', '', { width: '950px', height: '700px', appType: 'okr-tracker' });
        const content = `
            <div class="app-toolbar"> ${getStandardAppToolbarHTML()} <button id="addObjectiveBtn_${uniqueSuffix}" class="app-button" style="margin-left: auto;"><i class="fas fa-plus-circle"></i> Novo Objetivo</button> </div>
            <div class="okr-objectives-container" id="objectivesContainer_${uniqueSuffix}"></div>`;
        const winData = windowManager.windows.get(winId); if (!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;

        const appState = {
            winId, objectives: [], appDataType: 'okr-tracker',
            containerEl: winData.element.querySelector(`#objectivesContainer_${uniqueSuffix}`),
            getData: function() { return this.objectives; },
            loadData: function(dataString, fileMeta) { 
                try { 
                    const data = JSON.parse(dataString);
                    this.objectives = Array.isArray(data) ? data.map(obj => ({...obj, keyResults: obj.keyResults || []})) : []; 
                    this.fileId = fileMeta.id; 
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                    this.renderObjectives(); 
                } catch (e) { 
                    showNotification("Erro ao ler arquivo OKR.", 3000); 
                } 
            },
            renderObjectives: function() { this.containerEl.innerHTML = ''; this.objectives.forEach((obj, objIndex) => { const objEl = document.createElement('div'); objEl.className = 'okr-objective'; objEl.innerHTML = `<div class="okr-objective-header"> <h3><i class="fas fa-bullseye" style="margin-right:8px; opacity:0.7;"></i> Objetivo ${objIndex + 1}:</h3> <input type="text" class="app-input okr-objective-title-input" value="${obj.text}" placeholder="Descrição do Objetivo" data-obj-index="${objIndex}" data-field="text"> <input type="text" class="app-input okr-objective-cycle-input" value="${obj.cycle || ''}" placeholder="Ciclo/Período" data-obj-index="${objIndex}" data-field="cycle"> <button class="app-button secondary" data-action="add-kr" data-obj-index="${objIndex}" title="Adicionar Resultado Chave"><i class="fas fa-plus"></i> KR</button> <button class="app-button danger" data-action="delete-obj" data-obj-index="${objIndex}" title="Excluir Objetivo" style="margin-left:5px;"><i class="fas fa-trash"></i></button> </div> <div class="keyresults-container" id="krContainer_${uniqueSuffix}_${objIndex}"></div>`; this.containerEl.appendChild(objEl); const krContainer = objEl.querySelector(`#krContainer_${uniqueSuffix}_${objIndex}`); obj.keyResults.forEach((kr, krIndex) => this.renderKeyResult(krContainer, objIndex, krIndex, kr)); }); },
            renderKeyResult: function(krContainerEl, objIndex, krIndex, krData) { const krEl = document.createElement('div'); krEl.className = 'okr-keyresult'; const progress = krData.target > 0 ? ((krData.current || 0) / krData.target) * 100 : 0; krEl.innerHTML = `<input type="text" class="app-input" value="${krData.text}" placeholder="Resultado Chave ${krIndex + 1}" data-obj-index="${objIndex}" data-kr-index="${krIndex}" data-field="text"> <input type="number" class="app-input" value="${krData.current || ''}" placeholder="Atual" title="Valor Atual" data-obj-index="${objIndex}" data-kr-index="${krIndex}" data-field="current"> <input type="number" class="app-input" value="${krData.target || ''}" placeholder="Meta" title="Valor Meta" data-obj-index="${objIndex}" data-kr-index="${krIndex}" data-field="target"> <input type="text" class="app-input" value="${krData.unit || ''}" placeholder="Unid." title="Unidade" style="width:60px;" data-obj-index="${objIndex}" data-kr-index="${krIndex}" data-field="unit"> <select class="app-select" data-obj-index="${objIndex}" data-kr-index="${krIndex}" data-field="confidence" title="Confiança"> <option value="alta" ${krData.confidence === 'alta' ? 'selected' : ''}>Alta</option> <option value="media" ${krData.confidence === 'media' || !krData.confidence ? 'selected' : ''}>Média</option> <option value="baixa" ${krData.confidence === 'baixa' ? 'selected' : ''}>Baixa</option> </select> <div class="progress-bar-container" title="Progresso: ${progress.toFixed(0)}%"><div class="progress-bar" style="width:${Math.min(100,progress)}%;"></div></div> <button class="app-button danger action-button" data-action="delete-kr" data-obj-index="${objIndex}" data-kr-index="${krIndex}" title="Excluir KR"><i class="fas fa-times"></i></button>`; krContainerEl.appendChild(krEl); },
            addObjective: function() { this.objectives.push({ id: generateId('obj'), text: '', cycle: '', keyResults: [{ id: generateId('kr'), text: '', current: null, target: null, unit: '', confidence: 'media' }] }); this.markDirty(); this.renderObjectives(); },
            addKeyResult: function(objIndex) { this.objectives[objIndex].keyResults.push({ id: generateId('kr'), text: '', current: null, target: null, unit: '', confidence: 'media' }); this.markDirty(); this.renderObjectives(); },
            deleteObjective: function(objIndex) { this.objectives.splice(objIndex, 1); this.markDirty(); this.renderObjectives(); },
            deleteKeyResult: function(objIndex, krIndex) { this.objectives[objIndex].keyResults.splice(krIndex, 1); this.markDirty(); this.renderObjectives(); },
            updateData: function(objIndex, krIndex, field, value) {
                if (krIndex === undefined) {
                    // Atualização do próprio Objetivo (ex: título, ciclo).
                    // Não é necessário redesenhar, pois o input já reflete a mudança.
                    this.objectives[objIndex][field] = value;
                } else {
                    // Atualização de um Resultado Chave.
                    const kr = this.objectives[objIndex].keyResults[krIndex];
                    if (field === 'current' || field === 'target') {
                        // Se o campo for numérico e afeta a barra de progresso.
                        value = parseFloat(value) || null;
                        kr[field] = value;
                        // Redesenha a UI para atualizar a barra de progresso.
                        this.renderObjectives();
                    } else {
                        // Para outros campos (texto, unidade, confiança), apenas atualiza o modelo de dados.
                        // Não redesenha para evitar perder o foco do campo de texto.
                        kr[field] = value;
                    }
                }
                this.markDirty();
            },
            cleanup: () => {}
        };
        initializeFileState(appState, "Monitor de OKRs", "okrs.okr", "okr-tracker"); 
        winData.currentAppInstance = appState;
        setupAppToolbarActions(appState);
        winData.element.querySelector('#addObjectiveBtn_'+uniqueSuffix).onclick = () => appState.addObjective();
        appState.containerEl.addEventListener('click', (e) => { const targetButton = e.target.closest('button'); if (!targetButton) return; const action = targetButton.dataset.action; const objIndex = parseInt(targetButton.dataset.objIndex); const krIndex = e.target.dataset.krIndex !== undefined ? parseInt(e.target.dataset.krIndex) : undefined; if (action === 'add-kr') appState.addKeyResult(objIndex); else if (action === 'delete-obj') appState.deleteObjective(objIndex); else if (action === 'delete-kr') appState.deleteKeyResult(objIndex, krIndex); });
        appState.containerEl.addEventListener('input', (e) => { if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') { const objIndex = parseInt(e.target.dataset.objIndex); const krIndex = e.target.dataset.krIndex !== undefined ? parseInt(e.target.dataset.krIndex) : undefined; const field = e.target.dataset.field; appState.updateData(objIndex, krIndex, field, e.target.value); } });
        if (appState.objectives.length === 0) appState.addObjective();
        return winId;
    }

    function openIshikawaDiagram() {
        const uniqueSuffix = generateId('ishikawa');
        const winId = windowManager.createWindow('Diagrama de Ishikawa', '', { width: '900px', height: '700px', appType: 'ishikawa-diagram' });
        const content = `
            <div class="app-toolbar ishikawa-controls">
                ${getStandardAppToolbarHTML()}
                <button id="addCategoryIshikawaBtn_${uniqueSuffix}" class="app-button" style="margin-left:auto;"><i class="fas fa-sitemap"></i> Nova Categoria</button>
            </div>
            <div class="ishikawa-main-content" id="ishikawaMainContent_${uniqueSuffix}" style="padding: 15px; overflow: auto; display:block;">
                <div class="app-section" style="margin-bottom: 20px;">
                    <h4><i class="fas fa-fish" style="margin-right:8px; opacity:0.7;"></i> Problema / Efeito Central:</h4>
                    <input type="text" id="ishikawaProblemInput_${uniqueSuffix}" class="app-input" placeholder="Descreva o problema ou efeito a ser analisado" style="font-size:1.1em; font-weight:bold;">
                </div>
                <div id="ishikawaCategoriesArea_${uniqueSuffix}" style="display: flex; flex-direction: column; gap: 15px;"></div>
            </div>`;
        const winData = windowManager.windows.get(winId); if(!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;

        const appState = {
            winId, data: { problem: "", categories: [] }, appDataType: 'ishikawa-diagram',
            problemInput: winData.element.querySelector(`#ishikawaProblemInput_${uniqueSuffix}`), 
            categoriesArea: winData.element.querySelector(`#ishikawaCategoriesArea_${uniqueSuffix}`),
            getData: function() { this.data.problem = this.problemInput.value; return this.data; },
            loadData: function(dataString, fileMeta) { 
                try { 
                    const data = JSON.parse(dataString);
                    this.data = data || { problem: "", categories: [] }; 
                    this.data.categories.forEach(cat => { cat.causes = cat.causes || []; cat.causes.forEach(cause => cause.subCauses = cause.subCauses || []); }); 
                    this.fileId = fileMeta.id; 
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                    this.renderAll();
                } catch (e) { 
                    showNotification("Erro ao ler arquivo Ishikawa.", 3000); 
                } 
            },
            init: function() { 
                setupAppToolbarActions(this);
                const addCategoryBtn = winData.element.querySelector(`#addCategoryIshikawaBtn_${uniqueSuffix}`); 
                this.problemInput.oninput = () => this.markDirty(); 
                addCategoryBtn.onclick = () => this.addCategory(); 
                this.categoriesArea.addEventListener('click', (e) => this.handleCategoryAreaClick(e)); 
                this.categoriesArea.addEventListener('input', (e) => this.handleCategoryAreaInput(e)); 
                if (!this.data.categories.length) this.resetToDefaultCategories(); 
                this.renderAll(); 
            },
            resetToDefaultCategories: function() { this.data.problem = ""; this.data.categories = ["Método", "Máquina", "Mão-de-obra", "Material", "Medição", "Meio Ambiente"].map(name => ({ id: generateId('catIsh'), name: name, causes: [] })); },
            renderAll: function() { this.problemInput.value = this.data.problem; this.categoriesArea.innerHTML = ''; this.data.categories.forEach((cat, catIndex) => this.renderCategory(cat, catIndex)); },
            renderCategory: function(categoryData, catIndex) { const catDiv = document.createElement('div'); catDiv.className = 'ishikawa-category-content app-section'; catDiv.dataset.catIndex = catIndex; catDiv.innerHTML = `<h5><input type="text" class="app-input category-name-input" value="${categoryData.name}" placeholder="Nome da Categoria"><span><button class="app-button secondary small-action" data-action="add-cause" title="Adicionar Causa"><i class="fas fa-plus"></i> Causa</button><button class="app-button danger small-action" data-action="delete-category" title="Excluir Categoria"><i class="fas fa-trash"></i></button></span></h5><ul class="causes-list"></ul>`; this.categoriesArea.appendChild(catDiv); const causesListUl = catDiv.querySelector('.causes-list'); categoryData.causes.forEach((cause, causeIndex) => this.renderCause(causesListUl, catIndex, cause, causeIndex)); },
            renderCause: function(causesListUl, catIndex, causeData, causeIndex) { const causeLi = document.createElement('li'); causeLi.className = 'cause-item'; causeLi.dataset.causeIndex = causeIndex; causeLi.innerHTML = `<div style="display:flex; align-items:center; gap:5px;"><input type="text" class="app-input" value="${causeData.text}" placeholder="Causa Principal"><button class="app-button secondary small-action" data-action="add-subcause" title="Adicionar Sub-causa"><i class="fas fa-sitemap"></i></button><button class="app-button danger small-action" data-action="delete-cause" title="Excluir Causa"><i class="fas fa-minus-circle"></i></button></div><ul class="subcauses-list"></ul>`; causesListUl.appendChild(causeLi); const subcausesListUl = causeLi.querySelector('.subcauses-list'); causeData.subCauses.forEach((subCauseText, subCauseIndex) => this.renderSubCause(subcausesListUl, catIndex, causeIndex, subCauseText, subCauseIndex)); },
            renderSubCause: function(subcausesListUl, catIndex, causeIndex, subCauseText, subCauseIndex) { const subCauseLi = document.createElement('li'); subCauseLi.className = 'subcause-item'; subCauseLi.dataset.subcauseIndex = subCauseIndex; subCauseLi.innerHTML = `<div style="display:flex; align-items:center; gap:5px;"><input type="text" class="app-input" value="${subCauseText}" placeholder="Sub-causa"><button class="app-button danger small-action" data-action="delete-subcause" title="Excluir Sub-causa"><i class="fas fa-times"></i></button></div>`; subcausesListUl.appendChild(subCauseLi); },
            addCategory: function() { this.data.categories.push({ id: generateId('catIsh'), name: "Nova Categoria", causes: [] }); this.markDirty(); this.renderAll(); },
            handleCategoryAreaClick: function(e) { const button = e.target.closest('button[data-action]'); if (!button) return; const action = button.dataset.action; const catDiv = button.closest('.ishikawa-category-content'); const catIndex = parseInt(catDiv?.dataset.catIndex); const causeLi = button.closest('.cause-item'); const causeIndex = parseInt(causeLi?.dataset.causeIndex); const subCauseLi = button.closest('.subcause-item'); const subCauseIndex = parseInt(subCauseLi?.dataset.subcauseIndex); if (action === 'delete-category') this.data.categories.splice(catIndex, 1); else if (action === 'add-cause') this.data.categories[catIndex].causes.push({ id: generateId('cauIsh'), text: "", subCauses: [] }); else if (action === 'delete-cause') this.data.categories[catIndex].causes.splice(causeIndex, 1); else if (action === 'add-subcause') this.data.categories[catIndex].causes[causeIndex].subCauses.push(""); else if (action === 'delete-subcause') this.data.categories[catIndex].causes[causeIndex].subCauses.splice(subCauseIndex, 1); this.markDirty(); this.renderAll(); },
            handleCategoryAreaInput: function(e) { const input = e.target.closest('input[type="text"]'); if (!input) return; const catDiv = input.closest('.ishikawa-category-content'); const catIndex = parseInt(catDiv?.dataset.catIndex); const causeLi = input.closest('.cause-item'); const causeIndex = parseInt(causeLi?.dataset.causeIndex); const subCauseLi = input.closest('.subcause-item'); const subCauseIndex = parseInt(subCauseLi?.dataset.subcauseIndex); if (input.classList.contains('category-name-input')) { this.data.categories[catIndex].name = input.value; } else if (causeLi && !subCauseLi) { this.data.categories[catIndex].causes[causeIndex].text = input.value; } else if (subCauseLi) { this.data.categories[catIndex].causes[causeIndex].subCauses[subCauseIndex] = input.value; } this.markDirty(); },
            cleanup: () => {}
        };
        initializeFileState(appState, "Novo Diagrama Ishikawa", "diagrama.ishikawa", "ishikawa-diagram");
        winData.currentAppInstance = appState;
        appState.init();
        return winId;
    }

    function openBPMNModeler() {
        const uniqueSuffix = generateId('bpmn');
        const winId = windowManager.createWindow('Modelador BPMN', '', { width: '950px', height: '700px', appType: 'bpmn-modeler' });
        const content = `
            <div class="app-toolbar bpmn-controls">
                 ${getStandardAppToolbarHTML()}
                <button id="addBpmnElementBtn_${uniqueSuffix}" class="app-button" style="margin-left:auto;"><i class="fas fa-plus-square"></i> Elemento</button>
                <button id="addBpmnFlowBtn_${uniqueSuffix}" class="app-button"><i class="fas fa-long-arrow-alt-right"></i> Fluxo</button>
            </div>
            <div class="bpmn-main-content">
                <div class="bpmn-elements-panel" id="bpmnElementsPanel_${uniqueSuffix}">
                    <div class="app-section bpmn-section"><h4><i class="fas fa-cubes"></i> Elementos</h4><div id="bpmnElementsList_${uniqueSuffix}"></div></div>
                </div>
                <div class="bpmn-flows-panel" id="bpmnFlowsPanel_${uniqueSuffix}">
                    <div class="app-section bpmn-section"><h4><i class="fas fa-route"></i> Fluxos</h4><div id="bpmnFlowsList_${uniqueSuffix}"></div></div>
                </div>
            </div>`;
        const winData = windowManager.windows.get(winId); if(!winData) return winId;
        winData.element.querySelector('.window-content').innerHTML = content;

        const bpmnIcons = { task: 'fas fa-tasks', startEvent: 'fas fa-play-circle', endEvent: 'fas fa-stop-circle', exclusiveGateway: 'fas fa-diamond', parallelGateway: 'fas fa-plus-circle', intermediateThrowEvent: 'fas fa-arrow-circle-up' };
        const appState = {
            winId, data: { elements: [], flows: [] }, appDataType: 'bpmn-modeler',
            elementsListDiv: winData.element.querySelector(`#bpmnElementsList_${uniqueSuffix}`), 
            flowsListDiv: winData.element.querySelector(`#bpmnFlowsList_${uniqueSuffix}`),
            getData: function() { return this.data; },
            loadData: function(dataString, fileMeta) { 
                try { 
                    const data = JSON.parse(dataString);
                    this.data = data || { elements: [], flows: [] }; 
                    this.data.elements = this.data.elements || []; 
                    this.data.flows = this.data.flows || []; 
                    this.fileId = fileMeta.id; 
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                    this.renderAll(); 
                } catch (e) { 
                    showNotification("Erro ao ler arquivo BPMN.", 3000); 
                }
            },
            init: function() {
                setupAppToolbarActions(this);
                winData.element.querySelector(`#addBpmnElementBtn_${uniqueSuffix}`).onclick = () => this.addElement(); 
                winData.element.querySelector(`#addBpmnFlowBtn_${uniqueSuffix}`).onclick = () => this.addFlow(); 
                this.elementsListDiv.addEventListener('input', (e) => this.handleElementInput(e)); 
                this.elementsListDiv.addEventListener('click', (e) => this.handleElementAction(e)); 
                this.flowsListDiv.addEventListener('input', (e) => this.handleFlowInput(e)); 
                this.flowsListDiv.addEventListener('click', (e) => this.handleFlowAction(e)); 
                this.renderAll(); 
            },
            renderAll: function() { this.renderElements(); this.renderFlows(); },
            renderElements: function() { this.elementsListDiv.innerHTML = ''; this.data.elements.forEach((el, index) => { const elDiv = document.createElement('div'); elDiv.className = 'bpmn-element-item'; elDiv.dataset.index = index; const iconClass = bpmnIcons[el.type] || 'fas fa-cube'; elDiv.innerHTML = `<div class="bpmn-element-item-header"><i class="${iconClass}"></i> <strong>${el.name || el.id || 'Novo Elemento'}</strong></div> <div class="form-grid"> <input type="text" class="app-input" value="${el.id}" data-field="id" placeholder="ID (único)"> <select class="app-select" data-field="type"> <option value="task" ${el.type === 'task'?'selected':''}>Tarefa</option> <option value="startEvent" ${el.type === 'startEvent'?'selected':''}>Evento de Início</option> <option value="endEvent" ${el.type === 'endEvent'?'selected':''}>Evento de Fim</option> <option value="exclusiveGateway" ${el.type === 'exclusiveGateway'?'selected':''}>Gateway Exclusivo</option> <option value="parallelGateway" ${el.type === 'parallelGateway'?'selected':''}>Gateway Paralelo</option> <option value="intermediateThrowEvent" ${el.type === 'intermediateThrowEvent'?'selected':''}>Evento Intermediário</option> </select> <input type="text" class="app-input" value="${el.name || ''}" data-field="name" placeholder="Nome/Rótulo (opcional)"> </div> <button class="app-button danger action-button" data-action="delete-element" style="font-size:0.8em; padding:3px 6px; margin-top:8px;"><i class="fas fa-trash"></i> Excluir</button>`; this.elementsListDiv.appendChild(elDiv); }); },
            renderFlows: function() { this.flowsListDiv.innerHTML = ''; this.data.flows.forEach((flow, index) => { const flowDiv = document.createElement('div'); flowDiv.className = 'bpmn-flow-item'; flowDiv.dataset.index = index; let sourceOptions = '<option value="">-- Origem --</option>'; this.data.elements.forEach(el => sourceOptions += `<option value="${el.id}" ${flow.sourceRef === el.id ? 'selected':''}>${el.name || el.id}</option>`); let targetOptions = '<option value="">-- Destino --</option>'; this.data.elements.forEach(el => targetOptions += `<option value="${el.id}" ${flow.targetRef === el.id ? 'selected':''}>${el.name || el.id}</option>`); flowDiv.innerHTML = `<div class="bpmn-flow-connection"> <select class="app-select" data-field="sourceRef" style="flex:1;">${sourceOptions}</select> <i class="fas fa-long-arrow-alt-right" style="margin:0 10px;"></i> <select class="app-select" data-field="targetRef" style="flex:1;">${targetOptions}</select> </div> <input type="text" class="app-input" value="${flow.condition || ''}" data-field="condition" placeholder="Condição (opcional)" style="margin-top:8px;"> <button class="app-button danger action-button" data-action="delete-flow" style="font-size:0.8em; padding:3px 6px; margin-top:8px;"><i class="fas fa-trash"></i> Excluir</button>`; this.flowsListDiv.appendChild(flowDiv); }); },
            addElement: function() { this.data.elements.push({ id: generateId('bpmnEl'), type: 'task', name: '' }); this.markDirty(); this.renderAll(); },
            addFlow: function() { this.data.flows.push({ id: generateId('bpmnFl'), sourceRef: '', targetRef: '', condition: '' }); this.markDirty(); this.renderAll(); },
            handleElementInput: function(e) { const input = e.target.closest('input, select'); if (!input) return; const index = parseInt(input.closest('.bpmn-element-item').dataset.index); const field = input.dataset.field; this.data.elements[index][field] = input.value; if(field === 'id' || field === 'name' || field === 'type') this.renderAll(); this.markDirty(); },
            handleElementAction: function(e) { const button = e.target.closest('button[data-action="delete-element"]'); if (button) { const index = parseInt(button.closest('.bpmn-element-item').dataset.index); this.data.elements.splice(index, 1); this.markDirty(); this.renderAll(); } },
            handleFlowInput: function(e) { const input = e.target.closest('input, select'); if (!input) return; const index = parseInt(input.closest('.bpmn-flow-item').dataset.index); const field = input.dataset.field; this.data.flows[index][field] = input.value; this.markDirty(); },
            handleFlowAction: function(e) { const button = e.target.closest('button[data-action="delete-flow"]'); if (button) { const index = parseInt(button.closest('.bpmn-flow-item').dataset.index); this.data.flows.splice(index, 1); this.markDirty(); this.renderFlows(); } },
            cleanup: () => {}
        };
        initializeFileState(appState, "Novo Modelo BPMN", "modelo.bpmn_simple", "bpmn-modeler");
        winData.currentAppInstance = appState;
        appState.init();
        return winId;
    }

    function openContractManager() {
        const uniqueSuffix = generateId('contract');
        const winId = windowManager.createWindow('Gestão de Contratos', '', { width: '1000px', height: '750px', appType: 'contract-manager' });
        const content = ` <div class="app-toolbar">${getStandardAppToolbarHTML()}</div> <div class="contract-main-form"><h4><i class="fas fa-file-signature"></i> Detalhes do Contrato</h4><div class="form-grid"><input type="text" id="contractNumber_${uniqueSuffix}" class="app-input" placeholder="Número/Processo do Contrato"><input type="text" id="contractVendor_${uniqueSuffix}" class="app-input" placeholder="Contratado/Fornecedor"><select id="contractStatus_${uniqueSuffix}" class="app-select contract-status-select"><option value="elaboracao">Em Elaboração</option> <option value="ativo" selected>Ativo/Vigente</option><option value="suspenso">Suspenso</option> <option value="encerrado">Encerrado</option> <option value="cancelado">Cancelado</option></select><textarea id="contractObject_${uniqueSuffix}" class="app-textarea" placeholder="Objeto do Contrato" style="min-height:60px; grid-column: span 2;"></textarea><input type="number" id="contractTotalValue_${uniqueSuffix}" class="app-input" placeholder="Valor Total (R$)" step="0.01"><input type="date" id="contractStartDate_${uniqueSuffix}" class="app-input" title="Data de Início/Vigência"><input type="date" id="contractEndDate_${uniqueSuffix}" class="app-input" title="Data de Término da Vigência"><input type="text" id="contractManagerName_${uniqueSuffix}" class="app-input" placeholder="Fiscal/Gestor do Contrato"></div></div> <div class="contract-tracking-tabs"><button class="contract-tab-button active" data-tab="financial_${uniqueSuffix}"><i class="fas fa-coins"></i>Financeiro</button><button class="contract-tab-button" data-tab="physical_${uniqueSuffix}"><i class="fas fa-tasks"></i>Físico</button><button class="contract-tab-button" data-tab="amendments_${uniqueSuffix}"><i class="fas fa-file-medical"></i>Aditivos</button><button class="contract-tab-button" data-tab="invoices_${uniqueSuffix}"><i class="fas fa-receipt"></i>Notas Fiscais</button><button class="contract-tab-button" data-tab="documents_${uniqueSuffix}"><i class="fas fa-folder-plus"></i>Documentos</button></div> <div id="financial_${uniqueSuffix}" class="contract-tab-content"><div class="app-section"> <h4>Lançamentos Financeiros</h4> <table class="app-table" id="financialTable_${uniqueSuffix}"><thead><tr><th>Data</th><th>Tipo</th><th>Descrição</th><th>Valor (R$)</th><th>Ações</th></tr></thead><tbody></tbody></table> <button id="addFinancialEntryBtn_${uniqueSuffix}" class="app-button secondary small-add"><i class="fas fa-plus"></i> Lançamento</button> </div><div class="app-section"> <h4>Resumo Financeiro</h4> <p>Valor Total: <strong id="summaryTotalValue_${uniqueSuffix}">0.00 R$</strong></p> <p>Total Empenhado: <strong id="summaryTotalEmpenhado_${uniqueSuffix}">0.00 R$</strong></p> <p>Total Pago: <strong id="summaryTotalPago_${uniqueSuffix}">0.00 R$</strong></p> <p>Saldo a Empenhar: <strong id="summarySaldoEmpenhar_${uniqueSuffix}">0.00 R$</strong></p> <p>Saldo a Pagar: <strong id="summarySaldoPagar_${uniqueSuffix}">0.00 R$</strong></p> </div></div> <div id="physical_${uniqueSuffix}" class="contract-tab-content" style="display:none;"> <div class="app-section"><h4>Marcos/Entregas</h4><table class="app-table" id="physicalTable_${uniqueSuffix}"><thead><tr><th>Item</th><th>Qtde</th><th>Un.</th><th>Previsto</th><th>Realizado</th><th>Status</th><th>%</th><th>Obs.</th><th>Ações</th></tr></thead><tbody></tbody></table><button id="addPhysicalEntryBtn_${uniqueSuffix}" class="app-button secondary small-add"><i class="fas fa-plus"></i> Marco</button></div> </div> <div id="amendments_${uniqueSuffix}" class="contract-tab-content" style="display:none;"> <div class="app-section"><h4>Aditivos/Alterações</h4><table class="app-table" id="amendmentsTable_${uniqueSuffix}"><thead><tr><th>Tipo</th><th>Ref.</th><th>Data</th><th>Objeto</th><th>Valor</th><th>Nova Vigência</th><th>Ações</th></tr></thead><tbody></tbody></table><button id="addAmendmentEntryBtn_${uniqueSuffix}" class="app-button secondary small-add"><i class="fas fa-plus"></i> Aditivo</button></div> </div> <div id="invoices_${uniqueSuffix}" class="contract-tab-content" style="display:none;"> <div class="app-section"><h4>Notas Fiscais</h4><table class="app-table" id="invoiceTable_${uniqueSuffix}"><thead><tr><th>Nº NF</th><th>Emissão</th><th>Valor NF</th><th>Atesto</th><th>Fiscal</th><th>Obs.</th><th>Ações</th></tr></thead><tbody></tbody></table><button id="addInvoiceEntryBtn_${uniqueSuffix}" class="app-button secondary small-add"><i class="fas fa-plus"></i> NF</button></div> </div> <div id="documents_${uniqueSuffix}" class="contract-tab-content" style="display:none;"> <div class="app-section"><h4>Documentos</h4><table class="app-table" id="documentsTable_${uniqueSuffix}"><thead><tr><th>Nome</th><th>Caminho/Link</th><th>Tipo</th><th>Data</th><th>Ações</th></tr></thead><tbody></tbody></table><button id="addDocumentEntryBtn_${uniqueSuffix}" class="app-button secondary small-add"><i class="fas fa-link"></i> Vincular</button></div> </div>`;
        const winData = windowManager.windows.get(winId); if (!winData) return winId; winData.element.querySelector('.window-content').innerHTML = content;
        const appState = {
            winId, appDataType: 'contract-manager',
            data: { details: { number: '', vendor: '', object: '', totalValue: 0, startDate: '', endDate: '', managerName: '', status: 'ativo' }, financial: [], physical: [], amendments: [], invoices: [], documents: [] },
            ui: { detailsForm: { number: winData.element.querySelector(`#contractNumber_${uniqueSuffix}`), vendor: winData.element.querySelector(`#contractVendor_${uniqueSuffix}`), object: winData.element.querySelector(`#contractObject_${uniqueSuffix}`), totalValue: winData.element.querySelector(`#contractTotalValue_${uniqueSuffix}`), startDate: winData.element.querySelector(`#contractStartDate_${uniqueSuffix}`), endDate: winData.element.querySelector(`#contractEndDate_${uniqueSuffix}`), managerName: winData.element.querySelector(`#contractManagerName_${uniqueSuffix}`), status: winData.element.querySelector(`#contractStatus_${uniqueSuffix}`)}, tabButtons: winData.element.querySelectorAll('.contract-tab-button'), tabContents: winData.element.querySelectorAll('.contract-tab-content'), financialTableBody: winData.element.querySelector(`#financialTable_${uniqueSuffix} tbody`), physicalTableBody: winData.element.querySelector(`#physicalTable_${uniqueSuffix} tbody`), amendmentsTableBody: winData.element.querySelector(`#amendmentsTable_${uniqueSuffix} tbody`), invoicesTableBody: winData.element.querySelector(`#invoiceTable_${uniqueSuffix} tbody`), documentsTableBody: winData.element.querySelector(`#documentsTable_${uniqueSuffix} tbody`), summary: { totalValue: winData.element.querySelector(`#summaryTotalValue_${uniqueSuffix}`), totalEmpenhado: winData.element.querySelector(`#summaryTotalEmpenhado_${uniqueSuffix}`), totalPago: winData.element.querySelector(`#summaryTotalPago_${uniqueSuffix}`), saldoEmpenhar: winData.element.querySelector(`#summarySaldoEmpenhar_${uniqueSuffix}`), saldoPagar: winData.element.querySelector(`#summarySaldoPagar_${uniqueSuffix}`) }, addFinancialBtn: winData.element.querySelector(`#addFinancialEntryBtn_${uniqueSuffix}`), addPhysicalBtn: winData.element.querySelector(`#addPhysicalEntryBtn_${uniqueSuffix}`), addAmendmentBtn: winData.element.querySelector(`#addAmendmentEntryBtn_${uniqueSuffix}`), addInvoiceBtn: winData.element.querySelector(`#addInvoiceEntryBtn_${uniqueSuffix}`), addDocumentBtn: winData.element.querySelector(`#addDocumentEntryBtn_${uniqueSuffix}`), },
            getData: function() { this.updateDetailsFromUI(); return this.data; },
            loadData: function(dataString, fileMeta) { 
                try { 
                    const data = JSON.parse(dataString);
                    this.data = { details: {}, financial: [], physical: [], amendments: [], invoices: [], documents: [], ...data }; 
                    this.fileId = fileMeta.id; 
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                    this.renderAll(); 
                } catch (e) {
                     showNotification("Erro ao ler arquivo de contrato.", 3000); 
                }
            },
            init: function() { 
                setupAppToolbarActions(this);
                this.ui.tabButtons.forEach(button => button.onclick = () => { this.ui.tabButtons.forEach(btn => btn.classList.remove('active')); this.ui.tabContents.forEach(content => content.style.display = 'none'); button.classList.add('active'); winData.element.querySelector(`#${button.dataset.tab}`).style.display = 'block'; }); 
                this.ui.addFinancialBtn.onclick = () => this.addEntry('financial', {id: generateId('fin'), date: new Date().toISOString().split('T')[0], type: 'empenho', description: '', value: 0}); 
                this.ui.addPhysicalBtn.onclick = () => this.addEntry('physical', {id: generateId('phy'), item: '', quantity: 1, unit: 'Un', date_planned: '', date_done: null, status: 'pendente', percent_complete:0, notes:''}); 
                this.ui.addAmendmentBtn.onclick = () => this.addEntry('amendments', {id: generateId('amd'), type:'aditivo', number_ref:'', date: new Date().toISOString().split('T')[0], object_change:'', value_change:0, new_end_date: null}); 
                this.ui.addInvoiceBtn.onclick = () => this.addEntry('invoices', {id: generateId('inv'), number:'', date_issue:new Date().toISOString().split('T')[0], value:0, date_attested: null, attested_by:'', notes:''}); 
                this.ui.addDocumentBtn.onclick = () => this.addEntry('documents', {id: generateId('doc'), name:'', path_or_link:'', type:'contrato_original', date_added:new Date().toISOString().split('T')[0]}); 
                ['financial', 'physical', 'amendments', 'invoices', 'documents'].forEach(type => { this.ui[`${type}TableBody`].addEventListener('click', (e) => this.handleTableAction(e, type)); this.ui[`${type}TableBody`].addEventListener('input', (e) => this.handleTableInput(e, type)); }); 
                Object.values(this.ui.detailsForm).forEach(input => { input.oninput = () => {this.markDirty(); this.updateDetailsFromUI()}; }); 
                this.renderAll(); 
            },
            updateDetailsFromUI: function() { for(const key in this.ui.detailsForm){ this.data.details[key] = (this.ui.detailsForm[key].type === 'number') ? parseFloat(this.ui.detailsForm[key].value) || 0 : this.ui.detailsForm[key].value; } this.renderFinancialSummary(); },
            renderAll: function() { for(const key in this.ui.detailsForm){ if(this.data.details[key] !== undefined) this.ui.detailsForm[key].value = this.data.details[key]; } this.renderTable('financial', (e) => `<td><input type="date" class="app-input" value="${e.date||''}" data-field="date"></td><td><select class="app-select" data-field="type"><option value="empenho" ${e.type==='empenho'?'selected':''}>Empenho</option><option value="reforco_empenho" ${e.type==='reforco_empenho'?'selected':''}>Reforço</option><option value="anulacao_empenho" ${e.type==='anulacao_empenho'?'selected':''}>Anulação</option><option value="pagamento" ${e.type==='pagamento'?'selected':''}>Pagamento</option></select></td><td><input type="text" class="app-input" value="${e.description||''}" data-field="description"></td><td><input type="number" class="app-input" value="${e.value||0}" step="0.01" data-field="value"></td>`); this.renderTable('physical', (e) => `<td><input type="text" class="app-input" value="${e.item||''}" data-field="item"></td><td><input type="number" class="app-input" value="${e.quantity||0}" data-field="quantity"></td><td><input class="app-input" value="${e.unit||'Un'}" data-field="unit"></td><td><input type="date" class="app-input" value="${e.date_planned||''}" data-field="date_planned"></td><td><input type="date" class="app-input" value="${e.date_done||''}" data-field="date_done"></td><td><input class="app-input" value="${e.status||'pendente'}" data-field="status"></td><td><input type="number" class="app-input" value="${e.percent_complete||0}" data-field="percent_complete"></td><td><input type="text" class="app-input" value="${e.notes||''}" data-field="notes"></td>`); this.renderTable('amendments', (e) => `<td><input type="text" class="app-input" value="${e.type||''}" data-field="type"></td><td><input type="text" class="app-input" value="${e.number_ref||''}" data-field="number_ref"></td><td><input type="date" class="app-input" value="${e.date||''}" data-field="date"></td><td><input type="text" class="app-input" value="${e.object_change||''}" data-field="object_change"></td><td><input type="number" class="app-input" value="${e.value_change||0}" data-field="value_change"></td><td><input type="date" class="app-input" value="${e.new_end_date||''}" data-field="new_end_date"></td>`); this.renderTable('invoices', (e) => `<td><input type="text" class="app-input" value="${e.number||''}" data-field="number"></td><td><input type="date" class="app-input" value="${e.date_issue||''}" data-field="date_issue"></td><td><input type="number" class="app-input" value="${e.value||0}" data-field="value"></td><td><input type="date" class="app-input" value="${e.date_attested||''}" data-field="date_attested"></td><td><input type="text" class="app-input" value="${e.attested_by||''}" data-field="attested_by"></td><td><input type="text" class="app-input" value="${e.notes||''}" data-field="notes"></td>`); this.renderTable('documents', (e) => `<td><input type="text" class="app-input" value="${e.name||''}" data-field="name"></td><td><input type="text" class="app-input" value="${e.path_or_link||''}" data-field="path_or_link"></td><td><input class="app-input" value="${e.type||'outro'}" data-field="type"></td><td><input type="date" class="app-input" value="${e.date_added||''}" data-field="date_added"></td>`); this.renderFinancialSummary(); },
            renderTable: function(type, rowRenderFn) { const tableBody = this.ui[`${type}TableBody`]; tableBody.innerHTML = ''; (this.data[type] = this.data[type] || []).forEach((entry) => { const row = tableBody.insertRow(); row.dataset.id = entry.id; row.innerHTML = rowRenderFn(entry) + `<td><button class="app-button danger action-button" data-action="delete" title="Excluir"><i class="fas fa-trash"></i></button></td>`; }); },
            renderFinancialSummary: function() { const totalValue = this.data.details.totalValue || 0; let totalEmpenhado = 0; let totalPago = 0; (this.data.financial || []).forEach(f => { const val = f.value || 0; if (f.type === 'empenho' || f.type === 'reforco_empenho') totalEmpenhado += val; else if (f.type === 'anulacao_empenho') totalEmpenhado -= val; else if (f.type === 'pagamento') totalPago += val; }); this.ui.summary.totalValue.textContent = totalValue.toFixed(2) + " R$"; this.ui.summary.totalEmpenhado.textContent = totalEmpenhado.toFixed(2) + " R$"; this.ui.summary.totalPago.textContent = totalPago.toFixed(2) + " R$"; this.ui.summary.saldoEmpenhar.textContent = (totalValue - totalEmpenhado).toFixed(2) + " R$"; this.ui.summary.saldoPagar.textContent = (totalEmpenhado - totalPago).toFixed(2) + " R$"; },
            addEntry: function(type, template) { (this.data[type] = this.data[type] || []).push({...template, id: generateId(type.slice(0,3))}); this.markDirty(); this.renderAll(); },
            handleTableAction: function(e, tableType) { const button = e.target.closest('button[data-action="delete"]'); if (button) { const rowId = button.closest('tr').dataset.id; this.data[tableType] = (this.data[tableType] || []).filter(item => item.id !== rowId); this.markDirty(); this.renderAll(); } },
            handleTableInput: function(e, tableType) { const input = e.target.closest('input, select, textarea'); if (input) { const rowId = input.closest('tr').dataset.id; const field = input.dataset.field; const entry = (this.data[tableType] || []).find(item => item.id === rowId); if (entry) { entry[field] = (input.type==='number') ? parseFloat(input.value) || 0 : input.value; this.markDirty(); if(tableType==='financial') this.renderFinancialSummary();} } },
            cleanup: () => {}
        };
        initializeFileState(appState, 'Novo Contrato', 'contrato.contract', 'contract-manager');
        winData.currentAppInstance = appState;
        appState.init();
        return winId;
    }

    function createQualityToolWindow(toolName, appType, formHTML, listTitle, fileNameSuffix, formGridCols = 1) {
        const uniqueSuffix = generateId(appType);
        const winId = windowManager.createWindow(toolName, '', { width: '850px', height: '700px', appType: `quality-tool ${appType}` });
        const winData = windowManager.windows.get(winId); if (!winData) return winId;
        const content = `
            <div class="app-toolbar"> ${getStandardAppToolbarHTML()} </div>
            <div class="quality-tool-content-area">
                <div class="quality-tool-form-section">
                    <h4><i class="fas fa-edit"></i> <span id="formTitle_${uniqueSuffix}">Novo: ${toolName}</span></h4>
                    <input type="hidden" id="editingItemId_${uniqueSuffix}" value="">
                    <div class="form-grid" id="formArea_${uniqueSuffix}" style="grid-template-columns: repeat(${formGridCols}, 1fr);"> ${formHTML} </div>
                    <div style="margin-top:10px;">
                        <button id="addItem${appType}Btn_${uniqueSuffix}" class="app-button"><i class="fas fa-plus"></i> Adicionar</button>
                        <button id="updateItem${appType}Btn_${uniqueSuffix}" class="app-button" style="display:none;"><i class="fas fa-save"></i> Atualizar</button>
                        <button id="cancelEdit${appType}Btn_${uniqueSuffix}" class="app-button secondary" style="display:none; margin-left: 8px;"><i class="fas fa-times"></i> Cancelar</button>
                    </div>
                </div>
                <div class="quality-tool-list-section"> <h4><i class="fas fa-list-ul"></i> ${listTitle}</h4> <ul id="list${appType}_${uniqueSuffix}"></ul> </div>
            </div>`;
        winData.element.querySelector('.window-content').innerHTML = content;
        
        const appState = {
            winId, items: [], appDataType: appType,
            formArea: winData.element.querySelector(`#formArea_${uniqueSuffix}`), 
            listUl: winData.element.querySelector(`#list${appType}_${uniqueSuffix}`), 
            addBtn: winData.element.querySelector(`#addItem${appType}Btn_${uniqueSuffix}`), 
            updateBtn: winData.element.querySelector(`#updateItem${appType}Btn_${uniqueSuffix}`), 
            cancelEditBtn: winData.element.querySelector(`#cancelEdit${appType}Btn_${uniqueSuffix}`), 
            editingItemIdInput: winData.element.querySelector(`#editingItemId_${uniqueSuffix}`), 
            formTitleSpan: winData.element.querySelector(`#formTitle_${uniqueSuffix}`), 
            originalToolName: toolName,
            getData: function() { return this.items; },
            loadData: function(dataString, fileMeta) { 
                try {
                    const data = JSON.parse(dataString);
                    this.items = Array.isArray(data) ? data : []; 
                    this.fileId = fileMeta.id;
                    this.markClean(); 
                    windowManager.updateWindowTitle(this.winId, fileMeta.name); 
                    this.renderList(); 
                    this.clearForm();
                } catch(e) {
                    showNotification(`Erro ao ler arquivo de ${toolName}.`, 3000);
                }
            },
            collectFormData: function() { return {}; }, 
            populateForm: function(itemData) {},
            clearForm: function() { this.formArea.querySelectorAll('input:not([type=hidden]), select, textarea').forEach(input => { if (input.type === 'checkbox' || input.type === 'radio') input.checked = false; else if(input.tagName === 'SELECT') input.selectedIndex = 0; else input.value = ''; }); this.editingItemIdInput.value = ''; this.formTitleSpan.textContent = `Novo: ${this.originalToolName}`; this.addBtn.style.display = 'inline-block'; this.updateBtn.style.display = 'none'; this.cancelEditBtn.style.display = 'none'; },
            renderListItem: function(item, index) { return `<li>${JSON.stringify(item)}</li>`; },
            renderList: function() { this.listUl.innerHTML = ''; this.items.forEach((item, index) => { this.listUl.innerHTML += this.renderListItem(item, index); }); },
            addItem: function() { const newItemData = this.collectFormData(); if (newItemData) { this.items.push({...newItemData, id: generateId(appType) }); this.markDirty(); this.renderList(); this.clearForm(); } },
            updateItem: function() { const editingId = this.editingItemIdInput.value; if (!editingId) { this.clearForm(); return; } const itemIndex = this.items.findIndex(item => item.id === editingId); if (itemIndex === -1) { showNotification("Item não encontrado.", 3000); this.clearForm(); return; } const updatedData = this.collectFormData(); if (updatedData) { this.items[itemIndex] = {...this.items[itemIndex], ...updatedData }; this.markDirty(); this.renderList(); this.clearForm(); showNotification("Item atualizado.", 2000); } },
            editItem: function(index) { const itemData = this.items[index]; if (!itemData) return; this.populateForm(itemData); this.editingItemIdInput.value = itemData.id; this.formTitleSpan.textContent = `Editando: ${this.originalToolName} (ID: ${itemData.id.slice(-5)})`; this.addBtn.style.display = 'none'; this.updateBtn.style.display = 'inline-block'; this.cancelEditBtn.style.display = 'inline-block'; this.formArea.querySelector('input, textarea, select')?.focus(); },
            init: function() { 
                setupAppToolbarActions(this);
                this.addBtn.onclick = () => this.addItem(); 
                this.updateBtn.onclick = () => this.updateItem(); 
                this.cancelEditBtn.onclick = () => this.clearForm(); 
                this.listUl.addEventListener('click', (e) => { 
                    const button = e.target.closest('button.action-button'); 
                    if(!button) return; 
                    const action = button.dataset.action; 
                    const index = parseInt(button.dataset.index); 
                    if(action === "delete") { 
                        if(confirm("Tem certeza que deseja excluir?")) { 
                            const itemIdToDelete = this.items[index]?.id; 
                            this.items.splice(index, 1); 
                            this.markDirty(); 
                            this.renderList(); 
                            if(this.editingItemIdInput.value === itemIdToDelete) this.clearForm(); 
                        } 
                    } else if (action === "edit") { 
                        this.editItem(index); 
                    } 
                }); 
                this.renderList(); 
            },
            cleanup: () => {}
        };
        initializeFileState(appState, toolName, `novo_${fileNameSuffix}.${fileNameSuffix}`, appType); 
        winData.currentAppInstance = appState;
        setTimeout(() => winData.currentAppInstance?.init(), 0);
        return winId;
    }
    
    function openChecklistTool() {
        const formHTML = `<input type="text" id="checklistItemInput" class="app-input" placeholder="Item do Checklist (ex: Verificar documentação X)"> <select id="checklistCategoryInput" class="app-select"><option value="">Categoria (Opcional)</option> <option value="documentacao">Documentação</option><option value="processo">Processo</option> <option value="seguranca">Segurança</option><option value="outro">Outro</option></select><select id="checklistStatusInput" class="app-select"><option value="pendente">Pendente</option> <option value="conforme">Conforme</option> <option value="nao_conforme">Não Conforme</option> <option value="na">N/A</option></select><input type="text" id="checklistResponsibleInput" class="app-input" placeholder="Responsável (Opcional)"><textarea id="checklistNotesInput" class="app-textarea" placeholder="Observações..." style="min-height:60px; grid-column: span 2;"></textarea>`;
        const winId = createQualityToolWindow('Checklist', 'checklist', formHTML, 'Itens do Checklist', 'checklist', 2);
        const appState = windowManager.windows.get(winId).currentAppInstance;
        appState.collectFormData = function() { const itemText = this.formArea.querySelector('#checklistItemInput').value.trim(); if (!itemText) { showNotification("Descreva o item.", 2000); return null;} return { text: itemText, category: this.formArea.querySelector('#checklistCategoryInput').value, status: this.formArea.querySelector('#checklistStatusInput').value, responsible: this.formArea.querySelector('#checklistResponsibleInput').value.trim(), notes: this.formArea.querySelector('#checklistNotesInput').value.trim() }; };
        appState.populateForm = function(itemData) { this.formArea.querySelector('#checklistItemInput').value = itemData.text || ''; this.formArea.querySelector('#checklistCategoryInput').value = itemData.category || ''; this.formArea.querySelector('#checklistStatusInput').value = itemData.status || 'pendente'; this.formArea.querySelector('#checklistResponsibleInput').value = itemData.responsible || ''; this.formArea.querySelector('#checklistNotesInput').value = itemData.notes || ''; };
        appState.renderListItem = function(item, index) { const icons = {pendente: 'fa-clock', conforme: 'fa-check-circle', nao_conforme: 'fa-times-circle', na: 'fa-minus-circle'}; const iconClass = icons[item.status] || 'fa-question-circle'; return `<li> <div class="item-details"> <strong><i class="fas ${iconClass}" style="margin-right:8px; color: ${item.status === 'conforme' ? 'green' : (item.status === 'nao_conforme' ? 'red' : 'var(--secondary-text-color)')};"></i>${item.text}</strong> <small>Status: ${item.status} ${item.category ? `| Cat: ${item.category}` : ''} ${item.responsible ? `| Resp: ${item.responsible}`: ''}</small> ${item.notes ? `<p><i>Obs: ${item.notes}</i></p>` : ''} </div> <div class="item-actions"> <button class="app-button secondary action-button" data-action="edit" data-index="${index}"><i class="fas fa-edit"></i></button> <button class="app-button danger action-button" data-action="delete" data-index="${index}"><i class="fas fa-trash"></i></button> </div> </li>`; };
        return winId;
    }

    function openNCRTool() {
        const formHTML = `<input type="text" id="ncrDescriptionInput" class="app-input" placeholder="Descrição da Não Conformidade" style="grid-column: span 2;"> <input type="date" id="ncrDateInput" class="app-input" title="Data da Ocorrência"> <input type="text" id="ncrSourceInput" class="app-input" placeholder="Origem/Processo Afetado"> <select id="ncrSeverityInput" class="app-select"><option value="baixa">Baixa</option><option value="media">Média</option><option value="alta">Alta</option><option value="critica">Crítica</option></select> <input type="text" id="ncrReportedByInput" class="app-input" placeholder="Reportado Por"> <textarea id="ncrEvidenceInput" class="app-textarea" placeholder="Evidências..." style="min-height:60px; grid-column: span 2;"></textarea> <textarea id="ncrImmediateActionInput" class="app-textarea" placeholder="Ação Imediata Tomada" style="min-height:60px;"></textarea> <textarea id="ncrCorrectiveActionInput" class="app-textarea" placeholder="Ação Corretiva Proposta" style="min-height:60px;"></textarea> <input type="date" id="ncrCorrectiveActionDeadlineInput" class="app-input" title="Prazo Ação Corretiva"> <select id="ncrStatusInput" class="app-select"><option value="aberta">Aberta</option><option value="em_analise">Em Análise</option><option value="acao_implementada">Ação Implementada</option><option value="verificacao_eficacia">Verificando Eficácia</option><option value="fechada">Fechada</option></select>`;
        const winId = createQualityToolWindow('Relatório de Não Conformidade', 'ncr', formHTML, 'Não Conformidades Registradas', 'ncr', 2);
        const appState = windowManager.windows.get(winId).currentAppInstance;
        appState.collectFormData = function() { const desc = this.formArea.querySelector('#ncrDescriptionInput').value.trim(); if (!desc) { showNotification("Descrição é obrigatória.", 2000); return null;} return { description: desc, date: this.formArea.querySelector('#ncrDateInput').value, source: this.formArea.querySelector('#ncrSourceInput').value.trim(), severity: this.formArea.querySelector('#ncrSeverityInput').value, reportedBy: this.formArea.querySelector('#ncrReportedByInput').value.trim(), evidence: this.formArea.querySelector('#ncrEvidenceInput').value.trim(), immediateAction: this.formArea.querySelector('#ncrImmediateActionInput').value.trim(), correctiveAction: this.formArea.querySelector('#ncrCorrectiveActionInput').value.trim(), correctiveActionDeadline: this.formArea.querySelector('#ncrCorrectiveActionDeadlineInput').value, status: this.formArea.querySelector('#ncrStatusInput').value }; };
        appState.populateForm = function(itemData) { this.formArea.querySelector('#ncrDescriptionInput').value = itemData.description || ''; this.formArea.querySelector('#ncrDateInput').value = itemData.date || ''; this.formArea.querySelector('#ncrSourceInput').value = itemData.source || ''; this.formArea.querySelector('#ncrSeverityInput').value = itemData.severity || 'media'; this.formArea.querySelector('#ncrReportedByInput').value = itemData.reportedBy || ''; this.formArea.querySelector('#ncrEvidenceInput').value = itemData.evidence || ''; this.formArea.querySelector('#ncrImmediateActionInput').value = itemData.immediateAction || ''; this.formArea.querySelector('#ncrCorrectiveActionInput').value = itemData.correctiveAction || ''; this.formArea.querySelector('#ncrCorrectiveActionDeadlineInput').value = itemData.correctiveActionDeadline || ''; this.formArea.querySelector('#ncrStatusInput').value = itemData.status || 'aberta'; };
        appState.renderListItem = function(item, index) { const severityColors = {baixa: 'green', media: 'orange', alta: 'red', critica: 'darkred'}; return `<li> <div class="item-details"> <strong><i class="fas fa-exclamation-triangle" style="margin-right:8px; color:${severityColors[item.severity] || 'var(--secondary-text-color)'};"></i>${item.description}</strong> <small>Severidade: ${item.severity}, Data: ${item.date || 'N/D'}, Status: ${item.status}</small> <small>Origem: ${item.source || 'N/I'} | Reportado por: ${item.reportedBy || 'N/I'}</small> ${item.correctiveAction ? `<p><i>Ação: ${item.correctiveAction.substring(0,100)}...</i></p>` : ''} </div> <div class="item-actions"> <button class="app-button secondary action-button" data-action="edit" data-index="${index}"><i class="fas fa-edit"></i></button> <button class="app-button danger action-button" data-action="delete" data-index="${index}"><i class="fas fa-trash"></i></button> </div> </li>`; };
        return winId;
    }
    
    function openPDCATool() {
        const formHTML = `<input type="text" id="pdcaTitleInput" class="app-input" placeholder="Título da Iniciativa/Problema" style="grid-column: span 2;"> <textarea id="pdcaPlanInput" class="app-textarea" placeholder="Planejar (Plan)..." style="min-height:80px; grid-column: span 2;"></textarea> <textarea id="pdcaDoInput" class="app-textarea" placeholder="Executar (Do)..." style="min-height:80px; grid-column: span 2;"></textarea> <textarea id="pdcaCheckInput" class="app-textarea" placeholder="Verificar (Check)..." style="min-height:80px; grid-column: span 2;"></textarea> <textarea id="pdcaActInput" class="app-textarea" placeholder="Agir (Act)..." style="min-height:80px; grid-column: span 2;"></textarea> <input type="text" id="pdcaResponsibleInput" class="app-input" placeholder="Responsável"> <input type="date" id="pdcaStartDateInput" class="app-input" title="Data de Início"> <select id="pdcaStatusInput" class="app-select"><option value="planejamento">Planejamento</option><option value="execucao">Execução</option><option value="verificacao">Verificação</option><option value="acao">Ação</option><option value="concluido">Concluído</option><option value="suspenso">Suspenso</option></select>`;
        const winId = createQualityToolWindow('Ciclo PDCA', 'pdca', formHTML, 'Iniciativas PDCA', 'pdca', 2);
        const appState = windowManager.windows.get(winId).currentAppInstance;
        appState.collectFormData = function() { const title = this.formArea.querySelector('#pdcaTitleInput').value.trim(); if (!title) { showNotification("Título é obrigatório.", 2000); return null;} return { title, plan: this.formArea.querySelector('#pdcaPlanInput').value.trim(), do: this.formArea.querySelector('#pdcaDoInput').value.trim(), check: this.formArea.querySelector('#pdcaCheckInput').value.trim(), act: this.formArea.querySelector('#pdcaActInput').value.trim(), responsible: this.formArea.querySelector('#pdcaResponsibleInput').value.trim(), startDate: this.formArea.querySelector('#pdcaStartDateInput').value, status: this.formArea.querySelector('#pdcaStatusInput').value }; };
        appState.populateForm = function(itemData) { this.formArea.querySelector('#pdcaTitleInput').value = itemData.title || ''; this.formArea.querySelector('#pdcaPlanInput').value = itemData.plan || ''; this.formArea.querySelector('#pdcaDoInput').value = itemData.do || ''; this.formArea.querySelector('#pdcaCheckInput').value = itemData.check || ''; this.formArea.querySelector('#pdcaActInput').value = itemData.act || ''; this.formArea.querySelector('#pdcaResponsibleInput').value = itemData.responsible || ''; this.formArea.querySelector('#pdcaStartDateInput').value = itemData.startDate || ''; this.formArea.querySelector('#pdcaStatusInput').value = itemData.status || 'planejamento'; };
        appState.renderListItem = function(item, index) { const statusIcons = {planejamento: 'fa-clipboard-list', execucao: 'fa-running', verificacao: 'fa-search', acao: 'fa-cogs', concluido: 'fa-check-double', suspenso: 'fa-pause-circle'}; const icon = statusIcons[item.status] || 'fa-spinner'; return `<li> <div class="item-details"> <strong><i class="fas ${icon}" style="margin-right:8px;"></i>${item.title}</strong> <small>Status: ${item.status}, Início: ${item.startDate || 'N/D'}, Resp: ${item.responsible || 'N/I'}</small> <details style="margin-top:5px;"><summary>Ver Detalhes</summary><p><strong>Plan:</strong> ${item.plan?.substring(0,150)}...</p><p><strong>Do:</strong> ${item.do?.substring(0,150)}...</p><p><strong>Check:</strong> ${item.check?.substring(0,150)}...</p><p><strong>Act:</strong> ${item.act?.substring(0,150)}...</p></details> </div> <div class="item-actions"> <button class="app-button secondary action-button" data-action="edit" data-index="${index}"><i class="fas fa-edit"></i></button> <button class="app-button danger action-button" data-action="delete" data-index="${index}"><i class="fas fa-trash"></i></button> </div> </li>`; };
        return winId;
    }
    
    function open5W2HTool() {
        const formHTML = `<input type="text" id="w5h2WhatInput" class="app-input" placeholder="O Quê será feito? (What)" style="grid-column: span 2;"> <textarea id="w5h2WhyInput" class="app-textarea" placeholder="Por Quê será feito? (Why)" style="grid-column: span 2; min-height:60px;"></textarea> <input type="text" id="w5h2WhereInput" class="app-input" placeholder="Onde? (Where)"> <input type="text" id="w5h2WhenInput" class="app-input" placeholder="Quando? (When - ex: data, prazo)"> <input type="text" id="w5h2WhoInput" class="app-input" placeholder="Quem? (Who - responsável)"> <input type="text" id="w5h2HowInput" class="app-input" placeholder="Como? (How - método, etapas)" style="grid-column: span 2;"> <input type="number" id="w5h2HowMuchInput" class="app-input" placeholder="Quanto custará? (How Much)" step="0.01"> <select id="w5h2StatusInput" class="app-select"><option value="planejado">Planejado</option><option value="em_andamento">Em Andamento</option><option value="concluido">Concluído</option><option value="cancelado">Cancelado</option><option value="aguardando">Aguardando</option></select>`;
        const winId = createQualityToolWindow('Ferramenta 5W2H', '5w2h', formHTML, 'Planos de Ação 5W2H', '5w2h', 2);
        const appState = windowManager.windows.get(winId).currentAppInstance;
        appState.collectFormData = function() { const what = this.formArea.querySelector('#w5h2WhatInput').value.trim(); if (!what) { showNotification("'O Quê?' é obrigatório.", 2000); return null;} return { what: what, why: this.formArea.querySelector('#w5h2WhyInput').value.trim(), where: this.formArea.querySelector('#w5h2WhereInput').value.trim(), when: this.formArea.querySelector('#w5h2WhenInput').value.trim(), who: this.formArea.querySelector('#w5h2WhoInput').value.trim(), how: this.formArea.querySelector('#w5h2HowInput').value.trim(), howMuch: parseFloat(this.formArea.querySelector('#w5h2HowMuchInput').value) || 0, status: this.formArea.querySelector('#w5h2StatusInput').value }; };
        appState.populateForm = function(itemData) { this.formArea.querySelector('#w5h2WhatInput').value = itemData.what || ''; this.formArea.querySelector('#w5h2WhyInput').value = itemData.why || ''; this.formArea.querySelector('#w5h2WhereInput').value = itemData.where || ''; this.formArea.querySelector('#w5h2WhenInput').value = itemData.when || ''; this.formArea.querySelector('#w5h2WhoInput').value = itemData.who || ''; this.formArea.querySelector('#w5h2HowInput').value = itemData.how || ''; this.formArea.querySelector('#w5h2HowMuchInput').value = itemData.howMuch || 0; this.formArea.querySelector('#w5h2StatusInput').value = itemData.status || 'planejado'; };
        appState.renderListItem = function(item, index) { const statusIcons = {planejado: 'fa-calendar-alt', em_andamento: 'fa-spinner fa-spin', concluido: 'fa-check-circle', cancelado: 'fa-ban', aguardando: 'fa-pause-circle'}; const icon = statusIcons[item.status] || 'fa-question'; return `<li> <div class="item-details"> <strong><i class="fas ${icon}" style="margin-right:8px;"></i>${item.what}</strong> <small>Quem: ${item.who || 'N/I'} | Quando: ${item.when || 'N/I'} | Custo: R$ ${item.howMuch.toFixed(2)} | Status: ${item.status}</small> <details style="margin-top:5px;"><summary>Ver Detalhes</summary><p><strong>Porquê:</strong> ${item.why || 'N/I'}</p><p><strong>Onde:</strong> ${item.where || 'N/I'}</p><p><strong>Como:</strong> ${item.how || 'N/I'}</p></details> </div> <div class="item-actions"> <button class="app-button secondary action-button" data-action="edit" data-index="${index}"><i class="fas fa-edit"></i></button> <button class="app-button danger action-button" data-action="delete" data-index="${index}"><i class="fas fa-trash"></i></button> </div> </li>`; };
        return winId;
    }
        
    /**
     * Inicializa o WebOS.
     */
    function initializeWebOS() {
        if (window.webOSInitialized) return; // Prevent double initialization
        window.webOSInitialized = true;

        windowManager = new WindowManager();
        themeManager = new ThemeManager(accentPalettes);
        window.windowManager = windowManager; // Make global for other scripts
        
        updateClockTime();
        setInterval(updateClockTime, 10000);

        window.addEventListener('beforeunload', (e) => {
            let hasUnsavedChanges = false;
            windowManager.windows.forEach(winData => { if (winData.currentAppInstance?.isDirty) hasUnsavedChanges = true; });
            if (hasUnsavedChanges) { e.preventDefault(); e.returnValue = ''; }
        });

        // Set up app launchers from the Dock
        windowManager.appLaunchActions = { 'open-file-system': openFileSystem, 'open-gantt-chart': openGanttChart, 'open-project-tasks': openProjectTasks, 'open-kanban-board': openKanbanBoard, 'open-swot-analysis': openSWOTAnalysis, 'open-sipoc-matrix': openSIPOCMatrix, 'open-okr-tracker': openOKRTracker, 'open-ishikawa-diagram': openIshikawaDiagram, 'open-bpmn-modeler': openBPMNModeler, 'open-mind-map': openMindMap, 'open-contract-manager': openContractManager, 'open-checklist-tool': openChecklistTool, 'open-ncr-tool': openNCRTool, 'open-pdca-tool': openPDCATool, 'open-5w2h-tool': open5W2HTool };
        document.querySelectorAll('#appDock .dock-item[data-action]').forEach(item => {
            const action = item.dataset.action;
            if (windowManager.appLaunchActions[action]) {
                item.onclick = (e) => { e.stopPropagation(); windowManager.appLaunchActions[action](); };
            }
        });
        
        const desktopEl = document.getElementById('desktop');
        if (desktopEl) {
             desktopEl.oncontextmenu = (e) => { e.preventDefault(); showDesktopContextMenu(e.clientX, e.clientY); };
        }
        document.onclick = (e) => { const dm = document.getElementById('desktopContextMenu'); if (dm && dm.style.display === 'block' && !dm.contains(e.target)) { hideDesktopContextMenu(); } };
        document.addEventListener('keydown', (e) => { if (e.key === "Escape") { hideDesktopContextMenu(); if(windowManager.stageManager.isActive) windowManager.stageManager.toggle(); } });
        
        const savedWallpaper = localStorage.getItem(STORAGE_KEYS.WALLPAPER);
        if (savedWallpaper) document.body.style.backgroundImage = `url(${savedWallpaper})`;
        
        themeManager.applyThemeVariables();
        document.getElementById('darkModeToggle').onclick = () => themeManager.toggleDarkMode();
        const contextMenuHTML = `<div class="context-menu-item" data-action="open-file-system"><i class="fas fa-folder"></i> Explorador (Nuvem)</div><div class="context-menu-separator"></div><div class="context-menu-item" data-action="toggle-theme-settings"><i class="fas fa-palette"></i> Aparência</div><div class="context-menu-color-palette-container" id="contextMenuColorPaletteContainer" style="display: none;"><div class="context-menu-color-palette" id="accentColorPaletteMenu"></div><div style="padding: 8px 14px; display:flex; align-items:center; justify-content: space-between;"><span style="font-size:0.9em;">Modo Escuro</span><label class="switch" for="darkModeToggleMenu"><input type="checkbox" id="darkModeToggleMenu"><span class="slider round"></span></label></div></div><div class="context-menu-separator"></div><div class="context-menu-item" data-action="choose-wallpaper"><i class="fas fa-image"></i> Alterar Papel de Parede</div><input type="file" id="wallpaperInput" accept="image/*" style="display:none"><div class="context-menu-item" data-action="show-desktop"><i class="fas fa-desktop"></i> Mostrar Área de Trabalho</div><div class="context-menu-separator"></div><div class="context-menu-item" data-action="shutdown"><i class="fas fa-power-off"></i> Sair da Conta</div>`;
        const desktopContextMenuEl = document.getElementById('desktopContextMenu');
        if(desktopContextMenuEl) desktopContextMenuEl.innerHTML = contextMenuHTML;
        setupDesktopContextMenuListeners();
        
        mapNeuralManager.loadState();
        
        showNotification(`Bem-vindo(a) de volta!`, 3500);
    }

    function updateClockTime() { const clockEl = document.getElementById('clock'); if (clockEl) clockEl.textContent = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); }
    function chooseWallpaper() { 
        const wallpaperInput = document.getElementById('wallpaperInput') || document.createElement('input');
        if(!document.getElementById('wallpaperInput')) {
            wallpaperInput.type = 'file';
            wallpaperInput.id = 'wallpaperInput';
            wallpaperInput.accept = "image/*";
            wallpaperInput.style.display = 'none';
            document.body.appendChild(wallpaperInput);
            wallpaperInput.addEventListener('change', e => { 
                if (!e.target.files[0]?.type.startsWith('image/')) { if (e.target.files[0]) showNotification("Selecione um arquivo de imagem.", 3000); return; } 
                const reader = new FileReader(); 
                reader.onload = ev => { 
                    document.body.style.backgroundImage = `url(${ev.target.result})`; 
                    localStorage.setItem(STORAGE_KEYS.WALLPAPER, ev.target.result); 
                }; 
                reader.readAsDataURL(e.target.files[0]); 
            });
        }
        wallpaperInput.click();
    }
    function showDesktop() { windowManager.windows.forEach((wData, winId) => { if (!wData.minimized) windowManager.minimizeWindow(winId); }); }
    function shutdown() {
        let hasUnsavedChanges = false;
        windowManager.windows.forEach(winData => { if (winData.currentAppInstance?.isDirty) hasUnsavedChanges = true; });
        let confirmMsg = 'Deseja realmente sair da sua conta?';
        if (hasUnsavedChanges) {
            confirmMsg = 'Você possui alterações não salvas que serão perdidas. Deseja mesmo sair?';
        }
        if (confirm(confirmMsg)) {
            authManager.signOut();
        }
    }

    let desktopMenuInitialized = false;
     function setupDesktopContextMenuListeners() {
        const deskMenu = document.getElementById('desktopContextMenu'); 
        const colorPaletteContainer = document.getElementById('contextMenuColorPaletteContainer'); 
        if (!deskMenu || !colorPaletteContainer) return; 
        if (desktopMenuInitialized) return;
        deskMenu.querySelectorAll('div.context-menu-item[data-action]').forEach(item => {
            item.onclick = (e) => {
                e.stopPropagation(); 
                const action = item.dataset.action;
                if (action === 'toggle-theme-settings') {
                    const isDisplayed = colorPaletteContainer.style.display === 'block'; 
                    colorPaletteContainer.style.display = isDisplayed ? 'none' : 'block'; 
                    if (!isDisplayed) themeManager._setupAccentPalette(); 
                    return;
                }
                const globalActions = { 'open-file-system': openFileSystem, 'choose-wallpaper': chooseWallpaper, 'show-desktop': showDesktop, 'shutdown': shutdown };
                if (globalActions[action]) globalActions[action]();
                if (action !== 'toggle-theme-settings') hideDesktopContextMenu();
            };
        });
        desktopMenuInitialized = true;
    }

    function showDesktopContextMenu(x, y) {
        const deskMenu = document.getElementById('desktopContextMenu'); if (!deskMenu) return; if (!desktopMenuInitialized) setupDesktopContextMenuListeners();
        themeManager._setupAccentPalette(); const colorPaletteContainer = document.getElementById('contextMenuColorPaletteContainer'); if (colorPaletteContainer) colorPaletteContainer.style.display = 'none';
        deskMenu.style.left = `${x}px`; deskMenu.style.top = `${y}px`; deskMenu.style.display = 'block'; const menuRect = deskMenu.getBoundingClientRect(); const taskbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--taskbar-height'), 10) || 0;
        if (menuRect.right > window.innerWidth) deskMenu.style.left = `${Math.max(0, x - menuRect.width)}px`;
        if (menuRect.bottom > (window.innerHeight - taskbarHeight)) deskMenu.style.top = `${Math.max(0, y - menuRect.height)}px`;
        deskMenu.style.zIndex = (windowManager.zIndex || 100) + 5000;
    }
    function hideDesktopContextMenu() { const dm = document.getElementById('desktopContextMenu'); if(dm) dm.style.display = 'none'; }
    let longPressTimer, touchStartX, touchStartY; const longPressDuration = 700;
    document.getElementById('desktop').addEventListener('touchstart', (e) => { if (e.touches.length > 1) return; touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; longPressTimer = setTimeout(() => { if (longPressTimer) { e.preventDefault(); showDesktopContextMenu(touchStartX, touchStartY); } }, longPressDuration); }, {passive: false});
    function clearLongPressTimer() { clearTimeout(longPressTimer); longPressTimer = null; }
    document.getElementById('desktop').addEventListener('touchend', clearLongPressTimer); document.getElementById('desktop').addEventListener('touchcancel', clearLongPressTimer);
    document.getElementById('desktop').addEventListener('touchmove', (e) => { if (longPressTimer && touchStartX && touchStartY && (Math.abs(e.touches[0].clientX-touchStartX) > 10 || Math.abs(e.touches[0].clientY-touchStartY) > 10)) clearLongPressTimer(); });
</script>

<script>
class SimpleNeuralNet {
  constructor(i,h,o){this.numInputs=i;this.numHidden=h;this.numOutputs=o;this.weightsIH=[];for(let i=0;i<h;i++){this.weightsIH[i]=[];for(let j=0;j<this.numInputs;j++){this.weightsIH[i][j]=Math.random()*2-1;}}this.weightsHO=[];for(let i=0;i<o;i++){this.weightsHO[i]=[];for(let j=0;j<h;j++){this.weightsHO[i][j]=Math.random()*2-1;}}this.biasH=Array(h).fill(0).map(()=>Math.random()*2-1);this.biasO=Array(o).fill(0).map(()=>Math.random()*2-1);}
  static sigmoid(x){return 1/(1+Math.exp(-x));} static dsigmoid(y){return y*(1-y);} static matMulVector(A,v){const r=[];for(let i=0;i<A.length;i++){let s=0;for(let j=0;j<v.length;j++){s+=A[i][j]*v[j];}r[i]=s;}return r;} static vecAdd(v,u){return v.map((val,i)=>val+u[i]);} static vecSub(v,u){return v.map((val,i)=>val-u[i]);} static vecHadamard(v,u){return v.map((val,i)=>val*u[i]);}
  predict(a){const hI=SimpleNeuralNet.matMulVector(this.weightsIH,a);const hWB=SimpleNeuralNet.vecAdd(hI,this.biasH);const hO=hWB.map(SimpleNeuralNet.sigmoid);const fI=SimpleNeuralNet.matMulVector(this.weightsHO,hO);const fWB=SimpleNeuralNet.vecAdd(fI,this.biasO);const fO=fWB.map(SimpleNeuralNet.sigmoid);return{hiddenOutputs:hO,finalOutputs:fO};}
  train(inputs,targets,epochs=1e3,lr=.1){for(let e=0;e<epochs;e++){for(let i=0;i<inputs.length;i++){const a=inputs[i],t=targets[i];const{hiddenOutputs:hO,finalOutputs:fO}=this.predict(a);const oE=SimpleNeuralNet.vecSub(t,fO);const gO=SimpleNeuralNet.vecHadamard(fO.map(SimpleNeuralNet.dsigmoid),oE);for(let i=0;i<this.numOutputs;i++){for(let j=0;j<this.numHidden;j++){this.weightsHO[i][j]+=lr*gO[i]*hO[j];}this.biasO[i]+=lr*gO[i];}const wT=this.transpose(this.weightsHO),hE=SimpleNeuralNet.matMulVector(wT,oE);const gH=SimpleNeuralNet.vecHadamard(hO.map(SimpleNeuralNet.dsigmoid),hE);for(let i=0;i<this.numHidden;i++){for(let j=0;j<this.numInputs;j++){this.weightsIH[i][j]+=lr*gH[i]*a[j];}this.biasH[i]+=lr*gH[i];}}}}
  transpose(m){return m[0].map((_,c)=>m.map(r=>r[c]));}
  exportState(){return{weightsIH:this.weightsIH,weightsHO:this.weightsHO,biasH:this.biasH,biasO:this.biasO,numInputs:this.numInputs,numHidden:this.numHidden,numOutputs:this.numOutputs};}
  importState(s){if(s.numInputs!==this.numInputs||s.numHidden!==this.numHidden||s.numOutputs!==this.numOutputs){console.error("Arquitetura incompatível");return!1;}this.weightsIH=s.weightsIH;this.weightsHO=s.weightsHO;this.biasH=s.biasH;this.biasO=s.biasO;return!0;}
}
class MapNeuralManager {
    constructor(){this.numInputs=4;this.numHidden=6;this.numOutputs=1;this.neuralNet=new SimpleNeuralNet(this.numInputs,this.numHidden,this.numOutputs);this.trainingData={inputs:[],targets:[]};this.maxSubtasksForNormalization=5;}
    _normalizeTaskFeatures(t){const pMap={baixa:.2,media:.5,alta:.8},uP=pMap[t.priority]||.5;let dP=0;if(t.dueDate){const e=new Date,a=new Date(t.dueDate+"T00:00:00Z");e.setHours(0,0,0,0);const s=Math.ceil((a-e)/864e5);s<=0?dP=1:s<=3?dP=.8:s<=7?dP=.6:s<=14?dP=.4:dP=.2}const nS=Math.min((t.subtasks?.length||0)/this.maxSubtasksForNormalization,1),hR=t.responsible?.trim()!==""?1:0;return[uP,dP,nS,hR];}
    getTaskPriorityPrediction(t){return t.completed?0:this.neuralNet.predict(this._normalizeTaskFeatures(t)).finalOutputs[0];}
    addTrainingSample(t,p){this.trainingData.inputs.push(this._normalizeTaskFeatures(t));this.trainingData.targets.push([p]);this.saveTrainingData();}
    trainNetwork(epochs=500,lr=.05){if(this.trainingData.inputs.length===0)return;this.neuralNet.train(this.trainingData.inputs,this.trainingData.targets,epochs,lr);this.saveState();}
    saveState(){localStorage.setItem(STORAGE_KEYS.MAP_NEURAL_STATE,JSON.stringify(this.neuralNet.exportState()));}
    loadState(){const s=localStorage.getItem(STORAGE_KEYS.MAP_NEURAL_STATE);if(s)try{const p=JSON.parse(s);this.neuralNet.importState(p)||console.warn("Falha ao importar estado.");}catch(e){console.error("Erro ao carregar estado.",e);}this.loadTrainingData();}
    saveTrainingData(){localStorage.setItem(STORAGE_KEYS.MAP_NEURAL_TRAINING_DATA,JSON.stringify(this.trainingData));}
    loadTrainingData(){const d=localStorage.getItem(STORAGE_KEYS.MAP_NEURAL_TRAINING_DATA);if(d)try{this.trainingData=JSON.parse(d);}catch(e){console.error("Erro ao carregar treino.",e);this.trainingData={inputs:[],targets:[]};}}
}
const mapNeuralManager = new MapNeuralManager();
</script>

<script>
    (function(){
        const SNAP_THRESHOLD = 40; const SNAP_ANIM = 'all 0.18s cubic-bezier(.34,1.56,.64,1)';
        let draggingWin = null;
        document.addEventListener('mousedown', (e) => { const win = e.target.closest('.window'); if (!win) return; const titleBar = e.target.closest('.title-bar'); if (!titleBar || e.target.classList.contains('window-control')) return; draggingWin = win; win.dataset.dragging = '1'; });
        document.addEventListener('mouseup', () => { if (!draggingWin) return; const win = draggingWin; delete draggingWin.dataset.dragging; const rect = win.getBoundingClientRect(); const W = window.innerWidth; const H = window.innerHeight - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--taskbar-height')) || 48); if (draggingWin) { draggingWin = null; function near(val, edge) { return Math.abs(val - edge) <= SNAP_THRESHOLD; } let snap = null; if (near(rect.top, 0) && rect.left > SNAP_THRESHOLD && rect.right < W - SNAP_THRESHOLD) { snap = {left: 0, top: 0, width: W, height: H}; } if (!snap) { if (near(rect.left, 0)) snap = {left:0, top:0, width: W/2, height:H}; else if (near(rect.right, W)) snap = {left:W/2, top:0, width: W/2, height:H}; } if (!snap) { if (near(rect.top, 0)) snap = {left:0, top:0, width:W, height:H/2}; else if (near(rect.bottom, H)) snap = {left:0, top:H/2, width:W, height:H/2}; } if (!snap) { if (near(rect.left,0) && near(rect.top,0)) snap = {left:0, top:0, width:W/2, height:H/2}; else if (near(rect.right,W) && near(rect.top,0)) snap = {left:W/2, top:0, width:W/2, height:H/2}; else if (near(rect.left,0) && near(rect.bottom,H)) snap = {left:0, top:H/2, width:W/2, height:H/2}; else if (near(rect.right,W) && near(rect.bottom,H))snap = {left:W/2, top:H/2, width:W/2, height:H/2}; } if (snap) { win.style.transition = SNAP_ANIM; Object.assign(win.style, { left: snap.left + 'px', top: snap.top + 'px', width: snap.width + 'px', height: snap.height + 'px' }); setTimeout(() => (win.style.transition = ''), 200); } } });
    })();
</script>
<script>
    /* sensacional-upgrade */
    window.addEventListener('load', () => {
      document.querySelectorAll('.window').forEach(win => {
        const titleBar = win.querySelector('.title-bar');
        const resizeHandle = win.querySelector('.resize-handle');
        if (titleBar) {
          titleBar.style.touchAction = 'none';
          let dragging = false, startX, startY, origX, origY;
          let lastMoves = [], lastTime = 0;
          let lastTap = 0;
          // Pointer down for drag and double-tap detection
          titleBar.addEventListener('pointerdown', e => {
            if (e.button !== 0) return;
            const now = Date.now();
            if (now - lastTap < 300) {
              // Double-tap: toggle maximize/restore
              if (win.classList.contains('maximized')) {
                win.classList.remove('maximized');
                win.style.removeProperty('left');
                win.style.removeProperty('top');
                win.style.removeProperty('width');
                win.style.removeProperty('height');
              } else {
                win.classList.add('maximized');
              }
            }
            lastTap = now;
            // Start dragging
            dragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = win.getBoundingClientRect();
            origX = rect.left;
            origY = rect.top;
            lastMoves = [];
            lastTime = now;
            win.classList.add('dragging');
            titleBar.setPointerCapture(e.pointerId);
          });

          titleBar.addEventListener('pointermove', e => {
            if (!dragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            let newX = origX + dx;
            let newY = origY + dy;
            win.style.left = `${newX}px`;
            win.style.top = `${newY}px`;
            // Record move for inertia
            const now = Date.now();
            lastMoves.push({dx: e.clientX, dy: e.clientY, t: now});
            // Keep last 5 moves
            if (lastMoves.length > 5) lastMoves.shift();
            lastTime = now;
          });

          ['pointerup','pointercancel'].forEach(evt =>
            titleBar.addEventListener(evt, e => {
              if (!dragging) return;
              dragging = false;
              win.classList.remove('dragging');
              titleBar.releasePointerCapture(e.pointerId);
              // Snap functionality
              const rect = win.getBoundingClientRect();
              const vw = window.innerWidth;
              const vh = window.innerHeight - document.querySelector('.taskbar').offsetHeight;
              const edgeThreshold = 50;
              // Snap to top: maximize
              if (rect.top < edgeThreshold) {
                win.classList.add('maximized');
              } else if (rect.left < edgeThreshold) { // left half
                win.classList.remove('maximized');
                win.style.left = '0px';
                win.style.top = '0px';
                win.style.width = 'calc(50vw)';
                win.style.height = 'calc(' + vh + 'px)';
              } else if (rect.left + rect.width > vw - edgeThreshold) { // right half
                win.classList.remove('maximized');
                win.style.left = 'calc(50vw)';
                win.style.top = '0px';
                win.style.width = 'calc(50vw)';
                win.style.height = 'calc(' + vh + 'px)';
              }
              // Inertia effect
              if (lastMoves.length >= 2) {
                const first = lastMoves[0];
                const last = lastMoves[lastMoves.length - 1];
                const dt = (last.t - first.t) / 1000;
                if (dt > 0) {
                  const vx = (last.dx - first.dx) / dt;
                  const vy = (last.dy - first.dy) / dt;
                  // Apply simple momentum (small effect)
                  let momentumX = vx * 0.1, momentumY = vy * 0.1;
                  let currentX = rect.left, currentY = rect.top;
                  const decay = 0.92;
                  const animate = () => {
                    momentumX *= decay;
                    momentumY *= decay;
                    currentX += momentumX;
                    currentY += momentumY;
                    // Bound within viewport
                    currentX = Math.max(0, Math.min(currentX, vw - rect.width));
                    currentY = Math.max(0, Math.min(currentY, vh - rect.height));
                    win.style.left = `${currentX}px`;
                    win.style.top = `${currentY}px`;
                    if (Math.abs(momentumX) > 0.5 || Math.abs(momentumY) > 0.5) requestAnimationFrame(animate);
                  };
                  requestAnimationFrame(animate);
                }
              }
            })
          );
        }
        // Resize via touch/mouse
        if (resizeHandle) {
          resizeHandle.style.touchAction = 'none';
          let resizing = false, startX, startY, origW, origH;
          resizeHandle.addEventListener('pointerdown', e => {
            if (e.button !== 0) return;
            resizing = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = win.getBoundingClientRect();
            origW = rect.width;
            origH = rect.height;
            win.classList.add('resizing');
            resizeHandle.setPointerCapture(e.pointerId);
          });
          resizeHandle.addEventListener('pointermove', e => {
            if (!resizing) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            let newW = origW + dx;
            let newH = origH + dy;
            // Minimum size
            newW = Math.max(newW, 200);
            newH = Math.max(newH, 150);
            win.style.width = `${newW}px`;
            win.style.height = `${newH}px`;
          });
          ['pointerup','pointercancel'].forEach(evt =>
            resizeHandle.addEventListener(evt, e => {
              if (!resizing) return;
              resizing = false;
              win.classList.remove('resizing');
              resizeHandle.releasePointerCapture(e.pointerId);
            })
          );
        }
      });
    });
    </script>
    
</body>
</html>
