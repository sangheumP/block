const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 1 },
            debug: true
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);

function preload() {}

function create() {
    // 바닥 생성
    this.matter.add.rectangle(400, 590, 800, 20, { isStatic: true });

    // 블록 생성 (정사각형)
    block = this.matter.add.rectangle(200, 100, 60, 60, {
        restitution: 0.4,
        friction: 0.8
    });

    // 마우스 클릭 시 블록을 오른쪽으로 발사
    this.input.on('pointerdown', () => {
        this.matter.body.setVelocity(block, { x: 8, y: -10 });
    });
}

function update() {}
