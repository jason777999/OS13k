const programs = 
[
{name:'Close All', icon:'❌',},
{name:'Help', icon:'<span style=color:#0f0>?</span>', src:'help.html?11', width:380, height:380},
{name:'More Info', icon:'👨‍💻', src:'info.html?8'},
{name:'System', icon:'⚙️', folder:
[
    {name:'Shell', icon:'<span style=color:#0f0;background:#000>&nbsp;>&nbsp;</span>', src:'system/shell.html?1', reload:1},
    {name:'Test', icon:'😄', src:'system/test.html?6', multiple:1, reload:1, code:1},
    {name:'Test Folder', icon:'📁', folder:
    [
        {name:'Test2', icon:'✌️', src:'system/test.html?6'},
    ]},
]},
{name:'Tools', icon:'🔧', folder:
[
    {name:'Photo Booth', icon:'📸', src:'tools/photoBooth.html', width:1380, height:600},
    {name:'Unicode Toys', icon:'𝖀', author:'Xem', src:'tools/unicodeToys.html', width:500, height:800},
    {name:'Mini Shadertoy', icon:'𝓢', src:'tools/miniShadertoy.html', width:340, height:400},
    {name:'Text Editor', icon:'📝', src:'tools/textEditor.html', width:540, height:720},
]},
{name:'Games', icon:'🎮', folder:
[
    {name:'Swatch', icon:'🌈', src:'games/swatch.html', author:'Nicholas Ortenzio', width:320, height:320},
    {name:'Lava Rush', icon:'🌋', author:'Jeremy Burns', src:'games/lavaRush.html?4', width:640, height:400},
    {name:'Sn1ke', icon:'👀', author:'Codegolf Team', src:'games/sn1ke.html', width:450, height:330},
    {name:'Tetris', icon:'<span style=font-size:10>▀█▀</span>', author:'Veubeke', src:'games/tetris.html', width:340, height:430},
    {name:`Queen's Gambit`, icon:'<span style=color:#f0f>♛</span>', src:'games/queensGambit.html?4', reload:1},
    {name:'Free Cell', icon:'♠️', src:'games/freeCell.html', width:800, height:1e3},
    {name:'Digit Dilemma', icon:'<span style=font-family:monospace>☻</span>', src:'games/digitDilemma.html?2'},
    {name:'Hue Jumper', icon:'🌲', src:'games/hueJumper.html', reload:1},
]},
{name:'Music', icon:'🎶', folder:
[
    {name:'Min Bytes', icon:'<span style=color:#f00>𝓜</span>', width:500, height:500, src:'music/minBytes.html?5'},
]},
{name:'Toys', icon:'🤖', folder:
[
    {name:'ZzFX Soundboard', icon:'𝐙𝐙', src:'toys/zzfxSoundBoard.html?1'},
    {name:'Yin Yangs', icon:'☯️', src:'toys/infiniteYinYangs.shader.txt?2'},
    {name:'Vogel Spiral', icon:'🌀', src:'toys/vogelSpiral.shader.txt?2'},
    {name:'Meta OS13k', icon:'𝐎𝐒', src:'index.html'},
    {name:'ZzArt Landscape', icon:'𝓩', src:'toys/zzart.shader.txt?3'},
]},
{name:'Dweets', icon:'<b>III</b>', folder:
[
    {name:'Dweet View', icon:'<span style=color:#f00;background:#000><b>&nbsp;III&nbsp;</b></span>', src:'dweets/dweetView.html', width:800, height:800},
    {name:'Black Hole', icon:'🌌', src:'dweets/blackHole.dweet.js'},
    {name:'Mandelbrot Nebula', icon:'🌟', src:'dweets/mandelbrotNebula.dweet.js'},
    {name:'Bogus Roads', icon:'🛣️', src:'dweets/bogusRoads.dweet.js'},
    {name:'Automatic Breakout', icon:'●', src:'dweets/breakout.dweet.js'},
    {name:'Underwater Cavern', icon:'🌊', author:'Pavel', src:'dweets/underwaterCavern.dweet.js'},
    {name:'City Traffic', icon:'🚌', author:'Tomxor', src:'dweets/cityTraffic.dweet.js'},
    {name:'Train Set', icon:'🚂', author:'jylikangas', src:'dweets/trainSet.dweet.js'},
]},
];