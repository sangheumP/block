let block;
let cannon;

function preload() {}

function create() {
    // 바닥
    this.matter.add.rectangle(400, 590, 800, 20, { isStatic: true });

    // 대포 (시각용만, 물리 엔진 없이)
    cannon = this.add.rectangle(400, 100, 80, 40, 0x000000); // 그냥 시각용, 물리엔진 안 씀

    // 블록 생성은 하지 않음 (클릭 시 생성)
    this.input.on('pointerdown', () => {
        if (block) return; // 이미 블록 있으면 다시 생성 안 함

        block = this.matter.add.rectangle(400, 140, 60, 60, {
            restitution: 0.4,
            friction: 0.8
        });

        // 처음에 위로 쏘기
        this.matter.body.setVelocity(block, { x: 0, y: -15 });
    });
}

function update() {}
