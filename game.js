let block;
let cannon;

function preload() {}

function create() {
    // 바닥 생성
    this.matter.add.rectangle(400, 590, 800, 20, { isStatic: true });

    // 대포를 화면 위 중앙에 추가 (시각적 도형)
    cannon = this.add.rectangle(400, 50, 80, 40, 0x000000); // 색상은 검정
    this.matter.add.gameObject(cannon, { isStatic: true }); // Matter 물리 적용 (optional)

    // 블록 생성 (정사각형)
    block = this.matter.add.rectangle(400, 100, 60, 60, {
        restitution: 0.4,
        friction: 0.8
    });

    // 마우스 클릭 시 블록 발사
    this.input.on('pointerdown', () => {
        this.matter.body.setVelocity(block, { x: 0, y: -15 }); // 위로 쏘는 느낌
    });
}

function update() {}
