<template>
    <div class="Panel">
     	<div class="sound_panels p1">
     		<router-link 
                    to="/"
                    exact
                    active-class="active"
                    tag="span"
     		>The Last  Of Us Part II</router-link>
     	</div>
     	<div class="sound_panels p2">
     		<router-link
     		        to="/Red_dead"
     		        active-class="active"
     		        tag="span"
     		>Red Dead Redemption II</router-link>
     	</div>
     	<div class="sound_panels p3"><router-link
     		        to="/Uncharted"
     		        active-class="active"
     		        tag="span"
     		>Uncharted 4</router-link></div>
     	<div class="sound_panels p4">
     		<router-link
     		        to="/Detroit"
     		        active-class="active"
     		        tag="span"
     		>Detroit: become human</router-link>
     	</div>
     	<div class="sound_panels p5">
     		<router-link
     		        to="/God"
     		        active-class="active"
     		        tag="span"
     		>God Of War</router-link>
     	</div>
     	<div class="sound_panels p6">
     		<router-link
     		        to="/Death"
     		        active-class="active"
     		        tag="span"
     		>Death Stranding</router-link>
     	</div>
     	<div class="sound_panels p7">
     		<router-link
     		        to="/Red_1"
     		        active-class="active"
     		        tag="span"
     		>Red Dead Redemption</router-link>
     	</div>
     	<div class="sound_panels p8">
     		<router-link
     		        to="/Infamous"
     		        active-class="active"
     		        tag="span"
     		>Infamous Second Son</router-link>
     	</div>
     	<div class="sound_panels p9">
     		<router-link
     		        to="/Battlefield_1"
     		        active-class="active"
     		        tag="span"
     		>Battlefield 1</router-link>
     	</div>
     	<div class="sound_panels p10">
     		<router-link
                    to="/DOOM_2016"
                    active-class="active"
                    tag="span"
     		>DOOM 2016</router-link>
     	</div>
    </div>
</template>
<script>
	export default {}
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	.Panel {
		height: 1501px;
		position: absolute;
		left: 0;
		top: 98px;
		width: 510px;
	}

	.Panel .sound_panels {
		position: absolute;
		width: 510px;
		left: 0;
		display: block;
		cursor: pointer;
	}

	.Panel .sound_panels span {
		color: white;
		font-size: 45px;
		font-family: 'Fira Sans', sans-serif;
		position: absolute;
		font-weight: 500;
		line-height: 54px;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.Panel .sound_panels span:hover {
		animation: morgan 1.5s linear 1;
	}

	@keyframes morgan {
		0% {
           text-shadow: 0 0 0px;
		}
		
		50% {
			text-shadow: 0 0 35px white;
		}
		
		100% {  
           text-shadow: 0 0 0px;
		}
	}

	.Panel .p1 {
        height: 150px;
        top: 0px;
        background: url('../assets/img/TLOU2_button.jpg');
        background-size: cover;
        background-position: center;
	}

	.Panel .p1 span {
		left: 40px;
		top: 46px;
	}

	.Panel .p2 {
		height: 150px;
		top: 150px;
		background: url('../assets/img2/RDR2_button.png');
		background-size: cover;
		background-position: center;
	}

	.Panel .p2 span {
		left: 10px;
		top: 46px;
	}

	.Panel .p3 {
		height: 150px;
		top: 300px;
		background: url('../assets/img2/Uncharted4_button.png');
		background-size: cover;
		background-position: center;
	}

	.Panel .p3 span {
	    left: 129px;
		top: 46px;
	}

	.Panel .p4 {
		height: 151px;
		top: 450px;
		background: url('../assets/img/Detroit_button.jpg');
		background-size: cover;
		background-position: center;
	}

	.Panel .p4 span {
		top: 46px;
		left: 24px;
	}

	.Panel .p5 {
		height: 150px;
		top: 601px;
		background: url('../assets/img2/God_of_war_button.png');
		background-size: cover;
		background-position: center;
	}

	.Panel .p5 span {
		top: 46px;
		left: 128px;
		font-size: 50px;
	}

	.Panel .p6 {
		height: 150px;
		top: 751px;
		background: url('../assets/img/Death_Stranding_button.jpg');
		background-size: cover;
		background-position: center;
	}

	.Panel .p6 span {
		top: 46px;
		left: 69px;
		font-size: 50px;
	}

	.Panel .p7 {
		height: 150px;
		top: 901px;
		background: url('../assets/img/RDR1_button.jpg');
		background-size: cover;
		background-position: center;
	}

    .Panel .p7 span {
    	top: 46px;
    	left: 10px;
    }

    .Panel .p8 {
    	height: 150px;
    	top: 1051px;
    	background: url('../assets/img/Infamous_second_son_button.jpg');
    	background-size: cover;
    	background-position: center;
    }

    .Panel .p8 span {
    	top: 46px;
    	left: 30px;
    }

    .Panel .p9 {
    	height: 150px;
    	top: 1201px;
    	background: url('../assets/img/Battlefield_1_button.jpg');
    	background-size: cover;
    	background-position: center;
    }

    .Panel .p9 span {
    	top: 46px;
    	left: 135px;
    }

    .Panel .p10 {
    	height: 150px;
    	top: 1351px;
    	background: url('../assets/img/DOOM_2016_button.jpg');
    	background-size: cover;
    	background-position: center;
    }

    .Panel .p10 span {
    	top: 46px;
    	left: 128px;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
        .Panel {
            top: 198px;
            height: 2685px;
        }

        .Panel .p1 {
            height: 295px;
            top: 0;
        }

        .Panel .p2 {
            height: 295px;
            top: 295px;
        }

        .Panel .p3 {
            height: 295px;
            top: 590px;
        }

        .Panel .p4 {
            height: 295px;
            top: 835px;
        }

        .Panel .p5 {
            height: 295px;
            top: 1105px;
        }

        .Panel .p6 {
            height: 295px;
            top: 1375px;
        }

        .Panel .p7 {
            height: 295px;
            top: 1645px;
        }

        .Panel .p8 {
            height: 295px;
            top: 1915px;
        }

        .Panel .p9 {
            height: 295px;
            top: 2185px;
        }

        .Panel .p10 {
            height: 260px;
            top: 2420px;
        }

        .Panel .p1 span {
            left: 40px;
            top: 125px;
        }

        .Panel .p2 span {
            left: 5px;
            top: 115px;
        }

        .Panel .p3 span {
            top: 95px;
        }

        .Panel .p4 span {
            top: 105px;
            left: 15px;
        }

        .Panel .p5 span {
            top: 115px;
        }

        .Panel .p6 span {
            top: 105px;
        }

        .Panel .p7 span {
            left: 30px;
            top: 105px;
        }

        .Panel .p8 span {
            top: 105px;
        }

        .Panel .p9 span {
            top: 85px;
        }

        .Panel .p10 span {
            top: 103px;
        }
    }
</style>