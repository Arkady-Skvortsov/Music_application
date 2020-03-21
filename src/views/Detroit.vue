<template>
	<div class="side_screen4">
		<span>Detroit: become human music</span>
		<div class="audio_collection_block4">
		    <div class="sound_block4" @mouseover="show_repeat4('.repl46', '.down46')">
			   <p class="name4">#1 Connor theme</p>

			   <div class="audio_pole_m4 audio_p46_m4" @click="Perek4($event, '.aud46', '.audio_p46_m4')" @mouseover="Show_time4('.Aud_t46')" @mousemove="Run_block4($event, '.audio_p46_m4', '.aud46', '.Aud_t46')" @mouseout="Time_out4('.Aud_t46')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl46', '.l_of_v46', '.repl46', '.down46')" @mouseover="Over4('.l_of_v46')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol4 l_of_v46" @mouseover="Over4('.l_of_v46')" @mouseout="Ov4('.l_of_v46')">
			   	  <div class="L_1" @click="C1_4('.l_of_v46', '.aud46', '.repl46', '.down46')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v46', '.aud46', '.repl46', '.down46')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v46', '.aud46', '.repl46', '.down46')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v46', '.aud46', '.repl46', '.down46')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud46', '.aud60', '.repl46', '.r_icon_46', '.down46')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl46" @click="Play4('.pl46', '.repl46', '.down46')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update4('.aud46', '.st46', '.audio_p46_m4')" class="aud46" src="../sound/Detroit/Connor theme.mp3"></audio></button> 
			   <button class="next4" @click="Next4('.aud46', '.aud47', '.repl46', '.r_icon_46', '.down46')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st46">00:00</p><p class="end_time4">/08:53</p>

			   <span id="speed_aud4" class="choice_speed_46" @click="Show_speed4('.sp_block_46')">x1</span>

			   <div class="Speed_block4 sp_block_46">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_46" @click="First_speed_4('.x_first_46', '.aud46', '.choice_speed_46', '.repl46', '.down46')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_46" @click="Second_speed_4('.x_second_46', '.aud46', '.choice_speed_46', '.repl46', '.down46')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_46" @click="Third_speed_4('.x_third_46', '.aud46', '.choice_speed_46', '.repl46', '.down46')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_46" @click="Fourth_speed_4('.x_fourth_46', '.aud46', '.choice_speed_46', '.repl46', '.down46')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_46" @click="Fifth_speed_4('.x_fifth_46', '.aud46', '.choice_speed_46', '.repl46', '.down46')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_46" @click="Six_speed_4('.x_six_46', '.aud46', '.choice_speed_46', '.repl46', '.down46')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl46" @click="Replay4('.aud46', '.r_icon_46')" @mouseover="S4('.repl46')" @mouseout="hide_repeat4('.repl46')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_46" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down46" @click="Download4('.down46', 'Detroit - Connor Theme', '.d_icon_46')" @mouseout="down_hide4('.down46')">
			   	  <vue-fontawesome icon="download" class="d_icon_46" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t46">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block4" @mouseover="show_repeat4('.repl47', '.down47')">
			   <p class="name4 text3_mobile_2">#2 Hostage</p>

			   <div class="audio_pole_m4 audio_p47_m4" @click="Perek4($event, '.aud47', '.audio_p47_m4')" @mouseover="Show_time4('.Aud_t47')" @mousemove="Run_block4($event, '.audio_p47_m4', '.aud47', '.Aud_t47')" @mouseout="Time_out4('.Aud_t47')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl47', '.l_of_v47', '.repl47', '.down47')" @mouseover="Over4('.l_of_v47')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v47" @mouseover="Over4('.l_of_v47')" @mouseout="Ov4('.l_of_v47')">
			   	  <div class="L_1" @click="C1_4('.l_of_v47', '.aud47', '.repl47', '.down47')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v47', '.aud47', '.repl47', '.down47')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v47', '.aud47', '.repl47', '.down47')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v47', '.aud47', '.repl47', '.down47')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud47', '.aud46', '.repl47', '.r_icon_47', '.down47')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl47" @click="Play4('.pl47', '.repl47', '.down47')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud47" @timeupdate="Update4('.aud47', '.st47', '.audio_p47_m4')" src="../sound/Detroit/Hostage.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud47', '.aud48', '.repl47', '.r_icon_47', '.down47')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			  <p class="start_time4 st47">00:00</p><p class="end_time4">/02:51</p>

			   <span id="speed_aud4" class="choice_speed_47" @click="Show_speed4('.sp_block_47')">x1</span>

			   <div class="Speed_block4 sp_block_47">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_47" @click="First_speed_4('.x_first_47', '.aud47', '.choice_speed_47', '.repl47', '.down47')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_47" @click="Second_speed_4('.x_second_47', '.aud47', '.choice_speed_47', '.repl47', '.down47')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_47" @click="Third_speed_4('.x_third_47', '.aud47', '.choice_speed_47', '.repl47', '.down47')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_47" @click="Fourth_speed_4('.x_fourth_47', '.aud47', '.choice_speed_47', '.repl47', '.down46')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_47" @click="Fifth_speed_4('.x_fifth_47', '.aud47', '.choice_speed_47', '.repl47', '.down47')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_47" @click="Six_speed_4('.x_six_47', '.aud47', '.choice_speed_47', '.repl47', '.down47')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl47" @click="Replay4('.aud47', '.r_icon_47')" @mouseover="S4('.repl47')" @mouseout="hide_repeat4('.repl47')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_47" size="3" color="white"></vue-fontawesome>
			   </div>
               
               <!-- Download button -->
			   <div class="Download_button4 down47" @click="Download4('.down47', 'Detroit - Hostage', '.d_icon_47')" @mouseout="down_hide4('.down47')">
			   	  <vue-fontawesome icon="download" class="d_icon_47" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t47">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block4" @mouseover="show_repeat4('.repl48', '.down48')">
			   <p class="name4 text3_mobile_3">#3 Connor and Hank</p>

			   <div class="audio_pole_m4 audio_p48_m4" @click="Perek4($event, '.aud48', '.audio_p48_m4')" @mouseover="Show_time4('.Aud_t48')" @mousemove="Run_block4($event, '.audio_p48_m4', '.aud48', '.Aud_t48')" @mouseout="Time_out4('.Aud_t48')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl48', '.l_of_v48', '.repl48', '.down48')" @mouseover="Over4('.l_of_v48')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v48" @mouseover="Over4('.l_of_v48')" @mouseout="Ov4('.l_of_v48')">
			   	  <div class="L_1" @click="C1_4('.l_of_v48', '.aud48', '.repl48', '.down48')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v48', '.aud48', '.repl48', '.down48')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v48', '.aud48', '.repl48', '.down48')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v48', '.aud48', '.repl48', '.down48')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud48', '.aud47', '.repl48', '.r_icon_48', '.down48')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl48" @click="Play4('.pl48', '.repl48', '.down48')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud48" @timeupdate="Update4('.aud48', '.st48', '.audio_p48_m4')" src="../sound/Detroit/Connor and Hank.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud48', '.aud49', '.repl48', '.r_icon_48', '.down48')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st48">00:00</p><p class="end_time4">/02:18</p>

			   <span id="speed_aud4" class="choice_speed_48" @click="Show_speed4('.sp_block_48')">x1</span>

			   <div class="Speed_block4 sp_block_48">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_48" @click="First_speed_4('.x_first_48', '.aud48', '.choice_speed_48', '.repl48', '.down48')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_48" @click="Second_speed_4('.x_second_48', '.aud48', '.choice_speed_48', '.repl48', '.down48')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_48" @click="Third_speed_4('.x_third_48', '.aud48', '.choice_speed_48', '.repl48', '.down48')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_48" @click="Fourth_speed_4('.x_fourth_48', '.aud48', '.choice_speed_48', '.repl48', '.down48')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_48" @click="Fifth_speed_4('.x_fifth_48', '.aud48', '.choice_speed_48', '.repl48', '.down48')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_48" @click="Six_speed_4('.x_six_48', '.aud48', '.choice_speed_48', '.repl48', '.down48')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl48" @click="Replay4('.aud48', '.r_icon_48')" @mouseover="S4('.repl48')" @mouseout="hide_repeat4('.repl48')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_48" size="3" color="white"></vue-fontawesome>
			   </div>

               <div class="Download_button4 down48" @click="Download4('.down48', 'Detroit - Connor and Hank', '.d_icon_48')" @mouseout="down_hide4('.down48')">
			   	  <vue-fontawesome icon="download" class="d_icon_48" size="3" color="white"></vue-fontawesome>
			   </div>
                
			    <div class="Time_of_audio4 Aud_t48">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl49', '.down49')">
			   <p class="name4">#4 I trust you</p>

			   <div class="audio_pole_m4 audio_p49_m4" @click="Perek4($event, '.aud49', '.audio_p49_m4')" @mouseover="Show_time4('.Aud_t49')" @mousemove="Run_block4($event, '.audio_p49_m4', '.aud49', '.Aud_t49')" @mouseout="Time_out4('.Aud_t49')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl49', '.l_of_v49', '.repl49', '.down49')" @mouseover="Over4('.l_of_v49')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v49" @mouseover="Over4('.l_of_v49')" @mouseout="Ov4('.l_of_v49')">
			   	  <div class="L_1" @click="C1_4('.l_of_v49', '.aud49', '.repl49', '.down49')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v49', '.aud49', '.repl49', '.down49')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v49', '.aud49', '.repl49', '.down49')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v49', '.aud49', '.repl49', '.down49')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud49', '.aud48', '.repl49', '.r_icon_49', '.down49')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl49" @click="Play4('.pl49', '.repl49', '.down49')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update4('.aud49', '.st49', '.audio_p49_m4')" class="aud49" src="../sound/Detroit/I trust you.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud49', '.aud50', '.repl49', '.r_icon_49', '.down49')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time4 st49">00:00</p><p class="end_time4">/01:31</p>

			   <span id="speed_aud4" class="choice_speed_49" @click="Show_speed4('.sp_block_49')">x1</span>

			   <div class="Speed_block4 sp_block_49">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_49" @click="First_speed_4('.x_first_49', '.aud49', '.choice_speed_49', '.repl49', '.down49')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_49" @click="Second_speed_4('.x_second_49', '.aud49', '.choice_speed_49', '.repl49', '.down49')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_49" @click="Third_speed_4('.x_third_49', '.aud49', '.choice_speed_49', '.repl49', '.down49')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_49" @click="Fourth_speed_4('.x_fourth_49', '.aud49', '.choice_speed_49', '.repl49', '.down49')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_49" @click="Fifth_speed_4('.x_fifth_49', '.aud49', '.choice_speed_49', '.repl49', '.down49')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_49" @click="Six_speed_4('.x_six_49', '.aud49', '.choice_speed_49', '.repl49', '.down49')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl49" @click="Replay4('.aud49', '.r_icon_49')" @mouseover="S4('.repl49')" @mouseout="hide_repeat4('.repl49')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_49" size="3" color="white"></vue-fontawesome>
			   </div>

               <div class="Download_button4 down49" @click="Download4('.down49', 'Detroit - I trust you', '.d_icon_49')" @mouseout="down_hide4('.down49')">
			   	  <vue-fontawesome icon="download" class="d_icon_49" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t49">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl50', '.down50')">
			   <p class="name4 text3_mobile_5">#5 Deviant</p>

			   <div class="audio_pole_m4 audio_p50_m4" @click="Perek4($event, '.aud50', '.audio_p50_m4')" @mouseover="Show_time4('.Aud_t50')" @mousemove="Run_block4($event, '.audio_p50_m4', '.aud50', '.Aud_t50')" @mouseout="Time_out4('.Aud_t50')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl50', '.l_of_v50', '.repl50', '.down50')" @mouseover="Over4('.l_of_v50')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v50" @mouseover="Over4('.l_of_v50')" @mouseout="Ov4('.l_of_v50')">
			   	  <div class="L_1" @click="C1_4('.l_of_v50', '.aud50', '.repl50', '.down50')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v50', '.aud50', '.repl50', '.down50')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v50', '.aud50', '.repl50', '.down50')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v50', '.aud50', '.repl50', '.down50')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud50', '.aud49', '.repl50', '.r_icon_50', '.down50')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl50" @click="Play4('.pl50', '.repl50', '.down50')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud50" @timeupdate="Update4('.aud50', '.st50', '.audio_p50_m4')" src="../sound/Detroit/Deviant.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud50', '.aud51', '.repl50', '.r_icon_50', '.down50')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st50">00:00</p><p class="end_time4">/04:24</p>

			   <span id="speed_aud4" class="choice_speed_50" @click="Show_speed4('.sp_block_50')">x1</span>

			   <div class="Speed_block4 sp_block_50">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_50" @click="First_speed_4('.x_first_50', '.aud50', '.choice_speed_50', '.repl50', '.down50')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_50" @click="Second_speed_4('.x_second_50', '.aud50', '.choice_speed_50', '.repl50', '.down50')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_50" @click="Third_speed_4('.x_third_50', '.aud50', '.choice_speed_50', '.repl50', '.down50')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_50" @click="Fourth_speed_4('.x_fourth_50', '.aud50', '.choice_speed_50', '.repl50', '.down50')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_50" @click="Fifth_speed_4('.x_fifth_50', '.aud50', '.choice_speed_50', '.repl50', '.down50')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_50" @click="Six_speed_4('.x_six_50', '.aud50', '.choice_speed_50', '.repl50', '.down50')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl50" @click="Replay4('.a50', '.r_icon_50')" @mouseover="S4('.repl50')" @mouseout="hide_repeat4('.repl50')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_50" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down50" @click="Download4('.down50', 'Detroit - Deviant', '.d_icon_50')" @mouseout="down_hide4('.down50')">
			   	  <vue-fontawesome icon="download" class="d_icon_50" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio4 Aud_t50">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl51', '.down51')">
			   <p class="name4 text3_mobile_6">#6 Cara main theme</p>

			   <div class="audio_pole_m4 audio_p51_m4" @click="Perek4($event, '.aud51', '.audio_p51_m4')" @mouseover="Show_time4('.Aud_t51')" @mousemove="Run_block4($event, '.audio_p51_m4', '.aud51', '.Aud_t51')" @mouseout="Time_out4('.Aud_t51')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl51', '.l_of_v51', '.repl51', '.down51')" @mouseover="Over4('.l_of_v51')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v51" @mouseover="Over4('.l_of_v51')" @mouseout="Ov4('.l_of_v51')">
			   	  <div class="L_1" @click="C1_4('.l_of_v51', '.aud51', '.repl51', '.down51')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v51', '.aud51', '.repl51', '.down51')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v51', '.aud51', '.repl51', '.down51')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v51', '.aud51', '.repl51', '.down51')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud51', '.aud50', '.repl51', '.r_icon_51', '.down51')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl50" @click="Play4('.pl51', '.repl51', '.down51')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud51" @timeupdate="Update4('.aud51', '.st51', '.audio_p51_m4')" src="../sound/Detroit/Cara main theme.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud51', '.aud52', '.repl51', '.r_icon_51', '.down51')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st51">00:00</p><p class="end_time4">/06:54</p>

			   <span id="speed_aud4" class="choice_speed_51" @click="Show_speed4('.sp_block_51')">x1</span>

			   <div class="Speed_block4 sp_block_51">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_51" @click="First_speed_4('.x_first_51', '.aud51', '.choice_speed_51', '.repl51', '.down51')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_51" @click="Second_speed_4('.x_second_51', '.aud51', '.choice_speed_51', '.repl51', '.down51')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_51" @click="Third_speed_4('.x_third_51', '.aud51', '.choice_speed_51', '.repl51', '.down49')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_51" @click="Fourth_speed_4('.x_fourth_51', '.aud51', '.choice_speed_51', '.repl51', '.down51')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_51" @click="Fifth_speed_4('.x_fifth_49', '.aud49', '.choice_speed_49', '.repl49', '.down51')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_51" @click="Six_speed_4('.x_six_51', '.aud51', '.choice_speed_51', '.repl51', '.down51')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl51" @click="Replay4('.aud51', '.r_icon_51')" @mouseover="S4('.repl51')" @mouseout="hide_repeat4('.repl51')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_51" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down51" @click="Download4('.down51', 'Detroit - Cara main theme', '.d_icon_51')" @mouseout="down_hide4('.down51')">
			   	  <vue-fontawesome icon="download" class="d_icon_51" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio4 Aud_t51">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl52', '.down52')">
			   <p class="name4">#7 Confrontation</p>

			   <div class="audio_pole_m4 audio_p52_m4" @click="Perek4($event, '.aud52', '.audio_p52_m4')" @mouseover="Show_time4('.Aud_t52')" @mousemove="Run_block4($event, '.audio_p52_m4', '.aud52', '.Aud_t52')" @mouseout="Time_out4('.Aud_t52')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl52', '.l_of_v52', '.repl52', '.down52')" @mouseover="Over4('.l_of_v52')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v52" @mouseover="Over4('.l_of_v52')" @mouseout="Ov4('.l_of_v52')">
			   	  <div class="L_1" @click="C1_4('.l_of_v52', '.aud52', '.repl52', '.down52')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v52', '.aud52', '.repl52', '.down52')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v52', '.aud52', '.repl52', '.down52')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v52', '.aud52', '.repl52', '.down52')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud52', '.aud51', '.repl52', '.r_icon_52', '.down52')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl52" @click="Play4('.pl52', '.repl52', '.down52')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud52" @timeupdate="Update4('.aud52', '.st52', '.audio_p52_m4')" src="../sound/Detroit/Confrontation.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud52', '.aud53', '.repl52', '.r_icon_52', '.down52')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st52">00:00</p><p class="end_time4">/02:48</p>

			   <span id="speed_aud4" class="choice_speed_52" @click="Show_speed4('.sp_block_52')">x1</span>

			   <div class="Speed_block4 sp_block_52">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_52" @click="First_speed_4('.x_first_52', '.aud52', '.choice_speed_52', '.repl52', '.down52')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_52" @click="Second_speed_4('.x_second_52', '.aud52', '.choice_speed_52', '.repl52', '.down52')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_52" @click="Third_speed_4('.x_third_52', '.aud52', '.choice_speed_52', '.repl52', '.down52')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_52" @click="Fourth_speed_4('.x_fourth_52', '.aud52', '.choice_speed_52', '.repl52', '.down52')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_52" @click="Fifth_speed_4('.x_fifth_52', '.aud52', '.choice_speed_52', '.repl52', '.down52')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_52" @click="Six_speed_4('.x_six_52', '.aud52', '.choice_speed_52', '.repl52', '.down52')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl52" @click="Replay4('.aud52', '.r_icon_52')" @mouseover="S4('.repl52')" @mouseout="hide_repeat4('.repl52')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_52" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down52" @click="Download4('.down52', 'Detroit - Confrontation', '.d_icon_52')" @mouseout="down_hide4('.down52')">
			   	  <vue-fontawesome icon="download" class="d_icon_52" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t52">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl53', '.down53')">
			   <p class="name4">#8 Run with me</p>

			   <div class="audio_pole_m4 audio_p53_m4" @click="Perek4($event, '.aud53', '.audio_p53_m4')" @mouseover="Show_time4('.Aud_t53')" @mousemove="Run_block4($event, '.audio_p53_m4', '.aud53', '.Aud_t53')" @mouseout="Time_out4('.Aud_t53')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl53', '.l_of_v53', '.repl53', '.down53')" @mouseover="Over4('.l_of_v53')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v53" @mouseover="Over4('.l_of_v53')" @mouseout="Ov4('.l_of_v53')">
			   	  <div class="L_1" @click="C1_4('.l_of_v53', '.aud53', '.repl53', '.down53')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v53', '.aud53', '.repl53', '.down53')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v53', '.aud53', '.repl53', '.down53')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v53', '.aud53', '.repl53', '.down53')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud53', '.aud52', '.repl53', '.r_icon_53', '.down53')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl53" @click="Play4('.pl53', '.repl53', '.down53')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud53" @timeupdate="Update4('.aud53', '.st53', '.audio_p53_m4')" src="../sound/Detroit/Run with me.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud53', '.aud54', '.repl53', '.r_icon_53', '.down53')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st53">00:00</p><p class="end_time4">/02:42</p>

			   <span id="speed_aud4" class="choice_speed_53" @click="Show_speed4('.sp_block_53')">x1</span>

			   <div class="Speed_block4 sp_block_53">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_53" @click="First_speed_4('.x_first_53', '.aud53', '.choice_speed_53', '.repl53', '.down53')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_53" @click="Second_speed_4('.x_second_53', '.aud53', '.choice_speed_53', '.repl53', '.down53')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_53" @click="Third_speed_4('.x_third_53', '.aud53', '.choice_speed_53', '.repl53', '.down53')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_53" @click="Fourth_speed_4('.x_fourth_53', '.aud53', '.choice_speed_53', '.repl53', '.down53')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_53" @click="Fifth_speed_4('.x_first_53', '.aud53', '.choice_speed_53', '.repl53', '.down53')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_53" @click="Six_speed_4('.x_first_53', '.aud53', '.choice_speed_53', '.repl53', '.down53')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl53" @click="Replay4('.aud53', '.r_icon_53')" @mouseover="S4('.repl53')" @mouseout="hide_repeat4('.repl53')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_53" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down53" @click="Download4('.down53', 'Detroit - Run with me', '.d_icon_53')" @mouseout="down_hide4('.down53')">
			   	  <vue-fontawesome icon="download" class="d_icon_53" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t53">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl54', '.down54')">
			   <p class="name4 text3_mobile_9">#9 What is mother</p>

			   <div class="audio_pole_m4 audio_p54_m4" @click="Perek4($event, '.aud54', '.audio_p54_m4')" @mouseover="Show_time4('.Aud_t54')" @mousemove="Run_block4($event, '.audio_p54_m4', '.aud54', '.Aud_t54')" @mouseout="Time_out4('.Aud_t54')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl54', '.l_of_v54', '.repl54', '.down54')" @mouseover="Over4('.l_of_v54')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v54" @mouseover="Over4('.l_of_v54')" @mouseout="Ov4('.l_of_v54')">
			   	  <div class="L_1" @click="C1_4('.l_of_v54', '.aud54', '.repl54', '.down54')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v54', '.aud54', '.repl54', '.down54')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v54', '.aud54', '.repl54', '.down54')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v54', '.aud54', '.repl54', '.down54')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud54', '.aud53', '.repl54', '.r_icon_54', '.down54')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl54" @click="Play4('.pl54', '.repl54', '.down54')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud54" @timeupdate="Update4('.aud54', '.st54', '.audio_p54_m4')" src="../sound/Detroit/What is mother.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud54', '.aud55', '.repl54', '.r_icon_54', '.down54')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st54">00:00</p><p class="end_time4">/04:04</p>

			   <span id="speed_aud4" class="choice_speed_54" @click="Show_speed4('.sp_block_54')">x1</span>

			   <div class="Speed_block4 sp_block_54">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_54" @click="First_speed_4('.x_first_54', '.aud54', '.choice_speed_54', '.repl54', '.down54')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_54" @click="Second_speed_4('.x_second_54', '.aud54', '.choice_speed_54', '.repl54', '.down54')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_54" @click="Third_speed_4('.x_third_54', '.aud54', '.choice_speed_54', '.repl54', '.down54')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_54" @click="Fourth_speed_4('.x_fourth_54', '.aud54', '.choice_speed_54', '.repl54', '.down54')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_54" @click="Fifth_speed_4('.x_fifth_54', '.aud54', '.choice_speed_54', '.repl54', '.down54')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_54" @click="Six_speed_4('.x_six_54', '.aud54', '.choice_speed_54', '.repl54', '.down54')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl54"  @click="Replay4('.aud54', '.r_icon_54')" @mouseover="S4('.repl54')" @mouseout="hide_repeat4('.repl54')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_54" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down54" @click="Download4('.down54', 'Detroit - What is mother', '.d_icon_54')" @mouseout="down_hide4('.down54')">
			   	  <vue-fontawesome icon="download" class="d_icon_54" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t54">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl55', '.down55')">
			   <p class="name4 text3_mobile_10">#10 Lost</p>

			   <div class="audio_pole_m4 audio_p55_m4" @click="Perek4($event, '.aud55', '.audio_p55_m4')" @mouseover="Show_time4('.Aud_t55')" @mousemove="Run_block4($event, '.audio_p55_m4', '.aud55', '.Aud_t55')" @mouseout="Time_out4('.Aud_t55')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl55', '.l_of_v55', '.repl55', '.down55')" @mouseover="Over4('.l_of_v55')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v55" @mouseover="Over4('.l_of_v55')" @mouseout="Ov4('.l_of_v55')">
			   	  <div class="L_1" @click="C1_4('.l_of_v55', '.aud55', '.repl55', '.down55')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v55', '.aud55', '.repl55', '.down55')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v55', '.aud55', '.repl55', '.down55')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v55', '.aud55', '.repl55', '.down55')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud55', '.aud54', '.repl55', '.r_icon_55', '.down55')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl55" @click="Play4('.pl55', '.repl55', '.down55')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud55" @timeupdate="Update4('.aud55', '.st55', '.audio_p55_m4')" src="../sound/Detroit/Lost.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud55', '.aud56', '.repl55', '.r_icon_55', '.down55')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st55">00:00</p><p class="end_time4">/01:35</p>

			   <span id="speed_aud4" class="choice_speed_55" @click="Show_speed4('.sp_block_55')">x1</span>

			   <div class="Speed_block4 sp_block_55">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_55" @click="First_speed_4('.x_first_55', '.aud55', '.choice_speed_55', '.repl55', '.down55')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_55" @click="Second_speed_4('.x_second_55', '.aud55', '.choice_speed_55', '.repl55', '.down55')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_55" @click="Third_speed_4('.x_third_55', '.aud55', '.choice_speed_55', '.repl55', '.down55')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_55" @click="Fourth_speed_4('.x_fourth_55', '.aud55', '.choice_speed_55', '.repl55', '.down55')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_55" @click="Fifth_speed_4('.x_fifth_55', '.aud55', '.choice_speed_55', '.repl55', '.down55')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_55" @click="Six_speed_4('.x_six_55', '.aud55', '.choice_speed_55', '.repl55', '.down55')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl55" @click="Replay4('.aud55', '.r_icon_55')" @mouseover="S4('.repl55')" @mouseout="hide_repeat4('.repl55')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_55" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down55" @click="Download4('.down55', 'Detroit - Lost', '.d_icon_55')" @mouseout="down_hide4('.down55')">
			   	  <vue-fontawesome icon="download" class="d_icon_55" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio4 Aud_t55">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl56', '.down56')">
			   <p class="name4 T1 text3_mobile_11">#11 Markus main theme</p>

			   <div class="audio_pole_m4 audio_p56_m4" @click="Perek4($event, '.aud56', '.audio_p56_m4')" @mouseover="Show_time4('.Aud_t56')" @mousemove="Run_block4($event, '.audio_p56_m4', '.aud56', '.Aud_t56')" @mouseout="Time_out4('.Aud_t56')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl56', '.l_of_v56', '.repl56', '.down56')" @mouseover="Over4('.l_of_v56')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v56" @mouseover="Over4('.l_of_v58')" @mouseout="Ov4('.l_of_v58')">
			   	  <div class="L_1" @click="C1_4('.l_of_v58', '.aud58', '.repl58', '.down58')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v58', '.aud58', '.repl58', '.down58')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v58', '.aud58', '.repl58', '.down58')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v58', '.aud58', '.repl58', '.down58')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud56', '.aud55', '.repl56', '.r_icon_56', '.down56')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl56" @click="Play4('.pl56', '.repl56', '.down56')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud56" @timeupdate="Update4('.aud56', '.st56', '.audio_p56_m4')" src="../sound/Detroit/Markus main theme.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud56', '.aud57', '.repl56', '.r_icon_56', '.down56')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			  <p class="start_time4 st56">00:00</p><p class="end_time4">/03:00</p>

			   <span id="speed_aud4" class="choice_speed_56" @click="Show_speed4('.sp_block_56')">x1</span>

			   <div class="Speed_block4 sp_block_56">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_56" @click="First_speed_4('.x_first_56', '.aud56', '.choice_speed_56', '.repl56', '.down56')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_56" @click="Second_speed_4('.x_second_56', '.aud56', '.choice_speed_56', '.repl56', '.down56')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_56" @click="Third_speed_4('.x_third_56', '.aud56', '.choice_speed_56', '.repl56', '.down56')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_56" @click="Fourth_speed_4('.x_fourth_56', '.aud56', '.choice_speed_56', '.repl56', '.down56')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_56" @click="Fifth_speed_4('.x_fifth_56', '.aud56', '.choice_speed_56', '.repl56', '.down56')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_56" @click="Six_speed_4('.x_six_56', '.aud56', '.choice_speed_56', '.repl56', '.down56')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl56" @click="Replay4('.aud56', '.r_icon_56')" @mouseover="S4('.repl56')" @mouseout="hide_repeat4('.repl56')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_56" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down56" @click="Download4('.down56', 'Detroit - Markus main theme', '.d_icon_56')" @mouseout="down_hide4('.down56')">
			   	  <vue-fontawesome icon="download" class="d_icon_56" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio4 Aud_t56">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl57', '.down57')">
			   <p class="name4">#12 Cyberlife</p>

			   <div class="audio_pole_m4 audio_p57_m4"  @click="Perek4($event, '.aud57', '.audio_p57_m4')" @mouseover="Show_time4('.Aud_t57')" @mousemove="Run_block4($event, '.audio_p57_m4', '.aud57', '.Aud_t57')" @mouseout="Time_out4('.Aud_t57')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl57', '.l_of_v57', '.repl57', '.down57')" @mouseover="Over4('.l_of_v57')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v57" @mouseover="Over4('.l_of_v57')" @mouseout="Ov4('.l_of_v57')">
			   	  <div class="L_1" @click="C1_4('.l_of_v57', '.aud57', '.repl57', '.down57')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v57', '.aud57', '.repl57', '.down57')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v57', '.aud57', '.repl57', '.down57')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v57', '.aud57', '.repl57', '.down57')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud57', '.aud56', '.repl57', '.r_icon_57', '.down57')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl57" @click="Play4('.pl57', '.repl57', '.down57')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud57" @timeupdate="Update4('.aud57', '.st57', '.audio_p57_m4')" src="../sound/Detroit/Cyberlife.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud57', '.aud58', '.repl57', '.r_icon_57', '.down57')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st57">00:00</p><p class="end_time4">/01:53</p>

			   <span id="speed_aud4" class="choice_speed_57" @click="Show_speed4('.sp_block_57')">x1</span>

			   <div class="Speed_block4 sp_block_57">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_57" @click="First_speed_4('.x_first_57', '.aud57', '.choice_speed_57', '.repl57', '.down57')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_57" @click="Second_speed_4('.x_second_57', '.aud57', '.choice_speed_57', '.repl57', '.down57')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_57" @click="Third_speed_4('.x_third_57', '.aud57', '.choice_speed_57', '.repl57', '.down57')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_57" @click="Fourth_speed_4('.x_foruth_57', '.aud57', '.choice_speed_57', '.repl57', '.down57')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_57" @click="Fifth_speed_4('.x_fifth_57', '.aud57', '.choice_speed_57', '.repl57', '.down57')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_57" @click="Six_speed_4('.x_six_57', '.aud57', '.choice_speed_57', '.repl57', '.down57')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl57" @click="Replay4('.aud57', '.r_icon_57')" @mouseover="S4('.repl57')" @mouseout="hide_repeat4('.repl57')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_57" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down57" @click="Download4('.down57', 'Detroit - Cyberlife', '.d_icon_57')" @mouseout="down_hide4('.down57')">
			   	  <vue-fontawesome icon="download" class="d_icon_57" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t57">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl58', '.down58')">
			   <p class="name4">#13 Find Jeriko</p>

			   <div class="audio_pole_m4 audio_p58_m4" @click="Perek4($event, '.aud58', '.audio_p58_m4')" @mouseover="Show_time4('.Aud_t58')" @mousemove="Run_block4($event, '.audio_p58_m4', '.aud58', '.Aud_t58')" @mouseout="Time_out4('.Aud_t58')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl58', '.l_of_v58', '.repl58', '.down58')" @mouseover="Over4('.l_of_v58')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol4 l_of_v58" @mouseover="Over4('.l_of_v58')" @mouseout="Ov4('.l_of_v58')">
			   	  <div class="L_1" @click="C1_4('.l_of_v58', '.aud58', '.repl58', '.down58')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v58', '.aud58', '.repl58', '.down58')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v58', '.aud58', '.repl58', '.down58')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v58', '.aud58', '.repl58', '.down58')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud58', '.aud57', '.repl58', '.r_icon_58', '.down58')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl58" @click="Play4('.pl58', '.repl58', '.down58')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud58" @timeupdate="Update4('.aud58', '.st58', '.audio_p58_m4')" src="../sound/Detroit/Find Jericho.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud58', '.aud59', '.repl58', '.r_icon_58', '.down58')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st58">00:00</p><p class="end_time4">/02:05</p>

			   <span id="speed_aud4" class="choice_speed_58" @click="Show_speed4('.sp_block_58')">x1</span>

			   <div class="Speed_block4 sp_block_58">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_58" @click="First_speed_4('.x_first_58', '.aud58', '.choice_speed_58', '.repl58', '.down58')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_58" @click="Second_speed_4('.x_second_58', '.aud58', '.choice_speed_58', '.repl58', '.down58')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_58" @click="Third_speed_4('.x_third_58', '.aud58', '.choice_speed_58', '.repl58', '.down49')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_58" @click="Fourth_speed_4('.x_fourth_58', '.aud58', '.choice_speed_58', '.repl58', '.down58')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_58" @click="Fifth_speed_4('.x_fifth_58', '.aud58', '.choice_speed_58', '.repl58', '.down58')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_58" @click="Six_speed_4('.x_six_58', '.aud58', '.choice_speed_58', '.repl58', '.down58')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl58" @click="Replay4('.aud58', '.r_icon_58')" @mouseover="S4('.repl58')" @mouseout="hide_repeat4('.repl58')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_58" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down58" @click="Download4('.down58', 'Detroit - Find Jeriko', '.d_icon_58')" @mouseout="down_hide4('.down58')">
			   	  <vue-fontawesome icon="download" class="d_icon_58" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t58">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl59', '.down59')">
			   <p class="name4 T2 text3_mobile_14">#14 It's Up To You To Decide</p>

			   <div class="audio_pole_m4 audio_p59_m4" @click="Perek4($event, '.aud59', '.audio_p59_m4')" @mouseover="Show_time4('.Aud_t59')" @mousemove="Run_block4($event, '.audio_p59_m4', '.aud59', '.Aud_t59')" @mouseout="Time_out4('.Aud_t59')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl59', '.l_of_v59', '.repl59', '.down59')" @mouseover="Over4('.l_of_v59')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v59" @mouseover="Over4('.l_of_v59')" @mouseout="Ov4('.l_of_v59')">
			   	  <div class="L_1" @click="C1_4('.l_of_v59', '.aud59', '.repl59', '.down59')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v59', '.aud59', '.repl59', '.down59')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v59', '.aud59', '.repl59', '.down59')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v59', '.aud59', '.repl59', '.down59')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud59', '.aud58', '.repl59', '.r_icon_59', '.down59')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl59" @click="Play4('.pl59', '.repl59', '.down59')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud59" @timeupdate="Update4('.aud59', '.st59', '.audio_p59_m4')" src="../sound/Detroit/It's Up to You to Decide.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud59', '.aud60', '.repl59', '.r_icon_59', '.down59')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time4 st59">00:00</p><p class="end_time4">/01:12</p>

			   <span id="speed_aud4" class="choice_speed_59" @click="Show_speed4('.sp_block_59')">x1</span>

			   <div class="Speed_block4 sp_block_59">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_59" @click="First_speed_4('.x_first_59', '.aud59', '.choice_speed_59', '.repl59', '.down59')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_59" @click="Second_speed_4('.x_second_59', '.aud59', '.choice_speed_59', '.repl59', '.down59')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_59" @click="Third_speed_4('.x_third_59', '.aud59', '.choice_speed_59', '.repl59', '.down59')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_59" @click="Fourth_speed_4('.x_fouth_59', '.aud59', '.choice_speed_59', '.repl59', '.down59')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_59" @click="Fifth_speed_4('.x_fifth_59', '.aud59', '.choice_speed_59', '.repl59', '.down59')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_59" @click="Six_speed_4('.x_six_59', '.aud59', '.choice_speed_59', '.repl59', '.down59')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl59" @click="Replay4('.aud59', '.r_icon_59')" @mouseover="S4('.repl59')" @mouseout="hide_repeat4('.repl59')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_59" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down59" @click="Download4('.down59', 'Detroit - It`s Up To You To Decide', '.d_icon_59')" @mouseout="down_hide4('.down59')">
			   	  <vue-fontawesome icon="download" class="d_icon_59" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t59">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block4" @mouseover="show_repeat4('.repl60', '.down60')">
			   <p class="name4 T3 text3_mobile_15">#15 Can We Still Trust Our machin</p>

			   <div class="audio_pole_m4 audio_p60_m4" @click="Perek4($event, '.aud60', '.audio_p60_m4')" @mouseover="Show_time4('.Aud_t60')" @mousemove="Run_block4($event, '.audio_p60_m4', '.aud60', '.Aud_t60')" @mouseout="Time_out4('.Aud_t60')">
				   <div class="aud_p4"></div>
			   </div>

			   <button id="vol4" @click="Vol4('.pl60', '.l_of_v60', '.repl60', '.down60')" @mouseover="Over4('.l_of_v60')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol4 l_of_v60" @mouseover="Over4('.l_of_v60')" @mouseout="Ov4('.l_of_v60')">
			   	  <div class="L_1" @click="C1_4('.l_of_v60', '.aud60', '.repl60', '.down60')"></div>
			   	  <div class="L_2" @click="C2_4('.l_of_v60', '.aud60', '.repl60', '.down60')"></div>
			   	  <div class="L_3" @click="C3_4('.l_of_v60', '.aud60', '.repl60', '.down60')"></div>
			   	  <div class="L_4" @click="C4_4('.l_of_v60', '.aud60', '.repl60', '.down60')"></div>
			   </div>

			   <button class="prev4" @click="Prev4('.aud60', '.aud59', '.repl60', '.r_icon_60', '.down60')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play4 pl60" @click="Play4('.pl60', '.repl60', '.down60')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud60" @timeupdate="Update4('.aud60', '.st60', '.audio_p60_m4')" src="../sound/Detroit/Can We Still Trust Our Machines.mp3"></audio></button>
			   <button class="next4" @click="Next4('.aud60', '.aud46', '.repl60', '.r_icon_60', '.down60')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time4 st60">00:00</p><p class="end_time4">/01:57</p>

			   <span id="speed_aud4" class="choice_speed_60" @click="Show_speed4('.sp_block60')">x1</span>

			   <div class="Speed_block4 sp_block_60">
			   	   <div class="contain4">
			   	   	  <div class="Speed_X_25 b4 x_first_60" @click="First_speed_4('.x_first_60', '.aud60', '.choice_speed_60', '.repl60', '.down60')"><p>x.25</p></div>
			   	      <div class="Speed_X_5 b4 x_second_60" @click="Second_speed_4('.x_second_60', '.aud60', '.choice_speed_60', '.repl60', '.down60')"><p>x.5</p></div>
			   	      <div class="Speed_X_1 b4 x_third_60" @click="Third_speed_4('.x_third_60', '.aud60', '.choice_speed_60', '.repl60', '.down60')"><p>x1</p></div>
			   	      <div class="Speed_X_1_25 b4 x_fourth_60" @click="Fourth_speed_4('.x_fourth_60', '.aud60', '.choice_speed_60', '.repl60', '.down49')"><p>x1.25</p></div>
			   	      <div class="Speed_X_15 b4 x_fifth_60" @click="Fifth_speed_4('.x_fifth_60', '.aud60', '.choice_speed_60', '.repl60', '.down60')"><p>x1.5</p></div>
			   	      <div class="Speed_X_2 b4 x_six_60" @click="Six_speed_4('.x_six_60', '.aud60', '.choice_speed_60', '.repl60', '.down60')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button4 repl60" @click="Replay4('.a60', '.r_icon_60')" @mouseover="S4('.repl60')" @mouseout="hide_repeat4('.repl60')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_60" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button4 down60" @click="Download4('.down60', 'Detroit - Can We Still Trust Our machin', '.d_icon_60')" @mouseout="down_hide4('.down60')">
			   	  <vue-fontawesome icon="download" class="d_icon_60" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio4 Aud_t60">
			   	   <span id="t4">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>
	export default {
	   name: "Detroit",
      methods: {
      Play4(el1, Repl_elem_1, Down_elem_1) {
      	 let vl = document.querySelector(el1);
      	 let opov_4_block = document.querySelector('.opoveshenie_block');
      	 let opov_4_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_4 = document.querySelector(Repl_elem_1);
      	 let DOWN_ELEM_4 = document.querySelector(Down_elem_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} - играет`;

            REPL_ELEM_4.classList.add('Rep_4');
            DOWN_ELEM_4.classList.add('d_first_anim4');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_3');
               DOWN_ELEM_4.classList.remove('d_first_move4');
               REPL_ELEM_4.classList.remove('Rep_4');
               DOWN_ELEM_4.classList.remove('d_first_anim4');
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

      	     REPL_ELEM_4.classList.add('Rep_4');
      	     DOWN_ELEM_4.classList.add('d_first_anim4');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_3');
               DOWN_ELEM_4.classList.remove('d_first_move4');
               REPL_ELEM_4.classList.remove('Rep_4');
               DOWN_ELEM_4.classList.remove('d_first_anim4');
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

      Vol4(el2, lvl1, Repl_elem_2, Down_elem_2) {
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

            REPL_ELEM_2.classList.add('Rep_4');
            DOWN_ELEM_2.classList.add('d_first_anim4');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_3');
               DOWN_ELEM_2.classList.remove('d_first_move4');
               REPL_ELEM_2.classList.remove('Rep_4');
               DOWN_ELEM_2.classList.remove('d_first_anim4');
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

            REPL_ELEM_2.classList.add('Rep_4');
            DOWN_ELEM_2.classList.add('d_first_anim4');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_3');
               DOWN_ELEM_2.classList.remove('d_first_move4');
               REPL_ELEM_2.classList.remove('Rep_4');
               DOWN_ELEM_2.classList.remove('d_fist_anim4');
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
      Download4(d_button, d_name, d_icon) {
      	if(confirm('Вы действительно хотите скачать этот файл?')) {
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
         down_button.classList.add('.d_first_anim4');

         setTimeout(() => {
         	down_button.classList.add('.d_first_move4');
            //ICON_D.style.color = 'white';
            down_button.classList.remove('.d_first_anim4');
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

      Over4(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('L_show4');
      },

      Ov4(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('L_show4');
      },

      C1_4(el5, volm1, Repl_elem_3, Down_elem_3) {
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

          REPL_ELEM_3.classList.add('Rep_4');
          DOWN_ELEM_3.classList.add('d_first_anim4');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('Rep_3');
            DOWN_ELEM_3.classList.remove('d_first_move4');
            REPL_ELEM_3.classList.remove('Rep_4');
            DOWN_ELEM_3.classList.remove('d_first_anim4');
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

      C2_4(el6, volm2, Repl_elem_4, Down_elem_4) {
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

          REPL_ELEM_4.classList.add('Rep_4');
          DOWN_ELEM_4.classList.add('d_fist_anim4');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('Rep_3');
            DOWN_ELEM_4.classList.remove('d_first_move4');
            REPL_ELEM_4.classList.remove('Rep_4');
            DOWN_ELEM_4.classList.remove('d_first_anim4');
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

      C3_4(el7, volm3, Repl_elem_5, Down_elem_5) {
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

           REPL_ELEM_5.classList.add('Rep_4');
           DOWN_ELEM_5.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('Rep_3');
            DOWN_ELEM_5.classList.remove('d_first_move4');
            REPL_ELEM_5.classList.remove('Rep_4');
            DOWN_ELEM_5.classList.remove('d_first_anim4');
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


      C4_4(el8, volm4, Repl_elem_6, Down_elem_6) {
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

          REPL_ELEM_6.classList.add('Rep_4');
          DOWN_ELEM_6.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('Rep_3');
            DOWN_ELEM_6.classList.remove('d_first_move4');
            REPL_ELEM_6.classList.remove('Rep_4');
            DOWN_ELEM_6.classList.remove('d_first_anim4');
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

      Update4(volm5, time_b1, prog) {
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

      Prev4(AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_1, DOWNLOAD_1) {
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

         REPL_1.classList.add('Rep_4');
         DOWN_1.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_1.classList.remove('Rep_3');
            DOWN_1.classList.remove('d_first_move4');
            REPL_1.classList.remove('Rep_4');
            DOWN_1.classList.remove('d_first_anim4');
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

      Next4(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_2) {
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

         REPL_2.classList.add('Rep_4');
         DOWN_2.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_2.classList.remove('Rep_3');
            DOWN_2.classList.remove('d_first_move4');
            REPL_2.classList.remove('Rep_4');
            DOWN_2.classList.remove('d_first_anim4');
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

      Perek4(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time4(t_block1) {
          let time_block = document.querySelector(t_block1);
      	  time_block.classList.add('T_aud_4');
      },

      Time_out4(t_block2) {
      	  let time_block = document.querySelector(t_block2);
      	  time_block.classList.remove('T_aud_4');
      },

      Run_block4(event, M_Pole, Aud2, t_block4) {
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
          
      show_repeat4(n_rep, d_rep) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep);

          nrep.classList.add('Rep_3');
          drep.classList.add('d_first_move4');
      },

      hide_repeat4(rep2) {
      	  let replay2 = document.querySelector(rep2);

      	  replay2.classList.add('Rep_4');

      	  setTimeout(() => {
             replay2.classList.remove('Rep_3');
             replay2.classList.remove('Rep_4');
      	  }, 1100);
      },

      down_hide4(dow2) {
         let d2 = document.querySelector(dow2);

         d2.classList.add('d_first_anim4');

         setTimeout(() => {
            d2.classList.remove('d_first_move4');
            d2.classList.remove('d_first_anim4');
         }, 1100);
      },

      Replay4(AUD, Icon1) {
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

      S4(rep3) {
      	  let rep = document.querySelector(rep3);
      	  rep.classList.add('Rep_3');
      },

      Show_speed4(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl_4');
      },

      First_speed_4(first, a, ch_one, Repl_elem_7, Down_elem_7) {
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

           REPL_ELEM_7.classList.add('Rep_4');
           DOWN_ELEM_7.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('Rep_3');
            DOWN_ELEM_7.classList.remove('d_first_move4');
            REPL_ELEM_7.classList.remove('Rep_4');
            DOWN_ELEM_7.classList.remove('d_first_anim4');
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

      Second_speed_4(second, a2, ch_two, Repl_elem_8, Down_elem_8) {
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

           REPL_ELEM_8.classList.add('Rep_4');
           DOWN_ELEM_8.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('Rep_3');
            DOWN_ELEM_8.classList.remove('d_first_move4');
            REPL_ELEM_8.classList.remove('Rep_4');
            DOWN_ELEM_8.classList.remove('d_first_anim4');
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

      Third_speed_4(third, a3, ch_three, Repl_elem_9, Down_elem_9) {
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

           REPL_ELEM_9.classList.add('Rep_4');
           DOWN_ELEM_9.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('Rep_3');
            DOWN_ELEM_9.classList.remove('d_first_move4');
            REPL_ELEM_9.classList.remove('Rep_4');
            DOWN_ELEM_9.classList.remove('d_first_anim4');
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

      Fourth_speed_4(fourth, a4, ch_four, Repl_elem_10, Down_elem_10) {
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

           REPL_ELEM_10.classList.add('Rep_4');
           DOWN_ELEM_10.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('Rep_3');
            DOWN_ELEM_10.classList.remove('d_first_move4');
            REPL_ELEM_10.classList.remove('Rep_4');
            DOWN_ELEM_10.classList.remove('d_first_anim4');
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

      Fifth_speed_4(fifth, a5, ch_five, Repl_elem_11, Down_elem_11) {
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

           REPL_ELEM_11.classList.add('Rep_4');
           DOWN_ELEM_11.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('Rep_3');
            DOWN_ELEM_11.classList.remove('d_first_move4');
            REPL_ELEM_11.classList.remove('Rep_4');
            DOWN_ELEM_11.classList.remove('d_first_anim4');
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

      Six_speed_4(six, a6, ch_six, Repl_elem_12, Down_elem_12) {
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

           REPL_ELEM_12.classList.add('Rep_4');
           DOWN_ELEM_12.classList.add('d_first_anim4');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('Rep_3');
            DOWN_ELEM_12.classList.remove('d_first_move4');
            REPL_ELEM_12.classList.remove('Rep_4');
            DOWN_ELEM_12.classList.remove('d_first_anim4');
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

	.side_screen4 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/Detroit_background.jpg");
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

    .side_screen4 span {
    	position: absolute;
    	left: 225px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block4 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block4 > .sound_block4 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block4 .sound_block4 .name4 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block4 .sound_block4 .T1 {
    	left: 125px;
    }

    .audio_collection_block4 .sound_block4 .T2 {
    	left: 100px;
    }

    .audio_collection_block4 .sound_block4 .T3 {
    	left: 20px;
    }

    .audio_collection_block4 .sound_block4 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block4 .sound_block4 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block4 .sound_block4 .audio_pole_m4 {
        height: 5px;
        width: 648px;
        position: absolute;
        background: white;
        left: 38px;
        top: 78px;
        cursor: pointer;
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;
    }

    .audio_collection_block4 .sound_block4 .audio_pole_m4:hover {
    	opacity: .7;
    }

    .audio_collection_block4 .sound_block4 .audio_pole_m4 .aud_p4 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	background: yellow;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block4 .sound_block4 #vol4 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block4 .sound_block4 .l_of_vol4 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block4 .sound_block4 .l_of_vol4.L_show4 {
    	display: block;
    }

    .audio_collection_block4 .sound_block4 .l_of_vol4 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block4 .sound_block4 .l_of_vol4 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);

    }

    .audio_collection_block4 .sound_block4 .l_of_vol4 .L_1 {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block4 .sound_block4 .l_of_vol4 .L_2 {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block4 .sound_block4 .l_of_vol4 .L_3 {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block4 .sound_block4 .l_of_vol4 .L_4 {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block4 .sound_block4 .prev4 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block4 .sound_block4 .prev4:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block4 .sound_block4 .play4 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block4 .sound_block4 .next4 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block4 .sound_block4 .next4:hover {
    	transform: translateX(5px);
    }

     .audio_collection_block4 .sound_block4 .start_time4 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block4 .sound_block4 .end_time4 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block4 .sound_block4 .Download_button4 {
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

    .audio_collection_block4 .sound_block4 .Download_button4:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block4 .sound_block4 .Download_button4.d_first_move4 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block4 .sound_block4 .Download_button4.d_first_anim4 {
    	animation: down4 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down4 {
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

    .audio_collection_block4 .sound_block4 .Replay_button4 {
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

     .audio_collection_block4 .sound_block4 .Replay_button4.Rep_3 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block4 .sound_block4 .Replay_button4.Rep_4 {
    	animation: spek4 1s linear 1;
    	transform: scale(0);
    }

    @keyframes spek4 {
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

    .audio_collection_block4 .sound_block4 .Replay_button4:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block4 .sound_block4 .Time_of_audio4 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block4 .sound_block4 .Time_of_audio4 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block4 .sound_block4 .Time_of_audio4.T_aud_4 {
    	display: block;
    }

    .audio_collection_block4 .sound_block4 #speed_aud4 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block4 .sound_block4 .Speed_block4 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block4 .sound_block4 .Speed_block4.tgl_4 {
    	display: block;
    }
    
    .audio_collection_block4 .sound_block4 .Speed_block4 .contain4 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block4 .sound_block4 .Speed_block4 .contain4 .b4 {
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

    .audio_collection_block4 .sound_block4 .Speed_block4 .contain4 .b4:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block4 .sound_block4 .Speed_block4 .contain4 .b4 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block4 .sound_block4 .Speed_block4 .contain4 .b4 p:hover {
        color: black;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
    	.side_screen4 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen4 span {
    		font-size: 55px;
    		left: 160px;
    	}

    	.audio_collection_block4 > .sound_block4 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block4 .sound_block4 .audio_pole_m4 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block4 .sound_block4 .audio_pole_m4 .aud_p4 {
    		height: 9.5px;
    	}

    	.audio_collection_block4 .sound_block4 #vol4 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block4 .sound_block4 .play4 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block4 .sound_block4 .prev4 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block4 .sound_block4 .next4 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block4 .sound_block4 .name4 {
    	   left: 255px;
        }

        .audio_collection_block4 .sound_block4 .Time_of_audio4 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block4 .sound_block4 .Time_of_audio4 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block4 .sound_block4 .start_time4 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block4 .sound_block4 .end_time4 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block4 .sound_block4 #speed_aud4 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block4 .sound_block4 .Speed_block4 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block4 .sound_block4 .Speed_block4 .contain4 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block4 .sound_block4 .Speed_block4 .contain4 .b4 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block4 .sound_block4 .Speed_block4 .contain4 .b4 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block4 .sound_block4 .Replay_button4 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block4 .sound_block4 .Replay_button4.Rep_3 {
    	    margin-left: 850px;
        }

        .audio_collection_block4 .sound_block4 .Download_button4 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block4 .sound_block4 .l_of_vol4 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block4 .sound_block4 .text3_mobile_2 {
        	left: 300px;
        }

        .audio_collection_block4 .sound_block4 .text3_mobile_3 {
        	left: 210px;
        }

        .audio_collection_block4 .sound_block4 .text3_mobile_6 {
        	left: 200px;
        }

        .audio_collection_block4 .sound_block4 .text3_mobile_9 {
        	left: 210px;
        }

        .audio_collection_block4 .sound_block4 .text3_mobile_11 {
        	left: 175px;
        }

        .audio_collection_block4 .sound_block4 .text3_mobile_14 {
        	left: 135px;
        }

        .audio_collection_block4 .sound_block4 .text3_mobile_15 {
        	left: 75px;
        }
    }
</style>