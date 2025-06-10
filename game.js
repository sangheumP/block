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

    // 화면 상단 중앙에 대포 생성
    const cannon = this.matter.add.rectangle(400, 50, 80, 40, {
        isStatic: true
    });

    // 마우스 클릭 시 대포에서 클릭 방향으로 블록을 발사
    this.input.on('pointerdown', pointer => {
        const block = this.matter.add.rectangle(cannon.position.x, cannon.position.y, 60, 60, {
            restitution: 0.4,
            friction: 0.8
        });

        const direction = new Phaser.Math.Vector2(
            pointer.x - cannon.position.x,
            pointer.y - cannon.position.y
        ).normalize();

        this.matter.body.setVelocity(block, {
            x: direction.x * 15,
            y: direction.y * 15
        });
    });
}

function update() {}
