const aliens = {
    goop: {
        name: 'Goop',
        image: 'https://i.pinimg.com/564x/75/71/16/757116287d9d5ca1408dcff99d45fc69.jpg',
        race: 'Polymorph'
    },
    swampFire: {
        name: 'Swampfire',
        image: 'https://i.pinimg.com/736x/71/9a/f9/719af9adc48da805335ddc33c309964f.jpg',
        race: 'Methanosian'
    },
    chromaStone: {
        name: 'Chromastone',
        image: 'https://i.pinimg.com/564x/cc/f4/f3/ccf4f3ca4210a038ac20e813a7e498ae.jpg',
        race: 'Crystalsapien'
    },
    bigChill: {
        name: 'Big Chill',
        image: 'https://i.pinimg.com/originals/60/c7/76/60c776269dcd1cc65ad2190d68df82c6.jpg',
        race: 'Necrofriggian'
    },
    humungosaur: {
        name: 'Humungousaur',
        image: 'https://i.pinimg.com/736x/aa/ff/04/aaff04cded394c5a1f2a63fd92ce7ba6.jpg',
        race: 'Vaxasaurian'
    },
    brainstorm: {
        name: 'Brainstorm',
        image: 'https://i.pinimg.com/736x/fb/62/96/fb62965c00f90a3170a7a96088e195c8.jpg',
        race: 'Cerebrocrustacean'
    },
    jetray: {
        name: 'Jetray',
        image: 'https://i.pinimg.com/originals/0b/eb/53/0beb534242466b3f19aa869b97241899.png',
        race: 'Aerophibian'
    },
    spidermonkey: {
        name: 'Spider Monkey',
        image: 'https://ben10hero.com/wp-content/uploads/2016/11/ap2_200.png',
        race: 'Arachnichimp'
    },
    echoecho: {
        name: 'Echo Echo',
        image: 'https://i.ytimg.com/vi/CFxclFi_J-I/maxresdefault.jpg',
        race: 'Sonorosian'
    },
    alienX: {
        name: 'Alien X',
        image: 'https://i.ytimg.com/vi/wb2sY8wyzZ8/sddefault.jpg',
        race: 'Celestialsapien',
    },
    cannonBolt: {
        name: 'Cannonbolt',
        image: 'https://i.pinimg.com/564x/50/6c/59/506c594eb4485da77093492cc3dd7045.jpg',
        race: 'Arburian Pelarota',
    },
    upchuck: {
        name: 'Upchuck',
        image: 'https://i.pinimg.com/564x/b7/29/3d/b7293db23b8546172b96ea6bb1f27434.jpg',
        race: 'Perk/Murk Gourmand',
    },
    wayBig: {
        name: 'Way Big',
        image: 'https://i.pinimg.com/564x/6e/45/eb/6e45ebe67a287a9bdb81913367103c34.jpg',
        race: `To'kustar`
    },
    diamondHead: {
        name: 'Diamondhead',
        image: 'https://i.pinimg.com/736x/26/4f/4c/264f4c8c1003516527fdb19d5324b0d9.jpg',
        race: 'Petrosapien'
    },
    ghostfreak: {
        name: 'Ghostfreak',
        image: 'https://ben10hero.com/wp-content/uploads/2016/07/tus_263.png',
        race: 'Ectonurite'
    },
    lodestar: {
        name: 'Lodestar',
        image: 'https://i.pinimg.com/564x/f9/2a/e0/f92ae029bbaf1cf9e6a255122d8ef6c2.jpg',
        race: 'Biot-savartian'
    },
    rath: {
        name: 'Rath',
        image: 'https://i.pinimg.com/564x/9d/cd/b1/9dcdb12d214c9740be24844dbd7590ad.jpg',
        race: 'Appoplexian'
    },
    fourarms: {
        name: 'Four Arms',
        image: 'https://i.pinimg.com/564x/ef/1f/d7/ef1fd7f6597bf58f8e3f13b5fffad7df.jpg',
        race: 'Tetramand'
    },
    armodrillo: {
        name: 'Armodrillo',
        image: 'https://i.pinimg.com/564x/63/0e/fb/630efb45445087cbf3d07de3baaa0c49.jpg',
        race: 'Talpaedan'
    },
    waterHazard: {
        name: 'Water Hazard',
        image: 'https://i.pinimg.com/564x/ef/f9/1f/eff91f163acc3ac0ed46d453e871e806.jpg',
        race: 'Orishan'
    },
    amphibian: {
        name: 'Amphibian',
        image: 'https://i.pinimg.com/564x/9b/c2/1e/9bc21e3cdac7147494f61e202ba46691.jpg',
        race: 'Amperi'
    },
    terraspin: {
        name: 'Terraspin',
        image: 'https://e1.pxfuel.com/desktop-wallpaper/54/202/desktop-wallpaper-terrospin-ben-10-ultimate-alien-1614x973-for-your-mobile-tablet.jpg',
        race: 'Geochelone Aerios'
    },
    nrg: {
        name: 'NRG',
        image: 'https://i.pinimg.com/564x/c2/a2/35/c2a235d44630158b85caa994dca5f6fd.jpg',
        race: 'Prypiatosian-B'
    },
    wildmutt: {
        name: 'Wildmutt',
        image: 'https://preview.redd.it/wemc1kt671v71.png?width=640&crop=smart&auto=webp&s=8006aff0f583855ceeef166878200a1d073cda58',
        race: 'Vulpimancer'
    },
    clockwork: {
        name: 'Clockwork',
        image: 'https://i.pinimg.com/564x/77/2f/e3/772fe3cf0aa8bd548730c710af3d58d3.jpg',
        race: 'Chronosapien'
    },
    eatle: {
        name: 'Eatle',
        image: 'https://ben10hero.com/wp-content/uploads/2017/04/cafs_373.png',
        race: 'Oryctini'
    },
    fasttrack: {
        name: 'Fasttrack',
        image: 'https://i.pinimg.com/564x/ad/a0/a6/ada0a6594274eb200758b5e70f752ca2.jpg',
        race: 'Citrakayah'
    },
    juryRigg: {
        name: 'Juryrigg',
        image: 'https://i.redd.it/anyone-else-think-of-jury-rigg-as-more-of-an-omniverse-v0-nt33sa0onfca1.jpg?width=640&format=pjpg&auto=webp&s=bdf1c90718e6af3eb915735f8bb461df90b10113',
        race: 'Planchaküle'
    },
    chamalien: {
        name: 'Chamalien',
        image: 'https://i.ytimg.com/vi/IP8J6mKZFoU/sddefault.jpg',
        race: 'Merlinisapien'
    },
    ultimateA: {
        name: 'Ultimate Humungousaur',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrBtQ3tLk2a7cK7N8_pj97JPXec1eKccpBDgEuAHPoZQf-zVlpJ-bsSQwy6AcJpeRHGms08PRODh9DkPGbouIiB4KdZL8mTT0jU4_O3GkGwNEgNsWUHPXEephT9EH5OT7n2zc1iC3N01bK/s1600/Ultimate+humungousaur+humungosaur+ben+10+ultimate+alien+force+omniverse+blog+omninews+dinosaur+reboot.png',
        race: 'Evolved Vaxasaurian'
    },
    ultimateB: {
        name: 'Ultimate Swampfire',
        image: 'https://i.pinimg.com/736x/d9/44/bb/d944bb206215316732fd6bc5742dd6db.jpg',
        race: 'Evolved Methanosian'
    },
    ultimateC: {
        name: 'Ultimate Echo Echo',
        image: 'https://i.redd.it/hwtbz9d9thfb1.jpg',
        race: 'Evolved Sonorosian'
    },
    ultimateD: {
        name: 'Ultimate Big Chill',
        image: 'https://preview.redd.it/5n5dnjc27x461.png?width=1024&format=png&auto=webp&s=357ec36eea38eb8a8ea3ff3f4a5b7b5bf5ec9112',
        race: 'Evolved Necrofriggian'
    },
    ultimateE: {
        name: 'Ultimate Spidermonkey',
        image: 'https://i.pinimg.com/564x/f8/8c/90/f88c9024bda078b28c7e723bf050546c.jpg',
        race: 'Evolved Arachnichimp'
    },
    ultimateF: {
        name: 'Ultimate Wildmutt',
        image: 'https://preview.redd.it/what-does-ultimate-wildmutt-do-different-than-original-one-v0-2y7i5aa703ca1.jpg?auto=webp&s=feead3e66a280de1093435093ac520ea4267dad3',
        race: 'Evolved Vulpimancer'
    },
    ultimateG: {
        name: 'Ultimate Way Big',
        image: 'https://i.ytimg.com/vi/V7e9dRtpE1Q/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgFyh_MA8=&rs=AOn4CLC_UuMUrvTZ6PtGm67eqgniu5BQsQ',
        race: `Evolved To'kustar`
    },
    ultimateH: {
        name: 'Ultimate Cannonbolt',
        image: 'https://i.pinimg.com/564x/09/b8/3f/09b83ff0a63bc78042ff7e9d760f35ed.jpg',
        race: 'Evolved Arburian Pelarota'
    }
    





};

export default aliens;
