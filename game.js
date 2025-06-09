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

    // 마우스 클릭 시 클릭한 위치에서 블록을 생성하고 오른쪽으로 발사
    this.input.on('pointerdown', pointer => {
        const block = this.matter.add.rectangle(pointer.x, pointer.y, 60, 60, {
            restitution: 0.4,
            friction: 0.8
        });
        this.matter.body.setVelocity(block, { x: 8, y: -10 });
    });
}

function update() {}
