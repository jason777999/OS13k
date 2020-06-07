const programs = 
[
{name:'Close All', icon:'❌',},
{name:'Help', icon:'<span style=color:#0f0>?</span>', src:'help.html?11', width:380, height:380},
{name:'More Info', icon:'👨‍💻', src:'info.html?7'},
{name:'System', icon:'⚙️', folder:
[
    {name:'Shell', icon:'<span style=color:#0f0;background:#000>&nbsp;>&nbsp;</span>', src:'shell.html?1', reload:1},
    {name:'Test', icon:'😄', src:'test.html?6', multiple:1, reload:1, code:1},
    {name:'Test Folder', icon:'📁', folder:
    [
        {name:'Test2', icon:'✌️', src:'test.html?6'},
    ]},
]},
{name:'Tools', icon:'🔧', folder:
[
    {name:'Photo Booth', icon:'📸', src:'photoBooth.html', width:1380, height:600},
    {name:'Unicode Toys', icon:'𝖀', author:'Xem', src:'unicodeToys.html', width:500, height:800},
    {name:'Mini Shadertoy', icon:'𝓢', src:'miniShadertoy.html', width:340, height:400},
    {name:'Text Editor', icon:'📝', src:'textEditor.html', width:540, height:720},
]},
{name:'Games', icon:'🎮', folder:
[
    {name:'Lava Rush', icon:'🌋', author:'Jeremy Burns', src:'lavaRush.html?4', width:640, height:400},
    {name:'Sn1ke', icon:'👀', author:'Codegolf Team', src:'sn1ke.html', width:450, height:330},
    {name:'Tetris', icon:'<span style=font-size:10>▀█▀</span>', author:'Veubeke', src:'tetris.html', width:340, height:430},
    {name:`Queen's Gambit`, icon:'<span style=color:#f0f>♛</span>', src:'queensGambit.html?4', reload:1},
    {name:'Free Cell', icon:'♠️', src:'freeCell.html', width:800, height:1e3},
    {name:'Digit Dilemma', icon:'<span style=font-family:monospace>☻</span>', src:'digitDilemma.html?2'},
    {name:'Hue Jumper', icon:'🌲', src:'hueJumper.html', reload:1},
]},
{name:'Music', icon:'🎶', folder:
[
    {name:'Min Bytes', icon:'<span style=color:#f00>𝓜</span>', width:500, height:500, src:'minBytes.html?5'},
]},
{name:'Toys', icon:'🤖', folder:
[
    {name:'ZzFX Soundboard', icon:'𝐙𝐙', src:'zzfxSoundBoard.html?1'},
    {name:'Yin Yangs', icon:'☯️', src:'infiniteYinYangs.shader.txt?2'},
    {name:'Vogel Spiral', icon:'🌀', src:'vogelSpiral.shader.txt?2'},
    {name:'Meta OS13k', icon:'𝐎𝐒', src:'../index.html'},
    {name:'ZzArt Landscape', icon:'𝓩', src:'zzart.shader.txt?3'},
]},
{name:'Dweets', icon:'<b>III</b>', folder:
[
    {name:'Dweet View', icon:'<span style=color:#f00;background:#000><b>&nbsp;III&nbsp;</b></span>', src:'dweetView.html', width:800, height:800},
    {name:'Black Hole', icon:'🌌', src:'blackHole.dweet.js'},
    {name:'Mandelbrot Nebula', icon:'🌟', src:'mandelbrotNebula.dweet.js'},
    {name:'Bogus Roads', icon:'🛣️', src:'bogusRoads.dweet.js'},
    {name:'Automatic Breakout', icon:'●', src:'breakout.dweet.js'},
    {name:'Underwater Cavern', icon:'🌊', author:'Pavel', src:'underwaterCavern.dweet.js'},
    {name:'City Traffic', icon:'🚌', author:'Tomxor', src:'cityTraffic.dweet.js'},
    {name:'Train Set', icon:'🚂', author:'jylikangas', src:'trainSet.dweet.js'},
]},
];