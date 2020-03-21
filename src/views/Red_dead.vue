<template>
	<div class="side_screen2">
		<span>Red Dead Redemption II music</span>
		<div class="audio_collection_block2">
		    <div class="sound_block2" @mouseover="show_repeat2('.repl16', '.down16')">
			   <p class="name2 t1 text_mobile_1">#1 Outlaws from the West</p>

			   <div class="audio_pole_m2 audio_p16_m2" @click="Perek2($event, '.a16', '.audio_p16_m2')" @mouseover="Show_time2('.Aud_t16')" @mousemove="Run_block2($event, '.audio_p16_m2', '.a16', '.Aud_t16')" @mouseout="Time_out2('.Aud_t16')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl16', '.l_of_v16', '.repl16', '.down16')" @mouseover="Over2('.l_of_v16')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol2 l_of_v16" @mouseover="Over2('.l_of_v16')" @mouseout="Ov2('.l_of_v16')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v16', '.a16', '.repl16', '.down16')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v16', '.a16', '.repl16', '.down16')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v16', '.a16', '.repl16', '.down16')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v16', '.a16', '.repl16', '.down16')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a16', '.a30', '.repl16', '.r_icon_16', '.down16')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl16" @click="Play2('.pl16', '.repl16', '.down16')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a16', '.st16', '.audio_p16_m2')" class="aud2 a16" src="../sound/RDR2/Outlaws from the West.mp3"></audio></button> 
			   <button class="next2" @click="Next2('.a16', '.a17', '.repl16', '.r_icon_16', '.down16')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st16">00:00</p><p class="end_time2">/04:17</p>

			   <span id="speed_aud2" class="choice_speed_16" @click="Show_speed2('.sp_block_16')">x1</span>

			   <div class="Speed_block2 sp_block_16">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_16" @click="First_speed_2('.x_first_16', '.a16', '.choice_speed_16', '.repl16', '.down16')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_16" @click="Second_speed_2('.x_second_16', '.a16', '.choice_speed_16', '.repl16', '.down16')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_16" @click="Third_speed_2('.x_third_16', '.a16', '.choice_speed_16', '.repl16', '.down16')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_16" @click="Fourth_speed_2('.x_fourth_16', '.a16', '.choice_speed_16', '.repl16', '.down16')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_16" @click="Fifth_speed_2('.x_fifth_16', '.a16', '.choice_speed_16', '.repl16', '.down16')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_16" @click="Six_speed_2('.x_six_16', '.a16', '.choice_speed_16', '.repl16', '.down16')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl16" @click="Replay2('.a16', '.r_icon_16')" @mouseover="S2('.repl16')" @mouseout="hide_repeat2('.repl16')">
			   	  <vue-fontawesome class="r_icon_16" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down16" @click="Download2('.down16', 'Red Dead Redemption II - Outlaws from the West', '.d_icon_16')" @mouseover="D2('.down16')" @mouseout="down_hide2('.down16')">
			   	  <vue-fontawesome icon="download" class="d_icon_16" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio2 Aud_t16">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block2" @mouseover="show_repeat2('.repl17', '.down17')">
			   <p class="name2">#2 Catching train</p>

			   <div class="audio_pole_m2 audio_p17_m2" @click="Perek2($event, '.a17', '.audio_p17_m2')" @mouseover="Show_time2('.Aud_t17')" @mousemove="Run_block2($event, '.audio_p17_m2', '.a17', '.Aud_t17')" @mouseout="Time_out2('.Aud_t17')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl17', '.l_of_v17', '.repl17', '.down17')" @mouseover="Over2('.l_of_v17')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v17" @mouseover="Over2('.l_of_v17')" @mouseout="Ov2('.l_of_v17')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v17', '.a17', '.repl17', '.down17')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v17', '.a17', '.repl17', '.down17')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v17', '.a17', '.repl17', '.down17')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v17', '.a17', '.repl17', '.down17')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a17', '.a16', '.repl17', '.r_icon_17', '.down17')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl17" @click="Play2('.pl17', '.repl17', '.down17')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a17', '.st17', '.audio_p17_m2')" class="aud2 a17" src="../sound/RDR2/Catching train.mp3"></audio></button>
			   <button class="next2" @click="Next2('.a17', '.a18', '.repl17', '.r_icon_17', '.down17')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st17">00:00</p><p class="end_time2">/03:29</p>

			   <span id="speed_aud2" class="choice_speed_17" @click="Show_speed2('.sp_block_17')">x1</span>

			   <div class="Speed_block2 sp_block_17">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_17" @click="First_speed_2('.x_first_17', '.a17', '.choice_speed_17', '.repl17', '.down17')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_17" @click="Second_speed_2('.x_second_17', '.a17', '.choice_speed_17', '.repl17', '.down17')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_17" @click="Third_speed_2('.x_third_17', '.a17', '.choice_speed_17', '.repl17', '.down17')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_17" @click="Fourth_speed_2('.x_fourth_17', '.a17', '.choice_speed_17', '.repl17', '.down17')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_17" @click="Fifth_speed_2('.x_fifth_17', '.a17', '.choice_speed_17', '.repl17', '.down17')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_17" @click="Six_speed_2('.x_six_17', '.a17', '.choice_speed_17', '.repl17', '.down17')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl17"  @click="Replay2('.a17', '.r_icon_17')" @mouseover="S2('.repl17')" @mouseout="hide_repeat2('.repl17')">
			   	  <vue-fontawesome class="r_icon_17" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down17" @click="Download2('.down17', 'Red Dead Redemption II - Catching train', '.d_icon_17')" @mouseover="D2('.down17')" @mouseout="down_hide2('.down17')">
			   	  <vue-fontawesome icon="download" class="d_icon_17" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio2 Aud_t17">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block2" @mouseover="show_repeat2('.repl18', '.down18')">
			   <p class="name2">#3 A Quite Time</p>

			   <div class="audio_pole_m2 audio_p18_m2" @click="Perek2($event, '.a18', '.audio_p18_m2')" @mouseover="Show_time2('.Aud_t18')" @mousemove="Run_block2($event, '.audio_p18_m2', '.a18', '.Aud_t18')" @mouseout="Time_out2('.Aud_t18')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl18', '.l_of_v18', '.repl18', '.down18')" @mouseover="Over2('.l_of_v18')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v18" @mouseover="Over2('.l_of_v18')" @mouseout="Ov2('.l_of_v18')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v18', '.a18', '.repl18', '.down18')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v18', '.a18', '.repl18', '.down18')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v18', '.a18', '.repl18', '.down18')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v18', '.a18', '.repl18', '.down18')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a18', '.a17', '.repl18', '.r_icon_18', '.down18')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl18" @click="Play2('.pl18', '.repl18', '.down18')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a18', '.st18', '.audio_p18_m2')" class="aud2 a18" src="../sound/RDR2/A Quite Time.mp3"></audio></button>
			   <button class="next2" @click="Next2('.a18', '.a19', '.repl18', '.r_icon_18', '.down18')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st18">00:00</p><p class="end_time2">/05:35</p>

			   <span id="speed_aud2" class="choice_speed_18" @click="Show_speed2('.sp_block_18')">x1</span>

			    <div class="Speed_block2 sp_block_18">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_18" @click="First_speed_2('.x_first_18', '.a18', '.choice_speed_18', '.repl18', '.down18')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_18" @click="Second_speed_2('.x_second_18', '.a18', '.choice_speed_18', '.repl18', '.down18')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_18" @click="Third_speed_2('.x_third_18', '.a18', '.choice_speed_18', '.repl18', '.down18')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_18" @click="Fourth_speed_2('.x_fourth_18', '.a18', '.choice_speed_18', '.repl18', '.down18')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_18" @click="Fifth_speed_2('.x_fifth_18', '.a18', '.choice_speed_18', '.repl18', '.down18')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_18" @click="Six_speed_2('.x_six_18', '.a18', '.choice_speed_18', '.repl18', '.down18')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl18" @click="Replay2('.a18', '.r_icon_18')" @mouseover="S2('.repl18')" @mouseout="hide_repeat2('.repl18')">
			   	  <vue-fontawesome class="r_icon_18" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down18" @click="Download2('.down18', 'Red Dead Redemption II - A Quite Time', '.d_icon_18')" @mouseover="D2('.down18')" @mouseout="down_hide2('.down18')">
			   	  <vue-fontawesome icon="download" class="d_icon_18" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio2 Aud_t18">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl19', '.down19')">
			   <p class="name2">#4 The Disaster</p>

			   <div class="audio_pole_m2 audio_p19_m2" @click="Perek2($event, '.a19', '.audio_p19_m2')" @mouseover="Show_time2('.Aud_t19')" @mousemove="Run_block2($event, '.audio_p19_m2', '.a19', '.Aud_t19')" @mouseout="Time_out2('.Aud_t19')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl19', '.l_of_v19', '.repl19', '.down19')" @mouseover="Over2('.l_of_v19')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v19" @mouseover="Over2('.l_of_v19')" @mouseout="Ov2('.l_of_v19')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v19', '.a19', '.repl19', '.down19')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v19', '.a19', '.repl19', '.down19')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v19', '.a19', '.repl19', '.down19')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v19', '.a19', '.repl19', '.down19')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a19', '.a18', '.repl19', '.r_icon_19', '.down19')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl19" @click="Play2('.pl19', '.repl19', '.down19')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a19', '.st19', '.audio_p19_m2')" class="aud a19" src="../sound/RDR2/The Disaster.mp3"></audio></button>
			   <button class="next2" @click="Next2('.a19', '.a20', '.repl19', '.r_icon_19', '.down19')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   
			   <p class="start_time2 st19">00:00</p><p class="end_time2">/05:45</p>

			   <span id="speed_aud2" class="choice_speed_19" @click="Show_speed2('.sp_block_19')">x1</span>

			    <div class="Speed_block2 sp_block_19">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_19" @click="First_speed_2('.x_first_19', '.a19', '.choice_speed_19', '.repl19', '.down19')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_19" @click="Second_speed_2('.x_second_19', '.a19', '.choice_speed_19', '.repl19', '.down19')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_19" @click="Third_speed_2('.x_third_19', '.a19', '.choice_speed_19', '.repl19', '.down19')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_19" @click="Fourth_speed_2('.x_fourth_19', '.a19', '.choice_speed_19', '.repl19', '.down19')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_19" @click="Fifth_speed_2('.x_fifth_19', '.a19', '.choice_speed_19', '.repl19', '.down19')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_19" @click="Six_speed_2('.x_six_19', '.a19', '.choice_speed_19', '.repl19', '.down19')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl19" @click="Replay2('.a19', '.r_icon_19')" @mouseover="S2('.repl19')" @mouseout="hide_repeat2('.repl19')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_19" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down19" @click="Download2('.down19', 'Red Dead Redemption II - The Disaster', '.d_icon_19')" @mouseover="D2('.down19')" @mouseout="down_hide2('.down19')">
			   	  <vue-fontawesome icon="download" class="d_icon_1" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio2 Aud_t19">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl20', '.down20')">
			   <p class="name2">#5 Angelo Bronte</p>

			   <div class="audio_pole_m2 audio_p20_m2" @click="Perek2($event, '.a20', '.audio_p20_m2')" @mouseover="Show_time2('.Aud_t20')" @mousemove="Run_block2($event, '.audio_p20_m2', '.a20', '.Aud_t20')" @mouseout="Time_out2('.Aud_t20')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl20', '.l_of_v20', '.repl20', '.down20')" @mouseover="Over2('.l_of_v20')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v20" @mouseover="Over2('.l_of_v20')" @mouseout="Ov2('.l_of_v20')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v20', '.a20', '.repl20', '.down20')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v20', '.a20', '.repl20', '.down20')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v20', '.a20', '.repl20', '.down20')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v20', '.a20', '.repl20', '.down20')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a20', '.a19', '.repl20', '.r_icon_20', '.down20')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl20" @click="Play2('.pl20', '.repl20', '.down20')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a20', '.st20', '.audio_p20_m2')" class="aud2 a20" src="../sound/RDR2/Angelo Bronte.mp3"></audio></button>
			   <button class="next2" @click="Next2('.a20', '.a21', '.repl20', '.r_icon_20', '.down20')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st20">00:00</p><p class="end_time2">/04:49</p>

			   <span id="speed_aud2" class="choice_speed_20" @click="Show_speed2('.sp_block_20')">x1</span>

			    <div class="Speed_block2 sp_block_20">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_20" @click="First_speed_2('.x_first_20', '.a20', '.choice_speed_20', '.repl20', '.down20')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_20" @click="Second_speed_2('.x_first_20', '.a20', '.choice_speed_20', '.repl20', '.down20')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_20" @click="Third_speed_2('.x_first_20', '.a20', '.choice_speed_20', '.repl20', '.down20')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_20" @click="Fourth_speed_2('.x_first_20', '.a20', '.choice_speed_20', '.repl20', '.down20')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_20" @click="Fifth_speed_2('.x_first_20', '.a20', '.choice_speed_20', '.repl20', '.down20')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_20" @click="Six_speed_2('.x_first_20', '.a20', '.choice_speed_20', '.repl20', '.down20')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl20" @click="Replay2('.a20', '.r_icon_20')" @mouseover="S2('.repl20')" @mouseout="hide_repeat2('.repl20')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_20" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down20" @click="Download2('.down20', 'Red Dead Redemption II - Angelo Bronte', '.d_icon_20')" @mouseover="D2('.down20')" @mouseout="down_hide2('.down20')">
			   	  <vue-fontawesome icon="download" class="d_icon_20" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio2 Aud_t20">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl21', '.down21')">
			   <p class="name2 t2 text_mobile_6">#6 The First Shall Be Last</p>

			   <div class="audio_pole_m2 audio_p21_m2" @click="Perek2($event, '.a21', '.audio_p21_m2')" @mouseover="Show_time2('.Aud_t21')" @mousemove="Run_block2($event, '.audio_p21_m2', '.a21', '.Aud_t21')" @mouseout="Time_out2('.Aud_t21')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl21', '.l_of_v21', '.repl21', '.down21')" @mouseover="Over2('.l_of_v21')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v21" @mouseover="Over2('.l_of_v21')" @mouseout="Ov2('.l_of_v21')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v21', '.a21', '.repl21', '.down21')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v21', '.a21', '.repl21', '.down21')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v21', '.a21', '.repl21', '.down21')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v21', '.a21', '.repl21', '.down21')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a21', '.a20', '.repl21', '.r_icon_21', '.down21')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl21" @click="Play2('.pl21', '.repl21', '.down21')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a21', '.st21', '.audio_p21_m2')" class="aud2 a21" src="../sound/RDR2/The First Shall Be Last.mp3"></audio></button>
			   <button class="next2" @click="Next2('.a21', '.a22', '.repl21', '.r_icon_21', '.down21')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st21">00:00</p><p class="end_time2">/04:17</p>

			   <span id="speed_aud2" class="choice_speed_21" @click="Show_speed2('.sp_block_21')">x1</span>

			    <div class="Speed_block2 sp_block_21">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_21" @click="First_speed_2('.x_first_21', '.a21', '.choice_speed_21', '.repl21', '.down21')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_21" @click="Second_speed_2('.x_second_21', '.a21', '.choice_speed_21', '.repl21', '.down21')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_21" @click="Third_speed_2('.x_third_21', '.a21', '.choice_speed_21', '.repl21', '.down21')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_21" @click="Fourth_speed_2('.x_fourth_21', '.a21', '.choice_speed_21', '.repl21', '.down21')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_21" @click="Fifth_speed_2('.x_fifth_21', '.a1', '.choice_speed_21', '.repl21', '.down21')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_21" @click="Six_speed_2('.x_six_21', '.a21', '.choice_speed_21', '.repl21', '.down21')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl21" @click="Replay2('.a21', '.r_icon_21')" @mouseover="S2('.repl21')" @mouseout="hide_repeat2('.repl21')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_21" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down21" @click="Download2('.down21', 'Red Dead Redemption II - The First Shall Be Last', '.d_icon_21')" @mouseover="D2('.down21')" @mouseout="down_hide2('.down21')">
			   	  <vue-fontawesome icon="download" class="d_icon_21" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio2 Aud_t21">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl22', '.down22')">
			   <p class="name2 text_mobile_7">#7 You my brother</p>

			   <div class="audio_pole_m2 audio_p22_m2" @click="Perek2($event, '.a22', '.audio_p22_m2')" @mouseover="Show_time2('.Aud_t22')" @mousemove="Run_block2($event, '.audio_p22_m2', '.a22', '.Aud_t22')" @mouseout="Time_out2('.Aud_t22')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl22', '.l_of_v22', '.repl22', '.down22')" @mouseover="Over2('.l_of_v22')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v22" @mouseover="Over2('.l_of_v22')" @mouseout="Ov2('.l_of_v22')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v22', '.a22', '.repl22', '.down22')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v22', '.a22', '.repl22', '.down22')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v22', '.a22', '.repl22', '.down22')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v22', '.a22', '.repl22', '.down22')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a22', '.a21', '.repl22', '.r_icon_22', '.down22')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl22" @click="Play2('.pl22', '.repl22', '.down22')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud2 a22" @timeupdate="Update2('.a22', '.st22', '.audio_p22_m2')" src="../sound/RDR2/You my brother.mp3"></audio></button>
			   <button class="next2" @click="Next2('.a22', '.A23', '.repl22', '.r_icon_22', '.down22')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st22">00:00</p><p class="end_time2">/05:37</p>

			   <span id="speed_aud2" class="choice_speed_22" @click="Show_speed2('.sp_block_22')">x1</span>

			    <div class="Speed_block2 sp_block_22">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_22" @click="First_speed_2('.x_first_22', '.a22', '.choice_speed_22', '.repl22', '.down22')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_22" @click="Second_speed_2('.x_second_22', '.a22', '.choice_speed_22', '.repl22', '.down22')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_22" @click="Third_speed_2('.x_third_22', '.a22', '.choice_speed_22', '.repl22', '.down22')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_22" @click="Fourth_speed_2('.x_fourth_22', '.a22', '.choice_speed_22', '.repl22', '.down22')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_22" @click="Fifth_speed_2('.x_fifth_22', '.a22', '.choice_speed_22', '.repl22', '.down22')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_22" @click="Six_speed_2('.x_six_22', '.a22', '.choice_speed_22', '.repl22', '.down22')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl22"  @click="Replay2('.a22', '.r_icon_22')" @mouseover="S2('.repl22')" @mouseout="hide_repeat2('.repl22')">
			   	  <vue-fontawesome class="r_icon_22" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down22" @click="Download2('.down22', 'Red Dead Redemption II - You my brother', '.d_icon_22')" @mouseover="D2('.down22')" @mouseout="down_hide2('.down22')">
			   	  <vue-fontawesome icon="download" class="d_icon_22" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio2 Aud_t22">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl23', '.down23')">
			   <p class="name2 t3 text_mobile_8">#8 See the fire in you'r eyes</p>

			   <div class="audio_pole_m2 audio_p23_m2" @click="Perek2($event, '.A23', '.audio_p23_m2')" @mouseover="Show_time2('.Aud_t23')" @mousemove="Run_block2($event, '.audio_p23_m2', '.A23', '.Aud_t23')" @mouseout="Time_out2('.Aud_t23')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl23', '.l_of_v23', '.repl23', '.down23')" @mouseover="Over2('.l_of_v23')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v23" @mouseover="Over2('.l_of_v23')" @mouseout="Ov2('.l_of_v23')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v23', '.a23', '.repl23', '.down23')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v23', '.a23', '.repl23', '.down23')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v23', '.a23', '.repl23', '.down23')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v23', '.a23', '.repl23', '.down23')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.A23', '.a22', '.repl23', '.r_icon_23', '.down23')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl23" @click="Play2('.pl23', '.repl23', '.down23')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.A23', '.st23', '.audio_p23_m2')" class="aud2 A23" src="../sound/RDR2/See the fire in you'r eyes.mp3"></audio></button>
			   <button class="next2" @click="Next2('.A23', '.a24', '.repl23', '.r_icon_23', '.down23')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st23">00:00</p><p class="end_time2">/03:03</p>

			   <span id="speed_aud2" class="choice_speed_23" @click="Show_speed2('.sp_block_23')">x1</span>

			    <div class="Speed_block2 sp_block_23">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_23" @click="First_speed_2('.x_first_23', '.A23', '.choice_speed_23', '.repl23', '.down23')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_23" @click="Second_speed_2('.x_second_23', '.A23', '.choice_speed_23', '.repl23', '.down23')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_23" @click="Third_speed_2('.x_third_23', '.A23', '.choice_speed_23', '.repl23', '.down23')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_23" @click="Fourth_speed_2('.x_fourth_23', '.A23', '.choice_speed_23', '.repl23', '.down23')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_23" @click="Fifth_speed_2('.x_fifth_23', '.A23', '.choice_speed_23', '.repl23', '.down23')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_23" @click="Six_speed_2('.x_six_23', '.A23', '.choice_speed_23', '.repl23', '.down23')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl23" @click="Replay2('.A23', '.r_icon_23')" @mouseover="S2('.repl23')" @mouseout="hide_repeat2('.repl23')">
			   	  <vue-fontawesome class="r_icon_23" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down23" @click="Download2('.down23', 'Red Dead Redemption II - See the fire in you`r eyes', '.d_icon_23')" @mouseover="D2('.down23')" @mouseout="down_hide2('.down23')">
			   	  <vue-fontawesome icon="download" class="d_icon_23" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio2 Aud_t23">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl24', '.down24')">
			   <p class="name2 t4 text_mobile_9">#9 May I stand unshaken(High hon)</p>

			   <div class="audio_pole_m2 audio_p24_m2" @click="Perek2($event, '.a24', '.audio_p24_m2')" @mouseover="Show_time2('.Aud_t24')" @mousemove="Run_block2($event, '.audio_p24_m2', '.a24', '.Aud_t24')" @mouseout="Time_out2('.Aud_t24')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl24', '.l_of_v24', '.repl24', '.down24')" @mouseover="Over2('.l_of_v24')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v24" @mouseover="Over2('.l_of_v24')" @mouseout="Ov2('.l_of_v24')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v24', '.a24', '.repl24', '.down24')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v24', '.a24', '.repl24', '.down24')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v24', '.a24', '.repl24', '.down24')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v24', '.a24', '.repl24', '.down24')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a24', '.a23', '.repl24', '.r_icon_24', '.down24')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl24" @click="Play2('.pl24', '.repl24', '.down24')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a24', '.st24', '.audio_p24_m2')" class="aud2 a24" src="../sound/RDR2/May I stand unshaken.mp3"></audio></button>
			   <button class="next2" @click="Next2('.a24', '.a25', '.repl24', '.r_icon_24', '.down24')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st24">00:00</p><p class="end_time2">/01:24</p>

			   <span id="speed_aud2" class="choice_speed_24" @click="Show_speed2('.sp_block_24')">x1</span>

			    <div class="Speed_block2 sp_block_24">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_24" @click="First_speed_2('.x_first_24', '.a24', '.choice_speed_24', '.repl24', '.down24')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_24" @click="Second_speed_2('.x_second_24', '.a24', '.choice_speed_24', '.repl24', '.down24')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_24" @click="Third_speed_2('.x_third_24', '.a24', '.choice_speed_24', '.repl24', '.down24')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_24" @click="Fourth_speed_2('.x_fourth_24', '.a24', '.choice_speed_24', '.repl24', '.down24')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_24" @click="Fifth_speed_2('.x_fifth_24', '.a24', '.choice_speed_24', '.repl24')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_24" @click="Six_speed_2('.x_six_24', '.a24', '.choice_speed_24', '.repl24', '.down24')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl24" @click="Replay2('.a24', '.r_icon_24')" @mouseover="S2('.repl24')" @mouseout="hide_repeat2('.repl24')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_24" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down24" @click="Download2('.down24', 'Red Dead Redemption II - May I Stand Unshaken(High honor)', '.d_icon_24')" @mouseover="D2('.down24')" @mouseout="down_hide2('.down24')">
			   	  <vue-fontawesome icon="download" class="d_icon_24" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio2 Aud_t24">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2"  @mouseover="show_repeat2('.repl25', '.down25')">
			   <p class="name2 t5 text_mobile_10">#10 May I stand unshaken(Low hon)</p>

			   <div class="audio_pole_m2 audio_p25_m2" @click="Perek2($event, '.a25', '.audio_p25_m2')" @mouseover="Show_time2('.Aud_t25')" @mousemove="Run_block2($event, '.audio_p25_m2', '.a25', '.Aud_t25')" @mouseout="Time_out2('.Aud_t25')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl25', '.l_of_v25', '.repl25', '.down25')" @mouseover="Over2('.l_of_v25')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v25" @mouseover="Over2('.l_of_v25')" @mouseout="Ov2('.l_of_v25')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v25', '.a25', '.repl25', '.down25')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v25', '.a25', '.repl25', '.down25')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v25', '.a25', '.repl25', '.down25')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v25', '.a25', '.repl25', '.down25')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a25', '.a24', '.repl25', '.r_icon_25', '.down25')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl25" @click="Play2('.pl25', '.repl25', '.down25')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a25', '.st25', '.audio_p25_m2')" class="aud2 a25" src="../sound/RDR2/May I Stand Unshaken(Low).mp3"></audio></button>
			   <button class="next2" @click="Next2('.a25', '.a26', '.repl25', '.r_icon_25', '.down25')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st25">00:00</p><p class="end_time2">/04:29</p>

			   <span id="speed_aud2" class="choice_speed_25" @click="Show_speed2('.sp_block_25')">x1</span>

			    <div class="Speed_block2 sp_block_25">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_25" @click="First_speed_2('.x_first_25', '.a25', '.choice_speed_25', '.repl25', '.down25')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_25" @click="Second_speed_2('.x_second_25', '.a25', '.choice_speed_25', '.repl25', '.down25')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_25" @click="Third_speed_2('.x_third_25', '.a25', '.choice_speed_25', '.repl25', '.down25')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_25" @click="Fourth_speed_2('.x_fourth_25', '.a25', '.choice_speed_25', '.repl25', '.down25')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_25" @click="Fifth_speed_2('.x_fifth_25', '.a25', '.choice_speed_25', '.repl25', '.down25')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_25" @click="Six_speed_2('.x_six_25', '.a25', '.choice_speed_25', '.repl25', '.down25')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl25" @click="Replay2('.a25', '.r_icon_25')" @mouseover="S2('.repl25')" @mouseout="hide_repeat2('.repl25')">
			   	  <vue-fontawesome class="r_icon_25" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down25" @click="Download2('.down25', 'Red Dead Redemption II - May I stand unshaken(Low honor)', '.d_icon_25')" @mouseover="D2('.down25')" @mouseout="down_hide2('.down25')">
			   	  <vue-fontawesome icon="download" class="d_icon_25" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio2 Aud_t25">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl26', '.down26')">
			   <p class="name2">#11 Final Heist</p>

			   <div class="audio_pole_m2 audio_p26_m2" @click="Perek2($event, '.a26', '.audio_p26_m2')" @mouseover="Show_time2('.Aud_t26')" @mousemove="Run_block2($event, '.audio_p26_m2', '.a26', '.Aud_t26')" @mouseout="Time_out2('.Aud_t26')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl26', '.l_of_v26', '.repl26', '.down26')" @mouseover="Over2('.l_of_v26')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v26" @mouseover="Over2('.l_of_v26')" @mouseout="Ov2('.l_of_v26')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v26', '.a26', '.repl26', '.down26')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v26', '.a26', '.repl26', '.down26')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v26', '.a26', '.repl26', '.down26')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v26', '.a26', '.repl26', '.down26')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a26', '.a25', '.repl26', '.r_icon_26', '.down26')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl26" @click="Play2('.pl26', '.repl26', '.down26')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a26', '.st26', '.audio_p26_m2')" class="aud2 a26" src="../sound/RDR2/Final Heist.mp3"></audio></button>
			   <button @click="Next2('.a26', '.a27', '.repl26', '.r_icon_26', '.down26')" class="next2"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time2 st26">00:00</p><p class="end_time2">/02:53</p>

			   <span id="speed_aud2" class="choice_speed_26" @click="Show_speed2('.sp_block_26')">x1</span>

			    <div class="Speed_block2 sp_block_26">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_26" @click="First_speed_2('.x_first_26', '.a26', '.choice_speed_26', '.repl26', '.down26')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_26" @click="Second_speed_2('.x_second_26', '.a26', '.choice_speed_26', '.repl26', '.down26')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_26" @click="Third_speed_2('.x_third_26', '.a26', '.choice_speed_26', '.repl26', '.down26')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_26" @click="Fourth_speed_2('.x_fourth_26', '.a26', '.choice_speed_26', '.repl26', '.down26')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_26" @click="Fifth_speed_2('.x_fifth_26', '.a26', '.choice_speed_26', '.repl26', '.down26')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_26" @click="Six_speed_2('.x_six_26', '.a26', '.choice_speed_26', '.repl26', '.down26')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl26" @click="Replay2('.a26', '.r_icon_26')" @mouseover="S2('.repl26')" @mouseout="hide_repeat2('.repl26')">
			   	  <vue-fontawesome class="r_icon_26" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down26" @click="Download2('.down26', 'Red Dead Redemption II - Final Heist', '.d_icon_26')" @mouseover="D2('.down26')" @mouseout="down_hide2('.down26')">
			   	  <vue-fontawesome icon="download" class="d_icon_26" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio2 Aud_t26">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl27', '.down27')">
			   <p class="name2 text_mobile_12">#12 House building</p>

			   <div class="audio_pole_m2 audio_p27_m2" @click="Perek2($event, '.a27', '.audio_p27_m2')" @mouseover="Show_time2('.Aud_t27')" @mousemove="Run_block2($event, '.audio_p27_m2', '.a27', '.Aud_t27')" @mouseout="Time_out2('.Aud_t27')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl27', '.l_of_v27', '.repl27', '.down27')" @mouseover="Over2('.l_of_v27')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v27" @mouseover="Over2('.l_of_v27')" @mouseout="Ov2('.l_of_v27')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v27', '.a27', '.repl27', '.down27')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v27', '.a27', '.repl27', '.down27')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v27', '.a27', '.repl27', '.down27')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v27', '.a27', '.repl27', '.down27')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a27', '.a26', '.repl27', '.r_icon_27', '.down27')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl27" @click="Play2('.pl27', '.repl27', '.down27')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a27', '.st27', '.audio_p27_m2')" class="aud2 a27" src="../sound/RDR2/House Building.mp3"></audio></button>
			   <button @click="Next2('.a27', '.a28', '.repl27', '.r_icon_27', '.down27')" class="next2"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time2 st27">00:00</p><p class="end_time2">/03:39</p>

			   <span id="speed_aud2" class="choice_speed_27" @click="Show_speed2('.sp_block_27')">x1</span>

			    <div class="Speed_block2 sp_block_27">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_27" @click="First_speed_2('.x_first_27', '.a27', '.choice_speed_27', '.repl27', '.down27')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_27" @click="Second_speed_2('.x_second_27', '.a27', '.choice_speed_27', '.repl27', '.down27')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_27" @click="Third_speed_2('.x_third_27', '.a27', '.choice_speed_27', '.repl27', '.down27')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_27" @click="Fourth_speed_2('.x_fourth_27', '.a27', '.choice_speed_27', '.repl27', '.down27')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_27" @click="Fifth_speed_2('.x_fifth_27', '.a27', '.choice_speed_27', '.repl27', '.down27')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_27" @click="Six_speed_2('.x_six_27', '.a27', '.choice_speed_27', '.repl27', 'down27')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl27" @click="Replay2('.a27', '.r_icon_27')" @mouseover="S2('.repl27')" @mouseout="hide_repeat2('.repl27')">
			   	  <vue-fontawesome class="r_icon_27" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down27" @click="Download2('.down27', 'Red Dead Redemption II - House building', '.d_icon_27')" @mouseover="D2('.down27')" @mouseout="down_hide2('.down27')">
			   	  <vue-fontawesome icon="download" class="d_icon_27" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio2 Aud_t27">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl28', '.down28')">
			   <p class="name2 text_mobile_13">#13 American Venom</p>

			   <div class="audio_pole_m2 audio_p28_m2" @click="Perek2($event, '.a28', '.audio_p28_m2')" @mouseover="Show_time2('.Aud_t28')" @mousemove="Run_block2($event, '.audio_p28_m2', '.a28', '.Aud_t28')" @mouseout="Time_out2('.Aud_t28')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2"  @click="Vol2('.pl28', '.l_of_v28', '.repl28', '.down28')" @mouseover="Over2('.l_of_v28')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v28" @mouseover="Over2('.l_of_v28')" @mouseout="Ov2('.l_of_v28')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v28', '.a28', '.repl28', '.down28')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v28', '.a28', '.repl28', '.down28')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v28', '.a28', '.repl28', '.down28')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v28', '.a28', '.repl28', '.down28')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a28', '.a27', '.repl28', '.r_icon_28', '.down28')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl28" @click="Play2('.pl28', '.repl28', '.down28')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a28', '.st28', '.audio_p28_m2')" class="aud2 a28" src="../sound/RDR2/American Venom.mp3"></audio></button>
			   <button @click="Next2('.a28', '.a29', '.repl28', '.r_icon_28', '.down28')" class="next2"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time2 st28">00:00</p><p class="end_time2">/06:01</p>

			   <span id="speed_aud2" class="choice_speed_28" @click="Show_speed2('.sp_block_28')">x1</span>

			    <div class="Speed_block2 sp_block_28">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_28" @click="First_speed_2('.x_first_28', '.a28', '.choice_speed_28', '.repl28', '.down28')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_28" @click="Second_speed_2('.x_second_28', '.a28', '.choice_speed_28', '.repl28', '.down28')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_28" @click="Third_speed_2('.x_third_28', '.a28', '.choice_speed_28', '.repl28', '.down28')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_28" @click="Fourth_speed_2('.x_fourth_28', '.a28', '.choice_speed_28', '.repl28', '.down28')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_28" @click="Fifth_speed_2('.x_fifth_28', '.a28', '.choice_speed_28', '.repl28', '.down28')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_28" @click="Six_speed_2('.x_six_28', '.a28', '.choice_speed_28', '.repl28', '.down28')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl28" @click="Replay2('.a28', '.r_icon_28')" @mouseover="S2('.repl28')" @mouseout="hide_repeat2('.repl28')">
			   	  <vue-fontawesome class="r_icon_28" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down28" @click="Download2('.down28', 'Red Dead Redemption II - American Venom', '.d_icon_28')" @mouseover="D2('.down28')" @mouseout="down_hide2('.down28')">
			   	  <vue-fontawesome icon="download" class="d_icon_28" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio2 Aud_t28">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl29', '.down29')">
			   <p class="name2">#14 My Last Son</p>

			   <div class="audio_pole_m2 audio_p29_m2" @click="Perek2($event, '.a29', '.audio_p29_m2')" @mouseover="Show_time2('.Aud_t29')" @mousemove="Run_block2($event, '.audio_p29_m2', '.a29', '.Aud_t29')" @mouseout="Time_out2('.Aud_t29')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl29', '.l_of_v29', '.repl29', '.down29')" @mouseover="Over2('.l_of_v29')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v29" @mouseover="Over2('.l_of_v29')" @mouseout="Ov2('.l_of_v29')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v29', '.a29', '.repl29', '.down29')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v29', '.a29', '.repl29', '.down29')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v29', '.a29', '.repl29', '.down29')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v29', '.a29', '.repl29', '.down29')"></div>
			   </div> 

			   <button class="prev2" @click="Prev2('.a29', '.a28', '.repl29', '.r_icon_29', '.down29')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl29" @click="Play2('.pl29', '.repl29', '.down29')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud2 a29" @timeupdate="Update2('.a29', '.st29', '.audio_p29_m2')" src="../sound/RDR2/My Last Son.mp3"></audio></button>
			   <button class="next2" @click="Next2('.a29', '.a30', '.repl29', '.r_icon_29', '.down29')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			     <p class="start_time2 st29">00:00</p><p class="end_time2">/02:26</p>

			   <span id="speed_aud2" class="choice_speed_29" @click="Show_speed2('.sp_block_29')">x1</span>

			    <div class="Speed_block2 sp_block_29">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_29" @click="First_speed_2('.x_first_29', '.a29', '.choice_speed_29', '.repl29', '.down29')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_29" @click="Second_speed_2('.x_second_29', '.a29', '.choice_speed_29', '.repl29', '.down29')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_29" @click="Third_speed_2('.x_third_29', '.a29', '.choice_speed_29', '.repl29', '.down29')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_29" @click="Fourth_speed_2('.x_fourth_29', '.a29', '.choice_speed_29', '.repl29', '.down29')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_29" @click="Fifth_speed_2('.x_fifth_29', '.a29', '.choice_speed_29', '.repl29', '.down29')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_29" @click="Six_speed_2('.x_six_29', '.a29', '.choice_speed_29', '.repl29', 'down29')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl29" @click="Replay2('.a29', '.r_icon_29')" @mouseover="S2('.repl29')" @mouseout="hide_repeat2('.repl29')">
			   	  <vue-fontawesome class="r_icon_29" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down29" @click="Download2('.down29', 'Red Dead Redemption II - My Last Son', '.d_icon_29')" @mouseover="D2('.down29')" @mouseout="down_hide2('.down29')">
			   	  <vue-fontawesome icon="download" class="d_icon_29" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio2 Aud_t29">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block2" @mouseover="show_repeat2('.repl30', '.down30')">
			   <p class="name2 t6 text_mobile_15">#15 That's the way it is(High hon)</p>

			   <div class="audio_pole_m2 audio_p30_m2" @click="Perek2($event, '.a30', '.audio_p30_m2')" @mouseover="Show_time2('.Aud_t30')" @mousemove="Run_block2($event, '.audio_p30_m2', '.a30', '.Aud_t30')" @mouseout="Time_out2('.Aud_t30')">
				   <div class="aud_p2"></div>
			   </div>

			   <button id="vol2" @click="Vol2('.pl30', '.l_of_v30', '.repl30', '.down30')" @mouseouver="Over2('.l_of_v30')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol2 l_of_v30" @mouseover="Over2('.l_of_v30')" @mouseout="Ov2('.l_of_v30')">
			   	  <div class="VL_1" @click="C1_2('.l_of_v30', '.a30', '.repl30', '.down30')"></div>
			   	  <div class="VL_2" @click="C2_2('.l_of_v30', '.a30', '.repl30', '.down30')"></div>
			   	  <div class="VL_3" @click="C3_2('.l_of_v30', '.a30', '.repl30', '.down30')"></div>
			   	  <div class="VL_4" @click="C4_2('.l_of_v30', '.a30', '.repl30', '.down30')"></div>
			   </div>

			   <button class="prev2" @click="Prev2('.a30', '.a29', '.repl30', '.r_icon_30', '.down30')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play2 pl30" @click="Play2('.pl30', '.repl30', '.down30')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio @timeupdate="Update2('.a30', '.st30', '.audio_p30_m2')" class="aud2 a30" src="../sound/RDR2/That the way it is (High honor).mp3"></audio></button>
			   <button class="next2" @click="Next2('.a30', '.a1', '.repl30', '.r_icon_30', '.down30')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time2 st30">00:00</p><p class="end_time2">/03:11</p>

			   <span id="speed_aud2" class="choice_speed_30" @click="Show_speed2('.sp_block_30')">x1</span>

			    <div class="Speed_block2 sp_block_30">
			   	   <div class="contain2">
			   	   	  <div class="X_25 b2 x_first_30" @click="First_speed_2('.x_first_30', '.a30', '.choice_speed_30', '.repl30', '.down30')"><p>x.25</p></div>
			   	      <div class="X_5 b2 x_second_30" @click="Second_speed_2('.x_second_30', '.a30', '.choice_speed_30', '.repl30', '.down30')"><p>x.5</p></div>
			   	      <div class="X_1 b2 x_third_30" @click="Third_speed_2('.x_third_30', '.a30', '.choice_speed_30', '.repl30', '.down30')"><p>x1</p></div>
			   	      <div class="X_1_25 b2 x_fourth_30" @click="Fourth_speed_2('.x_fourth_30', '.a30', '.choice_speed_30', '.repl30', '.down30')"><p>x1.25</p></div>
			   	      <div class="X_15 b2 x_fifth_30" @click="Fifth_speed_2('.x_fifth_30', '.a30', '.choice_speed_30', '.repl30', '.down30')"><p>x1.5</p></div>
			   	      <div class="X_2 b2 x_six_30" @click="Six_speed_2('.x_six_30', '.a30', '.choice_speed_30', '.repl30', '.down30')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button2 repl30" @click="Replay2('.a30', '.r_icon_30')" @mouseover="S2('.repl30')" @mouseout="hide_repeat2('.repl30')">
			   	  <vue-fontawesome class="r_icon_30" icon="retweet" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Download_button2 down30" @click="Download2('.down30', 'Red Dead Redemption II - That the way it is (High honor)', '.d_icon_30')" @mouseover="D2('.down30')" @mouseout="down_hide2('.down30')">
			   	  <vue-fontawesome icon="download" class="d_icon_30" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio2 Aud_t30">
			   	   <span id="t2">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>
    export default {
    	name: "Red_dead",
    	methods: {
    	 Play2(el2, Repl_elem_2, Down_1) {
      	 let vl = document.querySelector(el2);
      	 let opov_1_block = document.querySelector('.opoveshenie_block');
      	 let opov_1_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_1 = document.querySelector(Repl_elem_2);
      	 let DOWN_ELEM_1 = document.querySelector(Down_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_1_block.children[0].children[0].textContent = `${opov_1_name} - играет`;

            REPL_ELEM_1.classList.add('sh6');
            DOWN_ELEM_1.classList.add('d_first_anim2');

      	    setTimeout(() => {
               REPL_ELEM_1.classList.remove('sh5');
               DOWN_ELEM_1.classList.remove('d_first_move2');
               REPL_ELEM_1.classList.remove('sh6');
               DOWN_ELEM_1.classList.remove('d_first_anim2');
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
      	    opov_1_block_children_2.src = "../assets/img2/RDR2_button.png";

      	     REPL_ELEM_1.classList.add('sh6');

      	    setTimeout(() => {
               REPL_ELEM_1.classList.remove('sh5');
               REPL_ELEM_1.classList.remove('sh6');
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

      Vol2(el2, lvl1, Repl_elem_2, Down_2) {
      	let vl2 = document.querySelector(el2);
      	let Lvl1 = document.querySelector(lvl1);
      	let opov_1_block = document.querySelector('.opoveshenie_block');
      	let opov_1_name = vl2.parentElement.children[0].textContent;
      	let REPL_ELEM_2 = document.querySelector(Repl_elem_2);
      	let DOWN_ELEM_2 = document.querySelector(Down_2);

      	if(vl2.children[1].volume === 1) {
      		vl2.children[1].volume = 0;

      		Lvl1.children[3].style.background = "white";
      	    Lvl1.children[2].style.background = "white";
      	    Lvl1.children[1].style.background = "white";
      	    Lvl1.children[0].style.background = "white";
            
            opov_1_block.classList.add('show_n_block_anim');
            
            opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 0%`;

            REPL_ELEM_2.classList.add('sh6');
            DOWN_ELEM_2.classList.add('d_first_anim2');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('sh5');
               DOWN_ELEM_2.classList.remove('d_first_move2');
               REPL_ELEM_2.classList.remove('sh6');
               DOWN_ELEM_2.classList.remove('d_first_anim2');
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

            REPL_ELEM_2.classList.add('sh6');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('sh5');
               REPL_ELEM_2.classList.remove('sh6');
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
      Download2(d_button2, d_name2, d_icon2) {
      	if(confirm('Вы правда хотите скачать этот файл?')) {
      	 let down_button2 = document.querySelector(d_button2);
      	 let down_button_audio_address2 = down_button2.parentElement.children[5].children[1].getAttribute('src');
      	 let ICON_D2 = document.querySelector(d_icon2);
         let link2= document.createElement('a');
         let opov_2_block = document.querySelector('.opoveshenie_block');
 
         link2.setAttribute('href', `${down_button_audio_address2}`);
         link2.setAttribute('download', `${d_name2}.mp3`);
         link2.click();
         return true;

         ICON_D2.style.color = 'gold';
         down_button2.classList.add('.d_first_anim2');

         setTimeout(() => {
         	down_button2.classList.add('.d_first_move2');
            ICON_D2.style.color = 'white';
            down_button2.classList.remove('.d_first_anim2');
         }, 1100);

         setTimeout(() => {
            opov_2_block.classList.add('show_n_block');
         }, 710); 

         setTimeout(() => {
            opov_2_block.classList.add('fokus');
         }, 3710);

         setTimeout(() => {
            opov_2_block.classList.add('hide_block');  
            opov_2_block.classList.remove('show_n_block_anim');
            opov_2_block.classList.remove('show_n_block'); 
            opov_2_block.classList.remove('fokus');
            opov_2_block.classList.remove('hide_block');
         }, 4910);
        } 
      }, 

      Over2(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('Sh');
      },

      Ov2(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('Sh');
      },

      C1_2(el5, volm1, Repl_elem_3, Down_3) {
      	  let vl5 = document.querySelector(el5);
          let vol1 = document.querySelector(volm1);
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = vl5.parentElement.children[0].textContent;
      	  let REPL_ELEM_3 = document.querySelector(Repl_elem_3);
      	  let DOWN_ELEM_3 = document.querySelector(Down_3);

      	  vl5.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl5.children[1].style.background = "white";
      	  vl5.children[2].style.background = "white";
      	  vl5.children[3].style.background = "white";

      	  vol1.volume = 0.25;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 25%`;

          REPL_ELEM_3.classList.add('sh6');
          DOWN_ELEM_3.classList.add('d_first_anim2');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('sh5');
            DOWN_ELEM_3.classList.remove('d_first_move2');
            REPL_ELEM_3.classList.remove('sh6');
            DOWN_ELEM_3.classList.remove('d_first_anim2');
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

      C2_2(el6, volm2, Repl_elem_4, Down_4) {
          let vl6 = document.querySelector(el6);
          let vol2 = document.querySelector(volm2);
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = vl6.parentElement.children[0].textContent;
      	  let REPL_ELEM_4 = document.querySelector(Repl_elem_4);
      	  let DOWN_ELEM_4 = document.querySelector(Down_4);

      	  vl6.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl6.children[2].style.background = "white";
      	  vl6.children[3].style.background = "white";

          vol2.volume = 0.55;

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 55%`;

           REPL_ELEM_4.classList.add('sh6');
           DOWN_ELEM_4.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('sh5');
            DOWN_ELEM_4.classList.remove('d_first_move2');
            REPL_ELEM_4.classList.remove('sh6');
            DOWN_ELEM_4.classList.remove('d_first_anim2');
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

      C3_2(el7, volm3, Repl_elem_5, Down_5) {
          let vl7 = document.querySelector(el7);
          let vol3 = document.querySelector(volm3);
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = vl7.parentElement.children[0].textContent;
      	  let REPL_ELEM_5 = document.querySelector(Repl_elem_5);
      	  let DOWN_ELEM_5 = document.querySelector(Down_5);
          
      	  vl7.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[0].style.background = "rgba(51, 204, 0, .8)";
      	  vl7.children[3].style.background = "white";

      	  vol3.volume = 0.85;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 85%`;

           REPL_ELEM_5.classList.add('sh6');
           DOWN_ELEM_5.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('sh5');
            DOWN_ELEM_5.classList.remove('d_first_move2');
            REPL_ELEM_5.classList.remove('sh6');
            DOWN_ELEM_5.classList.remove('d_first_anim2');
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


      C4_2(el8, volm4, Repl_elem_6, Down_6) {
          let vl8 = document.querySelector(el8);
          let vol4 = document.querySelector(volm4);
           let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = vl8.parentElement.children[0].textContent;
      	  let REPL_ELEM_6 = document.querySelector(Repl_elem_6);
      	  let DOWN_ELEM_6 = document.querySelector(Down_6);

      	  vl8.children[3].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[2].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[1].style.background = "rgba(51, 204, 0, .8)";
      	  vl8.children[0].style.background = "rgba(51, 204, 0, .8)";

      	  vol4.volume = 1;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Громкость ${opov_1_name} - 100%`;

          REPL_ELEM_6.classList.add('sh6');
          DOWN_ELEM_6.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('sh5');
            DOWN_ELEM_6.classList.remove('d_first_move2');
            REPL_ELEM_6.classList.remove('sh6');
            DOWN_ELEM_6.classList.remove('d_first_anim2');
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

      Update2(volm5, time_b1, prog) {
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

      Prev2(AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_1, DWN_1) {
      	 let aud_1 = document.querySelector(AUDIO_1);
      	 let aud_2 = document.querySelector(AUDIO_2);
      	 let REPL_1 = document.querySelector(REPLAY_1);
      	 let REPL_icon_1 = document.querySelector(Rep_icon_1);
      	 let DOWN_1 = document.querySelector(DWN_1);
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

         REPL_1.classList.add('sh6');
         DOWN_1.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_1.classList.remove('sh5');
            DOWN_1.classList.remove('d_first_move2');
            REPL_1.classList.remove('sh6');
            DOWN_1.classList.remove('d_first_move2');
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

      Next2(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DWN_2) {
      	 let aud_3 = document.querySelector(AUDIO_3);
      	 let aud_4 = document.querySelector(AUDIO_4);
      	 let REPL_2 = document.querySelector(REPLAY_2);
      	 let REPL_icon_2 = document.querySelector(Rep_icon_2);
      	 let DOwn_2 = document.querySelector(DWN_2);
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

         REPL_2.classList.add('sh6');
         DOwn_2.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_2.classList.remove('sh5');
            DOwn_2.classList.remove('d_first_move2');
            REPL_2.classList.remove('sh6');
            DOwn_2.classList.remove('d_first_anim2');
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

      Perek2(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time2(t_block1) {
          let time_block = document.querySelector(t_block1);
      	  time_block.classList.add('T_aud_1');
      },

      Time_out2(t_block2) {
      	  let time_block = document.querySelector(t_block2);
      	  time_block.classList.remove('T_aud_1');
      },

      Run_block2(event, M_Pole, Aud3, t_block4) {
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
          
      show_repeat2(n_rep, d_rep2) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep2);

          nrep.classList.add('sh5');
          drep.classList.add('d_first_move2');
      },

      hide_repeat2(rep2) {
      	  let replay2 = document.querySelector(rep2);
      	  replay2.classList.add('sh6');

      	  setTimeout(() => {
             replay2.classList.remove('sh5');
             replay2.classList.remove('sh6');
      	  }, 1100);
      },

      down_hide2(dow3) {
         let d2 = document.querySelector(dow3);

         d2.classList.add('d_first_anim2');

         setTimeout(() => {
            d2.classList.remove('d_first_move2');
            d2.classList.remove('d_first_anim2');
         }, 1100);
      },

      Replay2(AUD4, Icon1) {
      	  let aud2 = document.querySelector(AUD4);
      	  let icon2 = document.querySelector(Icon1);
      	  let opov_2_block = document.querySelector('.opoveshenie_block');
      	  let opov_2_name = aud2.parentElement.parentElement.children[0].textContent;

          if(aud2.loop === false) {
      	    aud2.loop = true;
      	    icon2.style.color = '#FFE70B';

      	    opov_2_block.classList.add('show_n_block_anim');
            
            opov_2_block.children[0].children[0].textContent = `${opov_2_name} поставлен на повторное проигрывание`;

            setTimeout(() => {
               opov_2_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_2_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_2_block.classList.add('hide_block');  
               opov_2_block.classList.remove('show_n_block_anim');
               opov_2_block.classList.remove('show_n_block'); 
               opov_2_block.classList.remove('fokus');
               opov_2_block.classList.remove('hide_block');
            }, 4910); 
      	  } else {
      	  	aud2.loop = false;
      	  	icon2.style.color = 'white';

            opov_2_block.classList.add('show_n_block_anim');
            
            opov_2_block.children[0].children[0].textContent = `${opov_2_name} снят с повторного проигрывание`;

            setTimeout(() => {
               opov_2_block.classList.add('show_n_block');
            }, 710); 

            setTimeout(() => {
               opov_2_block.classList.add('fokus');
            }, 3710);

            setTimeout(() => {
               opov_2_block.classList.add('hide_block');  
               opov_2_block.classList.remove('show_n_block_anim');
               opov_2_block.classList.remove('show_n_block'); 
               opov_2_block.classList.remove('fokus');
               opov_2_block.classList.remove('hide_block');
            }, 4910);
      	  }
      },

      //Auto-pl function right here

      S2(REP3) {
      	  let rep = document.querySelector(REP3);
      	  rep.classList.add('sh5');
      },

      D2(d_2) {
          let down_2 = document.querySelector(d_2);
          down_2.classList.add('d_first_move2');  
      },

      Show_speed2(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl_2');
      },

      First_speed_2(first, a, ch_one, Repl_elem_7, Down_element_7) {
      	  let first_speed = document.querySelector(first); //x_25
      	  let first_a = document.querySelector(a);
      	  let choice_one = document.querySelector(ch_one); //Идея с переменными из data не сработала, в итоге дикий костыль :(
          choice_one.textContent = first_speed.children[0].textContent;
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = first_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_7 = document.querySelector(Repl_elem_7);
      	  let DOWN_ELEM_seven = document.querySelector(Down_element_7);

          first_a.playbackRate = .25;

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X.25`;

           REPL_ELEM_7.classList.add('sh6');
           DOWN_ELEM_seven.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('sh5');
            DOWN_ELEM_seven.classList.remove('d_first_move2');
            REPL_ELEM_7.classList.remove('sh6');
            DOWN_ELEM_seven.classList.remove('d_first_anim2');
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

      Second_speed_2(second, a2, ch_two, Repl_elem_8, Down_element_8) {
      	  let second_speed = document.querySelector(second); //x_5
      	  let second_a = document.querySelector(a2);
      	  let choice_two = document.querySelector(ch_two);
          choice_two.textContent = second_speed.children[0].textContent;
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = second_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_8 = document.querySelector(Repl_elem_8);
      	  let DOWN_ELEM_eight = document.querySelector(Down_element_8);

          second_a.playbackRate = .5;

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X.5`;

           REPL_ELEM_8.classList.add('sh6');
           DOWN_ELEM_eight.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('sh5');
            DOWN_ELEM_eight.classList.remove('d_first_move2');
            REPL_ELEM_8.classList.remove('sh6');
            DOWN_ELEM_eight.classList.remove('d_first_anim2');
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

      Third_speed_2(third, a3, ch_three, REPL_elem_9, Down_element_9) {
          let third_speed = document.querySelector(third); //x_1
          let third_a = document.querySelector(a3);
          let choice_three = document.querySelector(ch_three);
          choice_three.textContent = third_speed.children[0].textContent;
          let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = third_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_9 = document.querySelector(REPL_elem_9);
      	  let DOWN_ELEM_nine = document.querySelector(Down_element_9);

          third_a.playbackRate = 1;

          opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X1`;

           REPL_ELEM_9.classList.add('sh6');
           DOWN_ELEM_nine.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('sh5');
            DOWN_ELEM_nine.classList.remove('d_first_move2');
            REPL_ELEM_9.classList.remove('sh6');
            DOWN_ELEM_nine.classList.remove('d_first_anim2');
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

      Fourth_speed_2(fourth, a4, ch_four, REPL_elem_10, Down_element_10) {
      	  let fourth_speed = document.querySelector(fourth); //x_1_25
      	  let fourth_a = document.querySelector(a4);
      	  let choice_four = document.querySelector(ch_four);
      	  choice_four.textContent = fourth_speed.children[0].textContent;
      	  let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = fourth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_10 = document.querySelector(REPL_elem_10);
      	  let DOWN_ELEM_ten = document.querySelector(Down_element_10);

      	  fourth_a.playbackRate = 1.25;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X1.25`;

           REPL_ELEM_10.classList.add('sh6');
           DOWN_ELEM_ten.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('sh5');
            DOWN_ELEM_ten.classList.remove('d_first_move2');
            REPL_ELEM_10.classList.remove('sh6');
            DOWN_ELEM_ten.classList.remove('d_first_anim2');
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

      Fifth_speed_2(fifth, a5, ch_five, Repl_elem_11, Down_element_11) {
      	  let fifth_speed = document.querySelector(fifth); //x_15
      	  let fifth_a = document.querySelector(a5);
      	  let choice_five = document.querySelector(ch_five);
      	  choice_five.textContent = fifth_speed.children[0].textContent;
      	  let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = fifth_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_11 = document.querySelector(Repl_elem_11);
      	  let DOWN_ELEM_eleven = document.querySelector(Down_element_11);

      	  fifth_a.playbackRate = 1.5;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X1.5`;

           REPL_ELEM_11.classList.add('sh6');
           DOWN_ELEM_eleven.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('sh5');
            DOWN_ELEM_eleven.classList.remove('d_first_move2');
            REPL_ELEM_11.classList.remove('sh6');
            DOWN_ELEM_eleven.classList.remove('d_first_anim2');
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

      Six_speed_2(six, a6, ch_six, Repl_elem_12, Down_element_12) {
      	  let six_speed = document.querySelector(six); //x_2
      	  let six_a = document.querySelector(a6);
      	  let choice_six = document.querySelector(ch_six);
      	  choice_six.textContent = six_speed.children[0].textContent;
      	  let opov_1_block = document.querySelector('.opoveshenie_block');
      	  let opov_1_name = six_a.parentElement.parentElement.children[0].textContent;
      	  let REPL_ELEM_12 = document.querySelector(Repl_elem_12);
      	  let opov_1_block_children_2 = opov_1_block.children[1].children[0];
      	  let DOWN_ELEM_twelve = document.querySelector(Down_element_12);

      	  six_a.playbackRate = 2;

      	  opov_1_block.classList.add('show_n_block_anim');
            
          opov_1_block.children[0].children[0].textContent = `Скорость воспроизведения ${opov_1_name} - X2`;

           REPL_ELEM_12.classList.add('sh6');
           DOWN_ELEM_twelve.classList.add('d_first_anim2');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('sh5');
            DOWN_ELEM_twelve.classList.remove('d_first_move2');
            REPL_ELEM_12.classList.remove('sh6');
            DOWN_ELEM_twelve.classList.remove('d_first_anim2');
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

	.side_screen2 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/RDR2_background.jpg");
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

    .side_screen2 span {
    	position: absolute;
    	left: 225px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block2 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block2 > .sound_block2 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block2 .sound_block2 .name2 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block2 .sound_block2 .t1 {
    	left: 105px;
    }

    .audio_collection_block2 .sound_block2 .t2 {
    	left: 115px;
    }

    .audio_collection_block2 .sound_block2 .t3 {
    	left: 85px;
    }

    .audio_collection_block2 .sound_block2 .t4 {
    	left: 5px;
    }

    .audio_collection_block2 .sound_block2 .t5 {
    	left: 2px;
    }

    .audio_collection_block2 .sound_block2 .t6 {
    	left: 30px;
    }

    .audio_collection_block2 .sound_block2 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block2 .sound_block2 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block2 .sound_block2 .audio_pole_m2 {
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

    .audio_collection_block2 .sound_block2 .audio_pole_m2:hover {
    	opacity: .7;
    }

    .audio_collection_block2 .sound_block2 .audio_pole_m2 .aud_p2 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	background: yellow;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block2 .sound_block2 #vol2 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block2 .sound_block2 .l_of_vol2 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;

    }

    .audio_collection_block2 .sound_block2 .l_of_vol2.Sh {
    	display: block;
    }


    .audio_collection_block2 .sound_block2 .l_of_vol2 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block2 .sound_block2 .l_of_vol2 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.3);

    }

    .audio_collection_block2 .sound_block2 .l_of_vol2 .VL_1 {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block2 .sound_block2 .l_of_vol2 .VL_2 {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block2 .sound_block2 .l_of_vol2 .VL_3 {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block2 .sound_block2 .l_of_vol2 .VL_4 {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block2 .sound_block2 .prev2 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block2 .sound_block2 .prev2:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block2 .sound_block2 .play2 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block2 .sound_block2 .next2 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block2 .sound_block2 .next2:hover {
    	transform: translateX(5px);
    }

     .audio_collection_block2 .sound_block2 .start_time2 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block2 .sound_block2 .end_time2 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block2 .sound_block2 .Replay_button2 {
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

    .audio_collection_block2 .sound_block2 .Replay_button2.sh5 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block2 .sound_block2 .Replay_button2.sh6 {
        animation: spek2 1s linear 1;
    	transform: scale(0);
    }

    @keyframes spek2 {
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

    .audio_collection_block2 .sound_block2 .Replay_button2:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block2 .sound_block2 .Download_button2 {
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

    .audio_collection_block2 .sound_block2 .Download_button2:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block2 .sound_block2 .Download_button2.d_first_move2 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block2 .sound_block2 .Download_button2.d_first_anim2 {
    	animation: down2 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down2 {
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

    .audio_collection_block2 .sound_block2 .Time_of_audio2 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block2 .sound_block2 .Time_of_audio2 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block2 .sound_block2 .Time_of_audio2.T_aud_1 {
    	display: block;
    }

    .audio_collection_block2 .sound_block2 #speed_aud2 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block2 .sound_block2 .Speed_block2 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block2 .sound_block2 .Speed_block2.tgl_2 {
    	display: block;
    }
    
    .audio_collection_block2 .sound_block2 .Speed_block2 .contain2 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block2 .sound_block2 .Speed_block2 .contain2 .b2 {
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

    .audio_collection_block2 .sound_block2 .Speed_block2 .contain2 .b2:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block2 .sound_block2 .Speed_block2 .contain2 .b2 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block2 .sound_block2 .Speed_block2 .contain2 .b2 p:hover {
        color: black;
    }

    /* Phone(Vertical) */
    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
    	.side_screen2 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen2 span {
    		font-size: 55px;
    		left: 145px;
    	}

    	.audio_collection_block2 > .sound_block2 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block2 .sound_block2 .audio_pole_m2 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block2 .sound_block2 .audio_pole_m2 .aud_p2 {
    		height: 9.5px;
    	}

    	.audio_collection_block2 .sound_block2 #vol2 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block2 .sound_block2 .play2 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block2 .sound_block2 .prev2 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block2 .sound_block2 .next2 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block2 .sound_block2 .name2 {
    	   left: 255px;
        }

        .audio_collection_block2 .sound_block2 .Time_of_audio2 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block2 .sound_block2 .Time_of_audio2 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block2 .sound_block2 .start_time2 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block2 .sound_block2 .end_time2 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block2 .sound_block2 #speed_aud2 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block2 .sound_block2 .Speed_block2 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block2 .sound_block2 .Speed_block2 .contain2 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block2 .sound_block2 .Speed_block2 .contain2 .b2 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block2 .sound_block2 .Speed_block2 .contain2 .b2 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block2 .sound_block2 .Replay_button2 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block2 .sound_block2 .Replay_button2.sh5 {
    	    margin-left: 850px;
        }

        .audio_collection_block2 .sound_block2 .Download_button2 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block2 .sound_block2 .l_of_vol2 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block2 .sound_block2 .l_of_vol2 > div {
    	   width: 8px;
        }

        .audio_collection_block2 .sound_block2 .l_of_vol2 .VL_1 {
    	   height: 18px;
           left: 0;
           top: 9px;
        }

        .audio_collection_block2 .sound_block2 .l_of_vol2 .VL_2 {
    	   height: 24px;
    	   top: 6px;
    	   left: 16px;
        }

        .audio_collection_block2 .sound_block2 .l_of_vol2 .VL_3 {
           height: 30px;
           top: 3px;
           left: 33px;
        }

        .audio_collection_block2 .sound_block2 .l_of_vol2 .VL_4 {
           height: 36px;
           top: 0;
           left: 50px;
        }

        .audio_collection_block2 .sound_block2 .text_mobile_1 {
          left: 160px;   
        }

        .audio_collection_block2 .sound_block2 .text_mobile_6 {
        	left: 150px;
        }

        .audio_collection_block2 .sound_block2 .text_mobile_8 {
        	left: 135px;
        }

        .audio_collection_block2 .sound_block2 .text_mobile_9 {
        	left: 60px;
        }

        .audio_collection_block2 .sound_block2 .text_mobile_10 {
        	left: 65px;
        }

        .audio_collection_block2 .sound_block2 .text_mobile_12 {
        	left: 210px;
        }

        .audio_collection_block2 .sound_block2 .text_mobile_13 {
        	left: 190px;
        }

        .audio_collection_block2 .sound_block2 .text_mobile_15 {
        	left: 80px;
        }
    }

</style>