<template>
	<div class="side_screen3">
		<span>Uncharted 4 music</span>
		<div class="audio_collection_block3">
		    <div class="sound_block3" @mouseover="show_repeat3('.repl31', '.down31')">
			   <p class="name3">#1 A Normal Life</p>

			   <div class="audio_pole_m3 audio_p31_m3" @click="Perek3($event, '.aud31', '.audio_p31_m3')" @mouseover="Show_time3('.Aud_t31')" @mousemove="Run_block3($event, '.audio_p31_m3', '.aud31', '.Aud_t31')" @mouseout="Time_out3('.Aud_t31')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl31', '.l_of_v31', '.repl31', '.down31')" @mouseover="Over3('.l_of_v31')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol3 l_of_v31" @mouseover="Over3('.l_of_v31')" @mouseout="Ov3('.l_of_v31')">
			   	  <div class="V_1" @click="C1_3('.l_of_v31', '.aud31', '.repl31', '.down31')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v31', '.aud31', '.repl31', '.down31')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v31', '.aud31', '.repl31', '.down31')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v31', '.aud31', '.repl31', '.down31')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud31', '.aud45', '.repl31', '.r_icon_31', '.down31')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl31" @click="Play3('.pl31', '.repl31', '.down31')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud31" @timeupdate="Update3('.aud31', '.st31', '.audio_p31_m3')" src="../sound/Uncharted_4/A Normal Life.mp3"></audio></button> 
			   <button class="next3" @click="Next3('.aud31', '.aud32', '.repl31', '.r_icon_31', '.down31')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time3 st31">00:00</p><p class="end_time3">/01:17</p>

			   <span id="speed_aud3" class="choice_speed_31" @click="Show_speed3('.sp_block_31')">x1</span>

			   <div class="Speed_block3 sp_block_31">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_31" @click="First_speed_3('.x_first_31', '.aud31', '.choice_speed_31', '.repl31', '.down31')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_31" @click="Second_speed_3('.x_second_31', '.aud31', '.choice_speed_31', '.repl31', '.down31')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_31" @click="Third_speed_3('.x_third_31', '.aud31', '.choice_speed_31', '.repl31', '.down31')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_31" @click="Fourth_speed_3('.x_fourth_31', '.aud31', '.choice_speed_31', '.repl31', '.down31')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_31" @click="Fifth_speed_3('.x_fifth_31', '.aud31', '.choice_speed_31', '.repl31', '.down31')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_31" @click="Six_speed_3('.x_six_31', '.aud31', '.choice_speed_31', '.repl31', '.down31')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl31" @click="Replay3('.aud31', '.r_icon_31')" @mouseover="S3('.repl31')" @mouseout="hide_repeat3('.repl31')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_31" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down31" @click="Download3('.down31', 'Uncharted 4 - A Normal Life', '.d_icon_31')" @mouseover="D3('.down31')" @mouseout="down_hide3('.down31')">
			   	  <vue-fontawesome icon="download" class="d_icon_31" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t31">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block3" @mouseover="show_repeat3('.repl32', '.down32')">
			   <p class="name3">#2 Once a Theif....</p>

			   <div class="audio_pole_m3 audio_p32_m3" @click="Perek3($event, '.aud32', '.audio_p32_m3')" @mouseover="Show_time3('.Aud_t32')" @mousemove="Run_block3($event, '.audio_p32_m3', '.aud32', '.Aud_t32')" @mouseout="Time_out3('.Aud_t32')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl32', '.l_of_v32', '.repl32', '.down32')" @mouseover="Over3('.l_of_v32')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v32" @mouseover="Over3('.l_of_v32')" @mouseout="Ov3('.l_of_v32')">
			   	  <div class="V_1" @click="C1_3('.l_of_v32', '.aud32', '.repl32', '.down32')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v32', '.aud32', '.repl32', '.down32')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v32', '.aud32', '.repl32', '.down32')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v32', '.aud32', '.repl32', '.down32')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud32', '.aud31', '.repl32', '.r_icon_32', '.down32')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl32" @click="Play3('.pl32', '.repl32', '.down32')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud32" @timeupdate="Update3('.aud32', '.st32', '.audio_p32_m3')" src="../sound/Uncharted_4/A thief's end.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud32', '.aud33', '.repl32', '.r_icon_32', '.down32')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time3 st32">00:00</p><p class="end_time3">/02:13</p>

			   <span id="speed_aud3" class="choice_speed_32" @click="Show_speed3('.sp_block_32')">x1</span>

			   <div class="Speed_block3 sp_block_32">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_32" @click="First_speed_3('.x_first_32', '.aud32', '.choice_speed_32', '.repl32', '.down32')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_32" @click="Second_speed_3('.x_second_32', '.aud32', '.choice_speed_32', '.repl32' , '.down32')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_32" @click="Third_speed_3('.x_third_32', '.aud32', '.choice_speed_32', '.repl32' , '.down32')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_32" @click="Fourth_speed_3('.x_fourth_32', '.aud32', '.choice_speed_32', '.repl32' , '.down32')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_32" @click="Fifth_speed_3('.x_fifth_32', '.aud32', '.choice_speed_32', '.repl32' , '.down32')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_32" @click="Six_speed_3('.x_six_32', '.aud32', '.choice_speed_32', '.repl32' , '.down32')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl32" @click="Replay3('.aud32', '.r_icon_32')" @mouseover="S3('.repl32')" @mouseout="hide_repeat3('.repl32')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_32" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down32" @click="Download3('.down32', 'Uncharted 4 - Once a Thief......', '.d_icon_32')" @mouseover="D3('.down32')" @mouseout="down_hide3('.down32')">
			   	  <vue-fontawesome icon="download" class="d_icon_32" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t32">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block3" @mouseover="show_repeat3('.repl33', '.down33')">
			   <p class="name3 text2_mobile_3">#3 The Brothers Drake</p>

			   <div class="audio_pole_m3 audio_p33_m3" @click="Perek3($event, '.aud33', '.audio_p33_m3')" @mouseover="Show_time3('.Aud_t33')" @mousemove="Run_block3($event, '.audio_p33_m3', '.aud33', '.Aud_t33')" @mouseout="Time_out3('.Aud_t33')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl33', '.l_of_v33', '.repl33', '.down33')" @mouseover="Over3('.l_of_v33')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v33" @mouseover="Over3('.l_of_v33')" @mouseout="Ov3('.l_of_v33')">
			   	  <div class="V_1" @click="C1_3('.l_of_v33', '.aud33', '.repl33', '.down33')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v33', '.aud33', '.repl33', '.down33')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v33', '.aud33', '.repl33', '.down33')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v33', '.aud33', '.repl33', '.down33')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud33', '.aud32', '.repl33', '.r_icon_33', '.down33')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl33" @click="Play3('.pl33', '.r_icon_33', '.down33')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud33" @timeupdate="Update3('.aud33', '.st33', '.audio_p33_m3')"  src="../sound/Uncharted_4/The Brothers Drake.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud33', '.aud34', '.repl33', '.r_icon_33', '.down33')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time3 st33">00:00</p><p class="end_time3">/01:55</p>

			   <span id="speed_aud3" class="choice_speed_33" @click="Show_speed3('.sp_block_33')">x1</span>

			   <div class="Speed_block3 sp_block_33">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_33" @click="First_speed_3('.x_first_33', '.aud33', '.choice_speed_33', '.repl33', '.down33')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_33" @click="Second_speed_3('.x_second_33', '.aud33', '.choice_speed_33', '.repl33', '.down33')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_33" @click="Third_speed_3('.x_third_33', '.aud33', '.choice_speed_33', '.repl33', '.down33')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_33" @click="Fourth_speed_3('.x_fourth_33', '.aud33', '.choice_speed_33', '.repl33', '.down33')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_33" @click="Fifth_speed_3('.x_fifth_33', '.aud33', '.choice_speed_33', '.repl33', '.down33')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_33" @click="Six_speed_3('.x_six_33', '.aud33', '.choice_speed_33', '.repl33', '.down33')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl33" @click="Replay3('.aud33', '.r_icon_33')" @mouseover="S3('.repl33')" @mouseout="hide_repeat3('.repl33')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_33" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down33" @click="Download3('.down33', 'Uncharted 4 - The Brothers Drake', '.d_icon_33')" @mouseover="D3('.down33')" @mouseout="down_hide3('.down33')">
			   	  <vue-fontawesome icon="download" class="d_icon_33" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio3 Aud_t33">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl34', '.down34')">
			   <p class="name3 te1 text2_mobile_4">#4 The Grave of Henry Avery</p>

			   <div class="audio_pole_m3 audio_p34_m3" @click="Perek3($event, '.aud34', '.audio_p34_m3')" @mouseover="Show_time3('.Aud_t34')" @mousemove="Run_block3($event, '.audio_p34_m3', '.aud34', '.Aud_t34')" @mouseout="Time_out3('.Aud_t34')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl34', '.l_of_v34', '.repl34', '.down34')" @mouseover="Over3('.l_of_v34')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v34" @mouseover="Over3('.l_of_v34')" @mouseout="Ov3('.l_of_v34')">
			   	  <div class="V_1" @click="C1_3('.l_of_v34', '.aud34', '.repl34', '.down34')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v34', '.aud34', '.repl34', '.down34')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v34', '.aud34', '.repl34', '.down34')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v34', '.aud34', '.repl34', '.down34')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud34', '.aud33', '.repl34', '.r_icon_34', '.down34')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl34" @click="Play3('.pl34', '.repl34', '.down34')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud34" @timeupdate="Update3('.aud34', '.st34', '.audio_p34_m3')" src="../sound/Uncharted_4/The Grave of Henry Avery.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud34', '.aud35', '.repl34', '.r_icon_34', '.down34')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time3 st34">00:00</p><p class="end_time3">/03:13</p>

			   <span id="speed_aud3" class="choice_speed_34" @click="Show_speed3('.sp_block_34')">x1</span>

			   <div class="Speed_block3 sp_block_34">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_34" @click="First_speed_3('.x_first_34', '.aud34', '.choice_speed_34', '.repl34', '.down34')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_34" @click="Second_speed_3('.x_second_34', '.aud34', '.choice_speed_34', '.repl34', '.down34')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_34" @click="Third_speed_3('.x_third_34', '.aud34', '.choice_speed_34', '.repl34', '.down34')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_34" @click="Fourth_speed_3('.x_fourth_34', '.aud34', '.choice_speed_34', '.repl34', '.down34')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_34" @click="Fifth_speed_3('.x_fifth_34', '.aud34', '.choice_speed_34', '.repl34', '.down34')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_34" @click="Six_speed_3('.x_six_34', '.aud34', '.choice_speed_34', '.repl34', '.down34')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl34" @click="Replay3('.aud34', '.r_icon_34')" @mouseover="S3('.repl34')" @mouseout="hide_repeat3('.repl34')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_34" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down34" @click="Download3('.down34', 'Uncharted 4 - The Grave of Hanry Avery', '.d_icon_34')" @mouseover="D3('.down34')" @mouseout="down_hide3('.down34')">
			   	  <vue-fontawesome icon="download" class="d_icon_34" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t34">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl35', '.down35')">
			   <p class="name3 text2_mobile_5">#5 The Twelve Towers</p>

			   <div class="audio_pole_m3 audio_p35_m3" @click="Perek3($event, '.aud35', '.audio_p35_m3')" @mouseover="Show_time3('.Aud_t35')" @mousemove="Run_block3($event, '.audio_p35_m3', '.aud35', '.Aud_t35')" @mouseout="Time_out3('.Aud_t35')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl35', '.l_of_v35', '.repl35', '.down35')" @mouseover="Over3('.l_of_v35')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v35" @mouseover="Over3('.l_of_v35')" @mouseout="Ov3('.l_of_v35')">
			   	  <div class="V_1" @click="C1_3('.l_of_v35', '.aud35', '.repl35', '.down35')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v35', '.aud35', '.repl35', '.down35')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v35', '.aud35', '.repl35', '.down35')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v35', '.aud35', '.repl35', '.down35')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud35', '.aud34', '.repl35', '.r_icon_35', '.down35')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl35" @click="Play3('.pl35', '.repl35', '.down35')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud35" @timeupdate="Update3('.aud35', '.st35', '.audio_p35_m3')" src="../sound/Uncharted_4/The Twelve Towers.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud35', '.aud36', '.repl35', '.r_icon_35', '.down35')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time3 st35">00:00</p><p class="end_time3">/04:00</p>

			   <span id="speed_aud3" class="choice_speed_35" @click="Show_speed3('.sp_block_35')">x1</span>

			   <div class="Speed_block3 sp_block_35">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_35" @click="First_speed_3('.x_first_35', '.aud35', '.choice_speed_35', '.repl35', '.down35')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_35" @click="Second_speed_3('.x_second_35', '.aud35', '.choice_speed_35', '.repl35', '.down35')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_35" @click="Third_speed_3('.x_third_35', '.aud35', '.choice_speed_35', '.repl35', '.down35')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_35" @click="Fourth_speed_3('.x_fourth_35', '.aud35', '.choice_speed_35', '.repl35', '.down35')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_35" @click="Fifth_speed_3('.x_fifth_35', '.aud35', '.choice_speed_35', '.repl35', '.down35')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_35" @click="Six_speed_3('.x_six_35', '.aud35', '.choice_speed_35', '.repl35', '.down35')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl35" @click="Replay3('.aud35', '.r_icon_35')" @mouseover="S3('.repl35')" @mouseout="hide_repeat3('.repl35')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_35" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down35" @click="Download3('.down35', 'Uncharted 4 - The Twelve Towers', '.d_icon_35')" @mouseover="D3('.down35')" @mouseout="down_hide3('.down35')">
			   	  <vue-fontawesome icon="download" class="d_icon_35" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t35">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl36', '.down36')">
			   <p class="name3 text2_mobile_6">#6 Race of Libertalia</p>

			   <div class="audio_pole_m3 audio_p36_m3" @click="Perek3($event, '.aud36', '.audio_p36_m3')" @mouseover="Show_time3('.Aud_t36')" @mousemove="Run_block3($event, '.audio_p36_m3', '.aud36', '.Aud_t36')" @mouseout="Time_out3('.Aud_t36')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl36', '.l_of_v36', '.repl36', '.down36')" @mouseover="Over3('.l_of_v36')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v36" @mouseover="Over3('.l_of_v36')" @mouseout="Ov3('.l_of_v36')">
			   	  <div class="V_1" @click="C1_3('.l_of_v36', '.aud36', '.repl36', '.down36')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v36', '.aud36', '.repl36', '.down36')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v36', '.aud36', '.repl36', '.down36')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v36', '.aud36', '.repl36', '.down36')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud36', '.aud35', '.repl36', '.r_icon_36', '.down36')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button> 
			   <button class="play3 pl36" @click="Play3('.pl36', '.repl36', '.down36')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud36" @timeupdate="Update3('.aud36', '.st36', '.audio_p36_m3')" src="../sound/Uncharted_4/Race to Libertalia.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud36', '.aud37', '.repl36', '.r_icon_36', '.down36')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time3 st36">00:00</p><p class="end_time3">/03:12</p>

			   <span id="speed_aud3" class="choice_speed_36" @click="Show_speed3('.sp_block_36')">x1</span>

			   <div class="Speed_block3 sp_block_36">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_36" @click="First_speed_3('.x_first_36', '.aud36', '.choice_speed_36', '.repl36', '.down36')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_36" @click="Second_speed_3('.x_second_36', '.aud36', '.choice_speed_36', '.repl36', '.down36')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_36" @click="Third_speed_3('.x_third_36', '.aud36', '.choice_speed_36', '.repl36', '.down36')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_36" @click="Fourth_speed_3('.x_fourth_36', '.aud36', '.choice_speed_36', '.repl36', '.down36')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_36" @click="Fifth_speed_3('.x_fifth_36', '.aud36', '.choice_speed_36', '.repl36', '.down36')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_36" @click="Six_speed_3('.x_six_36', '.aud36', '.choice_speed_36', '.repl36', '.down36')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl36" @click="Replay3('.aud36', '.r_icon_36')" @mouseover="S3('.repl36')" @mouseout="hide_repeat3('.repl36')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_36" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down36" @click="Download3('.down36', 'Uncharted 4 - Race of Libertalia', '.d_icon_36')" @mouseover="D3('.down36')" @mouseout="down_hide3('.down36')">
			   	  <vue-fontawesome icon="download" class="d_icon_36" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t36">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl37', '.down37')">
			   <p class="name3">#7 New Devon</p>

			   <div class="audio_pole_m3 audio_p37_m3" @click="Perek3($event, '.aud37', '.audio_p37_m3')" @mouseover="Show_time3('.Aud_t37')" @mousemove="Run_block3($event, '.audio_p37_m3', '.aud37', '.Aud_t37')" @mouseout="Time_out3('.Aud_t37')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl37', '.l_of_v37', '.repl37', '.down37')" @mouseover="Over3('.l_of_v37')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v37" @mouseover="Over3('.l_of_v37')" @mouseout="Ov3('.l_of_v37')">
			   	  <div class="V_1" @click="C1_3('.l_of_v37', '.aud37', '.repl37', '.down37')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v37', '.aud37', '.repl37', '.down37')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v37', '.aud37', '.repl37', '.down37')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v37', '.aud37', '.repl37', '.down37')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud37', '.aud36', '.repl37', '.r_icon_37', '.down37')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl37" @click="Play3('.pl37', '.repl37', '.down37')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud37" @timeupdate="Update3('.aud37', '.st37', '.audio_p37_m3')" src="../sound/Uncharted_4/New Devon.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud37', '.aud38', '.repl37', '.r_icon_37', '.down37')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time3 st37">00:00</p><p class="end_time3">/04:04</p>

			   <span id="speed_aud3" class="choice_speed_37" @click="Show_speed3('.sp_block_37')">x1</span>

			    <div class="Speed_block3 sp_block_37">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_37" @click="First_speed_3('.x_first_37', '.aud37', '.choice_speed_37', '.repl37', '.down37')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_37" @click="Second_speed_3('.x_second_37', '.aud37', '.choice_speed_37', '.repl37', '.down37')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_37" @click="Third_speed_3('.x_third_37', '.aud37', '.choice_speed_37', '.repl37', '.down37')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_37" @click="Fourth_speed_3('.x_fourth_37', '.aud37', '.choice_speed_37', '.repl37', '.down37')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_37" @click="Fifth_speed_3('.x_fifth_37', '.aud37', '.choice_speed_37', '.repl37', '.down37')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_37" @click="Six_speed_3('.x_six_37', '.aud37', '.choice_speed_37', '.repl37', '.down37')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl37" @click="Replay3('.aud37', '.r_icon_37')" @mouseover="S3('.repl37')" @mouseout="hide_repeat3('.repl37')">
			   	  <vue-fontawesome class="r_icon_37" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down37" @click="Download3('.down37', 'Uncharted 4 - New Devon', '.d_icon_37')" @mouseover="D3('.down37')" @mouseout="down_hide3('.down37')">
			   	  <vue-fontawesome icon="download" class="d_icon_37" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t37">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl38', '.down38')">
			   <p class="name3 text2_mobile_8">#8 At Sea</p>

			   <div class="audio_pole_m3 audio_p38_m3" @click="Perek3($event, '.aud38', '.audio_p38_m3')" @mouseover="Show_time3('.Aud_t38')" @mousemove="Run_block3($event, '.audio_p38_m3', '.aud38', '.Aud_t38')" @mouseout="Time_out3('.Aud_t38')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl38', '.l_of_v38', '.repl38', '.down38')" @mouseover="Over3('.l_of_v38')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v38" @mouseover="Over3('.l_of_v38')" @mouseout="Ov3('.l_of_v38')">
			   	  <div class="V_1" @click="C1_3('.l_of_v38', '.aud38', '.repl38', '.down38')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v38', '.aud38', '.repl38', '.down38')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v38', '.aud38', '.repl38', '.down38')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v38', '.aud38', '.repl38', '.down38')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud38', '.aud37', '.repl38', '.r_icon_38', '.down38')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl38" @click="Play3('.pl38', '.repl38', '.down38')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud38" @timeupdate="Update3('.aud38', '.st38', '.audio_p38_m3')" src="../sound/Uncharted_4/At Sea.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud38', '.aud39', '.repl38', '.r_icon_38', '.down38')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time3 st38">00:00</p><p class="end_time3">/03:38</p>

			   <span id="speed_aud3" class="choice_speed_38" @click="Show_speed3('.sp_block_38')">x1</span>

			    <div class="Speed_block3 sp_block_38">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_38" @click="First_speed_3('.x_first_38', '.aud38', '.choice_speed_38', '.repl38', '.down38')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_38" @click="Second_speed_3('.x_second_38', '.aud38', '.choice_speed_38', '.repl38', '.down38')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_38" @click="Third_speed_3('.x_third_38', '.aud38', '.choice_speed_38', '.repl38', '.down38')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_38" @click="Fourth_speed_3('.x_fourth_38', '.aud38', '.choice_speed_38', '.repl38', '.down38')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_38" @click="Fifth_speed_3('.x_fifth_38', '.aud38', '.choice_speed_38', '.repl38', '.down38')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_38" @click="Six_speed_3('.x_six_38', '.aud38', '.choice_speed_38', '.repl38', '.down38')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl38" @click="Replay3('.aud38', '.r_icon_38')" @mouseover="S3('.repl38')" @mouseout="hide_repeat3('.repl38')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_38" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down38" @click="Download3('.down38', 'Uncharted 4 - At Sea', '.d_icon_38')" @mouseover="D3('.down38')" @mouseout="down_hide3('.down38')">
			   	  <vue-fontawesome icon="download" class="d_icon_38" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t38">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl39', '.down39')">
			   <p class="name3">#9 A thief's end</p>

			   <div class="audio_pole_m3 audio_p39_m3" @click="Perek3($event, '.aud39', '.audio_p39_m3')" @mouseover="Show_time3('.Aud_t39')" @mousemove="Run_block3($event, '.audio_p39_m3', '.aud39', '.Aud_t39')" @mouseout="Time_out3('.Aud_t39')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl39', '.l_of_v39', '.repl39', '.down39')" @mouseover="Over3('.l_of_v39')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v39" @mouseover="Over3('.l_of_v39')" @mouseout="Ov3('.l_of_v39')">
			   	  <div class="V_1" @click="C1_3('.l_of_v39', '.aud39', '.repl39', '.down39')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v39', '.aud39', '.repl39', '.down39')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v39', '.aud39', '.repl39', '.down39')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v39', '.aud39', '.repl39', '.down39')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud39', '.aud38', '.repl39', '.r_icon_39', '.down39')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl39" @click="Play3('.pl39', '.repl39', '.down39')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud39" @timeupdate="Update3('.aud39', '.st39', '.audio_p39_m3')" src="../sound/Uncharted_4/A thief's end.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud39', '.aud40', '.repl39', '.r_icon_39', '.down39')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time3 st39">00:00</p><p class="end_time3">/01:54</p>

			   <span id="speed_aud3" class="choice_speed_39" @click="Show_speed3('.sp_block_39')">x1</span>

			    <div class="Speed_block3 sp_block_39">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_39" @click="First_speed_3('.x_first_39', '.aud39', '.choice_speed_39', '.repl39', '.down39')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_39" @click="Second_speed_3('.x_second_39', '.aud39', '.choice_speed_39', '.repl39', '.down39')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_39" @click="Third_speed_3('.x_third_39', '.aud39', '.choice_speed_39', '.repl39', '.down39')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_39" @click="Fourth_speed_3('.x_fourth_39', '.aud39', '.choice_speed_39', '.repl39', '.down39')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_39" @click="Fifth_speed_3('.x_fifth_39', '.aud39', '.choice_speed_39', '.repl39', '.down39')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_39" @click="Six_speed_3('.x_six_39', '.aud39', '.choice_speed_39', '.repl39', '.down39')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl39" @click="Replay3('.aud39', '.r_icon_39')" @mouseover="S3('.repl39')" @mouseout="hide_repeat3('.repl39')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_39" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down39" @click="Download3('.down39', 'Uncharted 4 - A theif`s end', '.d_icon_39')" @mouseover="D3('.down39')" @mouseout="down_hide3('.down39')">
			   	  <vue-fontawesome icon="download" class="d_icon_39" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t39">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl40', '.down40')">
			   <p class="name3">#10 Marooned</p>

			   <div class="audio_pole_m3 audio_p40_m3" @click="Perek3($event, '.aud40', '.audio_p40_m3')" @mouseover="Show_time3('.Aud_t40')" @mousemove="Run_block3($event, '.audio_p40_m3', '.audud40', '.Aud_t40')" @mouseout="Time_out3('.Aud_t40')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl40', '.l_of_v40', '.repl40', '.down40')" @mouseover="Over3('.l_of_v40')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v40" @mouseover="Over3('.l_of_v40')" @mouseout="Ov3('.l_of_v40')">
			   	  <div class="V_1" @click="C1_3('.l_of_v40', '.aud40', '.repl40', '.down40')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v40', '.aud40', '.repl40', '.down40')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v40', '.aud40', '.repl40', '.down40')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v40', '.aud40', '.repl40', '.down40')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud40', '.aud39', '.repl40', '.r_icon_40', '.down40')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl40" @click="Play3('.pl40', '.repl40', '.down40')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud40" @timeupdate="Update3('.aud40', '.st40', '.audio_p40_m3')" src="../sound/Uncharted_4/Marooned.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud40', '.aud41', '.repl40', '.r_icon_40', '.down40')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time3 st40">00:00</p><p class="end_time3">/03:44</p>

			   <span id="speed_aud3" class="choice_speed_40" @click="Show_speed3('.sp_block_40')">x1</span>

			    <div class="Speed_block3 sp_block_40">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_40" @click="First_speed_3('.x_first_40', '.aud40', '.choice_speed_40', '.repl40', '.down40')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_40" @click="Second_speed_3('.x_second_40', '.aud40', '.choice_speed_40', '.repl40', '.down40')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_40" @click="Third_speed_3('.x_third_40', '.aud40', '.choice_speed_40', '.repl40', '.down40')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_40" @click="Fourth_speed_3('.x_fourth_40', '.aud40', '.choice_speed_40', '.repl40', '.down40')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_40" @click="Fifth_speed_3('.x_fifth_40', '.aud40', '.choice_speed_40', '.repl40', '.down40')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_40" @click="Six_speed_3('.x_six_40', '.aud40', '.choice_speed_40', '.repl40', '.down40')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl40" @click="Replay3('.aud40', '.r_icon_40')" @mouseover="S3('.repl40')" @mouseout="hide_repeat3('.repl40')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_40" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down40" @click="Download3('.down40', 'Uncharted 4 - Marooned', '.d_icon_40')" @mouseover="D3('.down40')" @mouseout="down_hide3('.down40')">
			   	  <vue-fontawesome icon="download" class="d_icon_40" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio3 Aud_t40">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl41', '.down41')">
			   <p class="name3 te2 text2_mobile_11">#11 Meet me in paradise</p>

			   <div class="audio_pole_m3 audio_p41_m3" @click="Perek3($event, '.aud41', '.audio_p41_m3')" @mouseover="Show_time3('.Aud_t41')" @mousemove="Run_block3($event, '.audio_p41_m3', '.aud41', '.Aud_t41')" @mouseout="Time_out3('.Aud_t41')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl41', '.l_of_v41', '.repl41', '.down41')" @mouseover="Over3('.l_of_v41')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>
               
               <div class="l_of_vol3 l_of_v41" @mouseover="Over3('.l_of_v41')" @mouseout="Ov3('.l_of_v41')">
			   	  <div class="V_1" @click="C1_3('.l_of_v41', '.aud41', '.repl41', '.down41')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v41', '.aud41', '.repl41', '.down41')"></div> 
			   	  <div class="V_3" @click="C3_3('.l_of_v41', '.aud41', '.repl41', '.down41')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v41', '.aud41', '.repl41', '.down41')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud41', '.aud40', '.repl41', '.r_icon_41', '.down41')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl41" @click="Play3('.pl41', '.repl41', '.down41')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud41" @timeupdate="Update3('.aud41', '.st41', '.audio_p41_m3')" src="../sound/Uncharted_4/Meet Me in Paradise.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud41', '.aud42', '.repl41', '.r_icon_41', '.down41')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time3 st41">00:00</p><p class="end_time3">/02:05</p>

			   <span id="speed_aud3" class="choice_speed_41" @click="Show_speed3('.sp_block_41')">x1</span>

			    <div class="Speed_block3 sp_block_41">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_41" @click="First_speed_3('.x_first_41', '.aud41', '.choice_speed_41', '.repl41', '.down41')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_41" @click="Second_speed_3('.x_second_41', '.aud41', '.choice_speed_41', '.repl41', '.down41')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_41" @click="Third_speed_3('.x_third_41', '.aud41', '.choice_speed_41', '.repl41', '.down41')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_41" @click="Fourth_speed_3('.x_fourth_41', '.aud41', '.choice_speed_41', '.repl41', '.down41')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_41" @click="Fifth_speed_3('.x_fifth_41', '.aud31', '.choice_speed_41', '.repl41', '.down41')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_41" @click="Six_speed_3('.x_six_41', '.aud41', '.choice_speed_41', '.repl41', '.down41')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl41" @click="Replay3('.aud41', '.r_icon_41')" @mouseover="S3('.repl41')" @mouseout="hide_repeat3('.repl41')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_41" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down41" @click="Download3('.down41', 'Uncharted 4 - Meet me in paradise', '.d_icon_41')" @mouseover="D3('.down41')" @mouseout="down_hide3('.down41')">
			   	  <vue-fontawesome icon="download" class="d_icon_41" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t41">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl42', '.down42')">
			   <p class="name3 te3 text2_mobile_12">#12 Hidden in Plain Sight</p>

			   <div class="audio_pole_m3 audio_p42_m3" @click="Perek3($event, '.aud42', '.audio_p42_m3')" @mouseover="Show_time3('.Aud_t42')" @mousemove="Run_block3($event, '.audio_p42_m3', '.aud42', '.Aud_t42')" @mouseout="Time_out3('.Aud_t42')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl42', '.l_of_v42', '.repl42', '.down42')" @mouseover="Over3('.l_of_v42')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v42" @mouseover="Over3('.l_of_v42')" @mouseout="Ov3('.l_of_v42')">
			   	  <div class="V_1" @click="C1_3('.l_of_v42', '.aud42', '.repl42', '.down42')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v42', '.aud42', '.repl42', '.down42')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v42', '.aud42', '.repl42', '.down42')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v42', '.aud42', '.repl42', '.down42')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud42', '.aud41', '.repl42', '.r_icon_42', '.down42')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl42" @click="Play3('.pl42', '.repl42', '.down42')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud42" @timeupdate="Update3('.aud42', '.st42', '.audio_p42_m3')" src="../sound/Uncharted_4/Hidden in Plain Sight.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud42', '.aud43', '.repl42', '.r_icon_42', '.down42')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time3 st42">00:00</p><p class="end_time3">/02:23</p>

			   <span id="speed_aud3" class="choice_speed_42" @click="Show_speed3('.sp_block_42')">x1</span>

			    <div class="Speed_block3 sp_block_42">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_42" @click="First_speed_3('.x_first_42', '.aud42', '.choice_speed_42', '.repl42', '.down42')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_42" @click="Second_speed_3('.x_second_42', '.aud42', '.choice_speed_42', '.repl42', '.down42')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_42" @click="Third_speed_3('.x_third_42', '.aud42', '.choice_speed_42', '.repl42', '.down42')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_42" @click="Fourth_speed_3('.x_fourth_42', '.aud42', '.choice_speed_42', '.repl42', '.down42')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_42" @click="Fifth_speed_3('.x_fifth_42', '.aud42', '.choice_speed_42', '.repl42', '.down42')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_42" @click="Six_speed_3('.x_six_42', '.aud42', '.choice_speed_42', '.repl42', '.down42')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl42" @click="Replay3('.aud42', '.r_icon_42')" @mouseover="S3('.repl42')" @mouseout="hide_repeat3('.repl42')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_42" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down42" @click="Download3('.down42', 'Uncharted 4 - Hidden in Plain Sight', '.d_icon_42')" @mouseover="D3('.down42')" @mouseout="down_hide3('.down42')">
			   	  <vue-fontawesome icon="download" class="d_icon_42" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio3 Aud_t42">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl43', '.down43')">
			   <p class="name3">#13 No escape</p>

			   <div class="audio_pole_m3 audio_p43_m3" @click="Perek3($event, '.aud43', '.audio_p43_m3')" @mouseover="Show_time3('.Aud_t43')" @mousemove="Run_block3($event, '.audio_p43_m3', '.aud43', '.Aud_t43')" @mouseout="Time_out3('.Aud_t43')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl43', '.l_of_v43', '.repl43', '.down43')" @mouseover="Over3('.l_of_v43')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v43" @mouseover="Over3('.l_of_v43')" @mouseout="Ov3('.l_of_v43')">
			   	  <div class="V_1" @click="C1_3('.l_of_v43', '.aud43', '.repl43', '.down43')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v43', '.aud43', '.repl43', '.down43')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v43', '.aud43', '.repl43', '.down43')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v43', '.aud43', '.repl43', '.down43')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud43', '.aud42', '.repl43', '.r_icon_43', '.down43')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl43" @click="Play3('.pl43', '.repl43', '.down43')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud43" @timeupdate="Update3('.aud43', '.st43', '.audio_p43_m3')" src="../sound/Uncharted_4/No Escape.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud43', '.aud44', '.repl43', '.r_icon_43', '.down43')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time3 st43">00:00</p><p class="end_time3">/03:52</p>

			   <span id="speed_aud3" class="choice_speed_43" @click="Show_speed3('.sp_block_43')">x1</span>

			   <div class="Speed_block3 sp_block_43">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_43" @click="First_speed_3('.x_first_43', '.aud43', '.choice_speed_43', '.repl43', '.down43')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_43" @click="Second_speed_3('.x_second_43', '.aud43', '.choice_speed_43', '.repl43', '.down43')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_43" @click="Third_speed_3('.x_third_43', '.aud43', '.choice_speed_43', '.repl43', '.down43')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_43" @click="Fourth_speed_3('.x_fourth_43', '.aud43', '.choice_speed_43', '.repl43', '.down43')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_43" @click="Fifth_speed_3('.x_fifth_43', '.aud43', '.choice_speed_43', '.repl43', '.down43')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_43" @click="Six_speed_3('.x_six_43', '.aud43', '.choice_speed_43', '.repl43', '.down43')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl43" @click="Replay3('.aud43', '.r_icon_43')" @mouseover="S3('.repl43')" @mouseout="hide_repeat3('.repl43')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_43" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down43" @click="Download3('.down43', 'Uncharted 4 - No escape', '.d_icon_43')" @mouseover="D3('.down43')" @mouseout="down_hide3('.down43')">
			   	  <vue-fontawesome icon="download" class="d_icon_43" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio3 Aud_t43">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl44', '.down44')">
			   <p class="name3 text2_mobile_14">#14 One Last Time</p>

			   <div class="audio_pole_m3 audio_p44_m3" @click="Perek3($event, '.aud44', '.audio_p44_m3')" @mouseover="Show_time3('.Aud_t44')" @mousemove="Run_block3($event, '.audio_p44_m3', '.aud44', '.Aud_t44')" @mouseout="Time_out3('.Aud_t44')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl44', '.l_of_v44', '.repl44', '.down44')" @mouseover="Over3('.l_of_v44')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v44" @mouseover="Over3('.l_of_v44')" @mouseout="Ov3('.l_of_v44')">
			   	  <div class="V_1" @click="C1_3('.l_of_v44', '.aud44', '.repl44', '.down44')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v44', '.aud44', '.repl44', '.down44')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v44', '.aud44', '.repl44', '.down44')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v44', '.aud44', '.repl44', '.down44')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud44', '.aud43', '.repl44', '.r_icon_44', '.down44')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl44" @click="Play3('.pl44', '.repl44', '.down44')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud44" @timeupdate="Update3('.aud44', '.st44', '.audio_p44_m3')" src="../sound/Uncharted_4/One Last Time.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud44', '.aud45', '.repl44', '.r_icon_44', '.down44')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time3 st44">00:00</p><p class="end_time3">/04:11</p>

			   <span id="speed_aud3" class="choice_speed_44" @click="Show_speed3('.sp_block_44')">x1</span>

			   <div class="Speed_block3 sp_block_44">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_firtst_44" @click="First_speed_3('.x_first_44', '.aud44', '.choice_speed_44', '.repl44', '.down44')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_44" @click="Second_speed_3('.x_second_44', '.aud44', '.choice_speed_44', '.repl44', '.down44')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_44" @click="Third_speed_3('.x_third_44', '.aud44', '.choice_speed_44', '.repl44', '.down44')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_44" @click="Fourth_speed_3('.x_fourth_44', '.aud44', '.choice_speed_44', '.repl44', '.down44')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_44" @click="Fifth_speed_3('.x_fifth_44', '.aud44', '.choice_speed_44', '.repl44', '.down44')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_44" @click="Six_speed_3('.x_six_44', '.aud44', '.choice_speed_44', '.repl44', '.down44')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl44" @click="Replay3('.aud44', '.r_icon_44')" @mouseover="S3('.repl44')" @mouseout="hide_repeat3('.repl44')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_44" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down44" @click="Download3('.down44', 'Uncharted 4 - One Last Time', '.d_icon_44')" @mouseover="D3('.down44')" @mouseout="down_hide3('.down44')">
			   	  <vue-fontawesome icon="download" class="d_icon_44" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio3 Aud_t44">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block3" @mouseover="show_repeat3('.repl45', '.down45')">
			   <p class="name3 text2_mobile_15">#15 Brother's Keeper</p>

			   <div class="audio_pole_m3 audio_p45_m3"  @click="Perek3($event, '.aud45', '.audio_p45_m3')" @mouseover="Show_time3('.Aud_t45')" @mousemove="Run_block3($event, '.audio_p45_m3', '.aud45', '.Aud_t45')" @mouseout="Time_out3('.Aud_t45')">
				   <div class="aud_p3"></div>
			   </div>

			   <button id="vol3" @click="Vol3('.pl45', '.l_of_v45', '.repl45', '.down45')" @mouseover="Over3('.l_of_v45')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol3 l_of_v45" @mouseover="Over3('.l_of_v45')" @mouseout="Ov3('.l_of_v45')">
			   	  <div class="V_1" @click="C1_3('.l_of_v45', '.aud45', '.repl45', '.down45')"></div>
			   	  <div class="V_2" @click="C2_3('.l_of_v45', '.aud45', '.repl45', '.down45')"></div>
			   	  <div class="V_3" @click="C3_3('.l_of_v45', '.aud45', '.repl45', '.down45')"></div>
			   	  <div class="V_4" @click="C4_3('.l_of_v45', '.aud45', '.repl45', '.down45')"></div>
			   </div>

			   <button class="prev3" @click="Prev3('.aud45', '.aud44', '.repl45', '.r_icon_45', '.down45')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play3 pl45" @click="Play3('.pl45', '.repl45', '.down45')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud45" @timeupdate="Update3('.aud45', '.st45', '.audio_p45_m3')" src="../sound/Uncharted_4/Brother's Keeper.mp3"></audio></button>
			   <button class="next3" @click="Next3('.aud45', '.aud31', '.repl45', '.r_icon_45', '.down45')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			  <p class="start_time3 st45">00:00</p><p class="end_time3">/04:00</p>

			   <span id="speed_aud3" class="choice_speed_45" @click="Show_speed3('.sp_block_45')">x1</span>

			   <div class="Speed_block3 sp_block_45">
			   	   <div class="contain3">
			   	   	  <div class="Speed_x_25 b3 x_first_45" @click="First_speed_3('.x_first_45', '.aud45', '.choice_speed_45', '.repl45', '.down45')"><p>x.25</p></div>
			   	      <div class="Speed_x_5 b3 x_second_45" @click="Second_speed_3('.x_second_45', '.aud45', '.choice_speed_45', '.repl45', '.down45')"><p>x.5</p></div>
			   	      <div class="Speed_x_1 b3 x_third_45" @click="Third_speed_3('.x_third_45', '.aud45', '.choice_speed_45', '.repl45', '.down45')"><p>x1</p></div>
			   	      <div class="Speed_x_1_25 b3 x_fourth_45" @click="Fourth_speed_3('.x_fourth_45', '.aud45', '.choice_speed_45', '.repl45', '.down45')"><p>x1.25</p></div>
			   	      <div class="Speed_x_15 b3 x_fifth_45" @click="Fifth_speed_3('.x_fifth_45', '.aud45', '.choice_speed_45', '.repl45', '.down45')"><p>x1.5</p></div>
			   	      <div class="Speed_x_2 b3 x_six_45" @click="Six_speed_3('.x_first_45', '.aud45', '.choice_speed_45', '.repl45', '.down45')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button3 repl45" @click="Replay3('.aud45', '.r_icon_45')" @mouseover="S3('.repl45')" @mouseout="hide_repeat3('.repl45')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_45" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button3 down45" @click="Download3('.down45', 'Uncharted 4 - Brother`s Keeper', '.d_icon_45')" @mouseover="D3('.down45')" @mouseout="down_hide3('.down45')">
			   	  <vue-fontawesome icon="download" class="d_icon_45" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio3 Aud_t45">
			   	   <span id="t3">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>
	export default {
	  name: 'Uncharted',
      methods: {
      Play3(EL, REPL_elem_3, Down_elem_3) {
      	 let vl3 = document.querySelector(EL);
      	 let opov_3_block = document.querySelector('.opoveshenie_block');
      	 let opov_3_name = vl3.parentElement.children[0].textContent;
      	 let REPL_ELEM_3 = document.querySelector(REPL_elem_3);
      	 let DOWN_ELEM_3 = document.querySelector(Down_elem_3);

      	 if(vl3.children[1].paused) {
      	 	vl3.children[1].play();
            
            opov_3_block.children[0].children[0].textContent = `${opov_3_name} - играет`;

            REPL_ELEM_3.classList.add('sh8');
            DOWN_ELEM_3.classList.add('d_first_anim3');

      	    setTimeout(() => {
               REPL_ELEM_3.classList.remove('sh7');
               DOWN_ELEM_3.classList.remove('d_first_move3');
               REPL_ELEM_3.classList.remove('sh8');
               DOWN_ELEM_3.classList.remove('d_first_anim3');
      	    }, 1100);

            opov_3_block.classList.add('show_n_block_anim');

            setTimeout(() => {
               opov_3_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_3_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_3_block.classList.add('hide_block');  
               opov_3_block.classList.remove('show_n_block_anim');
               opov_3_block.classList.remove('show_n_block'); 
               opov_3_block.classList.remove('fokus');
               opov_3_block.classList.remove('hide_block');
            }, 4910);
      	 } else {
      	    vl3.children[1].pause();

      	    opov_3_block.classList.add("show_n_block_anim");
            
      	    opov_3_block.children[0].children[0].textContent = `${opov_3_name} - стоит на паузе`;

      	    REPL_ELEM_3.classList.add('sh8');
      	    DOWN_ELEM_3.classList.add('d_first_anim3');

      	    setTimeout(() => {
               REPL_ELEM_3.classList.remove('sh7');
               DOWN_ELEM_3.classList.remove('d_first_move3');
               REPL_ELEM_3.classList.remove('sh8');
               DOWN_ELEM_3.classList.remove('d_first_anim3');
      	    }, 1100);

      	    setTimeout(() => {
               opov_3_block.classList.add('show_n_block'); 
      	    }, 710);

      	    setTimeout(() => {
               opov_3_block.classList.add('fokus');
      	    }, 3710);

      	    setTimeout(() => {
               opov_3_block.classList.add("hide_block");
               opov_3_block.classList.remove('fokus');
               opov_3_block.classList.remove('show_n_block_anim');
               opov_3_block.classList.remove('show_n_block');
               opov_3_block.classList.remove('hide_block');
      	    }, 4910);  
      	 }
      	},

      	Vol3(EL2, lvl1, REPL_ELEM_2, DOWN_ELEM) {
      	let vl3 = document.querySelector(EL2);
      	let Lvl1_3 = document.querySelector(lvl1);
      	let opov_3_block = document.querySelector('.opoveshenie_block');
      	let opov_3_name = vl3.parentElement.children[0].textContent;
      	let REPL_elem_2 = document.querySelector(REPL_ELEM_2);
      	let DOWN_elem_2 = document.querySelector(DOWN_ELEM);

      	if(vl3.children[1].volume === 1) {
      		vl3.children[1].volume = 0;

      		Lvl1_3.children[3].style.background = "white";
      	    Lvl1_3.children[2].style.background = "white";
      	    Lvl1_3.children[1].style.background = "white";
      	    Lvl1_3.children[0].style.background = "white";
            
            opov_3_block.classList.add('show_n_block_anim');
            
            opov_3_block.children[0].children[0].textContent = `Громкость ${opov_3_name} - 0%`;

            REPL_elem_2.classList.add('sh8');
            DOWN_elem_2.classList.add('d_first_anim3');

      	    setTimeout(() => {
               REPL_elem_2.classList.remove('sh7');
               DOWN_elem_2.classList.remove('d_first_move3');
               REPL_elem_2.classList.remove('sh8');
               DOWN_elem_2.classList.remove('d_first_anim3');
      	    }, 1100);

            setTimeout(() => {
               opov_3_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_3_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_3_block.classList.add('hide_block');  
               opov_3_block.classList.remove('show_n_block_anim');
               opov_3_block.classList.remove('show_n_block'); 
               opov_3_block.classList.remove('fokus');
               opov_3_block.classList.remove('hide_block');
            }, 4910);
      	} else {
      		vl3.children[1].volume = 1;

      		Lvl1_3.children[3].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1_3.children[2].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1_3.children[1].style.background = "rgba(51, 204, 0, .8)";
      	    Lvl1_3.children[0].style.background = "rgba(51, 204, 0, .8)";

            opov_3_block.classList.add('show_n_block_anim');
            
            opov_3_block.children[0].children[0].textContent = `Громкость ${opov_3_name} - 100%`;
            opov_3_block_children_2.src = '../assets/img2/Uncharted4_button.png';

            REPL_ELEM_2.classList.add('sh8');

      	    setTimeout(() => {
               REPL_elem_2.classList.remove('sh7');
               REPL_elem_2.classList.remove('sh8');
      	    }, 1100);

            setTimeout(() => {
               opov_3_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_3_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_3_block.classList.add('hide_block');  
               opov_3_block.classList.remove('show_n_block_anim');
               opov_3_block.classList.remove('show_n_block'); 
               opov_3_block.classList.remove('fokus');
               opov_3_block.classList.remove('hide_block');
            }, 4910);
      	}
      },

               /* Download file function() :) */
      Download3(d_button3, d_name3, d_icon3) {
      	if(confirm('Вы правда хотите скачать этот файл?')) {
      	 let down_button3 = document.querySelector(d_button3);
      	 let down_button_audio_address3 = down_button3.parentElement.children[5].children[1].getAttribute('src');
      	 let ICON_D3 = document.querySelector(d_icon3);
         let link3 = document.createElement('a');
         let opov_3_block = document.querySelector('.opoveshenie_block');

         link3.setAttribute('href', `${down_button_audio_address3}`);
         link3.setAttribute('download', `${d_name3}.mp3`);
         link3.click();
         return true;

         ICON_D3.style.color = 'gold';
         down_button3.classList.add('.d_first_anim3');

         setTimeout(() => {
         	down_button3.classList.add('.d_first_move3');
            ICON_D3.style.color = 'white';
            down_button3.classList.remove('.d_first_anim3');
         }, 1100);

         opov_3_block.children[0].children[0].textContent = `${d_name3} поставлен на скачивание`;

         setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
         }, 710); 

         setTimeout(() => {
            opov_3_block.classList.add('fokus');
         }, 3710);

         setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
         }, 4910);
        } 
      }, 

      Over3(EL3) {
      	  let vl3 = document.querySelector(EL3);
          vl3.classList.add('Sh2');
      },

      Ov3(EL4) {
      	  let vl4 = document.querySelector(EL4);
      	  vl4.classList.remove('Sh2');
      },

      C1_3(EL5, Volm1, REPL_elem_3, DOWN_elem_3) {
      	  let vl5 = document.querySelector(EL5);
          let vol1 = document.querySelector(Volm1);
          let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = vl5.parentElement.children[0].textContent;
      	  let REPL_ELEM_3 = document.querySelector(REPL_elem_3);
      	  let DOWN_ELEM_3 = document.querySelector(DOWN_elem_3);

      	  vl5.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl5.children[1].style.background = "white";
      	  vl5.children[2].style.background = "white";
      	  vl5.children[3].style.background = "white";

      	  vol1.volume = 0.25;

      	  opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `Громкость ${opov_3_name} - 25%`;

          REPL_ELEM_3.classList.add('sh8');
          DOWN_ELEM_3.classList.add('d_first_anim3');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('sh7');
            DOWN_ELEM_3.classList.remove('d_first_move3');
            REPL_ELEM_3.classList.remove('sh8');
            DOWN_ELEM_3.classList.remove('d_first_anim3');
      	  }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },

      C2_3(EL6, Volm2, REPL_elem_4, DOWN_elem_4) {
          let vl6 = document.querySelector(EL6);
          let vol2 = document.querySelector(Volm2);
          let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = vl6.parentElement.children[0].textContent;
      	  let REPL_ELEM_4 = document.querySelector(REPL_elem_4);
      	  let DOWN_ELEM_4 = document.querySelector(DOWN_elem_4);

      	  vl6.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[2].style.background = "white";
      	  vl6.children[3].style.background = "white";

          vol2.volume = 0.55;

          opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `Громкость ${opov_3_name} - 55%`;

           REPL_ELEM_4.classList.add('sh8');
           DOWN_ELEM_4.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('sh7');
            DOWN_ELEM_4.classList.remove('d_first_move3');
            REPL_ELEM_4.classList.remove('sh8');
            DOWN_ELEM_4.classList.remove('d_first_anim3');
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },

      C3_3(EL7, Volm3, REPL_elem_5, DOWN_elem_5) {
          let vl7 = document.querySelector(EL7);
          let vol3 = document.querySelector(Volm3);
          let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = vl7.parentElement.children[0].textContent;
      	  let REPL_ELEM_5 = document.querySelector(REPL_elem_5);
      	  let DOWN_ELEM_5 = document.querySelector(DOWN_elem_5);
          
      	  vl7.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[3].style.background = "white";

      	  vol3.volume = 0.85;

      	  opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `Громкость ${opov_3_name} - 85%`;

           REPL_ELEM_5.classList.add('sh8');
           DOWN_ELEM_5.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('sh7');
            DOWN_ELEM_5.classList.remove('d_first_move3');
            REPL_ELEM_5.classList.remove('sh8');
            DOWN_ELEM_5.classList.remove('d_first_anim3');
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },


      C4_3(EL8, Volm4, REPL_elem_6, DOWN_elem_6) {
          let vl8 = document.querySelector(EL8);
          let vol4 = document.querySelector(Volm4);
          let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = vl8.parentElement.children[0].textContent;
      	  let REPL_ELEM_6 = document.querySelector(REPL_elem_6);
      	  let DOWN_ELEM_6 = document.querySelector(DOWN_elem_6);

      	  vl8.children[3].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[0].style.background = "rgba(51, 204, 0, .8)";

      	  vol4.volume = 1;
          
      	  opov_3_block.classList.add('show_n_block_anim');
          
          opov_3_block.children[0].children[0].textContent = `Громкость ${opov_3_name} - 100%`;

          REPL_ELEM_6.classList.add('sh8');
          DOWN_ELEM_6.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('sh7');
            DOWN_ELEM_6.classList.remove('d_first_move3');
            REPL_ELEM_6.classList.remove('sh8');
            DOWN_ELEM_6.classList.remove('d_first_anim3');
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },

      Update3(volm5, time_b1, prog) {
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

      Prev3(AUDIO_1, AUDIO_2, REPLAY_1, REP_icon_1, DOWNLOAD_one) {
      	 let aud_1 = document.querySelector(AUDIO_1);
      	 let aud_2 = document.querySelector(AUDIO_2);
      	 let REPL_1 = document.querySelector(REPLAY_1);
      	 let REPL_icon_1 = document.querySelector(REP_icon_1);
         //let w_height = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
         let opov_3_block = document.querySelector('.opoveshenie_block');
         let opov_3_name = aud_1.parentElement.parentElement.children[0].textContent;
         let opov_3_3_name = aud_2.parentElement.parentElement.children[0].textContent; 
         let DOWN_one = document.querySelector(DOWNLOAD_one);

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

         REPL_1.classList.add('sh8');
         DOWN_one.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_1.classList.remove('sh7');
            DOWN_one.classList.remove('d_first_move3');
            REPL_1.classList.remove('sh8');
            DOWN_one.classList.remove('d_first_anim3');
      	 }, 1100);

          opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `${opov_3_3_name} - играет, ${opov_3_name} - на паузе`;

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

      Next3(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_two) {
      	 let aud_3 = document.querySelector(AUDIO_3);
      	 let aud_4 = document.querySelector(AUDIO_4);
      	 let REPL_2 = document.querySelector(REPLAY_2);
      	 let REPL_icon_2 = document.querySelector(Rep_icon_2);
         //let w2_height = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
         let opov_3_block = document.querySelector('.opoveshenie_block');
         let opov_3_name = aud_3.parentElement.parentElement.children[0].textContent;  //Fuck..... Asshole code! !!!!!
         let opov_3_3_name = aud_4.parentElement.parentElement.children[0].textContent;
         let DOWN_two = document.querySelector(DOWNLOAD_two);

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

         REPL_2.classList.add('sh8');
         DOWN_two.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_2.classList.remove('sh7');
            DOWN_two.classList.remove('d_first_move3');
            REPL_2.classList.remove('sh8');
            DOWN_two.classList.remove('d_first_anim3');
      	 }, 1100);

         opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `${opov_3_3_name} - играет, ${opov_3_name} - на паузе`;

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

      Perek3(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time3(t_block1) {
          let time_block = document.querySelector(t_block1);
      	  time_block.classList.add('T_aud_2');
      },

      Time_out3(t_block2) {
      	  let time_block = document.querySelector(t_block2);
      	  time_block.classList.remove('T_aud_2');
      },

      Run_block3(event, M_Pole, Aud3, t_block4) {
      	  let M_pole = document.querySelector(M_Pole);
      	  let auD3 = document.querySelector(Aud3);
      	  let T_b = document.querySelector(t_block4);

      	  //let move2 = event.offsetX / M_pole.offsetWidth * auD2.duration * 1.55;
      	  let T_objee2 = event.offsetX / M_pole.offsetWidth * auD3.duration;
      	  let MINS = Math.floor(T_objee2 / 60);
      	  let SEC = Math.floor(T_objee2 - MINS * 60);

          T_b.style.transform = `translateX(${T_objee2}px)`; //Передвижение этой штуки

          T_b.children[0].innerHTML = `0${MINS} : 0${SEC}`;

          if(SEC > 9) T_b.children[0].innerHTML = `0${MINS} : ${SEC}`; 

          //Когда передается event, то в функции лучше в 90% случаев указывать $event... Мда... Vue.js блин
      },
          
      show_repeat3(N_REP, D_ONWLOAD) {
          let nrep = document.querySelector(N_REP);
          let down = document.querySelector(D_ONWLOAD);

          nrep.classList.add('sh7');
          down.classList.add('d_first_move3');
      },

      hide_repeat3(REP2) {
      	  let replay2 = document.querySelector(REP2);
      	  replay2.classList.add('sh8');

      	  setTimeout(() => {
             replay2.classList.remove('sh7');
             replay2.classList.remove('sh8');
      	  }, 1100);
      },

       down_hide3(dow3) {
         let d3 = document.querySelector(dow3);

         d3.classList.add('d_first_anim3');

         setTimeout(() => {
            d3.classList.remove('d_first_move3');
            d3.classList.remove('d_first_anim3');
         }, 1100);
      },

      Replay3(AUD4, Icon1) {
      	  let aud2 = document.querySelector(AUD4);
      	  let icon2 = document.querySelector(Icon1);
      	  let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = aud2.parentElement.parentElement.children[0].textContent;

          if(aud2.loop === false) {
      	    aud2.loop = true;
      	    icon2.style.color = '#FFE70B';

      	    opov_3_block.classList.add('show_n_block_anim');
            
            opov_3_block.children[0].children[0].textContent = `${opov_3_name} поставлен на повторное проигрывание`;

            setTimeout(() => {
               opov_3_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_3_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_3_block.classList.add('hide_block');  
               opov_3_block.classList.remove('show_n_block_anim');
               opov_3_block.classList.remove('show_n_block'); 
               opov_3_block.classList.remove('fokus');
               opov_3_block.classList.remove('hide_block');
            }, 4910);
          }

          else {
      	  	aud2.loop = false;
            icon2.style.color = 'white';

            opov_3_block.classList.add('show_n_block_anim');
            
            opov_3_block.children[0].children[0].textContent = `${opov_3_name} снят с повторного проигрывание`;

            setTimeout(() => {
               opov_3_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_3_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_3_block.classList.add('hide_block');  
               opov_3_block.classList.remove('show_n_block_anim');
               opov_3_block.classList.remove('show_n_block'); 
               opov_3_block.classList.remove('fokus');
               opov_3_block.classList.remove('hide_block');
            }, 4910);
      	  }
      },

      //Auto-pl function right here

      S3(REP3) {
      	  let rep = document.querySelector(REP3);
      	  rep.classList.add('sh7');
      },

       D3(d_3) {
          let down_3 = document.querySelector(d_3);
          down_3.classList.add('d_first_move3');  
      },

      Show_speed3(SP1) {
      	  let speed_block = document.querySelector(SP1); //.Speed_block
      	  speed_block.classList.toggle('tgl_3');
      },

      First_speed_3(first, a, ch_one, REPL_elem_7, DOWN_elem_seven) {
      	  let first_speed = document.querySelector(first); //x_25
      	  let first_a = document.querySelector(a);
      	  let choice_one = document.querySelector(ch_one); //Идея с переменными из data не сработала, в итоге дикий костыль :(
          choice_one.textContent = first_speed.children[0].textContent;
          let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = first_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_7 = document.querySelector(REPL_elem_7);
      	  let DOWN_ELEM_seven = document.querySelector(DOWN_elem_seven);

          first_a.playbackRate = .25;

          opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_3_name} - X.25`;

           REPL_ELEM_7.classList.add('sh8');
           DOWN_ELEM_seven.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('sh7');
            DOWN_ELEM_seven.classList.remove('d_first_move3');
            REPL_ELEM_7.classList.remove('sh8');
            DOWN_ELEM_seven.classList.remove('d_first_anim3');
            
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },

      Second_speed_3(second, a2, ch_two, REPL_elem_8, DOWN_elem_eight) {
      	  let second_speed = document.querySelector(second); //x_5
      	  let second_a = document.querySelector(a2);
      	  let choice_two = document.querySelector(ch_two);
          choice_two.textContent = second_speed.children[0].textContent;
          let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = second_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_8 = document.querySelector(REPL_elem_8);
      	  let DOWN_ELEM_eight = document.querySelector(DOWN_elem_eight);

          second_a.playbackRate = .5;

          opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_3_name} - X.5`;

           REPL_ELEM_8.classList.add('sh8');
           DOWN_ELEM_eight.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('sh7');
            DOWN_ELEM_eight.classList.remove('d_first_move3');
            REPL_ELEM_8.classList.remove('sh8');
            DOWN_ELEM_eight.classList.remove('d_first_anim3');
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },

      Third_speed_3(third, a3, ch_three, REPL_elem_9, DOWN_elem_nine) {
          let third_speed = document.querySelector(third); //x_1
          let third_a = document.querySelector(a3);
          let choice_three = document.querySelector(ch_three);
          choice_three.textContent = third_speed.children[0].textContent;
          let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = third_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_9 = document.querySelector(REPL_elem_9);
      	  let DOWN_ELEM_nine = document.querySelector(DOWN_elem_nine);

          third_a.playbackRate = 1;

          opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_3_name} - X1`;

          REPL_ELEM_9.classList.add('sh8');
          DOWN_ELEM_nine.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('sh7');
            DOWN_ELEM_nine.classList.remove('d_first_move3');
            REPL_ELEM_9.classList.remove('sh8');
            DOWN_ELEM_nine.classList.remove('d_first_anim3');
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },

      Fourth_speed_3(fourth, a4, ch_four, REPL_elem_10, DOWN_elem_ten) {
      	  let fourth_speed = document.querySelector(fourth); //x_1_25
      	  let fourth_a = document.querySelector(a4);
      	  let choice_four = document.querySelector(ch_four);
      	  choice_four.textContent = fourth_speed.children[0].textContent;
      	  let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = fourth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_10 = document.querySelector(REPL_elem_10);
      	  let DOWN_ELEM_ten = document.querySelector(DOWN_elem_ten);

      	  fourth_a.playbackRate = 1.25;

      	  opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_3_name} - X1.25`;

           REPL_ELEM_10.classList.add('sh8');
           DOWN_ELEM_ten.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('sh7');
            DOWN_ELEM_ten.classList.remove('d_first_move3');
            REPL_ELEM_10.classList.remove('sh8');
            DOWN_ELEM_ten.classList.remove('d_first_anim3');
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },

      Fifth_speed_3(fifth, a5, ch_five, REPL_elem_11, DOWN_elem_eleven) {
      	  let fifth_speed = document.querySelector(fifth); //x_15
      	  let fifth_a = document.querySelector(a5);
      	  let choice_five = document.querySelector(ch_five);
      	  choice_five.textContent = fifth_speed.children[0].textContent;
      	  let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = fifth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_11 = document.querySelector(REPL_elem_11);
      	  let DOWN_ELEM_eleven = document.querySelector(DOWN_elem_eleven);

      	  fifth_a.playbackRate = 1.5;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_3_name} - X1.5`;

           REPL_ELEM_11.classList.add('sh8');
           DOWN_ELEM_eleven.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('sh7');
            DOWN_ELEM_eleven.classList.remove('d_first_move3');
            REPL_ELEM_11.classList.remove('sh8');
            DOWN_ELEM_eleven.classList.remove('d_first_anim3');
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      },

      Six_speed_3(six, a6, ch_six, REPL_elem_12, DOWN_elem_twelve) {
      	  let six_speed = document.querySelector(six); //x_2
      	  let six_a = document.querySelector(a6);
      	  let choice_six = document.querySelector(ch_six);
      	  choice_six.textContent = six_speed.children[0].textContent;
      	  let opov_3_block = document.querySelector('.opoveshenie_block');
      	  let opov_3_name = six_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_12 = document.querySelector(REPL_elem_12);
      	  let DOWN_ELEM_twelve = document.querySelector(DOWN_elem_twelve);

      	  six_a.playbackRate = 2;

      	  opov_3_block.classList.add('show_n_block_anim');
            
          opov_3_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_3_name} - X2`;

           REPL_ELEM_12.classList.add('sh8');
           DOWN_ELEM_twelve.classList.add('d_first_anim3');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('sh7');
            DOWN_ELEM_twelve.classList.remove('d_first_move3');
            REPL_ELEM_12.classList.remove('sh8');
            DOWN_ELEM_twelve.classList.remove('d_first_anim3');
      	 }, 1100);

          setTimeout(() => {
            opov_3_block.classList.add('show_n_block');
          }, 710); 

          setTimeout(() => {
            opov_3_block.classList.add('fokus');
          }, 3710);

          setTimeout(() => {
            opov_3_block.classList.add('hide_block');  
            opov_3_block.classList.remove('show_n_block_anim');
            opov_3_block.classList.remove('show_n_block'); 
            opov_3_block.classList.remove('fokus');
            opov_3_block.classList.remove('hide_block');
          }, 4910);
      }
      }
	};
</script>
<style>
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	.side_screen3 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/Uncharted4_background.jpg");
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

    .side_screen3 span {
    	position: absolute;
    	left: 345px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block3 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block3 > .sound_block3 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block3 .sound_block3 .name3 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block3 .sound_block3 .te1 {
    	left: 100px;
    }

    .audio_collection_block3 .sound_block3 .te2 {
    	left: 160px;
    }

    .audio_collection_block3 .sound_block3 .te3 {
    	left: 160px;
    }

    .audio_collection_block3 .sound_block3 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block3 .sound_block3 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block3 .sound_block3 .audio_pole_m3 {
        height: 5px;
        width: 648px;
        position: absolute;
        left: 38px;
        top: 78px;
        cursor: pointer;
        background: white;
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;
    }

    .audio_collection_block3 .sound_block3 .audio_pole_m3:hover {
    	opacity: .7;
    }

    .audio_collection_block3 .sound_block3 .audio_pole_m3 .aud_p3 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	background: yellow;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block3 .sound_block3 #vol3 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block3 .sound_block3 .l_of_vol3 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block3 .sound_block3 .l_of_vol3.Sh2 {
    	display: block;
    }

    .audio_collection_block3 .sound_block3 .l_of_vol3 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block3 .sound_block3 .l_of_vol3 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);

    }

    .audio_collection_block3 .sound_block3 .l_of_vol3 .V_1 {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block3 .sound_block3 .l_of_vol3 .V_2 {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block3 .sound_block3 .l_of_vol3 .V_3 {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block3 .sound_block3 .l_of_vol3 .V_4 {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block3 .sound_block3 .prev3 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block3 .sound_block3 .prev3:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block3 .sound_block3 .play3 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block3 .sound_block3 .next3 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block3 .sound_block3 .next3:hover {
    	transform: translateX(5px);
    }

    .audio_collection_block3 .sound_block3 .start_time3 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block3 .sound_block3 .end_time3 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block3 .sound_block3 .Replay_button3 {
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

    .audio_collection_block3 .sound_block3 .Replay_button3.sh7 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block3 .sound_block3 .Replay_button3.sh8 {
    	animation: spek3 1s linear 1;
    	transform: scale(0);
    }

    @keyframes spek3 {
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

    .audio_collection_block3 .sound_block3 .Download_button3 {
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

    .audio_collection_block3 .sound_block3 .Download_button3:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block3 .sound_block3 .Download_button3.d_first_move3 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block3 .sound_block3 .Download_button3.d_first_anim3 {
    	animation: down3 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down3 {
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

    .audio_collection_block3 .sound_block3 .Time_of_audio3 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block3 .sound_block3 .Time_of_audio3 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block3 .sound_block3 .Time_of_audio3.T_aud_2 {
    	display: block;
    }

    .audio_collection_block3 .sound_block3 #speed_aud3 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block3 .sound_block3 .Speed_block3 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block3 .sound_block3 .Speed_block3.tgl_3 {
    	display: block;
    }
    
    .audio_collection_block3 .sound_block3 .Speed_block3 .contain3 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block3 .sound_block3 .Speed_block3 .contain3 .b3 {
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

    .audio_collection_block3 .sound_block3 .Speed_block3 .contain3 .b3:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block3 .sound_block3 .Speed_block3 .contain3 .b3 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block3 .sound_block3 .Speed_block3 .contain3 .b3 p:hover {
        color: black;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
    	.side_screen3 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen3 span {
    		font-size: 55px;
    		left: 290px;
    	}

    	.audio_collection_block3 > .sound_block3 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block3 .sound_block3 .audio_pole_m3 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block3 .sound_block3 .audio_pole_m3 .aud_p3 {
    		height: 9.5px;
    	}

    	.audio_collection_block3 .sound_block3 #vol3 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block3 .sound_block3 .play3 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block3 .sound_block3 .prev3 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block3 .sound_block3 .next3 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block3 .sound_block3 .name3 {
    	   left: 255px;
        }

        .audio_collection_block3 .sound_block3 .Time_of_audio3 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block3 .sound_block3 .Time_of_audio3 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block3 .sound_block3 .start_time3 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block3 .sound_block3 .end_time3 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block3 .sound_block3 #speed_aud3 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block3 .sound_block3 .Speed_block3 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block3 .sound_block3 .Speed_block3 .contain3 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block3 .sound_block3 .Speed_block3 .contain3 .b3 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block3 .sound_block3 .Speed_block3 .contain3 .b3 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block3 .sound_block3 .Replay_button3 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block3 .sound_block3 .Replay_button3.sh7 {
    	    margin-left: 850px;
        }

        .audio_collection_block3 .sound_block3 .Download_button3 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block3 .sound_block3 .l_of_vol3 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block3 .sound_block3 .text2_mobile_3 {
          left: 185px;   
        }

        .audio_collection_block3 .sound_block3 .text2_mobile_4 {
        	left: 130px;
        }

        .audio_collection_block3 .sound_block3 .text2_mobile_5 {
        	left: 185px;
        }

        .audio_collection_block3 .sound_block3 .text2_mobile_6 {
        	left: 205px;
        }

        .audio_collection_block3 .sound_block3 .text2_mobile_8 {
        	left: 315px;
        }

        .audio_collection_block3 .sound_block3 .text2_mobile_11 {
        	left: 165px;
        }

        .audio_collection_block3 .sound_block3 .text2_mobile_12 {
        	left: 160px;
        }
          
        .audio_collection_block3 .sound_block3 .text2_mobile_14 {
        	left: 215px;
        }

        .audio_collection_block3 .sound_block3 .text2_mobile_15 {
        	left: 200px;
        }
    }
</style>