<template>
	<div class="side_screen">
		<span>The Last Of Us Part II</span>
		<div class="audio_collection_block">
		    <div class="sound_block" @mouseover="show_repeat('.repl1', '.down1')">
			   <p class="name">#1 Main theme</p>

			   <div class="audio_pole_m audio_p1_m" @click="Perek($event, '.a1', '.audio_p1_m')" @mouseover="Show_time('.Aud_t1')" @mousemove="Run_block($event, '.audio_p1_m', '.a1', '.Aud_t1')" @mouseout="Time_out('.Aud_t1')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl1', '.l_of_v1', '.repl1', '.down1')" @mouseover="Over('.l_of_v1')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol l_of_v1" @mouseover="Over('.l_of_v1')" @mouseout="Ov('.l_of_v1')">
			   	  <div class="vl_1" @click="C1('.l_of_v1', '.a1', '.repl1', '.down1')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v1', '.a1', '.repl1', '.down1')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v1', '.a1', '.repl1', '.down1')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v1', '.a1', '.repl1', '.down1')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a1', '.a15', '.repl1', '.r_icon_1', '.down1')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl1" @click="Play('.pl1', '.repl1', '.down1')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update('.a1', '.st1', '.audio_p1_m')" class="aud a1" id="audio" src="../sound/TLOU/Main theme.mp3"></audio></button> 
			   <button class="next" @click="Next('.a1', '.a2', '.repl1', '.r_icon_1', '.down1')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st1">00:00</p><p class="end_time">/03:03</p>

			   <span id="speed_aud" class="choice_speed_1" @click="Show_speed('.sp_block_1')">x1</span>

			   <div class="Speed_block sp_block_1">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_1" @click="First_speed('.x_first_1', '.a1', '.choice_speed_1', '.repl1', '.down1')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_1" @click="Second_speed('.x_second_1', '.a1', '.choice_speed_1', '.repl1', '.down1')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_1" @click="Third_speed('.x_third_1', '.a1', '.choice_speed_1', '.repl1', '.down1')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_1" @click="Fourth_speed('.x_fourth_1', '.a1', '.choice_speed_1', '.repl1', '.down1')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_1" @click="Fifth_speed('.x_fifth_1', '.a1', '.choice_speed_1', '.repl1', '.down1')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_1" @click="Six_speed('.x_six_1', '.a1', '.choice_speed_1', '.repl1', '.down1')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl1" @click="Replay('.a1', '.r_icon_1')" @mouseover="S('.repl1')" @mouseout="hide_repeat('.repl1')"> 
			   	  <vue-fontawesome icon="retweet" class="r_icon_1" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button down1" @click="Download('.down1', 'The Last Of Us - Main Theme')" @mouseover="D('.down1')" @mouseout="down_hide('.down1')">
			   	  <vue-fontawesome icon="download" class="d_icon_1" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio Aud_t1">
			   	   <span id="t" class="t1">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block" v-on:mouseover="show_repeat('.repl2', '.down2')">
			   <p class="name l1">#2 Home</p>

			   <div class="audio_pole_m audio_p2_m" @click="Perek($event, '.a2', '.audio_p2_m')" @mouseover="Show_time('.Aud_t2')" @mousemove="Run_block($event, '.audio_p2_m', '.a2', '.Aud_t2')" @mouseout="Time_out('.Aud_t2')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl2', '.l_of_v2', '.repl2', '.down2')" @mouseover="Over('.l_of_v2')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v2" @mouseover="Over('.l_of_v2')" @mouseout="Ov('.l_of_v2')">
			   	  <div class="vl_1" @click="C1('.l_of_v2', '.a2', '.repl2', '.down2')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v2', '.a2', '.repl2', '.down2')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v2', '.a2', '.repl2', '.down2')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v2', '.a2', '.repl2', '.down2')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a2', '.a1', '.repl2', '.r_icon_2', '.down2')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl2" @click="Play('.pl2', '.repl2', '.down2')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a2" @timeupdate="Update('.a2', '.st2', '.audio_p2_m')" src="../sound/TLOU/Home.mp3"></audio></button>
			   <button class="next" @click="Next('.a2', '.a3', '.repl2', '.r_icon_2', '.down2')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st2">00:00</p><p class="end_time">/03:07</p>

			   <span id="speed_aud" class="choice_speed_2" @click="Show_speed('.sp_block_2')">x1</span>

			   <div class="Speed_block sp_block_2">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_11" @click="First_speed('.x_first_11', '.a2', '.choice_speed_2', '.repl2', '.down2')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_11" @click="Second_speed('.x_second_11', '.a2', '.choice_speed_2', '.repl2', '.down2')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_11" @click="Third_speed('.x_third_11', '.a2', '.choice_speed_2', '.repl2', '.down2')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_11" @click="Fourth_speed('.x_fourth_11', '.a2', '.choice_speed_2', '.repl2', '.down2')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_11" @click="Fifth_speed('.x_fifth_11', '.a2', '.choice_speed_2', '.repl2', '.down2')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_11" @click="Six_speed('.x_six_11', '.a2', '.choice_speed_2', '.repl2', '.down2')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl2" @click="Replay('.a2', '.r_icon_2')" @mouseover="S('.repl2')" @mouseout="hide_repeat('.repl2')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_2" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button down2" @click="Download('.down2', 'The Last Of Us - Home')" @mouseover="D('.down2')" @mouseout="down_hide('.down2')">
			   	  <vue-fontawesome icon="download" class="d_icon_2" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t2">
			   	   <span id="t" class="t2">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block" v-on:mouseover="show_repeat('.repl3', '.down3')">
			   <p class="name">#3 The Choice</p>

			   <div class="audio_pole_m audio_p3_m" @click="Perek($event, '.a3', '.audio_p3_m')" @mouseover="Show_time('.Aud_t3')" @mousemove="Run_block($event, '.audio_p3_m', '.a3', '.Aud_t3')" @mouseout="Time_out('.Aud_t3')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl3', '.l_of_v3', '.repl3', '.down3')" @mouseover="Over('.l_of_v3')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v3" @mouseover="Over('.l_of_v3')" @mouseout="Ov('.l_of_v3')">
			   	  <div class="vl_1" @click="C1('.l_of_v3', '.a3', '.repl3', '.down3')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v3', '.a3', '.repl3', '.down3')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v3', '.a3', '.repl3', '.down3')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v3', '.a3', '.repl3', '.down3')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a3', '.a2', '.repl3', '.r_icon_3', '.down3')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl3" @click="Play('.pl3', '.repl3', '.down3')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a3" @timeupdate="Update('.a3', '.st3', '.audio_p3_m')" src="../sound/TLOU/The Choice.mp3"></audio></button>
			   <button class="next" @click="Next('.a3', '.a4', '.repl3', '.r_icon_3', '.down3')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st3">00:00</p><p class="end_time">/01:40</p>

			   <span id="speed_aud" class="choice_speed_3" @click="Show_speed('.sp_block_3')">x1</span>

			   <div class="Speed_block sp_block_3">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_2" @click="First_speed('.x_first_2', '.a3', '.choice_speed_3', '.repl3', '.down3')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_2" @click="Second_speed('.x_second_2', '.a3', '.choice_speed_3', '.repl3', '.down3')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_2" @click="Third_speed('.x_third_2', '.a3', '.choice_speed_3', '.repl3', '.down3')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_2" @click="Fourth_speed('.x_fourth_2', '.a3', '.choice_speed_3', '.repl3', '.down3')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_2" @click="Fifth_speed('.x_fifth_2', '.a3', '.choice_speed_3', '.repl3', '.down3')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_2" @click="Six_speed('.x_six_2', 'a3', '.choice_speed_3', '.repl3', '.down3')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl3" @click="Replay('.a3', '.r_icon_3')" @mouseover="S('.repl3')" @mouseout="hide_repeat('.repl3')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_3" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button down3" @click="Download('.down3', 'The Last Of Us - The Choice')" @mouseover="D('.down3')" @mouseout="down_hide('.down3')">
			   	  <vue-fontawesome icon="download" class="d_icon_3" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio Aud_t3">
			   	   <span id="t" class="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl4', '.down4')">
			   <p class="name">#4 Goodnight</p>

			   <div class="audio_pole_m audio_p4_m" @click="Perek($event, '.a4', '.audio_p4_m')" @mouseover="Show_time('.Aud_t4')" @mousemove="Run_block($event, '.audio_p4_m', '.a4', '.Aud_t4')" @mouseout="Time_out('.Aud_t4')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl4', '.l_of_v4', '.repl4', '.down4')" @mouseover="Over('.l_of_v4')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v4"  @mouseover="Over('.l_of_v4')" @mouseout="Ov('.l_of_v4')">
			   	  <div class="vl_1" @click="C1('.l_of_v4', '.a4', '.repl4', '.down4')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v4', '.a4', '.repl4', '.down4')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v4', '.a4', '.repl4', '.down4')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v4', '.a4', '.repl4', '.down4')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a4', '.a3', '.repl4', '.r_icon_4', '.down4')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl4" @click="Play('.pl4', '.repl4', '.down4')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a4" @timeupdate="Update('.a4', '.st4', '.audio_p4_m')" src="../sound/TLOU/Goodnight.mp3"></audio></button>
			   <button class="next" @click="Next('.a4', '.a5', '.repl4', '.r_icon_4', '.down4')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st4">00:00</p><p class="end_time">/00:50</p>

			   <span id="speed_aud" class="choice_speed_4" @click="Show_speed('.sp_block_4')">x1</span>

			   <div class="Speed_block sp_block_4">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_22" @click="First_speed('.x_first_22', '.a4', '.choice_speed_4', '.repl4', '.down4')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_22" @click="Second_speed('.x_second_22', '.a4', '.choice_speed_4', '.repl4', '.down4')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_22" @click="Third_speed('.x_third_22', '.a4', '.choice_speed_4', '.repl4', '.down4')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_22" @click="Fourth_speed('.x_fourth_22', '.a4', '.choice_speed_4', '.repl4', '.down4')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_22" @click="Fifth_speed('.x_fifth_22', '.a4', '.choice_speed_4', '.repl4', '.down4')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_22" @click="Six_speed('.x_six_22', '.a4', '.choice_speed_4', '.repl4', '.down4')"><p>x2</p></div>
			   	   </div>
			   </div>
 
			   <div class="Replay_button repl4" @click="Replay('.a4', '.r_icon_4')" @mouseover="S('.repl4')" @mouseout="hide_repeat('.repl4')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_4" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button down4" @click="Download('.down4', 'The Last Of Us - Goodnight')" @mouseover="D('.down4')" @mouseout="down_hide('.down4')">
			   	  <vue-fontawesome icon="download" class="d_icon_4" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t4">
			   	   <span id="t" class="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl5', '.down5')">
			   <p class="name">#5 You and me</p>

			   <div class="audio_pole_m audio_p5_m" @click="Perek($event, '.a5', '.audio_p5_m')" @mouseover="Show_time('.Aud_t5')" @mousemove="Run_block($event, '.audio_p5_m', '.a5', '.Aud_t5')" @mouseout="Time_out('.Aud_t5')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl5', '.l_of_v5', '.repl5', '.down5')" @mouseover="Over('.l_of_v5')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v5" @mouseover="Over('.l_of_v5')" @mouseout="Ov('.l_of_v5')">
			   	  <div class="vl_1" @click="C1('.l_of_v5', '.a5', '.repl5', '.down5')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v5', '.a5', '.repl5', '.down5')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v5', '.a5', '.repl5', '.down5')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v5', '.a5', '.repl5', '.down5')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a5', '.a4', '.repl5', '.r_icon_5', '.down5')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl5" @click="Play('.pl5', '.repl5', '.down5')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a5" @timeupdate="Update('.a5', '.st5', '.audio_p5_m')" src="../sound/TLOU/You and Me.mp3"></audio></button>
			   <button class="next" @click="Next('.a5', '.a6', '.repl5', '.r_icon_5', '.down5')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st5">00:00</p><p class="end_time">/02:08</p>

			   <span id="speed_aud" class="choice_speed_5" @click="Show_speed('.sp_block_5')">x1</span>

			   <div class="Speed_block sp_block_5">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_3" @click="First_speed('.x_first_3', '.a5', '.choice_speed_5', '.repl5', '.down5')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_3" @click="Second_speed('.x_second_3', '.a5', '.choice_speed_5', '.repl5', '.down5')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_3" @click="Third_speed('.x_third_3', '.a5', '.choice_speed_5', '.repl5', '.down5')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_3" @click="Fourth_speed('.x_fourth_3', '.a5', '.choice_speed_5', '.repl5', '.down5')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_3" @click="Fifth_speed('.x_fifth_3', '.a5', '.choice_speed_5', '.repl5', '.down5')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_3" @click="Six_speed('.x_six_3', '.a5', '.choice_speed_5', '.repl5', '.down5')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl5" @click="Replay('.a5', '.r_icon_5')" @mouseover="S('.repl5')" @mouseout="hide_repeat('.repl5')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_5" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button down5" @click="Download('.down5', 'The Last Of Us - You and me')" @mouseover="D('.down5')" @mouseout="down_hide('.down5')">
			   	  <vue-fontawesome icon="download" class="d_icon_5" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t5">
			   	   <span id="t" class="t5">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl6', '.down6')">
			   <p class="name">#6 Never Again</p>

			   <div class="audio_pole_m audio_p6_m" @click="Perek($event, '.a6', '.audio_p6_m')" @mouseover="Show_time('.Aud_t6')" @mousemove="Run_block( $event, '.audio_p6_m', '.a6', '.Aud_t6')" @mouseout="Time_out('.Aud_t6')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl6', '.l_of_v6', '.repl6', '.down6')" @mouseover="Over('.l_of_v6')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v6" @mouseover="Over('.l_of_v6')" @mouseout="Ov('.l_of_v6')">
			   	  <div class="vl_1" @click="C1('.l_of_v6', '.a6', '.repl6', '.down6')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v6', '.a6', '.repl6', '.down6')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v6', '.a6', '.repl6', '.down6')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v6', '.a6', '.repl6', '.down6')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a6', '.a5', '.repl6', '.r_icon_6', '.down6')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl6" @click="Play('.pl6', '.repl6', '.down6')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a6" @timeupdate="Update('.a6', '.st6', '.audio_p6_m')" src="../sound/TLOU/Never Again.mp3"></audio></button>
			   <button class="next" @click="Next('.a6', '.a7', '.repl6', '.r_icon_6', '.down6')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st6">00:00</p><p class="end_time">/01:01</p>

			   <span id="speed_aud" class="choice_speed_6" @click="Show_speed('.sp_block_6')">x1</span>

			   <div class="Speed_block sp_block_6">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_33" @click="First_speed('.x_first_33', '.a6', '.choice_speed_6', '.repl6', '.down6')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_33" @click="Second_speed('.x_second_33', '.a6', '.choice_speed_6', '.repl6', '.down6')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_33" @click="Third_speed('.x_third_33', '.a6', '.choice_speed_6', '.repl6', '.down6')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_33" @click="Fourth_speed('.x_fourth_33', '.a6', '.choice_speed_6', '.repl6', '.down6')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_33" @click="Fifth_speed('.x_fifth_33', '.a6', '.choice_speed_6', '.repl6', '.down6')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_33" @click="Six_speed('.x_six_33', '.a6', '.choice_speed_6', '.repl6', '.down6')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl6" @click="Replay('.a6', '.r_icon_6')" @mouseover="S('.repl6')" @mouseout="hide_repeat('.repl6')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_6" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button down6" @click="Download('.down6', 'The Last Of Us - Never Again')" @mouseover="D('.down6')" @mouseout="down_hide('.down6')">
			   	  <vue-fontawesome icon="download" class="d_icon_6" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio Aud_t6">
			   	   <span id="t" class="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl7', '.down7')">
			   <p class="name">#7 The Quarantine Zone</p>

			   <div class="audio_pole_m audio_p7_m" @click="Perek($event, '.a7', '.audio_p7_m')" @mouseover="Show_time('.Aud_t7')" @mousemove="Run_block($event, '.audio_p7_m', '.a7', '.Aud_t7')" @mouseout="Time_out('.Aud_t7')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl7', '.l_of_v7', '.repl7', '.down7')" @mouseover="Over('.l_of_v7')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v7" @mouseover="Over('.l_of_v7')" @mouseout="Ov('.l_of_v7')">
			   	  <div class="vl_1" @click="C1('.l_of_v7', '.a7', '.repl7', '.down7')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v7', '.a7', '.repl7', '.down7')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v7', '.a7', '.repl7', '.down7')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v7', '.a7', '.repl7', '.down7')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a7', '.a6', '.repl7', '.r_icon_7', '.down7')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl7" @click="Play('.pl7', '.repl7', '.down7')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a7" @timeupdate="Update('.a7', '.st7', '.audio_p7_m')" src="../sound/TLOU/The Quarantine Zone.mp3"></audio></button>
			   <button class="next" @click="Next('.a7', '.a8', '.repl7', '.r_icon_7', '.down7')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st7">00:00</p><p class="end_time">/03:40</p> <!-- Продолжу тут -->
               
                <span id="speed_aud" class="choice_speed_7" @click="Show_speed('.sp_block_7')">x1</span>

			   <div class="Speed_block sp_block_7">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_4" @click="First_speed('.x_first_4', '.a7', '.choice_speed_7', '.repl7', '.down7')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_4" @click="Second_speed('.x_second_4', '.a7', '.choice_speed_7', '.repl7', '.down7')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_4" @click="Third_speed('.x_third_4', '.a7', '.choice_speed_7', '.repl7', '.down7')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_4" @click="Fourth_speed('.x_fourth', '.a7', '.choice_speed_7', '.repl7', '.down7')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_4" @click="Fifth_speed('.x_fifth_4', '.a7', '.choice_speed_7', '.repl7', '.down7')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_4" @click="Six_speed('.x_six_4', '.a7', '.choice_speed_7', '.repl7', '.down7')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl7" @click="Replay('.a7', '.r_icon_7')" @mouseover="S('.repl7')" @mouseout="hide_repeat('.repl7')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_7" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button down7" @click="Download('.down7', 'The Last Of Us - The Quarantine Zone')" @mouseover="D('.down7')" @mouseout="down_hide('.down7')">
			   	  <vue-fontawesome icon="download" class="d_icon_7" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t7">
			   	   <span id="t" class="t7">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl8', '.down8')">
			   <p class="name l2">#8 Astray</p>

			   <div class="audio_pole_m audio_p8_m" @click="Perek($event, '.a8', '.audio_p8_m')" @mouseover="Show_time('.Aud_t8')" @mousemove="Run_block($event, '.audio_p8_m', '.a8', '.Aud_t8')" @mouseout="Time_out('.Aud_t8')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl8', '.l_of_v8', '.repl8', '.down8')" @mouseover="Over('.l_of_v8')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v8" @mouseover="Over('.l_of_v8')" @mouseout="Ov('.l_of_v8')">
			   	  <div class="vl_1" @click="C1('.l_of_v8', '.a8', '.repl8', '.down8')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v8', '.a8', '.repl8', '.down8')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v8', '.a8', '.repl8', '.down8')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v8', '.a8', '.repl8', '.down8')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a8', '.a7', '.repl8', '.r_icon_8', '.down8')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl8" @click="Play('.pl8', '.repl8', '.down8')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a8" @timeupdate="Update('.a8', '.st8', '.audio_p8_m')" src="../sound/TLOU/Astray.mp3"></audio></button>
			   <button class="next" @click="Next('.a8', '.a9', '.repl8', '.r_icon_8', '.down8')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st8">00:00</p><p class="end_time">/03:28</p>

			   <span id="speed_aud" class="choice_speed_8" @click="Show_speed('.sp_block_8')">x1</span>

			   <div class="Speed_block sp_block_8">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_44" @click="First_speed('.x_first_44', '.a8', '.choice_speed_8', '.repl8', '.down8')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_44" @click="Second_speed('.x_second_44', '.a8', '.choice_speed_8', '.repl8', '.down8')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_44" @click="Third_speed('.x_third_44', '.a8', '.choice_speed_8', '.repl8', '.down8')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_44" @click="Fourth_speed('.x_fourth_44', '.a8', '.choice_speed_8', '.repl8', '.down8')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_44" @click="Fifth_speed('.x_fifth_44', '.a8', '.choice_speed_8', '.repl8', '.down8')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_44" @click="Six_speed('.x_six_44', '.a8', '.choice_speed_8', '.repl8', '.down8')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl8" @click="Replay('.a8', '.r_icon_8')" @mouseover="S('.repl8')" @mouseout="hide_repeat('.repl8')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_8" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button down8" @click="Download('.down8', 'The Last Of Us - Astray', '.d_icon_8')" @mouseover="D('.down8')" @mouseout="down_hide('.down8')">
			   	  <vue-fontawesome icon="download" class="d_icon_8" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t8">
			   	   <span id="t" class="t8">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl9', '.down9')">
			   <p class="name l3">#9 The Hour</p>

			   <div class="audio_pole_m audio_p9_m" @click="Perek($event, '.a9', '.audio_p9_m')" @mouseover="Show_time('.Aud_t9')" @mousemove="Run_block($event, '.audio_p9_m', '.a9', '.Aud_t9')" @mouseout="Time_out('.Aud_t9')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl9', '.l_of_v9', '.repl9', '.down9')" @mouseover="Over('.l_of_v9')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v9" @mouseover="Over('.l_of_v9')" @mouseout="Ov('.l_of_v9')">
			   	  <div class="vl_1" @click="C1('.l_of_v9', '.a9', '.repl9', '.down9')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v9', '.a9', '.repl9', '.down9')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v9', '.a9', '.repl9', '.down9')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v9', '.a9', '.repl9', '.down9')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a9', '.a8', '.repl9', '.r_icon_9', '.down9')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl9" @click="Play('.pl9', '.repl9', '.down9')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a9" @timeupdate="Update('.a9', '.st9', '.audio_p9_m')" src="../sound/TLOU/The Hour.mp3"></audio></button>
			   <button class="next" @click="Next('.a9', '.a10', '.repl9', '.r_icon_9', '.down9')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st9">00:00</p><p class="end_time">/01:01</p>

			    <span id="speed_aud" class="choice_speed_9" @click="Show_speed('.sp_block_9')">x1</span>

			   <div class="Speed_block sp_block_9">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_5" @click="First_speed('.x_first_5', '.a9', '.choice_speed_9', '.repl9', '.down9')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_5" @click="Second_speed('.x_second_5', '.a9', '.choice_speed_9', '.repl9', '.down9')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_5" @click="Third_speed('.x_third_5', '.a9', '.choice_speed_9', '.repl9', '.down9')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_5" @click="Fourth_speed('.x_fourth_5', '.a9', '.choice_speed_9', '.repl9', '.down9')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_5" @click="Fifth_speed('.x_fifth_5', '.a9', '.choice_speed_9', '.repl9', '.down9')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_5" @click="Six_speed('.x_six_5', '.a9', '.choice_speed_9', '.repl9', '.down9')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl9" @click="Replay('.a9', '.r_icon_9')" @mouseover="S('.repl9')" @mouseout="hide_repeat('.repl9')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_9" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button down9" @click="Download('.down9', 'The Last Of Us - The Hour')" @mouseover="D('.down9')" @mouseout="down_hide('.down9')">
			   	  <vue-fontawesome icon="download" class="d_icon_9" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t9">
			   	   <span id="t" class="t9">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" @mouseover="show_repeat('.repl10', '.down10')">
			   <p class="name">#10 A new dawn</p>

			   <div class="audio_pole_m audio_p10_m" @click="Perek($event, '.a10', '.audio_p10_m')" @mouseover="Show_time('.Aud_t10')" @mousemove="Run_block($event, '.audio_p10_m', '.a10', '.Aud_t10')" @mouseout="Time_out('.Aud_t10')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl10', '.l_of_v10', '.repl10', '.down10')" @mouseover="Over('.l_of_v10')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v10" @mouseover="Over('.l_of_v10')" @mouseout="Ov('.l_of_v10')">
			   	  <div class="vl_1" @click="C1('.l_of_v10', '.a10', '.repl10', '.down10')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v10', '.a10', '.repl10', '.down10')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v10', '.a10', '.repl10', '.down10')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v10', '.a10', '.repl10', '.down10')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a10', '.a9', '.repl10', '.r_icon_10', '.down10')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl10" @click="Play('.pl10', '.repl10', '.down10')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a10" @timeupdate="Update('.a10', '.st10', '.audio_p10_m')" src="../sound/TLOU/A new dawn.mp3"></audio></button>
			   <button class="next" @click="Next('.a10', '.a11', '.repl10', '.r_icon_10', '.down10')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st10">00:00</p><p class="end_time">/02:27</p>

			    <span id="speed_aud" class="choice_speed_10" @click="Show_speed('.sp_block_10')">x1</span>

			   <div class="Speed_block sp_block_10">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_55" @click="First_speed('.x_first_55', '.a10', '.choice_speed_10', '.repl10', '.down10')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_55" @click="Second_speed('.x_second_55', '.a10', '.choice_speed_10', '.repl10', '.down10')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_55" @click="Third_speed('.x_third_55', '.a10', '.choice_speed_10', '.repl10', '.down10')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_55" @click="Fourth_speed('.x_fourth_55', '.a10', '.choice_speed_10', '.repl10', '.down10')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_55" @click="Fifth_speed('.x_fifth_55', '.a10', '.choice_speed_10', '.repl10', '.down10')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_55" @click="Six_speed('.x_six_55', '.a10', '.choice_speed_10', '.repl10', '.down10')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl10" @click="Replay('.a10', '.r_icon_10')" @mouseover="S('.repl10')" @mouseout="hide_repeat('.repl10')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_10" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button down10" @click="Download('.down10', 'The Last Of Us - A New Dawn')" @mouseover="D('.down10')" @mouseout="down_hide('.down10')">
			   	  <vue-fontawesome icon="download" class="d_icon_10" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t10">
			   	   <span id="t" class="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl11', '.down11')">
			   <p class="name">#11 Vanishing Grace</p>

			   <div class="audio_pole_m audio_p11_m" @click="Perek($event, '.a11', '.audio_p11_m')" @mouseover="Show_time('.Aud_t11')" @mousemove="Run_block($event, '.audio_p11_m', '.a11', '.Aud_t11')" @mouseout="Time_out('.Aud_t11')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl11', '.l_of_v11', '.repl11', '.down11')" @mouseover="Over('.l_of_v11')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v11" @mouseover="Over('.l_of_v11')" @mouseout="Ov('.l_of_v11')">
			   	  <div class="vl_1"  @click="C1('.l_of_v11', '.a11', '.repl11', '.down11')"></div>
			   	  <div class="vl_2"  @click="C2('.l_of_v11', '.a11', '.repl11', '.down11')"></div>
			   	  <div class="vl_3"  @click="C3('.l_of_v11', '.a11', '.repl11', '.down11')"></div>
			   	  <div class="vl_4"  @click="C4('.l_of_v11', '.a11', '.repl11', '.down11')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a11', '.a10', '.repl11', '.r_icon_11', '.down11')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl11" @click="Play('.pl11', '.repl11', '.down11')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a11" @timeupdate="Update('.a11', '.st11', '.audio_p11_m')" src="../sound/TLOU/Vanishing Grace.mp3"></audio></button>
			   <button class="next" @click="Next('.a11', '.a12', '.repl11', '.r_icon_11', '.down11')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st11">00:00</p><p class="end_time">/02:05</p>

			   <span id="speed_aud" class="choice_speed_11" @click="Show_speed('.sp_block_11')">x1</span>

			   <div class="Speed_block sp_block_11">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_6" @click="First_speed('.x_first_6', '.a11', '.choice_speed_11', '.repl11', '.down11')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_6" @click="Second_speed('.x_second_6', '.a11', '.choice_speed_11', '.repl11', '.down11')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_6" @click="Third_speed('.x_third_6', '.a11', '.choice_speed_11', '.repl11', '.down11')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_6" @click="Fourth_speed('.x_fourth_6', '.a11', '.choice_speed_11', '.repl11', '.down11')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_6" @click="Fifth_speed('.x_fifth_6', '.a11', '.choice_speed_11', '.repl11', '.down11')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_6" @click="Six_speed('.x_six_6', '.a11', '.choice_speed_11', '.repl11', '.down11')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl11" @click="Replay('.a11', '.r_icon_11')" @mouseover="S('.repl11')" @mouseout="hide_repeat('.repl11')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_11" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button down11" @click="Download('.down11', 'The Last Of Us - Vanishing Grace')" @mouseover="D('.down11')" @mouseout="down_hide('.downw11')">
			   	  <vue-fontawesome icon="download" class="d_icon_11" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t11">
			   	   <span id="t" class="t11">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl12', '.down12')">
			   <p class="name">#12 The Hunters</p>

			   <div class="audio_pole_m audio_p12_m" @click="Perek($event, '.a12', '.audio_p12_m')" @mouseover="Show_time('.Aud_t12')" @mousemove="Run_block($event, '.audio_p12_m', '.a12', '.Aud_t12')" @mouseout="Time_out('.Aud_t12')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl12', '.l_of_v12', '.repl12', '.down12')" @mouseover="Over('.l_of_v12')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v12" @mouseover="Over('.l_of_v12')" @mouseout="Ov('.l_of_v12')">
			   	  <div class="vl_1" @click="C1('.l_of_v12', '.a12', '.repl12', '.down12')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v12', '.a12', '.repl12', '.down12')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v12', '.a12', '.repl12', '.down12')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v12', '.a12', '.repl12', '.down12')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a12', '.a11', '.repl12', '.r_icon_12', '.down12')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl12" @click="Play('.pl12', '.repl12', '.down12')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a12" @timeupdate="Update('.a12', '.st12', '.audio_p12_m')" src="../sound/TLOU/The Hunters.mp3"></audio></button>
			   <button class="next" @click="Next('.a12', '.a13', '.repl12', '.r_icon_12', '.down12')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st12">00:00</p><p class="end_time">/01:59</p>

			   <span id="speed_aud" class="choice_speed_12" @click="Show_speed('.sp_block_12')">x1</span>

			   <div class="Speed_block sp_block_12">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_66" @click="First_speed('.x_first_66', '.a12', '.choice_speed_12', '.repl12', '.down12')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_66" @click="Second_speed('.x_second_66', '.a12', '.choice_speed_12', '.repl12', '.down12')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_66" @click="Third_speed('.x_third_66', '.a12', '.choice_speed_12', '.repl12', '.down12')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_66" @click="Fourth_speed('.x_fourth_66', '.a12', '.choice_speed_12', '.repl12', '.down12')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_66" @click="Fifth_speed('.x_fifth_66', '.a12', '.choice_speed_12', '.repl12', '.down12')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_66" @click="Six_speed('.x_six_66', '.a12', '.choice_speed_12', '.repl12', '.down12')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl12" @click="Replay('.a12', '.r_icon_12')" @mouseover="S('.repl12')" @mouseout="hide_repeat('.repl12')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_12" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button down12" @click="Download('.down12', 'The Last Of Us - The Hunters')" @mouseover="D('.down12')" @mouseout="down_hide('.down12')">
			   	  <vue-fontawesome icon="download" class="d_icon_12" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t12">
			   	   <span id="t12">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" @mouseover="show_repeat('.repl13', '.down13')">
			   <p class="name">#13 By any means</p>

			   <div class="audio_pole_m audio_p13_m" @click="Perek($event, '.a13', '.audio_p13_m')" @mouseover="Show_time('.Aud_t13')" @mousemove="Run_block($event, '.audio_p13_m', '.a13', '.Aud_t13')" @mouseout="Time_out('.Aud_t13')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl13', '.l_of_v13', '.repl13', '.down13')" @mouseover="Over('.l_of_v13')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v13" @mouseover="Over('.l_of_v13')" @mouseout="Ov('.l_of_v13')">
			   	  <div class="vl_1" @click="C1('.l_of_v13', '.a13', '.repl13', '.down13')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v13', '.a13', '.repl13', '.down13')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v13', '.a13', '.repl13', '.down13')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v13', '.a13', '.repl13', '.down13')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a13', '.a12', '.repl13', '.r_icon_13', '.down13')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl13" @click="Play('.pl13', '.repl13', '.down13')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a13" @timeupdate="Update('.a13', '.st13', '.audio_p13_m')" src="../sound/TLOU/By any means.mp3"></audio></button>
			   <button class="next" @click="Next('.a13', '.a14', '.repl13', '.r_icon_13', '.down13')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st13">00:00</p><p class="end_time">/01:52</p>

			   <span id="speed_aud" class="choice_speed_13" @click="Show_speed('.sp_block_13')">x1</span>

			   <div class="Speed_block sp_block_13">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_7" @click="First_speed('.x_first_7', '.a13', '.choice_speed_13', '.repl13', '.down13')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_7" @click="Second_speed('.x_second_7', '.a13', '.choice_speed_13', '.repl13', '.down13')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_7" @click="Third_speed('.x_third_7', '.a13', '.choice_speed_13', '.repl13', '.down13')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_7" @click="Fourth_speed('.x_fourth_7', '.a13', '.choice_speed_13', '.repl13', '.down13')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_7" @click="Fifth_speed('.x_fifth_7', '.a13', '.choice_speed_13', '.repl13', '.down13')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_7" @click="Six_speed('.x_six_7', '.a13', '.choice_speed_13', '.repl13', '.down13')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl13" @click="Replay('.a13', '.r_icon_13')" @mouseover="S('.repl13')" @mouseout="hide_repeat('.repl13')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_13" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button down13" @click="Download('.down13', 'The Last Of Us - By any means')" @mouseover="D('.down13')" @mouseout="down_hide('.down13')">
			   	  <vue-fontawesome icon="download" class="d_icon_13" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t13">
			   	   <span id="t" class="t13">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl14', '.down14')">
			   <p class="name">#14 The Outbrake</p>

			   <div class="audio_pole_m audio_p14_m" @click="Perek($event, '.a14', '.audio_p14_m')" @mouseover="Show_time('.Aud_t14')" @mousemove="Run_block($event, '.audio_p14_m', '.a14', '.Aud_t14')" @mouseout="Time_out('.Aud_t14')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl14', '.l_of_v14', '.repl14', '.down14')" @mouseover="Over('.l_of_v14')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v14" @mouseover="Over('.l_of_v14')" @mouseout="Ov('.l_of_v14')">
			   	  <div class="vl_1" @click="C1('.l_of_v14', '.a14', '.repl14', '.down14')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v14', '.a14', '.repl14', '.down14')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v14', '.a14', '.repl14', '.down14')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v14', '.a14', '.repl14', '.down14')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a14', '.a13', '.repl14', '.r_icon_14', '.down14')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl14" @click="Play('.pl14', '.repl14', '.down14')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a14"  @timeupdate="Update('.a14', '.st14', '.audio_p14_m')" src="../sound/TLOU/The Outbrake.mp3"></audio></button>
			   <button class="next" @click="Next('.a14', '.a15', '.repl14', '.r_icon_14', '.down14')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st14">00:00</p><p class="end_time">/01:31</p>

			   <span id="speed_aud" class="choice_speed_14" @click="Show_speed('.sp_block_14')">x1</span>

			   <div class="Speed_block sp_block_14">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_77" @click="First_speed('.x_first_77', '.a14', '.choice_speed_14', '.repl14', '.down14')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_77" @click="Second_speed('.x_second_77', '.a14', '.choice_speed_14', '.repl14', '.down14')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_77" @click="Third_speed('.x_third_77', '.a14', '.choice_speed_14', '.repl14', '.down14')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_77" @click="Fourth_speed('.x_fourth_77', '.a14', '.choice_speed_14', '.repl14', '.down14')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_77" @click="Fifth_speed('.x_fifth_77', '.a14', '.choice_speed_14', '.repl14', '.down14')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_77" @click="Six_speed('.x_six_77', '.a14', '.choice_speed_14', '.repl14', '.down14')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl14" @click="Replay('.a14', '.r_icon_14')" @mouseover="S('.repl14')" @mouseout="hide_repeat('.repl14')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_14" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button down14" @click="Download('.down14', 'The Last Of Us - The Outbrake')" @mouseover="D('.down14')" @mouseout="down_hide('.down14')">
			   	  <vue-fontawesome icon="download" class="d_icon_14" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio Aud_t14">
			   	   <span id="t" class="t14">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block" v-on:mouseover="show_repeat('.repl15', '.down15')">
			   <p class="name">#15 All gone(No escape)</p>

			   <div class="audio_pole_m audio_p15_m" @click="Perek($event, '.a15', '.audio_p15_m')" @mouseover="Show_time('.Aud_t15')" @mousemove="Run_block($event, '.audio_p15_m', '.a15', '.Aud_t15')" @mouseout="Time_out('.Aud_t15')">
				   <div class="aud_p"></div>
			   </div>

			   <button id="vol" @click="Vol('.pl15', '.l_of_v15', '.repl15', '.down15')" @mouseover="Over('.l_of_v15')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol l_of_v15" @mouseover="Over('.l_of_v15')" @mouseout="Ov('.l_of_v15')">
			   	  <div class="vl_1" @click="C1('.l_of_v15', '.a15', '.repl15', '.down15')"></div>
			   	  <div class="vl_2" @click="C2('.l_of_v15', '.a15', '.repl15', '.down15')"></div>
			   	  <div class="vl_3" @click="C3('.l_of_v15', '.a15', '.repl15', '.down15')"></div>
			   	  <div class="vl_4" @click="C4('.l_of_v15', '.a15', '.repl15', '.down15')"></div>
			   </div>

			   <button class="prev" @click="Prev('.a15', '.a14', '.repl15', '.r_icon_15', '.down15')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play pl15" @click="Play('.pl15', '.repl15', '.down15')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud a15" @timeupdate="Update('.a15', '.st15', '.audio_p15_m')" src="../sound/TLOU/All gone(No escape).mp3"></audio></button>
			   <button class="next" @click="Next('.a15', '.a1', '.repl15', '.r_icon_15', '.down15')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time st15">00:00</p><p class="end_time">/02:54</p>

			   <span id="speed_aud" class="choice_speed_15" @click="Show_speed('.sp_block_15')">x1</span>

			   <div class="Speed_block sp_block_15">
			   	   <div class="contain">
			   	   	  <div class="x_25 b x_first_8" @click="First_speed('.x_first_8', '.a15', '.choice_speed_15', '.repl15', '.down15')"><p>x.25</p></div>
			   	      <div class="x_5 b x_second_8" @click="Second_speed('.x_second_8', '.a15', '.choice_speed_15', '.repl15', '.down15')"><p>x.5</p></div>
			   	      <div class="x_1 b x_third_8" @click="Third_speed('.x_third_8', '.a15', '.choice_speed_15', '.repl15', '.down15')"><p>x1</p></div>
			   	      <div class="x_1_25 b x_fourth_8" @click="Fourth_speed('.x_fourth_8', '.a15', '.choice_speed_15', '.repl15', '.down15')"><p>x1.25</p></div>
			   	      <div class="x_15 b x_fifth_8" @click="Fifth_speed('.x_fifth_8', '.a15', '.choice_speed_15', '.repl15', '.down15')"><p>x1.5</p></div>
			   	      <div class="x_2 b x_six_8" @click="Six_speed('.x_six_8', '.a15', '.choice_speed_15', '.repl15', '.down15')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button repl15" @click="Replay('.a15', '.r_icon_15')" @mouseover="S('.repl15')" @mouseout="hide_repeat('.repl15')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_15" size="3" color="white"></vue-fontawesome>
			   </div> <!-- Никогда не работал с vue-fontawesome.. Хз че будет, если щас через классы попробовать, но всетаки стоит попробовать.. Приду и продолжу /\^^/\ - Все классно, но он не меняет сам Attribute(icon)-->

			   <div class="Download_button down15" @click="Download('.down15', 'The Last Of Us - All Gone(No Escape)')" @mouseover="D('.down15')" @mouseout="down_hide('.down15')">
			   	  <vue-fontawesome icon="download" class="d_icon_15" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio Aud_t15">
			   	  <span id="t" class="t15">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>

<script type="text/javascript">
export default {
  name: "Home",
  methods: {
      Play(el1, Repl_elem_1, Down_elem_1) {
      	 let vl = document.querySelector(el1);
      	 let opov_1_block = document.querySelector('.opoveshenie_block');
      	 let opov_1_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_1 = document.querySelector(Repl_elem_1);
      	 let DOWN_ELEM_1 = document.querySelector(Down_elem_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_1_block.children[0].children[0].textContent = `${opov_1_name} - играет`;

            REPL_ELEM_1.classList.add('sh4');
            DOWN_ELEM_1.classList.add('d_first_anim');

      	    setTimeout(() => {
               REPL_ELEM_1.classList.remove('sh3');
               DOWN_ELEM_1.classList.remove('d_first_move');
               REPL_ELEM_1.classList.remove('sh4');
               DOWN_ELEM_1.classList.remove('d_first_anim');
      	    }, 1100);

            opov_1_block.classList.add('show_n_block_anim');

            setTimeout(() => {
               opov_1_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_1_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_1_block.classList.add('hide_block');  
               opov_1_block.classList.remove('show_n_block_anim');
               opov_1_block.classList.remove('show_n_block'); 
               opov_1_block.classList.remove('fokus');
               opov_1_block.classList.remove('hide_block');
            }, 4910)
      	 } else {
      	    vl.children[1].pause();

      	    opov_1_block.classList.add("show_n_block_anim");
            
      	    opov_1_block.children[0].children[0].textContent = `${opov_1_name} - стоит на паузе`;

      	     REPL_ELEM_1.classList.add('sh4');
      	     DOWN_ELEM_1.classList.add('d_first_anim');

      	    setTimeout(() => {
               REPL_ELEM_1.classList.remove('sh3');
               DOWN_ELEM_1.classList.remove('d_first_move');
               REPL_ELEM_1.classList.remove('sh4');
               DOWN_ELEM_1.classList.remove('d_first_anim');
      	    }, 1100);

      	    setTimeout(() => {
               opov_1_block.classList.add('show_n_block'); 
      	    }, 710);

      	    setTimeout(() => {
               opov_1_block.classList.add('fokus');
      	    }, 3710);

      	    setTimeout(() => {
               opov_1_block.classList.add("hide_block");
               opov_1_block.classList.remove('fokus');
               opov_1_block.classList.remove('show_n_block_anim');
               opov_1_block.classList.remove('show_n_block');
               opov_1_block.classList.remove('hide_block');
      	    }, 4910); 
      	 }
      },

      Vol(el2, lvl1, Repl_elem_2, Down_elem_2) {
      	let vl2 = document.querySelector(el2);
      	let Lvl1 = document.querySelector(lvl1);
      	let opov_1_block = document.querySelector('.opoveshenie_block');
      	let opov_1_name = vl2.parentElement.children[0].textContent;
      	let REPL_ELEM_2 = document.querySelector(Repl_elem_2);
      	let DOWN_ELEM_2 = document.querySelector(Down_elem_2);

      	if(vl2.children[1].volume === 1) {
      		vl2.children[1].volume = 0;

      		Lvl1.children[3].style.background = "white";
      	    Lvl1.children[2].style.background = "white";
      	    Lvl1.children[1].style.background = "white";
      	    Lvl1.children[0].style.background = "white";
            
            opov_1_block.classList.add('show_n_block_anim');
            
            opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 0%`;

            REPL_ELEM_2.classList.add('sh4');
            DOWN_ELEM_2.classList.add('d_first_anim');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('sh3');
               DOWN_ELEM_2.classList.remove('d_first_move');
               REPL_ELEM_2.classList.remove('sh4');
               DOWN_ELEM_2.classList.remove('d_first_anim');
      	    }, 1100);

            setTimeout(() => {
               opov_1_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_1_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_1_block.classList.add('hide_block');  
               opov_1_block.classList.remove('show_n_block_anim');
               opov_1_block.classList.remove('show_n_block'); 
               opov_1_block.classList.remove('fokus');
               opov_1_block.classList.remove('hide_block');
            }, 4910);
      	} else {
      		vl2.children[1].volume = 1;

      		Lvl1.children[3].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[2].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[1].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1.children[0].style.background = "rgba(51, 204, 0, .8)";

            opov_1_block.classList.add('show_n_block_anim');
            
            opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 100%`;

            REPL_ELEM_2.classList.add('sh4');
            DOWN_ELEM_2.classList.add('d_first_anim');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('sh3');
               DOWN_ELEM_2.classList.remove('d_first_move');
               REPL_ELEM_2.classList.remove('sh4');
               DOWN_ELEM_2.classList.remove('d_fist_anim');
      	    }, 1100);

            setTimeout(() => {
               opov_1_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_1_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_1_block.classList.add('hide_block');  
               opov_1_block.classList.remove('show_n_block_anim');
               opov_1_block.classList.remove('show_n_block'); 
               opov_1_block.classList.remove('fokus');
               opov_1_block.classList.remove('hide_block');
            }, 4910);
      	}
      },
              /* Download file function() :) */
      Download(d_button, d_name) {
      	if(confirm('Вы правда хотите скачать этот файл?')) {
      	 let down_button = document.querySelector(d_button);
      	 let down_button_audio_address = down_button.parentElement.children[5].children[1].getAttribute('src');
         let link = document.createElement('a');

         link.setAttribute('href', `${down_button_audio_address}`);
         link.setAttribute('download', `${d_name}.mp3`);         
         link.click();    

         return false;    
        } 
      }, 

      Over(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('sh');
      },

      Ov(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('sh');
      },

      C1(el5, volm1, Repl_elem_3, Down_elem_3) {
      	  let vl5 = document.querySelector(el5);
          let vol1 = document.querySelector(volm1);
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = vl5.parentElement.children[0].textContent;
      	  let REPL_ELEM_3 = document.querySelector(Repl_elem_3);
      	  let DOWN_ELEM_3 = document.querySelector(Down_elem_3);

      	  vl5.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl5.children[1].style.background = "white";
      	  vl5.children[2].style.background = "white";
      	  vl5.children[3].style.background = "white";

      	  vol1.volume = 0.25;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 25%`;

          REPL_ELEM_3.classList.add('sh4');
          DOWN_ELEM_3.classList.add('d_first_anim');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('sh3');
            DOWN_ELEM_3.classList.remove('d_first_move');
            REPL_ELEM_3.classList.remove('sh4');
            DOWN_ELEM_3.classList.remove('d_first_anim');
      	  }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      C2(el6, volm2, Repl_elem_4, Down_elem_4) {
          let vl6 = document.querySelector(el6);
          let vol2 = document.querySelector(volm2);
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = vl6.parentElement.children[0].textContent;
      	  let REPL_ELEM_4 = document.querySelector(Repl_elem_4);
      	  let DOWN_ELEM_4 = document.querySelector(Down_elem_4);

      	  vl6.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[2].style.background = "white";
      	  vl6.children[3].style.background = "white";

          vol2.volume = 0.55;

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 55%`;

          REPL_ELEM_4.classList.add('sh4');
          DOWN_ELEM_4.classList.add('d_fist_anim');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('sh3');
            DOWN_ELEM_4.classList.remove('d_first_move');
            REPL_ELEM_4.classList.remove('sh4');
            DOWN_ELEM_4.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      C3(el7, volm3, Repl_elem_5, Down_elem_5) {
          let vl7 = document.querySelector(el7);
          let vol3 = document.querySelector(volm3);
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = vl7.parentElement.children[0].textContent;
      	  let REPL_ELEM_5 = document.querySelector(Repl_elem_5);
      	  let DOWN_ELEM_5 = document.querySelector(Down_elem_5);
          
      	  vl7.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[3].style.background = "white";

      	  vol3.volume = 0.85;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 85%`;

           REPL_ELEM_5.classList.add('sh4');
           DOWN_ELEM_5.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('sh3');
            DOWN_ELEM_5.classList.remove('d_first_move');
            REPL_ELEM_5.classList.remove('sh4');
            DOWN_ELEM_5.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },


      C4(el8, volm4, Repl_elem_6, Down_elem_6) {
          let vl8 = document.querySelector(el8);
          let vol4 = document.querySelector(volm4);
           let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = vl8.parentElement.children[0].textContent;
      	  let REPL_ELEM_6 = document.querySelector(Repl_elem_6);
      	  let DOWN_ELEM_6 = document.querySelector(Down_elem_6);

      	  vl8.children[3].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[0].style.background = "rgba(51, 204, 0, .8)";

      	  vol4.volume = 1;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 100%`

          REPL_ELEM_6.classList.add('sh4');
          DOWN_ELEM_6.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('sh3');
            DOWN_ELEM_6.classList.remove('d_first_move');
            REPL_ELEM_6.classList.remove('sh4');
            DOWN_ELEM_6.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      Update(volm5, time_b1, prog) {
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

      Prev( AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_1, DOWNLOAD_1) {
      	 let aud_1 = document.querySelector(AUDIO_1);
      	 let aud_2 = document.querySelector(AUDIO_2);
      	 let REPL_1 = document.querySelector(REPLAY_1);
      	 let REPL_icon_1 = document.querySelector(Rep_icon_1);
      	 let DOWN_1 = document.querySelector(DOWNLOAD_1);
         //let w_height = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
         let opov_1_block = document.querySelector('.opoveshenie_block');
         let opov_1_name = aud_1.parentElement.parentElement.children[0].textContent;
         let opov_1_1_name = aud_2.parentElement.parentElement.children[0].textContent;

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

         REPL_1.classList.add('sh4');
         DOWN_1.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_1.classList.remove('sh3');
            DOWN_1.classList.remove('d_first_move');
            REPL_1.classList.remove('sh4');
            DOWN_1.classList.remove('d_first_anim');
      	 }, 1100);

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `${opov_1_1_name} - играет, ${opov_1_name} - на паузе`;

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      Next(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_2) {
      	 let aud_3 = document.querySelector(AUDIO_3);
      	 let aud_4 = document.querySelector(AUDIO_4);
      	 let REPL_2 = document.querySelector(REPLAY_2);
      	 let REPL_icon_2 = document.querySelector(Rep_icon_2);
      	 let DOWN_2 = document.querySelector(DOWNLOAD_2);
         //let w2_height = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
         let opov_1_block = document.querySelector('.opoveshenie_block');
         let opov_1_name = aud_3.parentElement.parentElement.children[0].textContent;  //Fuck..... Asshole code! !!!!!
         let opov_1_1_name = aud_4.parentElement.parentElement.children[0].textContent;

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

         REPL_2.classList.add('sh4');
         DOWN_2.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_2.classList.remove('sh3');
            DOWN_2.classList.remove('d_first_move');
            REPL_2.classList.remove('sh4');
            DOWN_2.classList.remove('d_first_anim');
      	 }, 1100);

         opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `${opov_1_1_name} - играет, ${opov_1_name} - на паузе`;

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      Perek(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time(t_block1) {
          let time_block = document.querySelector(t_block1);
      	  time_block.classList.add('sh2');
      },

      Time_out(t_block2) {
      	  let time_block = document.querySelector(t_block2);
      	  time_block.classList.remove('sh2');
      },

      Run_block(event, M_Pole, Aud2, t_block4) {
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
          
      show_repeat(n_rep, d_rep) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep);

          nrep.classList.add('sh3');
          drep.classList.add('d_first_move');
      },

      hide_repeat(rep2) {
      	  let replay2 = document.querySelector(rep2);

      	  replay2.classList.add('sh4');

      	  setTimeout(() => {
             replay2.classList.remove('sh3');
             replay2.classList.remove('sh4');
      	  }, 1100);
      },

      down_hide(dow2) {
         let d2 = document.querySelector(dow2);

         d2.classList.add('d_first_anim');

         setTimeout(() => {
            d2.classList.remove('d_first_move');
            d2.classList.remove('d_first_anim');
         }, 1100);
      }, 

      Replay(AUD, Icon1) {
      	  let aud = document.querySelector(AUD);
      	  let icon1 = document.querySelector(Icon1);
      	  let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = aud.parentElement.parentElement.children[0].textContent;
          
          if(aud.loop === false) {
      	    aud.loop = true;
      	    icon1.style.color = '#FFE70B';

      	    opov_1_block.classList.add('show_n_block_anim');
            
            opov_1_block.children[0].children[0].textContent = `${opov_1_name} поставлен на повторное проигрывание`;

            setTimeout(() => {
              opov_1_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
              opov_1_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
              opov_1_block.classList.add('hide_block');  
              opov_1_block.classList.remove('show_n_block_anim');
              opov_1_block.classList.remove('show_n_block'); 
              opov_1_block.classList.remove('fokus');
              opov_1_block.classList.remove('hide_block');
            }, 4910);
      	  }

      	  else {
      	  	aud.loop = false;
            icon1.style.color = 'white';

            opov_1_block.classList.add('show_n_block_anim');
            
            opov_1_block.children[0].children[0].textContent = `${opov_1_name} снят с повторного проигрывание`;

            setTimeout(() => {
               opov_1_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_1_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_1_block.classList.add('hide_block');  
               opov_1_block.classList.remove('show_n_block_anim');
               opov_1_block.classList.remove('show_n_block'); 
               opov_1_block.classList.remove('fokus');
               opov_1_block.classList.remove('hide_block');
            }, 4910);
      	  }
      }, //Решил не делать с @dblclick, так как пока верстал под телефон/планшет, понял, что это вообще на них не срабатывает

      //Auto-pl function right here

      S(rep3) {
      	  let rep = document.querySelector(rep3);
      	  rep.classList.add('sh3');
      },

      D(d_1) {
          let down_1 = document.querySelector(d_1);
          down_1.classList.add('d_first_move');  
      },

      Show_speed(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl');
      },

      First_speed(first, a, ch_one, Repl_elem_7, Down_elem_7) {
      	  let first_speed = document.querySelector(first); //x_25
      	  let first_a = document.querySelector(a);
      	  let choice_one = document.querySelector(ch_one); //Идея с переменными из data не сработала, в итоге дикий костыль :(
          choice_one.textContent = first_speed.children[0].textContent;
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = first_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_7 = document.querySelector(Repl_elem_7);
      	  let DOWN_ELEM_7 = document.querySelector(Down_elem_7);

          first_a.playbackRate = .25;

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X.25`;

           REPL_ELEM_7.classList.add('sh4');
           DOWN_ELEM_7.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('sh3');
            DOWN_ELEM_7.classList.remove('d_first_move');
            REPL_ELEM_7.classList.remove('sh4');
            DOWN_ELEM_7.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      Second_speed(second, a2, ch_two, Repl_elem_8, Down_elem_8) {
      	  let second_speed = document.querySelector(second); //x_5
      	  let second_a = document.querySelector(a2);
      	  let choice_two = document.querySelector(ch_two);
          choice_two.textContent = second_speed.children[0].textContent;
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = second_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_8 = document.querySelector(Repl_elem_8);
      	  let DOWN_ELEM_8 = document.querySelector(Down_elem_8);

          second_a.playbackRate = .5;

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X.5`;

           REPL_ELEM_8.classList.add('sh4');
           DOWN_ELEM_8.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('sh3');
            DOWN_ELEM_8.classList.remove('d_first_move');
            REPL_ELEM_8.classList.remove('sh4');
            DOWN_ELEM_8.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      Third_speed(third, a3, ch_three, Repl_elem_9, Down_elem_9) {
          let third_speed = document.querySelector(third); //x_1
          let third_a = document.querySelector(a3);
          let choice_three = document.querySelector(ch_three);
          choice_three.textContent = third_speed.children[0].textContent;
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = third_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_9 = document.querySelector(Repl_elem_9);
      	  let DOWN_ELEM_9 = document.querySelector(Down_elem_9);

          third_a.playbackRate = 1;

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X1`;

           REPL_ELEM_9.classList.add('sh4');
           DOWN_ELEM_9.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('sh3');
            DOWN_ELEM_9.classList.remove('d_first_move');
            REPL_ELEM_9.classList.remove('sh4');
            DOWN_ELEM_9.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      Fourth_speed(fourth, a4, ch_four, Repl_elem_10, Down_elem_10) {
      	  let fourth_speed = document.querySelector(fourth); //x_1_25
      	  let fourth_a = document.querySelector(a4);
      	  let choice_four = document.querySelector(ch_four);
      	  choice_four.textContent = fourth_speed.children[0].textContent;
      	  let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = fourth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_10 = document.querySelector(Repl_elem_10);
      	  let DOWN_ELEM_10 = document.querySelector(Down_elem_10);

      	  fourth_a.playbackRate = 1.25;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X1.25`;

           REPL_ELEM_10.classList.add('sh4');
           DOWN_ELEM_10.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('sh3');
            DOWN_ELEM_10.classList.remove('d_first_move');
            REPL_ELEM_10.classList.remove('sh4');
            DOWN_ELEM_10.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      Fifth_speed(fifth, a5, ch_five, Repl_elem_11, Down_elem_11) {
      	  let fifth_speed = document.querySelector(fifth); //x_15
      	  let fifth_a = document.querySelector(a5);
      	  let choice_five = document.querySelector(ch_five);
      	  choice_five.textContent = fifth_speed.children[0].textContent;
      	  let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = fifth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_11 = document.querySelector(Repl_elem_11);
      	  let DOWN_ELEM_11 = document.querySelector(Down_elem_11);

      	  fifth_a.playbackRate = 1.5;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X1.5`;

           REPL_ELEM_11.classList.add('sh4');
           DOWN_ELEM_11.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('sh3');
            DOWN_ELEM_11.classList.remove('d_first_move');
            REPL_ELEM_11.classList.remove('sh4');
            DOWN_ELEM_11.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      },

      Six_speed(six, a6, ch_six, Repl_elem_12, Down_elem_12) {
      	  let six_speed = document.querySelector(six); //x_2
      	  let six_a = document.querySelector(a6);
      	  let choice_six = document.querySelector(ch_six);
      	  choice_six.textContent = six_speed.children[0].textContent;
      	  let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = six_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_12 = document.querySelector(Repl_elem_12);
      	  let DOWN_ELEM_12 = document.querySelector(Down_elem_12);

      	  six_a.playbackRate = 2;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X2`;

           REPL_ELEM_12.classList.add('sh4');
           DOWN_ELEM_12.classList.add('d_first_anim');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('sh3');
            DOWN_ELEM_12.classList.remove('d_first_move');
            REPL_ELEM_12.classList.remove('sh4');
            DOWN_ELEM_12.classList.remove('d_first_anim');
      	 }, 1100);

          setTimeout(() => {
            opov_1_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_1_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_1_block.classList.add('hide_block');  
            opov_1_block.classList.remove('show_n_block_anim');
            opov_1_block.classList.remove('show_n_block'); 
            opov_1_block.classList.remove('fokus');
            opov_1_block.classList.remove('hide_block');
          }, 4910);
      } 
  }
};
</script>
<style>
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	.side_screen {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/TLOU2_background.jpg");
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

    .side_screen span {
    	position: absolute;
    	left: 310px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block > .sound_block {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block .sound_block .name {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block .sound_block .l1 {
    	left: 265px;
    }

    .audio_collection_block .sound_block .l2 {
    	left: 265px;
    }

    .audio_collection_block .sound_block .l3 {
    	left: 235px;
    }

    .audio_collection_block .sound_block > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block .sound_block > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block .sound_block .audio_pole_m {
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

    .audio_collection_block .sound_block .audio_pole_m:hover {
    	opacity: .7;
    }

    .audio_collection_block .sound_block .audio_pole_m .aud_p {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	margin-left: 0;
    	margin-top: 0;
    	background: yellow;
    }

    .audio_collection_block .sound_block #vol {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;
        background: #FCFCFC;
    }

    .audio_collection_block .sound_block .l_of_vol {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block .sound_block .l_of_vol.sh {
    	display: block;
    }

    .audio_collection_block .sound_block .l_of_vol > div {
    	width: 5px;
    	position: absolute;
    	cursor: pointer;
    	background: rgba(51, 204, 0, .8);
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block .sound_block .l_of_vol > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);
    }

    .audio_collection_block .sound_block .l_of_vol .vl_1 {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block .sound_block .l_of_vol .vl_2 {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block .sound_block .l_of_vol .vl_3 {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block .sound_block .l_of_vol .vl_4 {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block .sound_block .prev {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block .sound_block .prev:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block .sound_block .play {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block .sound_block .next {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block .sound_block .next:hover {
    	transform: translateX(5px);
    }

    .audio_collection_block .sound_block .start_time {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block .sound_block .end_time {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block .sound_block .Download_button {
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

    .audio_collection_block .sound_block .Download_button:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block .sound_block .Download_button.d_first_move {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block .sound_block .Download_button.d_first_anim {
    	animation: down1 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down1 {
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

    .audio_collection_block .sound_block .Replay_button {
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

    .audio_collection_block .sound_block .Replay_button.sh3 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block .sound_block .Replay_button.sh4 {
    	animation: spek 1s linear 1;
    	transform: scale(0);
    }

    @keyframes spek {
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

    .audio_collection_block .sound_block .Replay_button:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block .sound_block .Time_of_audio {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block .sound_block .Time_of_audio span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block .sound_block .Time_of_audio.sh2 {
    	display: block;
    }

    .audio_collection_block .sound_block #speed_aud {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block .sound_block .Speed_block {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block .sound_block .Speed_block.tgl {
    	display: block;
    }
    
    .audio_collection_block .sound_block .Speed_block .contain {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block .sound_block .Speed_block .contain .b {
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

    .audio_collection_block .sound_block .Speed_block .contain .b:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block .sound_block .Speed_block .contain .b p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block .sound_block .Speed_block .contain .b p:hover {
        color: black;
    } 

    /* Phone(Vertical) */
    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
    	.side_screen {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen span {
    		font-size: 55px;
    	}

    	.audio_collection_block > .sound_block {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block .sound_block .audio_pole_m {
    		width: 748px; 
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block .sound_block .audio_pole_m .aud_p {
    		height: 9.5px;
    	}

    	.audio_collection_block .sound_block #vol {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block .sound_block .play {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block .sound_block .prev {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block .sound_block .next {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block .sound_block .name {
    	   left: 255px;
        }

        .audio_collection_block .sound_block .Time_of_audio {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block .sound_block .Time_of_audio span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block .sound_block .start_time {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block .sound_block .end_time {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block .sound_block #speed_aud {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block .sound_block .Speed_block {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block .sound_block .Speed_block .contain {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block .sound_block .Speed_block .contain .b {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block .sound_block .Speed_block .contain .b p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block .sound_block .Replay_button {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block .sound_block .Replay_button.sh3 {
    	    margin-left: 850px;
        }

        .audio_collection_block .sound_block .Download_button {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block .sound_block .l_of_vol {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block .sound_block .l_of_vol > div {
    	   width: 8px;
        }

        .audio_collection_block .sound_block .l_of_vol .vl_1 {
    	   height: 18px;
           left: 0;
           top: 9px;
        }

        .audio_collection_block .sound_block .l_of_vol .vl_2 {
    	   height: 24px;
    	   top: 6px;
    	   left: 16px;
        }

        .audio_collection_block .sound_block .l_of_vol .vl_3 {
           height: 30px;
           top: 3px;
           left: 33px;
        }

        .audio_collection_block .sound_block .l_of_vol .vl_4 {
           height: 36px;
           top: 0;
           left: 50px;
        }
    } 
</style>