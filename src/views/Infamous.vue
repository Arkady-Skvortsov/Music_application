<template>
	<div class="side_screen8">
		<span>Infamous Second Son music</span>
		<div class="audio_collection_block8">
		    <div class="sound_block8" @mouseover="show_repeat8('.repl106', '.down106')">
			   <p class="name8">#1 Second Son</p>

			   <div class="audio_pole_m8 audio_p106_m8" @click="Perek8($event, '.aud106', '.audio_p106_m8')" @mouseover="Show_time8('.Aud_t106')" @mousemove="Run_block8($event, '.audio_p106_m8', '.aud106', '.Aud_t106')" @mouseout="Time_out8('.Aud_t106')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl106', '.l_of_v106', '.repl106', '.down106')" @mouseover="Over8('.l_of_v106')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol8 l_of_v106" @mouseover="Over8('.l_of_v106')" @mouseout="Ov8('.l_of_v106')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v106', '.aud106', '.repl106', '.down106')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v106', '.aud106', '.repl106', '.down106')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v106', '.aud106', '.repl106', '.down106')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v106', '.aud106', '.repl106', '.down106')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud106', '.aud105', '.repl106', '.r_icon_106', '.down106')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl106" @click="Play8('.pl106', '.repl106', '.down106')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud106" @timeupdate="Update8('.aud106', '.st106', '.audio_p106_m8')" src="../sound/Infamous_second_son/01. Second Son.mp3"></audio></button> 
			   <button class="next8" @click="Next8('.aud106', '.aud107', '.repl106', '.r_icon_106', '.down106')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st106">00:00</p><p class="end_time8">/04:32</p>

			    <span id="speed_aud8" class="choice_speed_106" @click="Show_speed8('.sp_block_106')">x1</span>


			   <div class="Speed_block8 sp_block_106">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_106" @click="First_speed_8('.x_first_106', '.aud106', '.choice_speed_106', '.repl106', '.down106')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_106" @click="Second_speed_8('.x_second_106', '.aud106', '.choice_speed_106', '.repl106', '.down106')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_106" @click="Third_speed_8('.x_third_106', '.aud106', '.choice_speed_106', '.repl106', '.down106')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_106" @click="Fourth_speed_8('.x_fourth_106', '.aud106', '.choice_speed_106', '.repl106', '.down106')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_106" @click="Fifth_speed_8('.x_fifth_106', '.aud106', '.choice_speed_106', '.repl106', '.down106')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_106" @click="Six_speed_8('.x_six_106', '.aud106', '.choice_speed_106', '.repl106', '.down106')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button8 repl106" @click="Replay8('.aud106', '.r_icon_106')" @mouseover="S8('.repl106')" @mouseout="hide_repeat8('.repl106')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_106" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down106" @click="Download8('.down106', 'Infamous Second Son - Second Son')" @mouseout="down_hide8('.down106')">
			   	  <vue-fontawesome icon="download" class="d_icon_106" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t106">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block8" @mouseover="show_repeat8('.repl107', '.down107')">
			   <p class="name8 text7_mobile_2">#2 The Vandal King</p>

			   <div class="audio_pole_m8 audio_p107_m8" @click="Perek8($event, '.aud107', '.audio_p107_m8')" @mouseover="Show_time8('.Aud_t107')" @mousemove="Run_block8($event, '.audio_p107_m8', '.aud107', '.Aud_t107')" @mouseout="Time_out8('.Aud_t107')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl107', '.l_of_v107', '.repl107', '.down107')" @mouseover="Over8('.l_of_v107')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v107" @mouseover="Over8('.l_of_v106')" @mouseout="Ov8('.l_of_v106')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v107', '.aud107', '.repl107', '.down107')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v107', '.aud107', '.repl107', '.down107')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v107', '.aud107', '.repl107', '.down107')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v107', '.aud107', '.repl107', '.down107')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud107', '.aud106', '.repl107', '.r_icon_107', '.down107')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl107" @click="Play8('.pl107', '.repl107', '.down107')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud107" @timeupdate="Update8('.aud107', '.st107', '.audio_p107_m8')" src="../sound/Infamous_second_son/02. The Vandal King.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud107', '.aud108', '.repl107', '.r_icon_107', '.down107')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st107">00:00</p><p class="end_time8">/02:34</p>

			   <span id="speed_aud8" class="choice_speed_107" @click="Show_speed8('.sp_block_107')">x1</span>

			   <div class="Speed_block8 sp_block_107">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_107" @click="First_speed_8('.x_first_107', '.aud107', '.choice_speed_107', '.repl107', '.down107')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_107" @click="Second_speed_8('.x_second_107', '.aud107', '.choice_speed_107', '.repl107', '.down107')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_107" @click="Third_speed_8('.x_third_107', '.aud107', '.choice_speed_107', '.repl107', '.down107')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_107" @click="Fourth_speed_8('.x_fourth_107', '.aud107', '.choice_speed_107', '.repl107', '.down107')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_107" @click="Fifth_speed_8('.x_fifth_107', '.aud107', '.choice_speed_107', '.repl107', '.down107')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_107" @click="Six_speed_8('.x_six_107', '.aud107', '.choice_speed_107', '.repl107', '.down107')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl107" @click="Replay8('.aud107', '.r_icon_107')" @mouseover="S8('.repl107')" @mouseout="hide_repeat8('.repl107')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_107" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down107" @click="Download8('.down107', 'Infamous Second Son - The Vandal King')" @mouseout="down_hide8('.down107')">
			   	  <vue-fontawesome icon="download" class="d_icon_107" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio8 Aud_t107">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block8" @mouseover="show_repeat8('.repl108', '.down108')">
			   <p class="name8 text7_mobile_3">#3 Speed of Light</p>

			   <div class="audio_pole_m8 audio_p108_m8" @click="Perek8($event, '.aud108', '.audio_p108_m8')" @mouseover="Show_time8('.Aud_t108')" @mousemove="Run_block8($event, '.audio_p108_m8', '.aud108', '.Aud_t108')" @mouseout="Time_out8('.Aud_t108')"> 
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl108', '.l_of_v108', '.repl108', '.down108')" @mouseover="Over8('.l_of_v108')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v108" @mouseover="Over8('.l_of_v108')" @mouseout="Ov8('.l_of_v108')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v108', '.aud108', '.repl108', '.down108')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v108', '.aud108', '.repl108', '.down108')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v108', '.aud108', '.repl108', '.down108')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v108', '.aud108', '.repl108', '.down108')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud108', '.aud107', '.repl108', '.r_icon_108', '.down108')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl108" @click="Play8('.pl108', '.repl108', '.down108')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud108" @timeupdate="Update8('.aud108', '.st108', '.audio_p108_m8')" src="../sound/Infamous_second_son/03. Speed of Light.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud108', '.aud109', '.repl108', '.r_icon_108', '.down108')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time8 st108">00:00</p><p class="end_time8">/03:01</p>

			   <span id="speed_aud8" class="choice_speed_108" @click="Show_speed8('.sp_block_108')">x1</span>

			   <div class="Speed_block8 sp_block_108">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_108" @click="First_speed_8('.x_first_108', '.aud108', '.choice_speed_108', '.repl108', '.down108')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_108" @click="Second_speed_8('.x_second_108', '.aud108', '.choice_speed_108', '.repl108', '.down108')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_108" @click="Third_speed_8('.x_third_108', '.aud108', '.choice_speed_108', '.repl108', '.down108')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_108" @click="Fourth_speed_8('.x_fourth_108', '.aud108', '.choice_speed_108', '.repl108', '.down108')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_108" @click="Fifth_speed_8('.x_fifth_108', '.aud108', '.choice_speed_108', '.repl108', '.down108')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_108" @click="Six_speed_8('.x_six_108', '.aud108', '.choice_speed_108', '.repl108', '.down108')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl108" @click="Replay8('.aud108', '.r_icon_108')" @mouseover="S8('.repl108')" @mouseout="hide_repeat8('.repl108')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_108" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button8 down108" @click="Download8('.down108', 'Infamous Second Son - The Vandal King')" @mouseout="down_hide8('.down108')">
			   	  <vue-fontawesome icon="download" class="d_icon_108" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t108">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl109', '.down109')">
			   <p class="name8 Inf1 text7_mobile_4">#4 Conflict Resolution</p>

			   <div class="audio_pole_m8 audio_p109_m8" @click="Perek8($event, '.aud109', '.audio_p109_m8')" @mouseover="Show_time8('.Aud_t109')" @mousemove="Run_block8($event, '.audio_p109_m8', '.aud109', '.Aud_t109')" @mouseout="Time_out8('.Aud_t109')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl109', '.l_of_v109', '.repl109', '.down109')" @mouseover="Over8('.l_of_v109')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v109" @mouseover="Over8('.l_of_v109')" @mouseout="Ov8('.l_of_v109')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v109', '.aud109', '.repl109', '.down109')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v109', '.aud109', '.repl109', '.down109')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v109', '.aud109', '.repl109', '.down109')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v109', '.aud109', '.repl109', '.down109')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud109', '.aud108', '.repl109', '.r_icon_109', '.down109')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl109" @click="Play8('.pl109', '.repl109', '.down109')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud109" @timeupdate="Update8('.aud109', '.st109', '.audio_p109_m8')" src="../sound/Infamous_second_son/04. Conflict Resolution.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud109', '.aud110', '.repl109', '.r_icon_109', '.down109')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

                <p class="start_time8 st109">00:00</p><p class="end_time8">/02:50</p>

			   <span id="speed_aud8" class="choice_speed_109" @click="Show_speed8('.sp_block_109')">x1</span>

			   <div class="Speed_block8 sp_block_109">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_109" @click="First_speed_8('.x_first_109', '.aud109', '.choice_speed_109', '.repl109', '.down109')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_109" @click="Second_speed_8('.x_second_109', '.aud109', '.choice_speed_109', '.repl109', '.down109')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_109" @click="Third_speed_8('.x_third_109', '.aud109', '.choice_speed_109', '.repl109', '.down109')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_109" @click="Fourth_speed_8('.x_fourth_109', '.aud109', '.choice_speed_109', '.repl109', '.down109')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_109" @click="Fifth_speed_8('.x_fifth_109', '.aud109', '.choice_speed_109', '.repl109', '.down109')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_109" @click="Six_speed_8('.x_six_109', '.aud109', '.choice_speed_109', '.repl109', '.down109')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl109" @click="Replay8('.aud109', '.r_icon_109')" @mouseover="S8('.repl109')" @mouseout="hide_repeat8('.repl109')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_109" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down109" @click="Download8('.down109', 'Infamous Second Son - Conflict Resolution')" @mouseout="down_hide8('.down109')">
			   	  <vue-fontawesome icon="download" class="d_icon_109" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t109">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl110', '.down110')">
			   <p class="name8 text7_mobile_5">#5 Brothers</p>

			   <div class="audio_pole_m8 audio_p110_m8" @click="Perek8($event, '.aud110', '.audio_p110_m8')" @mouseover="Show_time8('.Aud_t110')" @mousemove="Run_block8($event, '.audio_p110_m8', '.aud110', '.Aud_t110')" @mouseout="Time_out8('.Aud_t110')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl110', '.l_of_v110', '.repl110', '.down110')" @mouseover="Over8('.l_of_v110')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v110" @mouseover="Over8('.l_of_v110')" @mouseout="Ov8('.l_of_v110')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v110', '.aud110', '.repl110', '.down110')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v110', '.aud110', '.repl110', '.down110')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v110', '.aud110', '.repl110', '.down110')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v110', '.aud110', '.repl110', '.down110')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud110', '.aud109', '.repl110', '.r_icon_110', '.down110')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl110" @click="Play8('.pl110', '.repl110', '.down110')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud110" @timeupdate="Update8('.aud110', '.st110', '.audio_p110_m8')" src="../sound/Infamous_second_son/05. Brothers.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud110', '.aud111', '.repl110', '.r_icon_110', '.down110')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time8 st110">00:00</p><p class="end_time8">/02:37</p>

			   <span id="speed_aud8" class="choice_speed_110" @click="Show_speed8('.sp_block_110')">x1</span>

			   <div class="Speed_block8 sp_block_110">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_110" @click="First_speed_8('.x_first_110', '.aud110', '.choice_speed_110', '.repl110', '.down110')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_110" @click="Second_speed_8('.x_second_110', '.aud110', '.choice_speed_110', '.repl110', '.down110')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_110" @click="Third_speed_8('.x_third_110', '.aud110', '.choice_speed_110', '.repl110', '.down110')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_110" @click="Fourth_speed_8('.x_fourth_110', '.aud110', '.choice_speed_110', '.repl110', '.down110')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_110" @click="Fifth_speed_8('.x_fifth_110', '.aud110', '.choice_speed_110', '.repl110', '.down110')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_110" @click="Six_speed_8('.x_six_110', '.aud110', '.choice_speed_110', '.repl110', '.down110')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl110" @click="Replay8('.aud110', '.r_icon_110')" @mouseover="S8('.repl110')" @mouseout="hide_repeat8('.repl110')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_110" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down110" @click="Download8('.down110', 'Infamous Second Son - Brothers')" @mouseout="down_hide8('.down110')">
			   	  <vue-fontawesome icon="download" class="d_icon_110" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio8 Aud_t110">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl111', '.down111')">
			   <p class="name8 text7_mobile_6">#6 Double Crossed</p>

			   <div class="audio_pole_m8 audio_p111_m8" @click="Perek8($event, '.aud111', '.audio_p111_m8')" @mouseover="Show_time8('.Aud_t111')" @mousemove="Run_block8($event, '.audio_p111_m8', '.aud111', '.Aud_t111')" @mouseout="Time_out8('.Aud_t111')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl111', '.l_of_v111', '.repl111', '.down111')" @mouseover="Over8('.l_of_v111')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v111" @mouseover="Over8('.l_of_v111')" @mouseout="Ov8('.l_of_v111')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v111', '.aud111', '.repl111', '.down111')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v111', '.aud111', '.repl111', '.down111')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v111', '.aud111', '.repl111', '.down111')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v111', '.aud111', '.repl111', '.down111')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud111', '.aud110', '.repl111', '.r_icon_111', '.down111')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl111" @click="Play8('.pl111', '.repl111', '.down111')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud111" @timeupdate="Update8('.aud111', '.st111', '.audio_p111_m8')" src="../sound/Infamous_second_son/06. Double Crossed.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud111', '.aud112', '.repl111', '.r_icon_111', '.down111')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time8 st111">00:00</p><p class="end_time8">/03:37</p>

			   <span id="speed_aud8" class="choice_speed_111" @click="Show_speed8('.sp_block_111')">x1</span>

			   <div class="Speed_block8 sp_block_111">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_111" @click="First_speed_8('.x_first_111', '.aud111', '.choice_speed_111', '.repl111', '.down111')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_111" @click="Second_speed_8('.x_second_111', '.aud111', '.choice_speed_111', '.repl111', '.down111')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_111" @click="Third_speed_8('.x_third_111', '.aud111', '.choice_speed_111', '.repl111', '.down111')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_111" @click="Fourth_speed_8('.x_fourth_111', '.aud111', '.choice_speed_111', '.repl111', '.down111')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_111" @click="Fifth_speed_8('.x_first_111', '.aud111', '.choice_speed_111', '.repl111', '.down111')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_111" @click="Six_speed_8('.x_first_111', '.aud111', '.choice_speed_111', '.repl111', '.down111')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl111" @click="Replay8('.aud111', '.r_icon_111')" @mouseover="S8('.repl111')" @mouseout="hide_repeat8('.repl111')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_111" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down111" @click="Download8('.down111', 'Infamous Second Son - Double Crossed')" @mouseout="down_hide8('.down111')">
			   	  <vue-fontawesome icon="download" class="d_icon_111" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio8 Aud_t111">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl112', '.down112')">
			   <p class="name8 text7_mobile_7">#7 Henry Daughtry</p>

			   <div class="audio_pole_m8 audio_p112_m8" @click="Perek8($event, '.aud112', '.audio_p112_m8')" @mouseover="Show_time8('.Aud_t112')" @mousemove="Run_block8($event, '.audio_p112_m8', '.aud112', '.Aud_t112')" @mouseout="Time_out8('.Aud_t112')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl112', '.l_of_v112', '.repl112', '.down112')" @mouseover="Over8('.l_of_v112')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v112" @mouseover="Over8('.l_of_v112')" @mouseout="Ov8('.l_of_v112')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v112', '.aud112', '.repl112', '.down112')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v112', '.aud112', '.repl112', '.down112')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v112', '.aud112', '.repl112', '.down112')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v112', '.aud112', '.repl112', '.down112')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud112', '.aud111', '.repl112', '.r_icon_112', '.down112')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl112" @click="Play8('.pl112', '.repl112', '.down112')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud112" @timeupdate="Update8('.aud112', '.st112', '.audio_p112_m8')" src="../sound/Infamous_second_son/07. Henry Daughtry.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud112', '.aud113', '.repl112', '.r_icon_112', '.down112')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st112">00:00</p><p class="end_time8">/03:40</p>

			   <span id="speed_aud8" class="choice_speed_112" @click="Show_speed8('.sp_block_112')">x1</span>

			   <div class="Speed_block8 sp_block_112">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_112" @click="First_speed_8('.x_first_112', '.aud112', '.choice_speed_112', '.repl112', '.down112')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_112" @click="Second_speed_8('.x_second_112', '.aud112', '.choice_speed_112', '.repl112', '.down112')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_112" @click="Third_speed_8('.x_third_112', '.aud112', '.choice_speed_112', '.repl112', '.down112')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_112" @click="Fourth_speed_8('.x_fourth_112', '.aud112', '.choice_speed_112', '.repl112', '.down112')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_112" @click="Fifth_speed_8('.x_fifth_112', '.aud112', '.choice_speed_112', '.repl112', '.down112')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_112" @click="Six_speed_8('.x_six_112', '.aud112', '.choice_speed_112', '.repl112', '.down112')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl112" @click="Replay8('.aud112', '.r_icon_112')" @mouseover="S8('.repl112')" @mouseout="hide_repeat8('.repl112')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_112" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down112" @click="Download8('.down112', 'Infamous Second Son - Henry Daughtry')" @mouseout="down_hide8('.down112')">
			   	  <vue-fontawesome icon="download" class="d_icon_112" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio8 Aud_t112">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl113', '.down113')">
			   <p class="name8 Inf2 text7_mobile_8">#8 The Bio-Terrorist Threat</p>

			   <div class="audio_pole_m8 audio_p113_m8" @click="Perek8($event, '.aud113', '.audio_p113_m8')" @mouseover="Show_time8('.Aud_t113')" @mousemove="Run_block8($event, '.audio_p113_m8', '.aud113', '.Aud_t113')" @mouseout="Time_out8('.Aud_t113')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl113', '.l_of_v113', '.repl113', '.down113')" @mouseover="Over8('.l_of_v113')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v113" @mouseover="Over8('.l_of_v113')" @mouseout="Ov8('.l_of_v113')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v113', '.aud113', '.repl113', '.down113')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v113', '.aud113', '.repl113', '.down113')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v113', '.aud113', '.repl113', '.down113')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v113', '.aud113', '.repl113', '.down113')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud113', '.aud112', '.repl113', '.r_icon_113', '.down113')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl113" @click="Play8('.pl113', '.repl113', '.down113')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud113" @timeupdate="Update8('.aud113', '.st113', '.audio_p113_m8')" src="../sound/Infamous_second_son/08. The Bio-Terrorist Threat.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud113', '.aud114', '.repl113', '.r_icon_113', '.down113')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st113">00:00</p><p class="end_time8">/02:10</p>

			   <span id="speed_aud8" class="choice_speed_113" @click="Show_speed8('.sp_block_113')">x1</span>

			   <div class="Speed_block8 sp_block_113">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_113" @click="First_speed_8('.x_first_113', '.aud113', '.choice_speed_113', '.repl113', '.down113')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_113" @click="Second_speed_8('.x_second_113', '.aud113', '.choice_speed_113', '.repl113', '.down113')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_113" @click="Third_speed_8('.x_third_113', '.aud113', '.choice_speed_113', '.repl113', '.down113')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_113" @click="Fourth_speed_8('.x_fourth_113', '.aud113', '.choice_speed_113', '.repl113', '.down113')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_113" @click="Fifth_speed_8('.x_fifth_113', '.aud113', '.choice_speed_113', '.repl113', '.down113')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_113" @click="Six_speed_8('.x_six_113', '.aud113', '.choice_speed_113', '.repl113', '.down113')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl113" @click="Replay8('.aud113', '.r_icon_113')" @mouseover="S8('.repl113')" @mouseout="hide_repeat8('.repl113')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_113" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down113" @click="Download8('.down113', 'Infamous Second Son - The Bio-Terrorist Threat')" @mouseout="down_hide8('.down113')">
			   	  <vue-fontawesome icon="download" class="d_icon_113" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t113">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl114', '.down114')">
			   <p class="name8 text7_mobile_9">#9 The Call</p>

			   <div class="audio_pole_m8 audio_p114_m8" @click="Perek8($event, '.aud114', '.audio_p114_m8')" @mouseover="Show_time8('.Aud_t114')" @mousemove="Run_block8($event, '.audio_p114_m8', '.aud114', '.Aud_t114')" @mouseout="Time_out8('.Aud_t114')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl114', '.l_of_v114', '.repl114', '.down114')" @mouseover="Over8('.l_of_v114')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v114" @mouseover="Over8('.l_of_v114')" @mouseout="Ov8('.l_of_v114')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v114', '.aud114', '.repl114', '.down114')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v114', '.aud114', '.repl114', '.down114')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v114', '.aud114', '.repl114', '.down114')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v114', '.aud114', '.repl114', '.down114')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud114', '.aud113', '.repl114', '.r_icon_114', '.down114')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl114" @click="Play8('.pl114', '.repl114', '.down114')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud114" @timeupdate="Update8('.aud114', '.st114', '.audio_p114_m8')" src="../sound/Infamous_second_son/09. The Call.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud114', '.aud115', '.repl114', '.r_icon_114', '.down114')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st114">00:00</p><p class="end_time8">/02:03</p>

			   <span id="speed_aud8" class="choice_speed_114" @click="Show_speed8('.sp_block_114')">x1</span>

			   <div class="Speed_block8 sp_block_114">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_114" @click="First_speed_8('.x_first_114', '.aud114', '.choice_speed_114', '.repl114', '.down114')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_114" @click="Second_speed_8('.x_second_114', '.aud114', '.choice_speed_114', '.repl114', '.down114')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_114" @click="Third_speed_8('.x_third_114', '.aud114', '.choice_speed_114', '.repl114', '.down114')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_114" @click="Fourth_speed_8('.x_fourth_114', '.aud114', '.choice_speed_114', '.repl114', '.down114')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_114" @click="Fifth_speed_8('.x_fifth_114', '.aud114', '.choice_speed_114', '.repl114', '.down114')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_114" @click="Six_speed_8('.x_six_114', '.aud114', '.choice_speed_114', '.repl114', '.down114')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl114" @click="Replay8('.aud114', '.r_icon_114')" @mouseover="S8('.repl114')" @mouseout="hide_repeat8('.repl114')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_114" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down114" @click="Download8('.down114', 'Infamous Second Son - The Call')" @mouseout="down_hide8('.down114')">
			   	  <vue-fontawesome icon="download" class="d_icon_114" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t114">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl115', '.down115')">
			   <p class="name8">#10 Cumulonimbus</p>

			   <div class="audio_pole_m8 audio_p115_m8" @click="Perek8($event, '.aud115', '.audio_p115_m8')" @mouseover="Show_time8('.Aud_t115')" @mousemove="Run_block8($event, '.audio_p115_m8', '.aud115', '.Aud_t115')" @mouseout="Time_out8('.Aud_t115')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl115', '.l_of_v115', '.repl115', '.down115')" @mouseover="Over8('.l_of_v115')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v115" @mouseover="Over8('.l_of_v115')" @mouseout="Ov8('.l_of_v115')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v115', '.aud115', '.repl115', '.down115')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v115', '.aud115', '.repl115', '.down115')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v115', '.aud115', '.repl115', '.down115')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v115', '.aud115', '.repl115', '.down115')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud115', '.aud114', '.repl115', '.r_icon_115', '.down115')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl115" @click="Play8('.pl115', '.repl115', '.down115')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud115" @timeupdate="Update8('.aud115', '.st115', '.audio_p115_m8')" src="../sound/Infamous_second_son/10. Cumulonimbus.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud115', '.aud116', '.repl115', '.r_icon_115', '.down115')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time8 st115">00:00</p><p class="end_time8">/03:47</p>

			   <span id="speed_aud8" class="choice_speed_115" @click="Show_speed8('.sp_block_115')">x1</span>

			   <div class="Speed_block8 sp_block_115">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_115" @click="First_speed_8('.x_first_115', '.aud115', '.choice_speed_115', '.repl115', '.down115')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_115" @click="Second_speed_8('.x_second_115', '.aud115', '.choice_speed_115', '.repl115', '.down115')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_115" @click="Third_speed_8('.x_third_115', '.aud115', '.choice_speed_115', '.repl115', '.down115')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_115" @click="Fourth_speed_8('.x_fourth_115', '.aud115', '.choice_speed_115', '.repl115', '.down115')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_115" @click="Fifth_speed_8('.x_fifth_115', '.aud115', '.choice_speed_115', '.repl115', '.down115')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_115" @click="Six_speed_8('.x_six_115', '.aud115', '.choice_speed_115', '.repl115', '.down115')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl115" @click="Replay8('.aud115', '.r_icon_115')" @mouseover="S8('.repl115')" @mouseout="hide_repeat8('.repl115')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_115" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down115" @click="Download8('.down115', 'Infamous Second Son - Cumulonimbus')" @mouseout="down_hide8('.down115')">
			   	  <vue-fontawesome icon="download" class="d_icon_115" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t115">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl116', '.down116')">
			   <p class="name8 text7_mobile_11">#11 Higher Elevation</p>

			   <div class="audio_pole_m8 audio_p116_m8" @click="Perek8($event, '.aud116', '.audio_p116_m8')" @mouseover="Show_time8('.Aud_t116')" @mousemove="Run_block8($event, '.audio_p116_m8', '.aud116', '.Aud_t116')" @mouseout="Time_out8('.Aud_t116')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl116', '.l_of_v116', '.repl116', '.down116')" @mouseover="Over8('.l_of_v116')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v116" @mouseover="Over8('.l_of_v116')" @mouseout="Ov8('.l_of_v116')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v116', '.aud116', '.repl116', '.down116')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v116', '.aud116', '.repl116', '.down116')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v116', '.aud116', '.repl116', '.down116')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v116', '.aud116', '.repl116', '.down116')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud116', '.aud115', '.repl116', '.r_icon_116', '.down116')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl116" @click="Play8('.pl116', '.repl116', '.down116')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud116" @timeupdate="Update8('.aud116', '.st116', '.audio_p116_m8')" src="../sound/Infamous_second_son/15. Higher Elevation.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud116', '.aud117', '.repl116', '.r_icon_116', '.down116')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st116">00:00</p><p class="end_time8">/03:53</p>

			   <span id="speed_aud8" class='choice_speed_116' @click="Show_speed8('.sp_block_116')">x1</span>

			   <div class="Speed_block8 sp_block_116">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_116" @click="First_speed_8('.x_first_116', '.aud116', '.choice_speed_116', '.repl116', '.down116')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_116" @click="Second_speed_8('.x_second_116', '.aud116', '.choice_speed_116', '.repl116', '.down116')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_116" @click="Third_speed_8('.x_third_116', '.aud116', '.choice_speed_116', '.repl116', '.down116')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_116" @click="Fourth_speed_8('.x_fourth_116', '.aud116', '.choice_speed_116', '.repl116', '.down116')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_116" @click="Fifth_speed_8('.x_fifth_116', '.aud116', '.choice_speed_116', '.repl116', '.down116')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_116" @click="Six_speed_8('.x_six_116', '.aud116', '.choice_speed_116', '.repl116', '.down116')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl116" @click="Replay8('.aud116', '.r_icon_116')" @mouseover="S8('.repl116')" @mouseout="hide_repeat8('.repl116')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_116" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down116" @click="Download8('.down116', 'Infamous Second Son - Higher Elevation')" @mouseout="down_hide8('.down116')">
			   	  <vue-fontawesome icon="download" class="d_icon_116" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t116">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl117', '.down117')">
			   <p class="name8 Inf3 text7_mobile_12">#12 Owning The Future</p>

			   <div class="audio_pole_m8 audio_p117_m8" @click="Perek8($event, '.aud117', '.audio_p117_m8')" @mouseover="Show_time8('.Aud_t117')" @mousemove="Run_block8($event, '.audio_p117_m8', '.aud117', '.Aud_t117')" @mouseout="Time_out8('.Aud_t117')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl117', '.l_of_v117', '.repl117', '.down117')" @mouseover="Over8('.l_of_v117')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v117" @mouseover="Over8('.l_of_v117')" @mouseout="Ov8('.l_of_v117')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v117', '.aud117', '.repl117', '.down117')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v117', '.aud117', '.repl117', '.down117')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v117', '.aud117', '.repl117', '.down117')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v117', '.aud117', '.repl117', '.down117')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud117', '.aud116', '.repl117', '.r_icon_117', '.down117')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl117" @click="Play8('.pl117', '.repl117', '.down117')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud117" @timeupdate="Update8('.aud117', '.st117', '.audio_p117_m8')" src="../sound/Infamous_second_son/18. Owning The Future.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud117', '.aud118', '.repl117', '.r_icon_117', '.down117')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st117">00:00</p><p class="end_time8">/03:50</p>

			   <span id="speed_aud8" class="choice_speed_117" @click="Show_speed8('.sp_block_117')">x1</span>

			   <div class="Speed_block8 sp_block_117">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_117" @click="First_speed_8('.x_first_117', '.aud117', '.choice_speed_117', '.repl117', '.down117')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_117" @click="Second_speed_8('.x_second_117', '.aud117', '.choice_speed_117', '.repl117', '.down117')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_117" @click="Third_speed_8('.x_third_117', '.aud117', '.choice_speed_117', '.repl117', '.down117')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_117" @click="Fourth_speed_8('.x_fourth_117', '.aud117', '.choice_speed_117', '.repl117', '.down117')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_117" @click="Fifth_speed_8('.x_fifth_117', '.aud117', '.choice_speed_117', '.repl117', '.down117')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_117" @click="Six_speed_8('.x_six_117', '.aud117', '.choice_speed_117', '.repl117', '.down117')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl117" @click="Replay8('.aud117', '.r_icon_117')" @mouseover="S8('.repl117')" @mouseout="hide_repeat8('.repl117')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_117" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down117" @click="Download8('.down117', 'Infamous Second Son - Owning the Future')" @mouseout="down_hide8('.down117')">
			   	  <vue-fontawesome icon="download" class="d_icon_117" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t117">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl118', '.down118')">
			   <p class="name8 Inf4 text7_mobile_13">#13 Smoke and Mirrors</p>

			   <div class="audio_pole_m8 audio_p118_m8" @click="Perek8($event, '.aud118', '.audio_p118_m8')" @mouseover="Show_time8('.Aud_t118')" @mousemove="Run_block8($event, '.audio_p118_m8', '.aud118', '.Aud_t118')" @mouseout="Time_out8('.Aud_t118')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl118', '.l_of_v118', '.repl118', '.down118')" @mouseover="Over8('.l_of_v118')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v118" @mouseover="Over8('.l_of_v118')" @mouseout="Ov8('.l_of_v118')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v118', '.aud118', '.repl118', '.down118')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v118', '.aud118', '.repl118', '.down118')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v118', '.aud118', '.repl118', '.down118')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v118', '.aud118', '.repl118', '.down118')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud118', '.aud117', '.repl118', '.r_icon_118', '.down118')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl118" @click="Play8('.pl118', '.repl118', '.down118')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud118" @timeupdate="Update8('.aud118', '.st118', '.audio_p118_m8')" src="../sound/Infamous_second_son/19. Smoke And Mirrors.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud118', '.aud119', '.repl118', '.r_icon_118', '.down118')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st118">00:00</p><p class="end_time8">/02:16</p>

			   <span id="speed_aud8" class="choice_speed_118" @click="Show_speed8('.sp_block_118')">x1</span>

			   <div class="Speed_block8 sp_block_118">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_118" @click="First_speed_8('.x_first_118', '.aud118', '.choice_speed_118', '.repl118', '.down118')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_118" @click="Second_speed_8('.x_second_118', '.aud118', '.choice_speed_118', '.repl118', '.down118')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_118" @click="Third_speed_8('.x_third_118', '.aud118', '.choice_speed_118', '.repl118', '.down118')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_118" @click="Fourth_speed_8('.x_fourth_118', '.aud118', '.choice_speed_118', '.repl118', '.down118')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_118" @click="Fifth_speed_8('.x_fifth_118', '.aud118', '.choice_speed_118', '.repl118', '.down118')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_118" @click="Six_speed_8('.x_six_118', '.aud118', '.choice_speed_118', '.repl118', '.down118')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl118" @click="Replay8('.aud118', '.r_icon_118')" @mouseover="S8('.repl118')" @mouseout="hide_repeat8('.repl118')"> 
			   	  <vue-fontawesome icon="retweet" class="r_icon_118" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down118" @click="Download8('.down118', 'Infamous Second Son - Smoke and Mirrors')" @mouseout="down_hide8('.down118')">
			   	  <vue-fontawesome icon="download" class="d_icon_118" size="3" color="white"></vue-fontawesome>
			   </div>

			     <div class="Time_of_audio8 Aud_t118">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl119', '.down119')">
			   <p class="name8 Inf5 text7_mobile_14">#14 Enemy Territory</p>

			   <div class="audio_pole_m8 audio_p119_m8" @click="Perek8($event, '.aud119', '.audio_p119_m8')" @mouseover="Show_time8('.Aud_t119')" @mousemove="Run_block8($event, '.audio_p119_m8', '.aud119', '.Aud_t119')" @mouseout="Time_out8('.Aud_t119')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl119', '.l_of_v119', '.repl119', '.down119')" @mouseover="Over8('.l_of_v119')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v119" @mouseover="Over8('.l_of_v119')" @mouseout="Ov8('.l_of_v119')">
			   	  <div class="First_Vol" @click="C1_8('.l_of_v119', '.aud119', '.repl119', '.down119')"></div>
			   	  <div class="Second_Vol" @click="C2_8('.l_of_v119', '.aud119', '.repl119', '.down119')"></div>
			   	  <div class="Third_Vol" @click="C3_8('.l_of_v119', '.aud119', '.repl119', '.down119')"></div>
			   	  <div class="Fourth_Vol" @click="C4_8('.l_of_v119', '.aud119', '.repl119', '.down119')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud119', '.aud118', '.repl119', '.r_icon_119', '.down119')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl119" @click="Play8('.pl119', '.repl119', '.down119')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud119" @timeupdate="Update8('.aud119', '.st119', '.audio_p119_m8')" src="../sound/Infamous_second_son/21. Enemy Territory.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud119', '.aud120', '.repl119', '.r_icon_119', '.down119')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st119">00:00</p><p class="end_time8">/04:29</p>

			   <span id="speed_aud8" class="choice_speed_119" @click="Show_speed8('.sp_block_119')">x1</span>

			   <div class="Speed_block8 sp_block_119">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_119" @click="First_speed_8('.x_first_119', '.aud119', '.choice_speed_119', '.repl119', '.down119')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_119" @click="Second_speed_8('.x_second_119', '.aud119', '.choice_speed_119', '.repl119', '.down119')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_119" @click="Third_speed_8('.x_third_119', '.aud119', '.choice_speed_119', '.repl119', '.down119')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_119" @click="Fourth_speed_8('.x_fourth_119', '.aud119', '.choice_speed_119', '.repl119', '.down119')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_119" @click="Fifth_speed_8('.x_fifth_119', '.aud119', '.choice_speed_119', '.repl119', '.down119')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_119" @click="Six_speed_8('.x_six_119', '.aud119', '.choice_speed_119', '.repl119', '.down119')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl119" @click="Replay8('.aud119', '.r_icon_119')" @mouseover="S8('.repl119')" @mouseout="hide_repeat8('.repl119')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_119" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down119" @click="Download8('.down119', 'Infamous Second Son - Enemy Territory')" @mouseout="down_hide8('.down119')">
			   	  <vue-fontawesome icon="download" class="d_icon_119" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio8 Aud_t119">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block8" @mouseover="show_repeat8('.repl120', '.down120')">
			   <p class="name8 Inf6 text7_mobile_15">#15 Alibi</p>

			   <div class="audio_pole_m8 audio_p120_m8" @click="Perek8($event, '.aud120', '.audio_p120_m8')" @mouseover="Show_time8('.Aud_t120')" @mousemove="Run_block8($event, '.audio_p120_m8', '.aud120', '.Aud_t120')" @mouseout="Time_out8('.Aud_t120')">
				   <div class="aud_p8"></div>
			   </div>

			   <button id="vol8" @click="Vol8('.pl120', '.l_of_v120', '.repl120', '.down120')" @mouseover="Over8('.l_of_v120')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol8 l_of_v120" @mouseover="Over8('.l_of_v120')" @mouseout="Ov8('.l_of_v120')">
			   	  <div class="First_Vol"  @click="C1_8('.l_of_v120', '.aud120', '.repl120', '.down120')"></div>
			   	  <div class="Second_Vol"  @click="C2_8('.l_of_v120', '.aud120', '.repl120', '.down120')"></div>
			   	  <div class="Third_Vol"  @click="C3_8('.l_of_v120', '.aud120', '.repl120', '.down120')"></div>
			   	  <div class="Fourth_Vol"  @click="C4_8('.l_of_v120', '.aud120', '.repl120', '.down120')"></div>
			   </div>

			   <button class="prev8" @click="Prev8('.aud120', '.aud119', '.repl120', '.r_icon_120', '.down120')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play8 pl120" @click="Play8('.pl120', '.repl120', '.down120')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud120" @timeupdate="Update8('.aud120', '.st120', '.audio_p120_m8')" src="../sound/Infamous_second_son/20. Alibi.mp3"></audio></button>
			   <button class="next8" @click="Next8('.aud120', '.aud106', '.repl120', '.r_icon_120', '.down120')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time8 st120">00:00</p><p class="end_time8">/04:13</p>

			   <span id="speed_aud8" class="choice_speed_120" @click="Show_speed8('.sp_block_120')">x1</span>

			   <div class="Speed_block8 sp_block_120">
			   	   <div class="contain8">
			   	   	  <div class="Sp_25 b8 x_first_120" @click="First_speed_8('.x_first_120', '.aud120', '.choice_speed_120', '.repl120', '.down120')"><p>x.25</p></div>
			   	      <div class="Sp_5 b8 x_second_120" @click="Second_speed_8('.x_second_120', '.aud120', '.choice_speed_120', '.repl120', '.down120')"><p>x.5</p></div>
			   	      <div class="Sp_1 b8 x_third_120" @click="Third_speed_8('.x_third_120', '.aud120', '.choice_speed_120', '.repl120', '.down120')"><p>x1</p></div>
			   	      <div class="Sp_1_25 b8 x_fourth_120" @click="Fourth_speed_8('.x_fourth_120', '.aud120', '.choice_speed_120', '.repl120', '.down120')"><p>x1.25</p></div>
			   	      <div class="Sp_15 b8 x_fifth_120" @click="Fifth_speed_8('.x_fifth_120', '.aud120', '.choice_speed_120', '.repl120', '.down120')"><p>x1.5</p></div>
			   	      <div class="Sp_2 b8 x_six_120" @click="Six_speed_8('.x_six_120', '.aud120', '.choice_speed_120', '.repl120', '.down120')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button8 repl120" @click="Replay8('.aud120', '.r_icon_120')" @mouseover="S8('.repl120')" @mouseout="hide_repeat8('.repl120')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_120" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button8 down120" @click="Download8('.down120', 'Infamous Second Son - Alibi')" @mouseout="down_hide8('.down120')">
			   	  <vue-fontawesome icon="download" class="d_icon_120" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio8 Aud_t120">
			   	   <span id="t8">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>
	export default {
		name: "Infamous_second_son",
		methods: {
		Play8(el1, Repl_elem_1, Down_elem_1) {
      	 let vl = document.querySelector(el1);
      	 let opov_4_block = document.querySelector('.opoveshenie_block');
      	 let opov_4_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_4 = document.querySelector(Repl_elem_1);
      	 let DOWN_ELEM_4 = document.querySelector(Down_elem_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} - играет`;

            REPL_ELEM_4.classList.add('Rep_12');
            DOWN_ELEM_4.classList.add('d_first_anim8');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_11');
               DOWN_ELEM_4.classList.remove('d_first_move8');
               REPL_ELEM_4.classList.remove('Rep_12');
               DOWN_ELEM_4.classList.remove('d_first_anim8');
      	    }, 1100);

            opov_4_block.classList.add('show_n_block_anim');

            setTimeout(() => {
               opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_4_block.classList.add('hide_block');  
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block'); 
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('hide_block');
            }, 4910)
      	 } else {
      	    vl.children[1].pause();

      	    opov_4_block.classList.add("show_n_block_anim");
            
      	    opov_4_block.children[0].children[0].textContent = `${opov_4_name} - стоит на паузе`;

      	     REPL_ELEM_4.classList.add('Rep_12');
      	     DOWN_ELEM_4.classList.add('d_first_anim8');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_11');
               DOWN_ELEM_4.classList.remove('d_first_move8');
               REPL_ELEM_4.classList.remove('Rep_12');
               DOWN_ELEM_4.classList.remove('d_first_anim8');
      	    }, 1100);

      	    setTimeout(() => {
               opov_4_block.classList.add('show_n_block'); 
      	    }, 710);

      	    setTimeout(() => {
               opov_4_block.classList.add('fokus');
      	    }, 3710);

      	    setTimeout(() => {
               opov_4_block.classList.add("hide_block");
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block');
               opov_4_block.classList.remove('hide_block');
      	    }, 4910); 
      	 }
      },

      Vol8(el2, lvl1, Repl_elem_2, Down_elem_2) {
      	let vl2 = document.querySelector(el2);
      	let Lvl1 = document.querySelector(lvl1);
      	let opov_4_block = document.querySelector('.opoveshenie_block');
      	let opov_4_name = vl2.parentElement.children[0].textContent;
      	let REPL_ELEM_2 = document.querySelector(Repl_elem_2);
      	let DOWN_ELEM_2 = document.querySelector(Down_elem_2);

      	if(vl2.children[1].volume === 1) {
      		vl2.children[1].volume = 0;

      		Lvl1.children[3].style.background = "white";
      	    Lvl1.children[2].style.background = "white";
      	    Lvl1.children[1].style.background = "white";
      	    Lvl1.children[0].style.background = "white";
            
            opov_4_block.classList.add('show_n_block_anim');
            
            opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 0%`;

            REPL_ELEM_2.classList.add('Rep_12');
            DOWN_ELEM_2.classList.add('d_first_anim8');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_11');
               DOWN_ELEM_2.classList.remove('d_first_move8');
               REPL_ELEM_2.classList.remove('Rep_12');
               DOWN_ELEM_2.classList.remove('d_first_anim8');
      	    }, 1100);

            setTimeout(() => {
               opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_4_block.classList.add('hide_block');  
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block'); 
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('hide_block');
            }, 4910);
      	} else {
      		vl2.children[1].volume = 1;

      		Lvl1.children[3].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[2].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[1].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[0].style.background = "rgba(51, 204, 0, .8)";

            opov_4_block.classList.add('show_n_block_anim');
            
            opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 100%`;

            REPL_ELEM_2.classList.add('Rep_12');
            DOWN_ELEM_2.classList.add('d_first_anim8');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_11');
               DOWN_ELEM_2.classList.remove('d_first_move8');
               REPL_ELEM_2.classList.remove('Rep_12');
               DOWN_ELEM_2.classList.remove('d_fist_anim8');
      	    }, 1100);

            setTimeout(() => {
               opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_4_block.classList.add('hide_block');  
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block'); 
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('hide_block');
            }, 4910);
      	}
      },
              /* Download file function() :) */
      Download8(d_button, d_name) {
      	if(confirm('Вы точно хотите скачать этот файл?')) {
      	 let down_button = document.querySelector(d_button);
      	 let down_button_audio_address = down_button.parentElement.children[5].children[1].getAttribute('src');
         let link = document.createElement('a');

         link.setAttribute('href', `${down_button_audio_address}`);
         link.setAttribute('download', `${d_name}.mp3`);
         link.click();

         return true;
        }
      }, 

      Over8(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('L_show8');
      },

      Ov8(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('L_show8');
      },

      C1_8(el5, volm1, Repl_elem_3, Down_elem_3) {
      	  let vl5 = document.querySelector(el5);
          let vol1 = document.querySelector(volm1);
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = vl5.parentElement.children[0].textContent;
      	  let REPL_ELEM_3 = document.querySelector(Repl_elem_3);
      	  let DOWN_ELEM_3 = document.querySelector(Down_elem_3);

      	  vl5.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl5.children[1].style.background = "white";
      	  vl5.children[2].style.background = "white";
      	  vl5.children[3].style.background = "white";

      	  vol1.volume = 0.25;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 25%`;

          REPL_ELEM_3.classList.add('Rep_12');
          DOWN_ELEM_3.classList.add('d_first_anim8');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('Rep_11');
            DOWN_ELEM_3.classList.remove('d_first_move8');
            REPL_ELEM_3.classList.remove('Rep_12');
            DOWN_ELEM_3.classList.remove('d_first_anim8');
      	  }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      C2_8(el6, volm2, Repl_elem_4, Down_elem_4) {
          let vl6 = document.querySelector(el6);
          let vol2 = document.querySelector(volm2);
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = vl6.parentElement.children[0].textContent;
      	  let REPL_ELEM_4 = document.querySelector(Repl_elem_4);
      	  let DOWN_ELEM_4 = document.querySelector(Down_elem_4);

      	  vl6.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[2].style.background = "white";
      	  vl6.children[3].style.background = "white";

          vol2.volume = 0.55;

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 55%`;

          REPL_ELEM_4.classList.add('Rep_12');
          DOWN_ELEM_4.classList.add('d_fist_anim8');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('Rep_11');
            DOWN_ELEM_4.classList.remove('d_first_move8');
            REPL_ELEM_4.classList.remove('Rep_12');
            DOWN_ELEM_4.classList.remove('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      C3_8(el7, volm3, Repl_elem_5, Down_elem_5) {
          let vl7 = document.querySelector(el7);
          let vol3 = document.querySelector(volm3);
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = vl7.parentElement.children[0].textContent;
      	  let REPL_ELEM_5 = document.querySelector(Repl_elem_5);
      	  let DOWN_ELEM_5 = document.querySelector(Down_elem_5);
          
      	  vl7.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[3].style.background = "white";

      	  vol3.volume = 0.85;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 85%`;

           REPL_ELEM_5.classList.add('Rep_12');
           DOWN_ELEM_5.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('Rep_11');
            DOWN_ELEM_5.classList.remove('d_first_move8');
            REPL_ELEM_5.classList.remove('Rep_12');
            DOWN_ELEM_5.classList.remove('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },


      C4_8(el8, volm4, Repl_elem_6, Down_elem_6) {
          let vl8 = document.querySelector(el8);
          let vol4 = document.querySelector(volm4);
           let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = vl8.parentElement.children[0].textContent;
      	  let REPL_ELEM_6 = document.querySelector(Repl_elem_6);
      	  let DOWN_ELEM_6 = document.querySelector(Down_elem_6);

      	  vl8.children[3].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[0].style.background = "rgba(51, 204, 0, .8)";

      	  vol4.volume = 1;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Громкость ${opov_4_name} - 100%`;

          REPL_ELEM_6.classList.add('Rep_12');
          DOWN_ELEM_6.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('Rep_11');
            DOWN_ELEM_6.classList.remove('d_first_move8');
            REPL_ELEM_6.classList.remove('Rep_12');
            DOWN_ELEM_6.classList.remoev('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Update8(volm5, time_b1, prog) {
          let vol5 = document.querySelector(volm5);
          let time_block_1 = document.querySelector(time_b1);
          let progrs1 = document.querySelector(prog);

      	  let current = vol5.currentTime;
      	  let durat = vol5.duration;
      	  let progress = current / durat * 100;

      	  let min = Math.floor(vol5.currentTime / 60); //Конечно можно создавать такие переменные, ктобы сомневался
      	  let sec = Math.floor(vol5.currentTime - min * 60); 

      	  if(sec > 9) time_block_1.innerHTML = `0${min}:${sec}`;

      	  else {
      	  	time_block_1.innerHTML = `0${min}:0${sec}`;
      	  }

      	  progrs1.children[0].style.width = `${progress}%`;
      },

      Prev8(AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_1, DOWNLOAD_1) {
      	 let aud_1 = document.querySelector(AUDIO_1);
      	 let aud_2 = document.querySelector(AUDIO_2);
      	 let REPL_1 = document.querySelector(REPLAY_1);
      	 let REPL_icon_1 = document.querySelector(Rep_icon_1);
      	 let DOWN_1 = document.querySelector(DOWNLOAD_1);
         //let w_height = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
         let opov_4_block = document.querySelector('.opoveshenie_block');
         let opov_4_name = aud_1.parentElement.parentElement.children[0].textContent;
         let opov_4_4_name = aud_2.parentElement.parentElement.children[0].textContent;

         if(aud_1.played) {
            aud_1.pause();
            aud_1.currentTime = 0;
         } else {
         	aud_1.currentTime = 0;
         }

         setTimeout(() => {
            if(aud_2.paused) aud_2.play();

            if(aud_1.loop === true) {
                aud_1.loop = false;

                REPL_icon_1.style.color = 'white';
            } //После того, как нажмем кнопку у первого саундтрека все режимы должны быть в false(И повторного проигрывания, и последовательного тоже)..  НУ да, если просто поставить false, но цвет не измениться 
         }, 250);

         REPL_1.classList.add('Rep_12');
         DOWN_1.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_1.classList.remove('Rep_11');
            DOWN_1.classList.remove('d_first_move8');
            REPL_1.classList.remove('Rep_12');
            DOWN_1.classList.remove('d_first_anim8');
      	 }, 1100);

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `${opov_4_4_name} - играет, ${opov_4_name} - на паузе`;

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Next8(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_2) {
      	 let aud_3 = document.querySelector(AUDIO_3);
      	 let aud_4 = document.querySelector(AUDIO_4);
      	 let REPL_2 = document.querySelector(REPLAY_2);
      	 let REPL_icon_2 = document.querySelector(Rep_icon_2);
      	 let DOWN_2 = document.querySelector(DOWNLOAD_2);
         //let w2_height = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
         let opov_4_block = document.querySelector('.opoveshenie_block');
         let opov_4_name = aud_3.parentElement.parentElement.children[0].textContent;  //Fuck..... Asshole code! !!!!!
         let opov_4_4_name = aud_4.parentElement.parentElement.children[0].textContent;

         if(aud_3.played) {
         	aud_3.pause();
         	aud_3.currentTime = 0;
         } else {
         	aud_3.currentTime = 0;
         }

         setTimeout(() => {
            if(aud_4.paused) aud_4.play();

            if(aud_3.loop === true) {
            	aud_3.loop = false;
            	REPL_icon_2.style.color = 'white';
            }
         }, 250);

         REPL_2.classList.add('Rep_12');
         DOWN_2.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_2.classList.remove('Rep_11');
            DOWN_2.classList.remove('d_first_move8');
            REPL_2.classList.remove('Rep_12');
            DOWN_2.classList.remove('d_first_anim8');
      	 }, 1100);

         opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `${opov_4_4_name} - играет, ${opov_4_name} - на паузе`;

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Perek8(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time8(t_block5) {
          let time_block = document.querySelector(t_block5);
      	  time_block.classList.add('T_aud_8');
      },

      Time_out8(t_block5) {
      	  let time_block = document.querySelector(t_block5);
      	  time_block.classList.remove('T_aud_8');
      },

      Run_block8(event, M_Pole, Aud2, t_block4) {
      	  let M_pole = document.querySelector(M_Pole);
      	  let auD2 = document.querySelector(Aud2);
      	  let T_b = document.querySelector(t_block4);

      	  let move = event.offsetX / M_pole.offsetWidth * auD2.duration * 1.55;
      	  let T_objee = event.offsetX / M_pole.offsetWidth * auD2.duration;
      	  let MINS = Math.floor(T_objee / 60);
      	  let SEC = Math.floor(T_objee - MINS * 60);

          T_b.style.transform = `translateX(${move}px)`; //Передвижение этой штуки

          T_b.children[0].innerHTML = `0${MINS} : 0${SEC}`;

          if(SEC > 9) T_b.children[0].innerHTML = `0${MINS} : ${SEC}`; 

          //Когда передается event, то в функции лучше в 90% случаев указывать $event... Мда... Vue.js блин
      },
          
      show_repeat8(n_rep, d_rep) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep);

          nrep.classList.add('Rep_11');
          drep.classList.add('d_first_move8');
      },

      hide_repeat8(rep2) {
      	  let replay2 = document.querySelector(rep2);

      	  replay2.classList.add('Rep_12');

      	  setTimeout(() => {
             replay2.classList.remove('Rep_11');
             replay2.classList.remove('Rep_12');
      	  }, 1100);
      },

      down_hide8(dow2) {
         let d2 = document.querySelector(dow2);

         d2.classList.add('d_first_anim8');

         setTimeout(() => {
            d2.classList.remove('d_first_move8');
            d2.classList.remove('d_first_anim8');
         }, 1100);
      },

      Replay8(AUD, Icon1) {
      	  let aud = document.querySelector(AUD);
      	  let icon1 = document.querySelector(Icon1);
      	  let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = aud.parentElement.parentElement.children[0].textContent;
          
          if(aud.loop === false) {
      	    aud.loop = true;
      	    icon1.style.color = '#FFE70B';

      	    opov_4_block.classList.add('show_n_block_anim');
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} поставлен на повторное проигрывание`;

            setTimeout(() => {
              opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
              opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
              opov_4_block.classList.add('hide_block');  
              opov_4_block.classList.remove('show_n_block_anim');
              opov_4_block.classList.remove('show_n_block'); 
              opov_4_block.classList.remove('fokus');
              opov_4_block.classList.remove('hide_block');
            }, 4910);
      	  } 

      	  else {
      	  	aud.loop = false;
            icon1.style.color = 'white';

            opov_4_block.classList.add('show_n_block_anim');
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} снят с повторного проигрывание`;

            setTimeout(() => {
               opov_4_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_4_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_4_block.classList.add('hide_block');  
               opov_4_block.classList.remove('show_n_block_anim');
               opov_4_block.classList.remove('show_n_block'); 
               opov_4_block.classList.remove('fokus');
               opov_4_block.classList.remove('hide_block');
            }, 4910);
      	  }
      }, //Решил не делать с @dblclick, так как пока верстал под телефон/планшет, понял, что это вообще на них не срабатывает

      //Auto-pl function right here

      S8(rep3) {
      	  let rep = document.querySelector(rep3);
      	  rep.classList.add('Rep_11');
      },

      Show_speed8(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl_8');
      },

      First_speed_8(first, a, ch_one, Repl_elem_7, Down_elem_7) {
      	  let first_speed = document.querySelector(first); //x_25
      	  let first_a = document.querySelector(a);
      	  let choice_one = document.querySelector(ch_one); //Идея с переменными из data не сработала, в итоге дикий костыль :(
          choice_one.textContent = first_speed.children[0].textContent;
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = first_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_7 = document.querySelector(Repl_elem_7);
      	  let DOWN_ELEM_7 = document.querySelector(Down_elem_7);

          first_a.playbackRate = .25;

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X.25`;

           REPL_ELEM_7.classList.add('Rep_12');
           DOWN_ELEM_7.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('Rep_11');
            DOWN_ELEM_7.classList.remove('d_first_move8');
            REPL_ELEM_7.classList.remove('Rep_12');
            DOWN_ELEM_7.classList.remove('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Second_speed_8(second, a2, ch_two, Repl_elem_8, Down_elem_8) {
      	  let second_speed = document.querySelector(second); //x_5
      	  let second_a = document.querySelector(a2);
      	  let choice_two = document.querySelector(ch_two);
          choice_two.textContent = second_speed.children[0].textContent;
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = second_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_8 = document.querySelector(Repl_elem_8);
      	  let DOWN_ELEM_8 = document.querySelector(Down_elem_8);

          second_a.playbackRate = .5;

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X.5`;

           REPL_ELEM_8.classList.add('Rep_12');
           DOWN_ELEM_8.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('Rep_11');
            DOWN_ELEM_8.classList.remove('d_first_move8');
            REPL_ELEM_8.classList.remove('Rep_12');
            DOWN_ELEM_8.classList.remove('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Third_speed_8(third, a3, ch_three, Repl_elem_9, Down_elem_9) {
          let third_speed = document.querySelector(third); //x_1
          let third_a = document.querySelector(a3);
          let choice_three = document.querySelector(ch_three);
          choice_three.textContent = third_speed.children[0].textContent;
          let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = third_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_9 = document.querySelector(Repl_elem_9);
      	  let DOWN_ELEM_9 = document.querySelector(Down_elem_9);

          third_a.playbackRate = 1;

          opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X1`;

           REPL_ELEM_9.classList.add('Rep_12');
           DOWN_ELEM_9.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('Rep_11');
            DOWN_ELEM_9.classList.remove('d_first_move8');
            REPL_ELEM_9.classList.remove('Rep_12');
            DOWN_ELEM_9.classList.remove('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Fourth_speed_8(fourth, a4, ch_four, Repl_elem_10, Down_elem_10) {
      	  let fourth_speed = document.querySelector(fourth); //x_1_25
      	  let fourth_a = document.querySelector(a4);
      	  let choice_four = document.querySelector(ch_four);
      	  choice_four.textContent = fourth_speed.children[0].textContent;
      	  let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = fourth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_10 = document.querySelector(Repl_elem_10);
      	  let DOWN_ELEM_10 = document.querySelector(Down_elem_10);

      	  fourth_a.playbackRate = 1.25;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X1.25`;

           REPL_ELEM_10.classList.add('Rep_12');
           DOWN_ELEM_10.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('Rep_11');
            DOWN_ELEM_10.classList.remove('d_first_move8');
            REPL_ELEM_10.classList.remove('Rep_12');
            DOWN_ELEM_10.classList.remove('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Fifth_speed_8(fifth, a5, ch_five, Repl_elem_11, Down_elem_11) {
      	  let fifth_speed = document.querySelector(fifth); //x_15
      	  let fifth_a = document.querySelector(a5);
      	  let choice_five = document.querySelector(ch_five);
      	  choice_five.textContent = fifth_speed.children[0].textContent;
      	  let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = fifth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_11 = document.querySelector(Repl_elem_11);
      	  let DOWN_ELEM_11 = document.querySelector(Down_elem_11);

      	  fifth_a.playbackRate = 1.5;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X1.5`;

           REPL_ELEM_11.classList.add('Rep_12');
           DOWN_ELEM_11.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('Rep_11');
            DOWN_ELEM_11.classList.remove('d_first_move8');
            REPL_ELEM_11.classList.remove('Rep_12');
            DOWN_ELEM_11.classList.remove('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
      },

      Six_speed_8(six, a6, ch_six, Repl_elem_12, Down_elem_12) {
      	  let six_speed = document.querySelector(six); //x_2
      	  let six_a = document.querySelector(a6);
      	  let choice_six = document.querySelector(ch_six);
      	  choice_six.textContent = six_speed.children[0].textContent;
      	  let opov_4_block = document.querySelector('.opoveshenie_block');
      	  let opov_4_name = six_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_12 = document.querySelector(Repl_elem_12);
      	  let DOWN_ELEM_12 = document.querySelector(Down_elem_12);

      	  six_a.playbackRate = 2;

      	  opov_4_block.classList.add('show_n_block_anim');
            
          opov_4_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_4_name} - X2`;

           REPL_ELEM_12.classList.add('Rep_12');
           DOWN_ELEM_12.classList.add('d_first_anim8');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('Rep_11');
            DOWN_ELEM_12.classList.remove('d_first_move8');
            REPL_ELEM_12.classList.remove('Rep_12');
            DOWN_ELEM_12.classList.remove('d_first_anim8');
      	 }, 1100);

          setTimeout(() => {
            opov_4_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_4_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_4_block.classList.add('hide_block');  
            opov_4_block.classList.remove('show_n_block_anim');
            opov_4_block.classList.remove('show_n_block'); 
            opov_4_block.classList.remove('fokus');
            opov_4_block.classList.remove('hide_block');
          }, 4910);
        } 
      }

	};
</script>
<style>
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	.side_screen8 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/Infamous_second_son_background.jpg");
		background-size: cover;
		background-position: center;
		overflow-y: scroll;
	}

	::webkit-scroollbar-track {
		background: white;
	}

	::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    .side_screen8 span {
    	position: absolute;
    	left: 245px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block8 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block8 > .sound_block8 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block8 .sound_block8 .name8 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block8 .sound_block8 .Inf1 {
    	left: 140px;
    }

    .audio_collection_block8 .sound_block8 .Inf2 {
    	left: 90px;
    }

    .audio_collection_block8 .sound_block8 .Inf3 {
    	left: 130px;
    }

    .audio_collection_block8 .sound_block8 .Inf4 {
    	left: 130px;
    }

    .audio_collection_block8 .sound_block8 .Inf5 {
    	left: 150px;
    }

    .audio_collection_block8 .sound_block8 .Inf6 {
    	left: 270px;
    }

    .audio_collection_block8 .sound_block8 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block8 .sound_block8 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block8 .sound_block8 .audio_pole_m8 {
        height: 5px;
        width: 648px;
        position: absolute;
        left: 38px;
        top: 78px;
        cursor: pointer;
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;
        background: white;
    }

    .audio_collection_block8 .sound_block8 .audio_pole_m8:hover {
    	opacity: .7;
    }

    .audio_collection_block8 .sound_block8 .audio_pole_m8 .aud_p8 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	margin-left: 0;
    	margin-top: 0;
    	background: yellow;
    }

    .audio_collection_block8 .sound_block8 #vol8 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block8 .sound_block8 .l_of_vol8 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block8 .sound_block8 .l_of_vol8.L_show8 {
    	display: block;
    }

    .audio_collection_block8 .sound_block8 .l_of_vol8 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block8 .sound_block8 .l_of_vol8 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);

    }

    .audio_collection_block8 .sound_block8 .l_of_vol8 .First_Vol {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block8 .sound_block8 .l_of_vol8 .Second_Vol {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block8 .sound_block8 .l_of_vol8 .Third_Vol {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block8 .sound_block8 .l_of_vol8 .Fourth_Vol {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block8 .sound_block8 .prev8 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block8 .sound_block8 .prev8:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block8 .sound_block8 .play8 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block8 .sound_block8 .next8 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block8 .sound_block8 .next8:hover {
    	transform: translateX(5px);
    }

    .audio_collection_block8 .sound_block8 .start_time8 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block8 .sound_block8 .end_time8 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block8 .sound_block8 .Replay_button8 {
    	position: absolute;
    	height: 50px;
    	width: 50px;
    	background: black;
    	cursor: pointer;
    	float: right;
    	margin-left: 675px;
    	margin-top: 50px;
    	z-index: -1;
    }

    .audio_collection_block8 .sound_block8 .Replay_button8.Rep_11 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block8 .sound_block8 .Replay_button8.Rep_12 {
    	animation: spek8 1s linear;
    	transform: scale(0);
    }

    @keyframes spek8 {
    	0% {
           transform: scale(.8);
    	}

    	25% {
    		transform: scale(.6);
    	}

    	50% {
            transform: scale(.4);
    	}

    	75% {
            transform: scale(.2);
    	}

    	100% {
            transform: scale(0);
    	}
    }

     .audio_collection_block8 .sound_block8 .Download_button8 {
    	position: absolute;
    	height: 50px;
    	width: 50px;
    	cursor: pointer;
    	background: black;
    	float: left;
    	margin-top: 50px;
    	margin-left: 0px;
    	z-index: -1;
    }

    .audio_collection_block8 .sound_block8 .Download_button8:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block8 .sound_block8 .Download_button8.d_first_move8 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block8 .sound_block8 .Download_button8.d_first_anim8 {
    	animation: down8 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down8 {
    	0% {
           transform: scale(.8);
    	}

    	25% {
    		transform: scale(.6);
    	}

    	50% {
            transform: scale(.4);
    	}

    	75% {
            transform: scale(.2);
    	}

    	100% {
            transform: scale(0);
    	}
    }

    .audio_collection_block8 .sound_block8 .Time_of_audio8 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block8 .sound_block8 .Time_of_audio8 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block8 .sound_block8 .Time_of_audio8.T_aud_8 {
    	display: block;
    }

    .audio_collection_block8 .sound_block8 #speed_aud8 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block8 .sound_block8 .Speed_block8 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block8 .sound_block8 .Speed_block8.tgl_8 {
    	display: block;
    }
    
    .audio_collection_block8 .sound_block8 .Speed_block8 .contain8 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block8 .sound_block8 .Speed_block8 .contain8 .b8 {
    	height: 16.66px;
    	position: relative;
    	background: black;
    	left: 0;
    	top: -2.5px;
    	display: block;
    	width: 60px;
    	border-bottom: 1px solid white;
        cursor: pointer;
        transition: .9s;
        -o-transition: .9s;
        -mozila-transition: .9s;
        -webkit-transition: .9s;
    }

    .audio_collection_block8 .sound_block8 .Speed_block8 .contain8 .b8:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block8 .sound_block8 .Speed_block8 .contain8 .b8 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block8 .sound_block8 .Speed_block8 .contain8 .b8 p:hover {
        color: black;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
        .side_screen8 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen8 span {
    		font-size: 55px;
    		left: 185px;
    	}

    	.audio_collection_block8 > .sound_block8 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block8 .sound_block8 .audio_pole_m8 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block8 .sound_block8 .audio_pole_m8 .aud_p8 {
    		height: 9.5px;
    	}

    	.audio_collection_block8 .sound_block8 #vol8 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block8 .sound_block8 .play8 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block8 .sound_block8 .prev8 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block8 .sound_block8 .next8 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block8 .sound_block8 .name8 {
    	   left: 255px;
        }

        .audio_collection_block8 .sound_block8 .Time_of_audio8 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block8 .sound_block8 .Time_of_audio8 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block8 .sound_block8 .start_time8 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block8 .sound_block8 .end_time8 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block8 .sound_block8 #speed_aud8 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block8 .sound_block8 .Speed_block8 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block8 .sound_block8 .Speed_block8 .contain8 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block8 .sound_block8 .Speed_block8 .contain8 .b8 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block8 .sound_block8 .Speed_block8 .contain8 .b8 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block8 .sound_block8 .Replay_button8 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block8 .sound_block8 .Replay_button8.sh13 {
    	    margin-left: 850px;
        }

        .audio_collection_block8 .sound_block8 .Download_button8 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block8 .sound_block8 .l_of_vol8 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_2 {
        	left: 210px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_3 {
        	left: 220px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_4 {
        	left: 190px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_5 {
        	left: 270px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_6 {
        	left: 230px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_7 {
        	left: 230px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_8 {
        	left: 145px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_9 {
        	left: 290px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_11 {
        	left: 210px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_12 {
        	left: 185px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_13 {
        	left: 180px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_14 {
        	left: 210px;
        }

        .audio_collection_block8 .sound_block8 .text7_mobile_15 {
        	left: 320px;
        }
    }
</style>