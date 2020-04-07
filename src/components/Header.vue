<template>
	<header>
		<span>Music App</span>

		<div class="opoveshenie_block">
			<div class="first_part">
				<span></span>
			</div>
			<div class="second_part">

			</div>
		</div>
	</header>
</template>
<script>
	export default {}
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');


	header {
		width: 1590.5px; /* Так как в замечательной Figma размер под "десктоп":  1440 x 1024, то приходится изворачиваться с моим то почти 2k экраном(1590px) */
		height: 100px;
		background: black;
        left: 0;
        top: 0;
        position: absolute;
	}

	header span {
		position: absolute;
		left: 650px;
		top: 23px;
		font-family: 'Fira Sans', sans-serif;
		font-size: 45px;
		color: white;
	}

	header .opoveshenie_block {
		position: absolute;
		height: 95px;
		width: 525px;
		border: 1px solid white;
		margin-left: 1055.5px; 
		margin-top: 1.5px;
		display: none; 
		opacity: 0; 
	}

	header .opoveshenie_block .first_part {
		width: 285px;
		height: 95px;
		top: 0;
		left: 0;
		background: black;
		display: inline-block;
	}

    header .opoveshenie_block .first_part span {
    	font-size: 15px;
    	font-family: 'Fira Sans', sans-serif;
    	position: relative;
    	left: 5px;
    	top: 35px;
    }

    header .opoveshenie_block .second_part {
    	height: 95px;
    	width: 240px;
    	position: relative;
    	top: 0;
    	float: right;
    	right: 0;
        background-image: url('../assets/img/TLOU2_button.jpg');
        background-size: cover;
    }

    header .opoveshenie_block.show_n_block_anim {
    	animation: sh_sword .7s linear 1;
    }

    @keyframes sh_sword {
    	0% {
          opacity: .2;
    	}

    	25% { 
          opacity: .4;
    	}

    	50% {
          opacity: .6; 
    	}

    	75% {
          opacity: .8;
    	}

    	100% {
          opacity: 1;
    	}
    }

    header .opoveshenie_block.show_n_block {
    	display: block;
        opacity: 1;
    }

    header .opoveshenie_block.hide_block {
      opacity: 0;
      display: none;
    }

    header .opoveshenie_block.fokus {
      animation: sword 1.2s linear 1;
    }

    @keyframes sword {
    	0% {
    		opacity: .8;
    	}

    	25% {
    		opacity: .6;
    	}

    	50% {
    		opacity: .4;
    	}

    	75% {
    		opacity: .2;
    	}

    	100% {
    		opacity: 0;
       	}
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
        header {
            height: 200px;
        }

        header span {
            font-size: 55px;
            top: 73px;
            left: 140px;
        }

        header .opoveshenie_block {
            height: 195px;
            margin-top: 2.5px;
            width: 785px;
            margin-left: 795.5px;
        }

        header .opoveshenie_block .first_part {
            width: 420px;
            height: 195px;
        }

        header .opoveshenie_block .first_part span {
            font-size: 30px;
            top: 82.5px;
            left: 20px;
        }

        header .opoveshenie_block .second_part {
            height: 195px;
            width: 365px;
        }
    }
</style>