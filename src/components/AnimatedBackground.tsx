import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {

    useEffect(() => {
        (function initializeRequestAnimationFrame() {
            let lastTime = 0;
            const vendors = ['ms', 'moz', 'webkit', 'o'];
            for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = (window as any)[vendors[x] + 'RequestAnimationFrame'] as (callback: FrameRequestCallback) => number;
                window.cancelAnimationFrame = (window as any)[vendors[x] + 'CancelAnimationFrame'] as (handle: number) => void
                    || (window as any)[vendors[x] + 'CancelRequestAnimationFrame'] as (handle: number) => void;
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function (callback: FrameRequestCallback): number {
                    const currTime = new Date().getTime();
                    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    const id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function (id: number): void {
                    clearTimeout(id);
                };
        })();

        (function initializeHeader() {
            let width: number, height: number;
            const largeHeader: HTMLElement | null = document.getElementById('large-header');
            const canvas: HTMLCanvasElement | null = document.getElementById('demo-canvas') as HTMLCanvasElement;

            if (largeHeader && canvas) {
                const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

                if (ctx) {
                    let circles: Circle[] = [];
                    let animateHeader: boolean = true;

                    initHeader();
                    addListeners();

                    function initHeader(): void {
                        width = window.innerWidth;
                        height = window.innerHeight;

                        if (largeHeader) largeHeader.style.height = height + 'px';

                        if (canvas) {
                            canvas.width = width;
                            canvas.height = height;
                        }

                        circles = [];
                        for (let x = 0; x < width * 0.5; x++) {
                            const c = new Circle();
                            circles.push(c);
                        }
                        animate();
                    }

                    function addListeners(): void {
                        window.addEventListener('scroll', scrollCheck);
                        window.addEventListener('resize', resize);
                    }

                    function scrollCheck(): void {
                        animateHeader = document.body.scrollTop > height ? false : true;
                    }

                    function resize(): void {
                        width = window.innerWidth;
                        height = window.innerHeight;

                        if (largeHeader) largeHeader.style.height = height + 'px';
                        if (canvas) {
                            canvas.width = width;
                            canvas.height = height;
                        }
                    }

                    function animate(): void {
                        if (animateHeader && ctx) {
                            ctx.clearRect(0, 0, width, height);
                            circles.forEach(circle => circle.draw(ctx));
                        }
                        requestAnimationFrame(animate);
                    }
                }
            }
        })();
    }, []);

    return (
        <>
            <div id="large-header"  style={{ position: 'fixed', width: '100%', height: '100%',
                background: 'linear-gradient(to right, #780206, #061161)'
                }}>
                <canvas id="demo-canvas" style={{ position: 'absolute', top: '0', left: '0' }} />
            </div>
        </>
    );
}

class Circle {
    pos: { x: number, y: number };
    alpha: number;
    scale: number;
    velocity: number;

    constructor() {
        this.pos = { x: 0, y: 0 };
        this.alpha = 0;
        this.scale = 0;
        this.velocity = 0;
        this.init();
    }

    init(): void {
        this.pos.x = Math.random() * window.innerWidth;
        this.pos.y = -Math.random() * 100;
        this.alpha = 0.1 + Math.random() * 0.3;
        this.scale = 0.1 + Math.random() * 0.3;
        this.velocity = Math.random();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (this.alpha <= 0 || this.pos.y > window.innerHeight) { 
            this.init();
        }
        this.pos.y += this.velocity;
        this.alpha -= 0.0005;
        if (ctx) {
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.scale * 10, 0, 2 * Math.PI, false);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.fill();
        }
    }
}

export default AnimatedBackground;
