(() => {
        const canvas = document.getElementById('ascii-bg');
        const ctx = canvas.getContext('2d');
        const hero = canvas.parentElement;

        const chars = ' .:-=+*#%@'.split('');
        const fontSize = 13;
        const lineHeight = 15;
        const speed = 0.035;
        const waveLength = 0.045;
        const alpha = 0.16;

        let width, height, cols, rows, charWidth;
        let time = 0;
        let raf;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = hero.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.font = `${fontSize}px "DotGothic16", monospace`;
            charWidth = ctx.measureText('0').width || fontSize * 0.6;
            cols = Math.ceil(width / charWidth) + 1;
            rows = Math.ceil(height / lineHeight) + 1;
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.textBaseline = 'top';

            const cx = width / 2;
            const cy = height / 2;

            for (let y = 0; y < rows; y++) {
                const py = y * lineHeight;
                const dy = py - cy;
                let line = '';
                for (let x = 0; x < cols; x++) {
                    const dx = x * charWidth - cx;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const v = Math.sin(dist * waveLength - time) * 0.5 + 0.5;
                    line += chars[Math.floor(v * (chars.length - 1))];
                }
                ctx.fillText(line, 0, py);
            }

            time += speed;
            raf = requestAnimationFrame(draw);
        }

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        window.addEventListener('resize', resize);
        resize();
        if (document.fonts) document.fonts.ready.then(resize);
        if (!reduceMotion) draw();
    })();