export class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, name, characterType) {
        super(scene, x, y, name);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setBounce(0.2);
        //this.setCollideWorldBounds(true);
        this.scale = 1.2;

        this.characterType = characterType;
        this.isAlive = true;
        this.isJumping = false;
        this.isDoubleJumping = false;
        this.jumpCount = 0;
        this.speed = 20;
        this.jumpSpeed = 30;
        this.cursors;

        this.preload();

    }

    preload = () => {
        this.scene.load.once('complete', this.create, this.scene);
        this.scene.load.start();
    }


    create = () => {

        this.cursors = this.scene.input.keyboard.createCursorKeys();

        //Füge Animationen hinzu
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_idle`),
            frameRate: 18,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_run`),
            frameRate: 24,
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_jump`),
            frameRate: 24,
            repeat: -1
        });

        this.anims.create({
            key: 'double_jump',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_double_jump`),
            frameRate: 30,
            repeat: -1
        });

        this.anims.create({
            key: 'hit',
            frames: this.anims.generateFrameNumbers(`${this.characterType}_hit`),
            frameRate: 30,
            repeat: -1
        });
        //////////////////////

        //Spiele Stehanimation ab
        this.play("idle");

        this.scene.events.on('update', (t, dt) => { this.update(t, dt) });
    }

    update = (t, dt) => {

        if (this.isAlive === false) return;

        this.playerControl(t, dt);
    }

    playerControl = (t, dt) => {
        //Schauen ob Pfeiltasten gedrückt werden und falls ja Spieler bewegen
        if (this.cursors.left.isDown) {
            this.setVelocityX(-this.speed * dt);

            if (this.isJumping === false) {
                this.play("run", true);
            }

            this.flipX = true;
        }
        else if (this.cursors.right.isDown) {
            this.setVelocityX(this.speed * dt);

            if (this.isJumping === false) {
                this.play("run", true);
            }

            this.flipX = false;
        } else {
            this.setVelocityX(0);

            //Nur wenn Spieler nicht springt, wird die Stehanimation gespielt
            if (this.isJumping === false) {
                this.play("idle", true);
            }

        }

        //Springen
        if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.jumpCount < 2) {
            this.setVelocityY(-this.jumpSpeed * dt);

            this.isJumping = true;
            if (this.jumpCount === 0) {
                this.play("jump", true);
            } else if (this.jumpCount === 1) {
                this.play("double_jump", true);
            }

            this.jumpCount++;

            this.checkBlockedDown = false;
            setTimeout(() => {
                this.checkBlockedDown = true;
            }, 500)

        }

        if (this.body.blocked.down && this.checkBlockedDown == true) {
            this.jumpCount = 0;
            this.isJumping = false;
        }

    }

    kill = () => {

        if (this.isAlive === true) {
            console.log("kill")
            this.setVelocityY(-600)
            this.play("hit", true);
            this.isAlive = false;

            setTimeout(() => {
                this.setPosition(200, 600);
                this.isAlive = true;
            }, 600)
        }
    }

}