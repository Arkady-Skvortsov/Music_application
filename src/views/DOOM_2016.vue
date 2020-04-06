<template>
	<div class="side_screen10">
		<span>DOOM 2016 music</span>
		<div class="audio_collection_block10">
		    <div class="sound_block10" @mouseover="show_repeat10('.repl136', '.down136')">
			   <p class="name10 text9_mobile_1">#1 Dogma</p>

			   <div class="audio_pole_m10 audio_p136_m10" @click="Perek10($event, '.aud136', '.audio_p136_m10')" @mouseover="Show_time10('.Aud_t136')" @mousemove="Run_block10($event, '.audio_p136_m10', '.aud136', '.Aud_t136')" @mouseout="Time_out10('.Aud_t136')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl136', '.l_of_v136', '.repl136', '.down136')" @mouseover="Over10('.l_of_v136')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol10 l_of_v136" @mouseover="Over10('.l_of_v136')" @mouseout="Ov10('.l_of_v136')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v136', '.aud136', '.repl136', '.down136')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v136', '.aud136', '.repl136', '.down136')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v136', '.aud136', '.repl136', '.down136')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v136', '.aud136', '.repl136', '.down136')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud136', '.aud150', '.repl136', 'r_icon_136', '.down136')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl136" @click="Play10('.pl136', '.repl136', '.down136')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud136" @timeupdate="Update10('.aud136', '.st136', '.audio_p136_m10')" src="../sound/DOOM_2016/doom_01. I. Dogma.mp3"></audio></button> 
			   <button class="next10" @click="Next10('.aud136', '.aud137', '.repl136', '.r_icon_136', '.down136')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st136">00:00</p><p class="end_time10">/00:44</p>

			    <span id="speed_aud10" class="choice_speed_136" @click="Show_speed10('.sp_block_136')">x1</span>

			   <div class="Speed_block10 sp_block_136">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_136" @click="First_speed_10('.x_first_136', '.aud136', '.choice_speed_136', '.repl136', '.down136')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_136" @click="Second_speed_10('.x_second_136', '.aud136', '.choice_speed_136', '.repl136', '.down136')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_136" @click="Third_speed_10('.x_third_136', '.aud136', '.choice_speed_136', '.repl136', '.down136')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_136" @click="Fourth_speed_10('.x_fourth_136', '.aud136', '.choice_speed_136', '.repl136', '.down136')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_136" @click="Fifth_speed_10('.x_fifth_136', '.aud136', '.choice_speed_136', '.repl136', '.down136')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_136" @click="Six_speed_10('.x_six_136', '.aud136', '.choice_speed_136', '.repl136', '.down136')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button10 repl136" @click="Replay10('.aud136', '.r_icon_136')" @mouseover="S10('.repl136')" @mouseout="hide_repeat10('.repl136')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_136" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down136" @click="Download10('.down136', 'DOOM 2016 - Dogma', '.d_icon_136')" @mouseout="down_hide10('.down136')">
			   	  <vue-fontawesome icon="download" class="d_icon_136" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t136">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block10" @mouseover="show_repeat10('.repl137', '.down137')">
			   <p class="name10 text9_mobile_2">#2 Hellwalker</p>

			   <div class="audio_pole_m10 audio_p137_m10" @click="Perek10($event, '.aud137', '.audio_p137_m10')" @mouseover="Show_time10('.Aud_t137')" @mousemove="Run_block10($event, '.audio_p137_m10', '.aud137', '.Aud_t137')" @mouseout="Time_out10('.Aud_t137')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl137', '.l_of_v137', '.repl137', '.down137')" @mouseover="Over10('.l_of_v137')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v137" @mouseover="Over10('.l_of_v137')" @mouseout="Ov10('.l_of_v137')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v137', '.aud137', '.repl137', '.down137')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v137', '.aud137', '.repl137', '.down137')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v137', '.aud137', '.repl137', '.down137')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v137', '.aud137', '.repl137', '.down137')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud137', '.aud136', '.repl137', 'r_icon_137', '.down137')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl137" @click="Play10('.pl137', '.repl137', '.down137')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud137" @timeupdate="Update10('.aud137', '.st137', '.audio_p137_m10')" src="../sound/DOOM_2016/doom_06. Hellwalker.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud137', '.aud138', '.repl137', '.r_icon_137', '.down137')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st137">00:00</p><p class="end_time10">/05:05</p>

			   <span id="speed_aud10" class="choice_speed_137" @click="Show_speed10('.sp_block_137')">x1</span>

			   <div class="Speed_block10 sp_block_137">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_137" @click="First_speed_10('.x_first_137', '.aud137', '.choice_speed_137', '.repl137', '.down137')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_137" @click="Second_speed_10('.x_second_137', '.aud137', '.choice_speed_137', '.repl137', '.down137')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_137" @click="Third_speed_10('.x_third_137', '.aud137', '.choice_speed_137', '.repl137', '.down137')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_137" @click="Fourth_speed_10('.x_fourth_137', '.aud137', '.choice_speed_137', '.repl137', '.down137')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_137" @click="Fifth_speed_10('.x_fifth_137', '.aud137', '.choice_speed_137', '.repl137', '.down137')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_137" @click="Six_speed_10('.x_six_137', '.aud137', '.choice_speed_137', '.repl137', '.down137')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl137" @click="Replay10('.aud137', '.r_icon_137')" @mouseover="S10('.repl137')" @mouseout="hide_repeat10('.repl137')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_137" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down137" @click="Download10('.down137', 'DOOM 2016 - Hellwalker', '.d_icon_137')" @mouseout="down_hide10('.down137')">
			   	  <vue-fontawesome icon="download" class="d_icon_137" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio10 Aud_t137">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block10" @mouseover="show_repeat10('.repl138', '.down138')">
			   <p class="name10 text9_mobile_3">#3 Flesh & Metal</p>

			   <div class="audio_pole_m10 audio_p138_m10" @click="Perek10($event, '.aud138', '.audio_p138_m10')" @mouseover="Show_time10('.Aud_t138')" @mousemove="Run_block10($event, '.audio_p138_m10', '.aud138', '.Aud_t138')" @mouseout="Time_out10('.Aud_t138')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl138', '.l_of_v138', '.repl138', '.down138')" @mouseover="Over10('.l_of_v138')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v138" @mouseover="Over10('.l_of_v138')" @mouseout="Ov10('.l_of_v138')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v138', '.aud138', '.repl138', '.down138')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v138', '.aud138', '.repl138', '.down138')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v138', '.aud138', '.repl138', '.down138')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v138', '.aud138', '.repl138', '.down138')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud138', '.aud137', '.repl138', 'r_icon_138', '.down138')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl138" @click="Play10('.pl138', '.repl138', '.down138')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud138" @timeupdate="Update10('.aud138', '.st138', '.audio_p138_m10')" src="../sound/DOOM_2016/doom_08. Flesh & Metal.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud138', '.aud139', '.repl138', '.r_icon_138', '.down138')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time10 st138">00:00</p><p class="end_time10">/07:02</p>

			   <span id="speed_aud10" class="choice_speed_138" @click="Show_speed10('.sp_block_138')">x1</span>

			   <div class="Speed_block10 sp_block_138">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_138" @click="First_speed_10('.x_first_138', '.aud138', '.choice_speed_138', '.repl138', '.down138')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_138" @click="Second_speed_10('.x_second_138', '.aud138', '.choice_speed_138', '.repl138', '.down138')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_138" @click="Third_speed_10('.x_third_138', '.aud138', '.choice_speed_138', '.repl138', '.down138')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_138" @click="Fourth_speed_10('.x_fourth_138', '.aud138', '.choice_speed_138', '.repl138', '.down138')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_138" @click="Fifth_speed_10('.x_fifth_138', '.aud138', '.choice_speed_138', '.repl138', '.down138')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_138" @click="Six_speed_10('.x_six_138', '.aud138', '.choice_speed_138', '.repl138', '.down138')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl138" @click="Replay10('.aud138', '.r_icon_138')" @mouseover="S10('.repl138')" @mouseout="hide_repeat10('.repl138')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_138" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down138" @click="Download10('.down138', 'DOOM 2016 - Flesh & Metal', '.d_icon_138')" @mouseout="down_hide10('.down138')">
			   	  <vue-fontawesome icon="download" class="d_icon_138" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t138">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl139', '.down139')">
			   <p class="name10">#4 Harbinger</p>

			   <div class="audio_pole_m10 audio_p139_m10" @click="Perek10($event, '.aud139', '.audio_p139_m10')" @mouseover="Show_time10('.Aud_t139')" @mousemove="Run_block10($event, '.audio_p139_m10', '.aud139', '.Aud_t139')" @mouseout="Time_out10('.Aud_t139')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl139', '.l_of_v139', '.repl139', '.down139')" @mouseover="Over10('.l_of_v139')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v139" @mouseover="Over10('.l_of_v139')" @mouseout="Ov10('.l_of_v139')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v139', '.aud139', '.repl139', '.down139')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v139', '.aud139', '.repl139', '.down139')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v139', '.aud139', '.repl139', '.down139')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v139', '.aud139', '.repl139', '.down139')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud139', '.aud138', '.repl139', 'r_icon_139', '.down139')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl139" @click="Play10('.pl139', '.repl139', '.down139')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud139" @timeupdate="Update10('.aud139', '.st139', '.audio_p139_m10')" src="../sound/DOOM_2016/doom_14. Harbinger.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud139', '.aud140', '.repl139', '.r_icon_139', '.down139')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

                <p class="start_time10 st139">00:00</p><p class="end_time10">/07:11</p>

			   <span id="speed_aud10" class="choice_speed_139" @click="Show_speed10('.sp_block_139')">x1</span>

			   <div class="Speed_block10 sp_block_139">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_139" @click="First_speed_10('.x_first_139', '.aud139', '.choice_speed_139', '.repl139', '.down139')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_139" @click="Second_speed_10('.x_second_139', '.aud139', '.choice_speed_139', '.repl139', '.down139')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_139" @click="Third_speed_10('.x_third_139', '.aud139', '.choice_speed_139', '.repl139', '.down139')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_139" @click="Fourth_speed_10('.x_fourth_139', '.aud139', '.choice_speed_139', '.repl139', '.down139')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_139" @click="Fifth_speed_10('.x_fifth_139', '.aud139', '.choice_speed_139', '.repl139', '.down139')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_139" @click="Six_speed_10('.x_six_139', '.aud139', '.choice_speed_139', '.repl139', '.down139')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl139" @click="Replay10('.aud139', '.r_icon_139')" @mouseover="S10('.repl139')" @mouseout="hide_repeat10('.repl139')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_139" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down139" @click="Download10('.down139', 'DOOM 2016 - Harbinger', '.d_icon_139')" @mouseout="down_hide10('.down139')">
			   	  <vue-fontawesome icon="download" class="d_icon_139" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t139">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl140', '.down140')">
			   <p class="name10">#5 CyberDemon</p>

			   <div class="audio_pole_m10 audio_p140_m10" @click="Perek10($event, '.aud140', '.audio_p140_m10')" @mouseover="Show_time10('.Aud_t140')" @mousemove="Run_block10($event, '.audio_p140_m10', '.aud140', '.Aud_t140')" @mouseout="Time_out10('.Aud_t140')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl140', '.l_of_v140', '.repl140', '.down140')" @mouseover="Over10('.l_of_v140')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol10 l_of_v140" @mouseover="Over10('.l_of_v140')" @mouseout="Ov10('.l_of_v140')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v140', '.aud140', '.repl140', '.down140')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v140', '.aud140', '.repl140', '.down140')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v140', '.aud140', '.repl140', '.down140')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v140', '.aud140', '.repl140', '.down140')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud140', '.aud139', '.repl140', 'r_icon_140', '.down140')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl140" @click="Play10('.pl140', '.repl140', '.down140')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud140" @timeupdate="Update10('.aud140', '.st140', '.audio_p140_m10')" src="../sound/DOOM_2016/doom_19. Cyberdemon.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud140', '.aud141', '.repl140', '.r_icon_140', '.down140')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time10 st140">00:00</p><p class="end_time10">/06:18</p>

			   <span id="speed_aud10" class="choice_speed_140" @click="Show_speed10('.sp_block_140')">x1</span>

			   <div class="Speed_block10 sp_block_140">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_140" @click="First_speed_10('.x_first_140', '.aud140', '.choice_speed_140', '.repl140', '.down140')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_140" @click="Second_speed_10('.x_second_140', '.aud140', '.choice_speed_140', '.repl140', '.down140')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_140" @click="Third_speed_10('.x_third_140', '.aud140', '.choice_speed_140', '.repl140', '.down140')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_140" @click="Fourth_speed_10('.x_fourth_140', '.aud140', '.choice_speed_140', '.repl140', '.down140')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_140" @click="Fifth_speed_10('.x_fifth_140', '.aud140', '.choice_speed_140', '.repl140', '.down140')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_140" @click="Six_speed_10('.x_six_140', '.aud140', '.choice_speed_140', '.repl140', '.down140')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl140" @click="Replay10('.aud140', '.r_icon_140')" @mouseover="S10('.repl140')" @mouseout="hide_repeat10('.repl140')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_140" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down140" @click="Download10('.down140', 'DOOM 2016 - CyberDemon', '.d_icon_140')" @mouseout="down_hide10('.down140')">
			   	  <vue-fontawesome icon="download" class="d_icon_140" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio10 Aud_t140">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl141', '.down141')">
			   <p class="name10 text9_mobile_6">#6 Argent Energy</p>

			   <div class="audio_pole_m10 audio_p141_m10" @click="Perek10($event, '.aud141', '.audio_p141_m10')" @mouseover="Show_time10('.Aud_t141')" @mousemove="Run_block10($event, '.audio_p141_m10', '.aud141', '.Aud_t141')" @mouseout="Time_out10('.Aud_t141')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl141', '.l_of_v141', '.repl141', '.down141')" @mouseover="Over10('.l_of_v141')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v141" @mouseover="Over10('.l_of_v141')" @mouseout="Ov10('.l_of_v141')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v141', '.aud141', '.repl141', '.down141')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v141', '.aud141', '.repl141', '.down141')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v141', '.aud141', '.repl141', '.down141')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v141', '.aud141', '.repl141', '.down141')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud141', '.aud140', '.repl141', 'r_icon_141', '.down141')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl141" @click="Play10('.pl141', '.repl141', '.down141')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud141" @timeupdate="Update10('.aud141', '.st141', '.audio_p141_m10')" src="../sound/DOOM_2016/doom_13. Argent Energy.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud141', '.aud142', '.repl141', '.r_icon_141', '.down141')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time10 st141">00:00</p><p class="end_time10">/02:34</p>

			   <span id="speed_aud10" class="choice_speed_141" @click="Show_speed10('.sp_block_141')">x1</span>

			   <div class="Speed_block10 sp_block_141">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_141" @click="First_speed_10('.x_first_141', '.aud141', '.choice_speed_141', '.repl141', '.down141')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_141" @click="Second_speed_10('.x_second_141', '.aud141', '.choice_speed_141', '.repl141', '.down141')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_141" @click="Third_speed_10('.x_third_141', '.aud141', '.choice_speed_141', '.repl141', '.down141')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_141" @click="Fourth_speed_10('.x_fourth_141', '.aud141', '.choice_speed_141', '.repl141', '.down141')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_141" @click="Fifth_speed_10('.x_fifth_141', '.aud141', '.choice_speed_141', '.repl141', '.down141')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_141" @click="Six_speed_10('.x_six_141', '.aud141', '.choice_speed_141', '.repl141', '.down141')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl141" @click="Replay10('.aud141', '.r_icon_141')" @mouseover="S10('.repl141')" @mouseout="hide_repeat10('.repl141')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_141" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down141" @click="Download10('.down141', 'DOOM 2016 - Argent Energy', '.d_icon_141')" @mouseout="down_hide10('.down141')">
			   	  <vue-fontawesome icon="download" class="d_icon_141" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio10 Aud_t141">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl142', '.down142')">
			   <p class="name10">#7 Damnation</p>

			   <div class="audio_pole_m10 audio_p142_m10" @click="Perek10($event, '.aud142', '.audio_p142_m10')" @mouseover="Show_time10('.Aud_t142')" @mousemove="Run_block10($event, '.audio_p142_m10', '.aud142', '.Aud_t142')" @mouseout="Time_out10('.Aud_t142')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl142', '.l_of_v142', '.repl142', '.down142')" @mouseover="Over10('.l_of_v142')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v142" @mouseover="Over10('.l_of_v142')" @mouseout="Ov10('.l_of_v142')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v142', '.aud142', '.repl142', '.down142')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v142', '.aud142', '.repl142', '.down142')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v142', '.aud142', '.repl142', '.down142')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v142', '.aud142', '.repl142', '.down142')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud142', '.aud141', '.repl142', 'r_icon_142', '.down142')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl142" @click="Play10('.pl142', '.repl142', '.down142')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud142" @timeupdate="Update10('.aud142', '.st142', '.audio_p142_m10')" src="../sound/DOOM_2016/doom_22. Damnation.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud142', '.aud143', '.repl142', '.r_icon_142', '.down142')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st142">00:00</p><p class="end_time10">/06:44</p>

			   <span id="speed_aud10" class="choice_speed_142" @click="Show_speed10('.sp_block_142')"> x1</span>

			   <div class="Speed_block10 sp_block_142">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_142" @click="First_speed_10('.x_first_142', '.aud142', '.choice_speed_142', '.repl142', '.down142')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_142" @click="Second_speed_10('.x_second_142', '.aud142', '.choice_speed_142', '.repl142', '.down142')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_142" @click="Third_speed_10('.x_third_142', '.aud142', '.choice_speed_142', '.repl142', '.down142')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_142" @click="Fourth_speed_10('.x_fourth_142', '.aud142', '.choice_speed_142', '.repl142', '.down142')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_142" @click="Fifth_speed_10('.x_fifth_142', '.aud142', '.choice_speed_142', '.repl142', '.down142')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_142" @click="Six_speed_10('.x_six_142', '.aud142', '.choice_speed_142', '.repl142', '.down142')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl142" @click="Replay10('.aud142', '.r_icon_142')" @mouseover="S10('.repl142')" @mouseout="hide_repeat10('.repl142')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_142" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down142" @click="Download10('.down142', 'DOOM 2016 - Damnation', '.d_icon_142')" @mouseout="down_hide10('.down142')">
			   	  <vue-fontawesome icon="download" class="d_icon_142" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio10 Aud_t142">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl143', '.down143')">
			   <p class="name10">#8 BFG Division</p>

			   <div class="audio_pole_m10 audio_p143_m10" @click="Perek10($event, '.aud143', '.audio_p143_m10')" @mouseover="Show_time10('.Aud_t143')" @mousemove="Run_block10($event, '.audio_p143_m10', '.aud143', '.Aud_t143')" @mouseout="Time_out10('.Aud_t143')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl143', '.l_of_v143', '.repl143', '.down143')" @mouseover="Over10('.l_of_v143')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v143" @mouseover="Over10('.l_of_v143')" @mouseout="Ov10('.l_of_v143')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v143', '.aud143', '.repl143', '.down143')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v143', '.aud143', '.repl143', '.down143')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v143', '.aud143', '.repl143', '.down143')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v143', '.aud143', '.repl143', '.down143')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud143', '.aud142', '.repl143', 'r_icon_143', '.down143')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl143" @click="Play10('.pl143', '.repl143', '.down143')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud143" @timeupdate="Update10('.aud143', '.st143', '.audio_p143_m10')" src="../sound/DOOM_2016/doom_11. Bfg Division.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud143', '.aud144', '.repl143', '.r_icon_143', '.down143')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st143">00:00</p><p class="end_time10">/08:26</p>

			   <span id="speed_aud10" class="choice_speed_143" @click="Show_speed10('.sp_block_143')">x1</span>

			   <div class="Speed_block10 sp_block_143">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_143" @click="First_speed_10('.x_first_143', '.aud143', '.choice_speed_143', '.repl143', '.down143')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_143" @click="Second_speed_10('.x_second_143', '.aud143', '.choice_speed_143', '.repl143', '.down143')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_143" @click="Third_speed_10('.x_third_143', '.aud143', '.choice_speed_143', '.repl143', '.down143')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_143" @click="Fourth_speed_10('.x_fourth_143', '.aud143', '.choice_speed_143', '.repl143', '.down143')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_143" @click="Fifth_speed_10('.x_fifth_143', '.aud143', '.choice_speed_143', '.repl143', '.down143')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_143" @click="Six_speed_10('.x_six_143', '.aud143', '.choice_speed_143', '.repl143', '.down143')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl143" @click="Replay10('.aud143', '.r_icon_143')" @mouseover="S10('.repl143')" @mouseout="hide_repeat10('.repl143')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_143" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down143" @click="Download10('.down143', 'DOOM 2016 - BFG Division', '.d_icon_143')" @mouseout="down_hide10('.down143')">
			   	  <vue-fontawesome icon="download" class="d_icon_143" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t143">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl144', '.down144')"> 
			   <p class="name10 text9_mobile_9">#9 Death & Exhale</p>

			   <div class="audio_pole_m10 audio_p144_m10" @click="Perek10($event, '.aud144', '.audio_p144_m10')" @mouseover="Show_time10('.Aud_t144')" @mousemove="Run_block10($event, '.audio_p144_m10', '.aud144', '.Aud_t144')" @mouseout="Time_out10('.Aud_t144')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl144', '.l_of_v144', '.repl144', '.down144')" @mouseover="Over10('.l_of_v144')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol9 l_of_v144" @mouseover="Over10('.l_of_v144')" @mouseout="Ov10('.l_of_v144')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v144', '.aud144', '.repl144', '.down144')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v144', '.aud144', '.repl144', '.down144')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v144', '.aud144', '.repl144', '.down144')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v144', '.aud144', '.repl144', '.down144')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud144', '.aud143', '.repl144', 'r_icon_144', '.down144')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl144" @click="Play10('.pl144', '.repl144', '.down144')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud144" @timeupdate="Update10('.aud144', '.st144', '.audio_p144_m10')" src="../sound/DOOM_2016/doom_25. Death & Exhale.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud144', '.aud145', '.repl144', '.r_icon_144', '.down144')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st144">00:00</p><p class="end_time10">/03:49</p>

			   <span id="speed_aud10" class="choice_speed_144" @click="Show_speed10('.sp_block_144')">x1</span>

			   <div class="Speed_block10 sp_block_144">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_144" @click="First_speed_10('.x_first_144', '.aud144', '.choice_speed_144', '.repl144', '.down144')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_144" @click="Second_speed_10('.x_second_144', '.aud144', '.choice_speed_144', '.repl144', '.down144')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_144" @click="Third_speed_10('.x_third_144', '.aud144', '.choice_speed_144', '.repl144', '.down144')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_144" @click="Fourth_speed_10('.x_fourth_144', '.aud144', '.choice_speed_144', '.repl144', '.down144')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_144" @click="Fifth_speed_10('.x_fifth_144', '.aud144', '.choice_speed_144', '.repl144', '.down144')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_144" @click="Six_speed_10('.x_six_144', '.aud144', '.choice_speed_144', '.repl144', '.down144')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl144" @click="Replay10('.aud144', '.r_icon_144')" @mouseover="S10('.repl144')" @mouseout="hide_repeat10('.repl144')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_144" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down144" @click="Download10('.down144', 'DOOM 2016 - Death & Exhale', '.d_icon_144')" @mouseout="down_hide10('.down144')">
			   	  <vue-fontawesome icon="download" class="d_icon_144" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t144">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl145', '.down145')">
			   <p class="name10 text9_mobile_10">#10 UAC Report File;</p>

			   <div class="audio_pole_m10 audio_p145_m10" @click="Perek10($event, '.aud145', '.audio_p145_m10')" @mouseover="Show_time10('.Aud_t145')" @mousemove="Run_block10($event, '.audio_p145_m10', '.aud145', '.Aud_t145')" @mouseout="Time_out10('.Aud_t145')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl145', '.l_of_v145', '.repl145', '.down145')" @mouseover="Over10('.l_of_v145')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v145" @mouseover="Over10('.l_of_v145')" @mouseout="Ov10('.l_of_v145')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v145', '.aud145', '.repl145', '.down145')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v145', '.aud145', '.repl145', '.down145')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v145', '.aud145', '.repl145', '.down145')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v145', '.aud145', '.repl145', '.down145')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud145', '.aud144', '.repl145', 'r_icon_145', '.down145')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl145" @click="Play10('.pl145', '.repl145', '.down145')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud145" @timeupdate="Update10('.aud145', '.st145', '.audio_p145_m10')" src="../sound/DOOM_2016/doom_24. Uac Report File; Shto36u3.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud145', '.aud146', '.repl145', '.r_icon_145', '.down145')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time10 st145">00:00</p><p class="end_time10">/03:04</p>

			   <span id="speed_aud10" class="choice_speed_145" @click="Show_speed10('.sp_block_145')">x1</span>

			   <div class="Speed_block10 sp_block_145">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_145" @click="First_speed_10('.x_first_145', '.aud145', '.choice_speed_145', '.repl145', '.down145')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_145" @click="Second_speed_10('.x_second_145', '.aud145', '.choice_speed_145', '.repl145', '.down145')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_145" @click="Third_speed_10('.x_third_145', '.aud145', '.choice_speed_145', '.repl145', '.down145')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_145" @click="Fourth_speed_10('.x_fourth_145', '.aud145', '.choice_speed_145', '.repl145', '.down145')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_145" @click="Fifth_speed_10('.x_fifth_145', '.aud145', '.choice_speed_145', '.repl145', '.down145')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_145" @click="Six_speed_10('.x_six_145', '.aud145', '.choice_speed_145', '.repl145', '.down145')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl145" @click="Replay10('.aud145', '.r_icon_145')" @mouseover="S10('.repl145')" @mouseout="hide_repeat10('.repl145')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_145" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button10 down145" @click="Download10('.down145', 'DOOM 2016 - UAC Report File;', '.d_icon_145')" @mouseout="down_hide10('.down145')">
			   	  <vue-fontawesome icon="download" class="d_icon_145" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t145">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl146', '.down146')">
			   <p class="name10 text9_mobile_11">#11 Lazarus Waves</p>

			   <div class="audio_pole_m10 audio_p146_m10" @click="Perek10($event, '.aud146', '.audio_p146_m10')" @mouseover="Show_time10('.Aud_t146')" @mousemove="Run_block10($event, '.audio_p146_m10', '.aud146', '.Aud_t146')" @mouseout="Time_out10('.Aud_t146')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl146', '.l_of_v146', '.repl146', '.down146')" @mouseover="Over10('.l_of_v146')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v146" @mouseover="Over10('.l_of_v146')" @mouseout="Ov10('.l_of_v146')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v146', '.aud146', '.repl146', '.down146')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v146', '.aud146', '.repl146', '.down146')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v146', '.aud146', '.repl146', '.down146')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v146', '.aud146', '.repl146', '.down146')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud146', '.aud145', '.repl146', 'r_icon_146', '.down146')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl146" @click="Play10('.pl146', '.repl146', '.down146')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud146" @timeupdate="Update10('.aud146', '.st146', '.audio_p146_m10')" src="../sound/DOOM_2016/doom_27. Lazarus Waves.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud146', '.aud147', '.repl146', '.r_icon_146', '.down146')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st146">00:00</p><p class="end_time10">/03:39</p>

			   <span id="speed_aud10" class="choice_speed_146" @click="Show_speed10('.sp_block_146')">x1</span>

			   <div class="Speed_block10 sp_block_146">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_146" @click="First_speed_10('.x_first_146', '.aud146', '.choice_speed_146', '.repl146', '.down146')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_146" @click="Second_speed_10('.x_second_146', '.aud146', '.choice_speed_146', '.repl146', '.down146')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_146" @click="Third_speed_10('.x_third_146', '.aud146', '.choice_speed_146', '.repl146', '.down146')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_146" @click="Fourth_speed_10('.x_fourth_146', '.aud146', '.choice_speed_146', '.repl146', '.down146')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_146" @click="Fifth_speed_10('.x_fifth_146', '.aud146', '.choice_speed_146', '.repl146', '.down146')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_146" @click="Six_speed_10('.x_six_146', '.aud146', '.choice_speed_146', '.repl146', '.down146')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl146" @click="Replay10('.aud146', '.r_icon_146')" @mouseover="S10('.repl146')" @mouseout="hide_repeat10('.repl146')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_146" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down146" @click="Download10('.down146', 'DOOM 2016 - Lazarus Waves', '.d_icon_146')" @mouseout="down_hide10('.down146')">
			   	  <vue-fontawesome icon="download" class="d_icon_146" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t146">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl147', '.down147')">
			   <p class="name10 text9_mobile_12">#12 Rust, Dust & Guts</p>

			   <div class="audio_pole_m10 audio_p147_m10" @click="Perek10($event, '.aud147', '.audio_p147_m10')" @mouseover="Show_time10('.Aud_t147')" @mousemove="Run_block10($event, '.audio_p147_m10', '.aud147', '.Aud_t147')" @mouseout="Time_out10('.Aud_t147')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl147', '.l_of_v147', '.repl147', '.down147')" @mouseover="Over10('.l_of_v147')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v147" @mouseover="Over10('.l_of_v147')" @mouseout="Ov10('.l_of_v147')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v147', '.aud147', '.repl147', '.down147')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v147', '.aud147', '.repl147', '.down147')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v147', '.aud147', '.repl147', '.down147')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v147', '.aud147', '.repl147', '.down147')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud147', '.aud146', '.repl147', 'r_icon_147', '.down147')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl147" @click="Play10('.pl147', '.repl147', '.down147')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud147" @timeupdate="Update10('.aud147', '.st147', '.audio_p147_m10')" src="../sound/DOOM_2016/doom_04. Rust, Dust & Guts.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud147', '.aud148', '.repl147', '.r_icon_147', '.down147')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st147">00:00</p><p class="end_time10">/07:41</p>

			   <span id="speed_aud10" class="choice_speed_147" @click="Show_speed10('.sp_block_147')">x1</span>

			   <div class="Speed_block10 sp_block_147">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_147" @click="First_speed_10('.x_first_147', '.aud147', '.choice_speed_147', '.repl147', '.down147')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_147" @click="Second_speed_10('.x_second_147', '.aud147', '.choice_speed_147', '.repl147', '.down147')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_147" @click="Third_speed_10('.x_third_147', '.aud147', '.choice_speed_147', '.repl147', '.down147')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_147" @click="Fourth_speed_10('.x_fourth_147', '.aud147', '.choice_speed_147', '.repl147', '.down147')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_147" @click="Fifth_speed_10('.x_fifth_147', '.aud147', '.choice_speed_147', '.repl147', '.down147')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_147" @click="Six_speed_10('.x_six_147', '.aud147', '.choice_speed_147', '.repl147', '.down147')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl147" @click="Replay10('.aud147', '.r_icon_147')" @mouseover="S10('.repl147')" @mouseout="hide_repeat10('.repl147')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_147" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down147" @click="Download10('.down147', 'DOOM 2016 - Rust, Duts & Guts', '.d_icon_147')" @mouseout="down_hide10('.down147')">
			   	  <vue-fontawesome icon="download" class="d_icon_147" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t147">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl148', '.down148')">
			   <p class="name10">#13 MasterMind</p>

			   <div class="audio_pole_m10 audio_p148_m10" @click="Perek10($event, '.aud148', '.audio_p148_m10')" @mouseover="Show_time10('.Aud_t148')" @mousemove="Run_block10($event, '.audio_p148_m10', '.aud148', '.Aud_t148')" @mouseout="Time_out10('.Aud_t148')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl148', '.l_of_v148', '.repl148', '.down148')" @mouseover="Over10('.l_of_v148')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v148" @mouseover="Over10('.l_of_v148')" @mouseout="Ov10('.l_of_v148')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v148', '.aud148', '.repl148', '.down148')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v148', '.aud148', '.repl148', '.down148')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v148', '.aud148', '.repl148', '.down148')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v148', '.aud148', '.repl148', '.down148')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud148', '.aud147', '.repl148', 'r_icon_148', '.down148')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl148" @click="Play10('.pl148', '.repl148', '.down148')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud148" @timeupdate="Update10('.aud148', '.st148', '.audio_p148_m10')" src="../sound/DOOM_2016/doom_30. Mastermind.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud148', '.aud149', '.repl148', '.r_icon_148', '.down148')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st148">00:00</p><p class="end_time10">/06:37</p>

			   <span id="speed_aud10" class="choice_speed_148" @click="Show_speed10('.sp_block_148')">x1</span>

			   <div class="Speed_block10 sp_block_148">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_148" @click="First_speed_10('.x_first_148', '.aud148', '.choice_speed_148', '.repl148', '.down148')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_148" @click="Second_speed_10('.x_second_148', '.aud148', '.choice_speed_148', '.repl148', '.down148')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_148" @click="Third_speed_10('.x_third_148', '.aud148', '.choice_speed_148', '.repl148', '.down148')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_148" @click="Fourth_speed_10('.x_fourth_148', '.aud148', '.choice_speed_148', '.repl148', '.down148')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_148" @click="Fifth_speed_10('.x_fifth_148', '.aud148', '.choice_speed_148', '.repl148', '.down148')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_148" @click="Six_speed_10('.x_six_148', '.aud148', '.choice_speed_148', '.repl148', '.down148')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl148" @click="Replay10('.aud148', '.r_icon_148')" @mouseover="S10('.repl148')" @mouseout="hide_repeat10('.repl148')"> 
			   	  <vue-fontawesome icon="retweet" class="r_icon_148" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down148" @click="Download10('.down148', 'DOOM 2016 - MasterMind', '.d_icon_148')" @mouseout="down_hide10('.down148')">
			   	  <vue-fontawesome icon="download" class="d_icon_148" size="3" color="white"></vue-fontawesome>
			   </div>

			     <div class="Time_of_audio10 Aud_t148">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl149', '.down149')">
			   <p class="name10 text9_mobile_14">#14 Transistor First</p>

			   <div class="audio_pole_m10 audio_p149_m10" @click="Perek10($event, '.aud149', '.audio_p149_m10')" @mouseover="Show_time10('.Aud_t149')" @mousemove="Run_block10($event, '.audio_p149_m10', '.aud149', '.Aud_t149')" @mouseout="Time_out10('.Aud_t149')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl149', '.l_of_v149', '.repl149', '.down149')" @mouseover="Over10('.l_of_v149')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v149" @mouseover="Over10('.l_of_v149')" @mouseout="Ov10('.l_of_v149')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v149', '.aud149', '.repl149', '.down149')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v149', '.aud149', '.repl149', '.down149')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v149', '.aud149', '.repl149', '.down149')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v149', '.aud149', '.repl149', '.down149')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud149', '.aud148', '.repl149', 'r_icon_149', '.down149')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl149" @click="Play10('.pl149', '.repl149', '.down149')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud149" @timeupdate="Update10('.aud149', '.st149', '.audio_p149_m10')" src="../sound/DOOM_2016/doom_17. Transistor Fist.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud149', '.aud150', '.repl149', '.r_icon_149', '.down149')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st149">00:00</p><p class="end_time10">/06:09</p>

			   <span id="speed_aud10" class="choice_speed_149" @click="Show_speed10('.sp_block_149')">x1</span>

			   <div class="Speed_block10 sp_block_149">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_149" @click="First_speed_10('.x_first_149', '.aud149', '.choice_speed_149', '.repl149', '.down149')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_149" @click="Second_speed_10('.x_second_149', '.aud149', '.choice_speed_149', '.repl149', '.down149')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_149" @click="Third_speed_10('.x_third_149', '.aud149', '.choice_speed_149', '.repl149', '.down149')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_149" @click="Fourth_speed_10('.x_fourth_149', '.aud149', '.choice_speed_149', '.repl149', '.down149')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_149" @click="Fifth_speed_10('.x_fifth_149', '.aud149', '.choice_speed_149', '.repl149', '.down149')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_149" @click="Six_speed_10('.x_six_149', '.aud149', '.choice_speed_149', '.repl149', '.down149')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl149" @click="Replay10('.aud149', '.r_icon_149')" @mouseover="S10('.repl149')" @mouseout="hide_repeat10('.repl149')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_149" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down149" @click="Download10('.down149', 'DOOM 2016 - Transistor First', '.d_icon_149')" @mouseout="down_hide10('.down149')">
			   	  <vue-fontawesome icon="download" class="d_icon_149" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t149">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block10" @mouseover="show_repeat10('.repl150', '.down150')">
			   <p class="name10 text9_mobile_15">#15 Ties That Bind</p>

			   <div class="audio_pole_m10 audio_p150_m10" @click="Perek10($event, '.aud150', '.audio_p150_m10')" @mouseover="Show_time10('.Aud_t150')" @mousemove="Run_block10($event, '.audio_p150_m10', '.aud150', '.Aud_t150')" @mouseout="Time_out10('.Aud_t150')">
				   <div class="aud_p10"></div>
			   </div>

			   <button id="vol10" @click="Vol10('.pl150', '.l_of_v150', '.repl150', '.down150')" @mouseover="Over10('.l_of_v150')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol10 l_of_v150" @mouseover="Over10('.l_of_v150')" @mouseout="Ov10('.l_of_v150')">
			   	  <div class="f_v_10" @click="C1_10('.l_of_v150', '.aud150', '.repl150', '.down150')"></div>
			   	  <div class="s_v_10" @click="C2_10('.l_of_v150', '.aud150', '.repl150', '.down150')"></div>
			   	  <div class="th_v_10" @click="C3_10('.l_of_v150', '.aud150', '.repl150', '.down150')"></div>
			   	  <div class="fif_v_10" @click="C4_10('.l_of_v150', '.aud150', '.repl150', '.down150')"></div>
			   </div>

			   <button class="prev10" @click="Prev10('.aud150', '.aud149', '.repl150', 'r_icon_150', '.down150')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play10 pl150" @click="Play10('.pl150', '.repl150', '.down150')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud150" @timeupdate="Update10('.aud150', '.st150', '.audio_p150_m10')" src="../sound/DOOM_2016/doom_10. Ties That Bind.mp3"></audio></button>
			   <button class="next10" @click="Next10('.aud150', '.aud136', '.repl150', '.r_icon_150', '.down150')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time10 st150">00:00</p><p class="end_time10">/02:06</p>

			   <span id="speed_aud10" class="choice_speed_150" @click="Show_speed10('.sp_block_150')">x1</span>

			   <div class="Speed_block10 sp_block_150">
			   	   <div class="contain10">
			   	   	  <div class="s_p_25 b10 x_first_150" @click="First_speed_10('.x_first_150', '.aud150', '.choice_speed_150', '.repl150', '.down150')"><p>x.25</p></div>
			   	      <div class="s_p_5 b10 x_second_150" @click="Second_speed_10('.x_second_150', '.aud150', '.choice_speed_150', '.repl150', '.down150')"><p>x.5</p></div>
			   	      <div class="s_p_1 b10 x_third_150" @click="Third_speed_10('.x_third_150', '.aud150', '.choice_speed_150', '.repl150', '.down150')"><p>x1</p></div>
			   	      <div class="s_p_1_25 b10 x_fourth_150" @click="Fourth_speed_10('.x_fourth_150', '.aud150', '.choice_speed_150', '.repl150', '.down150')"><p>x1.25</p></div>
			   	      <div class="s_p_15 b10 x_fifth_150" @click="Fifth_speed_10('.x_fifth_150', '.aud150', '.choice_speed_150', '.repl150', '.down150')"><p>x1.5</p></div>
			   	      <div class="s_p_2 b10 x_six_150" @click="Six_speed_10('.x_six_150', '.aud150', '.choice_speed_150', '.repl150', '.down150')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button10 repl150" @click="Replay10('.aud150', '.r_icon_150')" @mouseover="S10('.repl150')" @mouseout="hide_repeat10('.repl150')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_150" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button10 down150" @click="Download10('.down150', 'DOOM 2016 - Ties That Bind', '.d_icon_150')" @mouseout="down_hide10('.down150')">
			   	  <vue-fontawesome icon="download" class="d_icon_150" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio10 Aud_t150">
			   	   <span id="t10">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>
	export default {
		name: "DOOM_2016",
		methods: {
		Play10(el1, Repl_elem_1, Down_elem_1) {
      	 let vl = document.querySelector(el1);
      	 let opov_4_block = document.querySelector('.opoveshenie_block');
      	 let opov_4_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_4 = document.querySelector(Repl_elem_1);
      	 let DOWN_ELEM_4 = document.querySelector(Down_elem_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} - играет`;

            REPL_ELEM_4.classList.add('Rep_16');
            DOWN_ELEM_4.classList.add('d_first_anim10');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_15');
               DOWN_ELEM_4.classList.remove('d_first_move10');
               REPL_ELEM_4.classList.remove('Rep_16');
               DOWN_ELEM_4.classList.remove('d_first_anim10');
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

      	     REPL_ELEM_4.classList.add('Rep_16');
      	     DOWN_ELEM_4.classList.add('d_first_anim10');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_15');
               DOWN_ELEM_4.classList.remove('d_first_move10');
               REPL_ELEM_4.classList.remove('Rep_16');
               DOWN_ELEM_4.classList.remove('d_first_anim10');
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

      Vol10(el2, lvl1, Repl_elem_2, Down_elem_2) {
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

            REPL_ELEM_2.classList.add('Rep_16');
            DOWN_ELEM_2.classList.add('d_first_anim10');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_15');
               DOWN_ELEM_2.classList.remove('d_first_move10');
               REPL_ELEM_2.classList.remove('Rep_16');
               DOWN_ELEM_2.classList.remove('d_first_anim10');
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

            REPL_ELEM_2.classList.add('Rep_16');
            DOWN_ELEM_2.classList.add('d_first_anim10');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_15');
               DOWN_ELEM_2.classList.remove('d_first_move10');
               REPL_ELEM_2.classList.remove('Rep_16');
               DOWN_ELEM_2.classList.remove('d_fisrt_anim10');
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
      Download10(d_button, d_name, d_icon) {
      	if(confirm('Вы точно хотите скачать этот файл?')) {
      	 let down_button = document.querySelector(d_button);
      	 let down_button_audio_address = down_button.parentElement.children[5].children[1].getAttribute('src');
      	 let ICON_D = document.querySelector(d_icon);
         let link = document.createElement('a');
         let opov_4_block = document.querySelector('.opoveshenie_block');
         let opov_4_name = down_button.parentElement.children[0].textContent;

         link.setAttribute('href', `${down_button_audio_address}`);
         link.setAttribute('download', `${d_name}.mp3`);
         link.click();
         return true;

         ICON_D.style.color = 'gold';
         down_button.classList.add('.d_first_anim10');

         setTimeout(() => {
         	down_button.classList.add('.d_first_move10');
            //ICON_D.style.color = 'white';
            down_button.classList.remove('.d_first_anim10');
         }, 1100);

         opov_4_block.classList.add('show_n_block_anim');
            
         opov_4_block.children[0].children[0].textContent = `${opov_4_name} поставлен на скачивание`;

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

      Over10(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('L_show10');
      },

      Ov10(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('L_show10');
      },

      C1_10(el5, volm1, Repl_elem_3, Down_elem_3) {
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

          REPL_ELEM_3.classList.add('Rep_16');
          DOWN_ELEM_3.classList.add('d_first_anim10');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('Rep_15');
            DOWN_ELEM_3.classList.remove('d_first_move10');
            REPL_ELEM_3.classList.remove('Rep_16');
            DOWN_ELEM_3.classList.remove('d_first_anim10');
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

      C2_10(el6, volm2, Repl_elem_4, Down_elem_4) {
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

          REPL_ELEM_4.classList.add('Rep_16');
          DOWN_ELEM_4.classList.add('d_fist_anim10');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('Rep_15');
            DOWN_ELEM_4.classList.remove('d_first_move10');
            REPL_ELEM_4.classList.remove('Rep_16');
            DOWN_ELEM_4.classList.remove('d_first_anim10');
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

      C3_10(el7, volm3, Repl_elem_5, Down_elem_5) {
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

           REPL_ELEM_5.classList.add('Rep_16');
           DOWN_ELEM_5.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('Rep_15');
            DOWN_ELEM_5.classList.remove('d_first_move10');
            REPL_ELEM_5.classList.remove('Rep_16');
            DOWN_ELEM_5.classList.remove('d_first_anim10');
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


      C4_10(el8, volm4, Repl_elem_6, Down_elem_6) {
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

          REPL_ELEM_6.classList.add('Rep_16');
          DOWN_ELEM_6.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('Rep_15');
            DOWN_ELEM_6.classList.remove('d_first_move10');
            REPL_ELEM_6.classList.remove('Rep_16');
            DOWN_ELEM_6.classList.remoev('d_first_anim10');
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

      Update10(volm5, time_b1, prog) {
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

      Prev10(AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_1, DOWNLOAD_1) {
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

         REPL_1.classList.add('Rep_16');
         DOWN_1.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_1.classList.remove('Rep_15');
            DOWN_1.classList.remove('d_first_move10');
            REPL_1.classList.remove('Rep_16');
            DOWN_1.classList.remove('d_first_anim10');
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

      Next10(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_2) {
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

         REPL_2.classList.add('Rep_16');
         DOWN_2.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_2.classList.remove('Rep_15');
            DOWN_2.classList.remove('d_first_move10');
            REPL_2.classList.remove('Rep_16');
            DOWN_2.classList.remove('d_first_anim10');
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

      Perek10(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time10(t_block5) {
          let time_block = document.querySelector(t_block5);
      	  time_block.classList.add('T_aud_10');
      },

      Time_out10(t_block5) {
      	  let time_block = document.querySelector(t_block5);
      	  time_block.classList.remove('T_aud_10');
      },

      Run_block10(event, M_Pole, Aud2, t_block4) {
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
          
      show_repeat10(n_rep, d_rep) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep);

          nrep.classList.add('Rep_15');
          drep.classList.add('d_first_move10');
      },

      hide_repeat10(rep2) {
      	  let replay2 = document.querySelector(rep2);

      	  replay2.classList.add('Rep_16');

      	  setTimeout(() => {
             replay2.classList.remove('Rep_15');
             replay2.classList.remove('Rep_16');
      	  }, 1100);
      },

      down_hide10(dow2) {
         let d2 = document.querySelector(dow2);

         d2.classList.add('d_first_anim10');

         setTimeout(() => {
            d2.classList.remove('d_first_move10');
            d2.classList.remove('d_first_anim10');
         }, 1100);
      },

      Replay10(AUD, Icon1) {
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

      S10(rep3) {
      	  let rep = document.querySelector(rep3);
      	  rep.classList.add('Rep_15');
      },

      Show_speed10(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl_10');
      },

      First_speed_10(first, a, ch_one, Repl_elem_7, Down_elem_7) {
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

           REPL_ELEM_7.classList.add('Rep_16');
           DOWN_ELEM_7.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('Rep_15');
            DOWN_ELEM_7.classList.remove('d_first_move10');
            REPL_ELEM_7.classList.remove('Rep_16');
            DOWN_ELEM_7.classList.remove('d_first_anim10');
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

      Second_speed_10(second, a2, ch_two, Repl_elem_8, Down_elem_8) {
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

           REPL_ELEM_8.classList.add('Rep_16');
           DOWN_ELEM_8.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('Rep_15');
            DOWN_ELEM_8.classList.remove('d_first_move10');
            REPL_ELEM_8.classList.remove('Rep_16');
            DOWN_ELEM_8.classList.remove('d_first_anim10');
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

      Third_speed_10(third, a3, ch_three, Repl_elem_9, Down_elem_9) {
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

           REPL_ELEM_9.classList.add('Rep_16');
           DOWN_ELEM_9.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('Rep_15');
            DOWN_ELEM_9.classList.remove('d_first_move10');
            REPL_ELEM_9.classList.remove('Rep_16');
            DOWN_ELEM_9.classList.remove('d_first_anim10');
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

      Fourth_speed_10(fourth, a4, ch_four, Repl_elem_10, Down_elem_10) {
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

           REPL_ELEM_10.classList.add('Rep_16');
           DOWN_ELEM_10.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('Rep_15');
            DOWN_ELEM_10.classList.remove('d_first_move10');
            REPL_ELEM_10.classList.remove('Rep_16');
            DOWN_ELEM_10.classList.remove('d_first_anim10');
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

      Fifth_speed_10(fifth, a5, ch_five, Repl_elem_11, Down_elem_11) {
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

           REPL_ELEM_11.classList.add('Rep_16');
           DOWN_ELEM_11.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('Rep_15');
            DOWN_ELEM_11.classList.remove('d_first_move10');
            REPL_ELEM_11.classList.remove('Rep_16');
            DOWN_ELEM_11.classList.remove('d_first_anim10');
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

      Six_speed_10(six, a6, ch_six, Repl_elem_12, Down_elem_12) {
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

           REPL_ELEM_12.classList.add('Rep_16');
           DOWN_ELEM_12.classList.add('d_first_anim10');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('Rep_15');
            DOWN_ELEM_12.classList.remove('d_first_move10');
            REPL_ELEM_12.classList.remove('Rep_16');
            DOWN_ELEM_12.classList.remove('d_first_anim10');
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
	}
</script>
<style>
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	.side_screen10 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/DOOM_2016_background.jpg");
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

    .side_screen10 span {
    	position: absolute;
    	left: 355px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block10 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block10 > .sound_block10 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block10 .sound_block10 .name10 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block10 .sound_block10 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block10 .sound_block10 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block10 .sound_block10 .audio_pole_m10 {
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

    .audio_collection_block10 .sound_block10 .audio_pole_m10:hover {
    	opacity: .7;
    }

    .audio_collection_block10 .sound_block10 .audio_pole_m10 .aud_p10 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	margin-left: 0;
    	margin-top: 0;
    	background: yellow;
    }

    .audio_collection_block10 .sound_block10 #vol10 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block10 .sound_block10 .l_of_vol10 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block10 .sound_block10 .l_of_vol10.L_show10 {
    	display: block;
    }

    .audio_collection_block10 .sound_block10 .l_of_vol10 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block10 .sound_block10 .l_of_vol10 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);

    }

    .audio_collection_block10 .sound_block10 .l_of_vol10 .f_v_10 {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block10 .sound_block10 .l_of_vol10 .s_v_10 {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block10 .sound_block10 .l_of_vol10 .th_v_10 {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block10 .sound_block10 .l_of_vol10 .fif_v_10 {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block10 .sound_block10 .prev10 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block10 .sound_block10 .prev10:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block10 .sound_block10 .play10 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block10 .sound_block10 .next10 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block10 .sound_block10 .next10:hover {
    	transform: translateX(5px);
    }

    .audio_collection_block10 .sound_block10 .start_time10 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block10 .sound_block10 .end_time10 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block10 .sound_block10 .Replay_button10 {
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

    .audio_collection_block10 .sound_block10 .Replay_button10.Rep_15 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block10 .sound_block10 .Replay_button10.Rep_16 {
    	animation: spek10 1s linear;
    	transform: scale(0);
    }

    @keyframes spek10 {
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

    .audio_collection_block10 .sound_block10 .Download_button10 {
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

    .audio_collection_block10 .sound_block10 .Download_button10:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block10 .sound_block10 .Download_button10.d_first_move10 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block10 .sound_block10 .Download_button10.d_first_anim10 {
    	animation: down10 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down10 {
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

    .audio_collection_block10 .sound_block10 .Time_of_audio10 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block10 .sound_block10 .Time_of_audio10 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block10 .sound_block10 .Time_of_audio10.T_aud_10 {
    	display: block;
    }

    .audio_collection_block10 .sound_block10 #speed_aud10 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block10 .sound_block10 .Speed_block10 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block10 .sound_block10 .Speed_block10.tgl_10 {
    	display: block;
    }
    
    .audio_collection_block10 .sound_block10 .Speed_block10 .contain10 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block10 .sound_block10 .Speed_block10 .contain10 .b10 {
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

    .audio_collection_block10 .sound_block10 .Speed_block10 .contain10 .b10:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block10 .sound_block10 .Speed_block10 .contain10 .b10 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block10 .sound_block10 .Speed_block10 .contain10 .b10 p:hover {
        color: black;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
        .side_screen10 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen10 span {
    		font-size: 55px;
    		left: 310px;
    	}

    	.audio_collection_block10 > .sound_block10 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block10 .sound_block10 .audio_pole_m10 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block10 .sound_block10 .audio_pole_m10 .aud_p10 {
    		height: 9.5px;
    	}

    	.audio_collection_block10 .sound_block10 #vol10 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block10 .sound_block10 .play10 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block10 .sound_block10 .prev10 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block10 .sound_block10 .next10 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block10 .sound_block10 .name10 {
    	   left: 255px;
        }

        .audio_collection_block10 .sound_block10 .Time_of_audio10 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block10 .sound_block10 .Time_of_audio10 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block10 .sound_block10 .start_time10 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block10 .sound_block10 .end_time10 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block10 .sound_block10 #speed_aud10 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block10 .sound_block10 .Speed_block10 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block10 .sound_block10 .Speed_block10 .contain10 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block10 .sound_block10 .Speed_block10 .contain10 .b10 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block10 .sound_block10 .Speed_block10 .contain10 .b10 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block10 .sound_block10 .Replay_button10 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block10 .sound_block10 .Replay_button10.sh20 {
    	    margin-left: 850px;
        }

        .audio_collection_block10 .sound_block10 .Download_button10 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block10 .sound_block10 .l_of_vol10 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_1 {
        	left: 315px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_2 {
        	left: 285px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_3 {
        	left: 255px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_6 {
        	left: 250px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_9 {
        	left: 230px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_10 {
        	left: 220px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_11 {
        	left: 235px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_12 {
        	left: 200px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_14 {
        	left: 225px;
        }

        .audio_collection_block10 .sound_block10 .text9_mobile_15 {
        	left: 230px;
        }
    }
</style>