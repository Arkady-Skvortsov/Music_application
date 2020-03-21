<template>
	<div class="Cross_page_block">
		<div class="main-b">
			<span id="name_of_ost">1# Main theme</span>

			<button class="cross"><vue-fontawesome icon="times" id="icon" size="0.80" color="white"></vue-fontawesome></button>

			<div class="m_linia">
				<div class="no_m_linia"></div>
			</div>

			<button class="v_vol"><vue-fontawesome icon="volume-up" size="1.25" color="black"></vue-fontawesome></button>

			<div class="s_block">
				<div class="low_1"></div>
				<div class="low_2"></div>
				<div class="low_3"></div>
				<div class="low_4"></div>
			</div>

			<button class="p"><vue-fontawesome icon="step-backward" size="1" color="black"></vue-fontawesome></button>
			<button class="plaY"><vue-fontawesome icon="play" size="1" color="black"></vue-fontawesome></button>
			<button class="n"><vue-fontawesome icon="step-forward" size="1" color="black"></vue-fontawesome></button>

			<span id="s_time">00:00</span><span id="e_time">/03:03</span>

			<span id="sp">x1</span>

			<div class="Collection_of_speed">
				<div class="s_1 c_block"><p>x.25</p></div>
				<div class="s_2 c_block"><p>x.5</p></div>
				<div class="s_3 c_block"><p>x1</p></div>
				<div class="s_4 c_block"><p>x1.25</p></div>
				<div class="s_5 c_block"><p>x1.5</p></div>
				<div class="s_6 c_block"><p>x2</p></div>
			</div>

			<div class="T_of_a">
				<span id="time_now">00:00</span>
			</div>
		</div>
		<div class="background_b"></div>
	</div>
</template>
<script>
	export default {
		name: 'component_b',
        mathods: {
        	
        }
	}
</script>
<style>
    /*
    Приступлю нормально к этой штуке, как только разберусь с компанентами и другими прелестями проекта... Люблю программировать)
    И...... Тут еще важно отметить, что мне нужно придумать, как можно осуществить еще 2 штуки(У аудио), кроме этой...
     */
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	.Cross_page_block {
		width: 625px;
		height: 100px;
		position: absolute;
        left: 956px;
        top: 100px;
        z-index: 4;
        background: black;
        border: 1px solid white;
        display: none;
	}

	.Cross_page_block .main-b {
		width: 431px;
		height: 100px;
		background: black;
		top: 0;
		left: 0;
		position: absolute;
	}

	.Cross_page_block .main-b #name_of_ost {
		font-size: 30px;
		color: white;
		font-weight: 500;
		line-height: 42px;
		position: absolute;
		top: 0px;
		font-family: "Fira Sans", sans-serif;
	    left: 100px;
	}

	.Cross_page_block .main-b .cross {
		width: 25px;
		height: 25px;
		position: absolute;
		cursor: pointer;
		top: 10px;
		left: 10px;
        background: black;
        border: 0;
        border-radius: 30px;
        transition: .9s;
        -o-transition: .9s;
        -webkit-transition: .9s;
        -mozila-transition: .9s;
        border: 1px solid rgba(255, 255, 255, .5);
	}

	.Cross_page_block .main-b .cross:hover {
        animation: mor 1s linear infinite;
	}

	@keyframes mor {
		0% {
           border: 1px solid rgba(255, 255, 255, .2);
		}

		25% {
			border: 1px solid rgba(255, 255, 255, .4);
		}

		50% {
            border: 1px solid rgba(255, 255, 255, .6);
		}

		75% {
			border: 1px solid rgba(255, 255, 255, .8);
		}

        100% {
        	border: 1px solid rgba(255, 255, 255, 1);
        }
	}

	.Cross_page_block .main-b .cross #icon {
		z-index: 3;
		transition: .6s;
		-o-transition: .6s;
		-webkit-transition: 6s;
		-mozila-transition: .6s;
	}

	.Cross_page_block .main-b .cross #icon:hover {
		transform: rotate(180deg);
	}

	.Cross_page_block .main-b .m_linia {
		height: 5px;
		width: 325px;
		position: absolute;
		top: 56px;
		left: 50px;
		background: white;
		cursor: pointer;
		transition: .9s;
		-o-transition: .9s;
		-mozila-transition: .9s;
		-webkit-transition: .9s;
	}

	.Cross_page_block .main-b .m_linia:hover {
		opacity: .8;
	}

	.Cross_page_block .main-b .m_linia .no_m_linia {
		position: absolute;
		left: 0;
		top: 0;
		background: yellow;
		width: 0px;
		height: 5px;
	}

	.Cross_page_block .main-b .v_vol {
		border: 0;
		background: white;
		cursor: pointer;
		position: absolute;
		top: 65px;
		left: 15px;
		height: 30px;
		width: 30px;
		border-radius: 30px;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.Cross_page_block .main-b .v_vol:hover {
		transform: scale(.9);
	}

	.Cross_page_block .main-b .s_block {
		height: 30px;
		width: 48px;
		position: absolute;
		top: 65px;
		left: 50px;
		display: none;
	}

	.Cross_page_block .main-b .s_block > div {
		width: 5px;
		cursor: pointer;
		position: absolute;
		background: white;
		transition: .9s;
		-o-transition: .9s;
		-mozila-transition: .9s;
		-webkit-transition: .9s;
	}

	.Cross_page_block .main-b .s_block > div:hover {
        background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);
	}

	.Cross_page_block .main-b .s_block .low_1 {
		height: 11px;
        left: 0;
        top: 9px;
	}

	.Cross_page_block .main-b .s_block .low_2 {
		height: 17px;
    	top: 6px;
    	left: 14px;
	}

	.Cross_page_block .main-b .s_block .low_3 {
		height: 23px;
        top: 3px;
        left: 28px;
	}

	.Cross_page_block .main-b .s_block .low_4 {
		height: 31px;
        top: 0;
        left: 42px;
	}

	.Cross_page_block .main-b .p {
		height: 24px;
		width: 24px;
		border: 0;
		cursor: pointer;
		position: absolute;
		top: 69px;
		left: 160px;
		background: #D55858;
		border-radius: 30px;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.Cross_page_block .main-b .p:hover {
		transform: translateX(-5px);
	}

	.Cross_page_block .main-b .plaY {
		height: 30px;
		width: 30px;
		position: absolute;
		left: 195px;
		top: 65px;
		cursor: pointer;
		background: white;
		border: 0;
		border-radius: 30px;
		transition: .8s;
		-o-transition: .8s;
		-webkit-transition: .8s;
		-mozila-transition: .8s;
	}

	.Cross_page_block .main-b .plaY:hover {
		transform: scale(.9);
	}

	.Cross_page_block .main-b .n {
		height: 24px;
		width: 24px;
		border: 0;
		cursor: pointer;
		position: absolute;
		top: 69px;
		left: 238px;
		background: #D55858;
		border-radius: 30px;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.Cross_page_block .main-b .n:hover {
		transform: translateX(5px);
	}

	.Cross_page_block .main-b #s_time {
		position: absolute;
		font-size: 15px;
		font-weight: 500;
		font-family: "Fira Sans", sans-serif;
		color: white;
		top: 80px;
		left: 342.5px;
	}

	.Cross_page_block .main-b #e_time {
		position: absolute;
		font-size: 15px;
		font-weight: 500;
		font-family: "Fira Sans", sans-serif;
		color: white;
		top: 80px;
		left: 380px;
	}

	.Cross_page_block .main-b #sp {
		position: absolute;
		font-size: 15px;
		font-weight: 500;
		font-family: "Fira Sans", sans-serif;
        color: white;
        top: 80px;
        left: 300px;
        cursor: pointer;
	}

	.Cross_page_block .main-b .Collection_of_speed {
		height: 66px;
		width: 40px;
		position: absolute;
		background: black;
		left: 285px;
		top: 100px;
		border: 1px solid black;
		border-bottom: 1px solid white;
		display: none;
	}
    
    .Cross_page_block .main-b .Collection_of_speed .c_block {
    	height: 10px;
    	width: 40px;
    	background: black;
    	border-top: 1px solid white;
    	position: relative;
    	display: block;
    	top: 0;
    	left: 0;
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .Cross_page_block .main-b .Collection_of_speed .c_block:hover {
    	border-color: black;
    	background: white;
    }

    .Cross_page_block .main-b .Collection_of_speed .c_block p {
    	font-size: 10px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 10px;
    	margin-top: 1px;
    }

    .Cross_page_block .main-b .Collection_of_speed .c_block p:hover {
    	color: black;
    }

    .Cross_page_block .main-b .T_of_a {
    	height: 20px;
    	width: 45px;
    	position: absolute;
    	background: black;
    	border: 1px solid white;
    	top: 33px;
    	left: 30px;
    	display: none;
    }

    .Cross_page_block .main-b .T_of_a span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 15px;
    	position: absolute;
    	top: 1px;
    	left: 3px;
    }

	.Cross_page_block .background_b {
		height: 100px;
		width: 194px;
		position: relative;
		float: right;
		cursor: pointer;
		background: url('../assets/img/RDR1_button.jpg');
		background-position: center;
		background-size: cover;
	}
</style>