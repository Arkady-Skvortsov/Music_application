<template>
	<div class="side_screen6">
		<span>Death Stranding music</span>
		<div class="audio_collection_block6">
		    <div class="sound_block6" @mouseover="show_repeat6('.repl76', '.down76')">
			   <p class="name6 TE1 text5_mobile_1">#1 Gosia</p>

			   <div class="audio_pole_m6 audio_p76_m6" @click="Perek6($event, '.aud76', '.audio_p76_m6')" @mouseover="Show_time6('.Aud_t76')" @mousemove="Run_block6($event, '.audio_p76_m6', '.aud76', '.Aud_t76')" @mouseout="Time_out6('.Aud_t76')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl76', '.l_of_v76', '.repl76', '.down76')" @mouseover="Over6('.l_of_v76')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			   <div class="l_of_vol6 l_of_v76" @mouseover="Over6('.l_of_v76')" @mouseout="Ov6('.l_of_v76')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v76', '.aud76', '.repl76', '.down76')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v76', '.aud76', '.repl76', '.down76')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v76', '.aud76', '.repl76', '.down76')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v76', '.aud76', '.repl76', '.down76')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud76', '.aud90', '.repl76', '.r_icon_76', '.down76')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl76" @click="Play6('.pl76', '.repl76', '.down76')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud76" @timeupdate="Update6('.aud76', '.st76', '.audio_p76_m6')" src="../sound/Death Stranding/Gosia.mp3"></audio></button> 
			   <button class="next6" @click="Next6('.aud76', '.aud77', '.repl76', '.r_icon_76', '.down76')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st76">00:00</p><p class="end_time6">/03:40</p>

			   <span id="speed_aud6" class="choice_speed_76" @click="Show_speed6('.sp_block_76')">x1</span>

			   <div class="Speed_block6 sp_block_76">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_76" @click="First_speed_6('.x_first_76', '.aud76', '.choice_speed_76', '.repl76', '.down76')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_76" @click="Second_speed_6('.x_second_76', '.aud76', '.choice_speed_76', '.repl76', '.down76')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_76" @click="Third_speed_6('.x_third_76', '.aud76', '.choice_speed_76', '.repl76', '.down76')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_76" @click="Fourth_speed_6('.x_fourth_76', '.aud76', '.choice_speed_76', '.repl76', '.down76')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_76" @click="Fifth_speed_6('.x_fifth_76', '.aud76', '.choice_speed_76', '.repl76', '.down76')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_76" @click="Six_speed_6('.x_six_76', '.aud76', '.choice_speed_76', '.repl76', '.down76')"><p>x2</p></div>
			   	   </div>
			   </div>

			    <div class="Replay_button6 repl76" @click="Replay6('.aud76', '.r_icon_76')" @mouseover="S6('.repl76')" @mouseout="hide_repeat6('.repl76')">
			   	  <vue-fontawesome icon="retweet" сlass="r_icon_76" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down76" @click="Download6('.down76', 'Death Stranding - Gosia')" @mouseout="down_hide6('.down76')">
			   	  <vue-fontawesome icon="download" class="d_icon_76" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t76">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block6" @mouseover="show_repeat6('.repl77', '.down77')">
			   <p class="name6 text5_mobile_2">#2 I'll keep coming</p>

			   <div class="audio_pole_m6 audio_p77_m6"  @click="Perek6($event, '.aud77', '.audio_p77_m6')" @mouseover="Show_time6('.Aud_t77')" @mousemove="Run_block6($event, '.audio_p77_m6', '.aud77', '.Aud_t77')" @mouseout="Time_out6('.Aud_t77')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl77', '.l_of_v77', '.repl77', '.down77')" @mouseover="Over6('.l_of_v77')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v77" @mouseover="Over6('.l_of_v77')" @mouseout="Ov6('.l_of_v77')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v77', '.aud77', '.repl77', '.down77')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v77', '.aud77', '.repl77', '.down77')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v77', '.aud77', '.repl77', '.down77')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v77', '.aud77', '.repl77', '.down77')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud77', '.aud76', '.repl77', '.r_icon_77', '.down77')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl77" @click="Play6('.pl77', '.repl77', '.down77')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud77" @timeupdate="Update6('.aud77', '.st77', '.audio_p77_m6')" src="../sound/Death Stranding/Ill Keep Coming.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud77', '.aud78', '.repl77', '.r_icon_77', '.down77')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st77">00:00</p><p class="end_time6">/05:50</p>

			   <span id="speed_aud6" class="chocie_speed_77" @click="Show_speed6('.sp_block_77')">x1</span>

			   <div class="Speed_block6 sp_block_77">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_77" @click="First_speed_6('.x_first_77', '.aud77', '.choice_speed_77', '.repl77', '.down77')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_77" @click="Second_speed_6('.x_second_77', '.aud77', '.choice_speed_77', '.repl77', '.down77')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_77" @click="Third_speed_6('.x_third_77', '.aud77', '.choice_speed_77', '.repl77', '.down77')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_77" @click="Fourth_speed_6('.x_fourth_77', '.aud77', '.choice_speed_77', '.repl77', '.down77')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_77" @click="Fifth_speed_6('.x_fifth_77', '.aud77', '.choice_speed_77', '.repl77', '.down77')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_77" @click="Six_speed_6('.x_six_77', '.aud77', '.choice_speed_77', '.repl77', '.down77')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl77" @click="Replay6('.aud77', '.r_icon_77')" @mouseover="S6('.repl77')" @mouseout="hide_repeat6('.repl77')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_77" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down77" @click="Download6('.down77', 'Death Stranding - I`ll Keep Coming')" @mouseout="down_hide6('.down77')">
			   	  <vue-fontawesome icon="download" class="d_icon_77" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t77">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		    <div class="sound_block6" @mouseover="show_repeat6('.repl78', '.down78')">
			   <p class="name6 text5_mobile_3">#3 Because we have to</p>

			   <div class="audio_pole_m6 audio_p78_m6" @click="Perek6($event, '.aud78', '.audio_p78_m6')" @mouseover="Show_time6('.Aud_t78')" @mousemove="Run_block6($event, '.audio_p78_m6', '.aud78', '.Aud_t78')" @mouseout="Time_out6('.Aud_t78')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl78', '.l_of_v78', '.repl78', '.down78')" @mouseover="Over6('.l_of_v78')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v78" @mouseover="Over6('.l_of_v78')" @mouseout="Ov6('.l_of_v78')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v78', '.aud78', '.repl78', '.down78')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v78', '.aud78', '.repl78', '.down78')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v78', '.aud78', '.repl78', '.down78')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v78', '.aud78', '.repl78', '.down78')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud78', '.aud77', '.repl78', '.r_icon_78', '.down78')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl78" @click="Play6('.pl78', '.repl78', '.down78')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud78" @timeupdate="Update6('.aud78', '.st78', '.audio_p78_m6')" src="../sound/Death Stranding/because we have to.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud78', '.aud79', '.repl78', '.r_icon_78', '.down78')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st78">00:00</p><p class="end_time6">/04:39</p>

			   <span id="speed_aud6" class="choice_speed_78" @click="Show_speed6('.sp_block_78')">x1</span>

			   <div class="Speed_block6 sp_block_78">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_78" @click="First_speed_6('.x_first_78', '.aud78', '.choice_speed_78', '.repl78', '.down78')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_78" @click="Second_speed_6('.x_second_78', '.aud78', '.choice_speed_78', '.repl78', '.down78')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_78" @click="Third_speed_6('.x_third_78', '.aud78', '.choice_speed_78', '.repl78', '.down78')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_78" @click="Fourth_speed_6('.x_fourth_78', '.aud78', '.choice_speed_78', '.repl78', '.down78')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_78" @click="Fifth_speed_6('.x_fifth_78', '.aud78', '.choice_speed_78', '.repl78', '.down78')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_78" @click="Six_speed_6('.x_six_78', '.aud78', '.choice_speed_78', '.repl78', '.down78')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl78"  @click="Replay6('.aud78', '.r_icon_78')" @mouseover="S6('.repl78')" @mouseout="hide_repeat6('.repl78')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_78" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down78" @click="Download6('.down78', 'Death Stranding - Because we have to')" @mouseout="down_hide6('.down78')">
			   	  <vue-fontawesome icon="download" class="d_icon_78" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t78">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl79', '.down79')">
			   <p class="name6 text5_mobile_4">#4 Give Up</p>

			   <div class="audio_pole_m6 audio_p79_m6" @click="Perek6($event, '.aud79', '.audio_p79_m6')" @mouseover="Show_time6('.Aud_t79')" @mousemove="Run_block6($event, '.audio_p79_m6', '.aud79', '.Aud_t79')" @mouseout="Time_out6('.Aud_t79')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl79', '.l_of_v79', '.repl79', '.down79')" @mouseover="Over6('.l_of_v79')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v79" @mouseover="Over6('.l_of_v79')" @mouseout="Ov6('.l_of_v79')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v79', '.aud79', '.repl79', '.down79')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v79', '.aud79', '.repl79', '.down79')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v79', '.aud79', '.repl79', '.down79')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v79', '.aud79', '.repl79', '.down79')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud79', '.aud78', '.repl79', '.r_icon_79', '.down79')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl79" @click="Play6('.pl79', '.repl79', '.down79')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud79" @timeupdate="Update6('.aud79', '.st79', '.audio_p79_m6')" src="../sound/Death Stranding/Give Up.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud79', '.aud80', '.repl79', '.r_icon_79', '.down79')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st79">00:00</p><p class="end_time6">/03:06</p>

			   <span id="speed_aud6" class="chocie_speed_79" @click="Show_speed6('.sp_block79')">x1</span>

			   <div class="Speed_block6 sp_block_79">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_79" @click="First_speed_6('.x_first_79', '.aud79', '.choice_speed_79', '.repl79', '.down79')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_79" @click="Second_speed_6('.x_first_79', '.aud79', '.choice_speed_79', '.repl79', '.down79')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_79" @click="Third_speed_6('.x_third_79', '.aud79', '.choice_speed_79', '.repl79', '.down79')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_79" @click="Fourth_speed_6('.x_fourth_79', '.aud79', '.choice_speed_79', '.repl79', '.down79')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_79" @click="Fifth_speed_6('.x_fifth_79', '.aud79', '.choice_speed_79', '.repl79', '.down79')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_79" @click="Six_speed_6('.x_six_79', '.aud79', '.choice_speed_79', '.repl79', '.down79')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl79" @click="Replay6('.aud79', '.r_icon_79')" @mouseover="S6('.repl79')" @mouseout="hide_repeat6('.repl79')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_79" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down79" @click="Download6('.down79', 'Death Stranding - Give Up')" @mouseout="down_hide6('.down79')">
			   	  <vue-fontawesome icon="download" class="d_icon_79" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t79">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl80', '.down80')">
			   <p class="name6 TE2 text5_mobile_5">#5 Lou</p>

			   <div class="audio_pole_m6 audio_p80_m6" @click="Perek6($event, '.aud80', '.audio_p80_m6')" @mouseover="Show_time6('.Aud_t80')" @mousemove="Run_block6($event, '.audio_p80_m6', '.aud80', '.Aud_t80')" @mouseout="Time_out6('.Aud_t80')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl80', '.l_of_v80', '.repl80', '.down80')" @mouseover="Over6('.l_of_v80')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v80" @mouseover="Over6('.l_of_v80')" @mouseout="Ov6('.l_of_v80')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v80', '.aud80', '.repl80', '.down80')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v80', '.aud80', '.repl80', '.down80')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v80', '.aud80', '.repl80', '.down80')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v80', '.aud80', '.repl80', '.down80')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud80', '.aud79', '.repl80', '.r_icon_80', '.down80')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl80" @click="Play6('.pl80', '.repl80', '.down80')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud80" @timeupdate="Update6('.aud80', '.st80', '.audio_p80_m6')" src="../sound/Death Stranding/Lou.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud80', '.aud81', '.repl80', '.r_icon_80', '.down80')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st80">00:00</p><p class="end_time6">/03:08</p>

			   <span id="speed_aud6" class="choice_speed_80" @click="Show_speed6('.sp_block_80')">x1</span>

			   <div class="Speed_block6 sp_block_80">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_80" @click="First_speed_6('.x_first_80', '.aud80', '.choice_speed_80', '.repl80', '.down80')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_80" @click="Second_speed_6('.x_second_80', '.aud80', '.choice_speed_80', '.repl80', '.down80')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_80" @click="Third_speed_6('.x_third_80', '.aud80', '.choice_speed_80', '.repl80', '.down80')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_80" @click="Fourth_speed_6('.x_fourth_80', '.aud80', '.choice_speed_80', '.repl80', '.down80')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_80" @click="Fifth_speed_6('.x_fifth_80', '.aud80', '.choice_speed_80', '.repl80', '.down80')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_80" @click="Six_speed_6('.x_six_80', '.aud80', '.choice_speed_80', '.repl80', '.down80')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl80" @click="Replay6('.aud80', '.r_icon_80')" @mouseover="S6('.repl80')" @mouseout="hide_repeat6('.repl80')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_80" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down80" @click="Download6('.down80', 'Death Stranding - Lou')" @mouseout="down_hide6('.down80')">
			   	  <vue-fontawesome icon="download" class="d_icon_80" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio6 Aud_t80">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl81', '.down81')">
			   <p class="name6">#6 Not Around</p>

			   <div class="audio_pole_m6 audio_p81_m6" @click="Perek6($event, '.aud81', '.audio_p81_m6')" @mouseover="Show_time6('.Aud_t81')" @mousemove="Run_block6($event, '.audio_p81_m6', '.aud81', '.Aud_t81')" @mouseout="Time_out6('.Aud_t81')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6"  @click="Vol6('.pl81', '.l_of_v81', '.repl81', '.down81')" @mouseover="Over6('.l_of_v81')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v81" @mouseover="Over6('.l_of_v81')" @mouseout="Ov6('.l_of_v81')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v81', '.aud81', '.repl81', '.down81')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v81', '.aud81', '.repl81', '.down81')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v81', '.aud81', '.repl81', '.down81')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v81', '.aud81', '.repl81', '.down81')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud81', '.aud80', '.repl81', '.r_icon_81', '.down81')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl81" @click="Play6('.pl81', '.repl81', '.down81')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud81" @timeupdate="Update6('.aud81', '.st81', '.audio_p81_m6')" src="../sound/Death Stranding/Not Around.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud81', '.aud82', '.repl81', '.r_icon_81', '.down81')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st81">00:00</p><p class="end_time6">/05:15</p>

			   <span id="speed_aud6" class="choice_speed_81" @click="Show_speed6('.sp_block81')">x1</span>

			   <div class="Speed_block6 sp_block_81">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_81" @click="First_speed_6('.x_first_81', '.aud81', '.choice_speed_81', '.repl81', '.down81')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_81" @click="Second_speed_6('.x_second_81', '.aud81', '.choice_speed_81', '.repl81', '.down81')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_81" @click="Third_speed_6('.x_third_81', '.aud81', '.choice_speed_81', '.repl81', '.down81')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_81" @click="Fourth_speed_6('.x_fourth_81', '.aud81', '.choice_speed_81', '.repl81', '.down81')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_81" @click="Fifth_speed_6('.x_fifth_81', '.aud81', '.choice_speed_81', '.repl81', '.down81')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_81" @click="Six_speed_6('.x_six_81', '.aud81', '.choice_speed_81', '.repl81', '.down81')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl81" @click="Replay6('.aud81', '.r_icon_81')" @mouseover="S6('.repl81')" @mouseout="hide_repeat6('.repl81')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_81" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down81" @click="Download6('.down81', 'Death Stranding - Not Around')" @mouseout="down_hide6('.down81')">
			   	  <vue-fontawesome icon="download" class="d_icon_81" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio6 Aud_t81">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl82', '.down82')">
			   <p class="name6 text5_mobile_7">#7 Fragile</p>

			   <div class="audio_pole_m6 audio_p82_m6" @click="Perek6($event, '.aud82', '.audio_p82_m6')" @mouseover="Show_time6('.Aud_t82')" @mousemove="Run_block6($event, '.audio_p82_m6', '.aud82', '.Aud_t82')" @mouseout="Time_out6('.Aud_t82')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl82', '.l_of_v82', '.repl82', '.down82')" @mouseover="Over6('.l_of_v82')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v82" @mouseover="Over6('.l_of_v82')" @mouseout="Ov6('.l_of_v82')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v82', '.aud82', '.repl82', '.down82')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v82', '.aud82', '.repl82', '.down82')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v82', '.aud82', '.repl82', '.down82')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v82', '.aud82', '.repl82', '.down82')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud82', '.aud81', '.repl82', '.r_icon_82', '.down82')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl82" @click="Play6('.pl82', '.repl82', '.down82')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud82" @timeupdate="Update6('.aud82', '.st82', '.audio_p82_m6')" src="../sound/Death Stranding/Fragile.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud82', '.aud83', '.repl82', '.r_icon_82', '.down82')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st82">00:00</p><p class="end_time6">/03:34</p>

			   <span id="speed_aud6" class="choice_speed_82" @click="Show_speed6('.sp_block_82')">x1</span>

			   <div class="Speed_block6 sp_block_82">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_82" @click="First_speed_6('.x_first_82', '.aud82', '.choice_speed_82', '.repl82', '.down82')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_82" @click="Second_speed_6('.x_second_82', '.aud82', '.choice_speed_82', '.repl82', '.down82')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_82" @click="Third_speed_6('.x_third_82', '.aud82', '.choice_speed_82', '.repl82', '.down82')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_82" @click="Fourth_speed_6('.x_fourth_82', '.aud82', '.choice_speed_82', '.repl82', '.down82')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_82" @click="Fifth_speed_6('.x_fifth_82', '.aud82', '.choice_speed_82', '.repl82', '.down82')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_82" @click="Six_speed_6('.x_six_82', '.aud82', '.choice_speed_82', '.repl82', '.down82')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl82" @click="Replay6('.aud82', '.r_icon_82')" @mouseover="S6('.repl82')" @mouseout="hide_repeat6('.repl82')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_82" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down82" @click="Download6('.down82', 'Death Stranding - Fragile')" @mouseout="down_hide6('.down82')">
			   	  <vue-fontawesome icon="download" class="d_icon_74" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio6 Aud_t82">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl83', '.down83')">
			   <p class="name6 text5_mobile_8">#8 Waiting</p>

			   <div class="audio_pole_m6 audio_p83_m6" @click="Perek6($event, '.aud83', '.audio_p83_m6')" @mouseover="Show_time6('.Aud_t83')" @mousemove="Run_block6($event, '.audio_p83_m6', '.aud83', '.Aud_t83')" @mouseout="Time_out6('.Aud_t83')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl83', '.l_of_v83', '.repl83', '.down83')" @mouseover="Over6('.l_of_v83')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v83" @mouseover="Over6('.l_of_v83')" @mouseout="Ov6('.l_of_v83')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v83', '.aud83', '.repl83', '.down83')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v83', '.aud83', '.repl83', '.down83')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v83', '.aud83', '.repl83', '.down83')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v83', '.aud83', '.repl83', '.down83')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud83', '.aud82', '.repl83', '.r_icon_83', '.down83')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl83" @click="Play6('.pl83', '.repl83', '.down83')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud83" @timeupdate="Update6('.aud83', '.st83', '.audio_p83_m6')" src="../sound/Death Stranding/Waiting.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud83', '.aud84', '.repl83', '.r_icon_83', '.down83')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time6 st83">00:00</p><p class="end_time6">/04:04</p>

			   <span id="speed_aud6" class="choice_speed_83" @click="Show_speed6('.sp_block_83')">x1</span>

			   <div class="Speed_block6 sp_block_83">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_83" @click="First_speed_6('.x_first_83', '.aud83', '.choice_speed_83', '.repl83', '.down83')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_83" @click="Second_speed_6('.x_second_83', '.aud83', '.choice_speed_83', '.repl83', '.down83')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_83" @click="Third_speed_6('.x_third_83', '.aud83', '.choice_speed_83', '.repl83', '.down83')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_83" @click="Fourth_speed_6('.x_fourth_83', '.aud83', '.choice_speed_83', '.repl83', '.down83')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_83" @click="Fifth_speed_6('.x_fifth_83', '.aud83', '.choice_speed_83', '.repl83', '.down83')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_83" @click="Six_speed_6('.x_six_83', '.aud83', '.choice_speed_83', '.repl83', '.down83')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl83" @click="Replay6('.aud83', '.r_icon_83')" @mouseover="S6('.repl83')" @mouseout="hide_repeat6('.repl83')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_83" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down83" @click="Download6('.down83', 'Death Stranding - Waiting')" @mouseout="down_hide6('.down83')">
			   	  <vue-fontawesome icon="download" class="d_icon_83" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio6 Aud_t83">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl84', '.down84')">
			   <p class="name6 text5_mobile_9">#9 Bones</p>

			   <div class="audio_pole_m6 audio_p84_m6" @click="Perek6($event, '.aud84', '.audio_p84_m6')" @mouseover="Show_time6('.Aud_t84')" @mousemove="Run_block6($event, '.audio_p84_m6', '.aud84', '.Aud_t84')" @mouseout="Time_out6('.Aud_t84')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl84', '.l_of_v84', '.repl84', '.down84')" @mouseover="Over6('.l_of_v84')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v84" @mouseover="Over6('.l_of_v84')" @mouseout="Ov6('.l_of_v84')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v84', '.aud84', '.repl84', '.down84')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v84', '.aud84', '.repl84', '.down84')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v84', '.aud84', '.repl84', '.down84')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v84', '.aud84', '.repl84', '.down84')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud84', '.aud83', '.repl84', '.r_icon_84', '.down84')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl84" @click="Play6('.pl84', '.repl84', '.down84')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud84" @timeupdate="Update6('.aud84', '.st84', '.audio_p84_m6')" src="../sound/Death Stranding/Bones.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud84', '.aud85', '.repl84', '.r_icon_84', '.down84')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st84">00:00</p><p class="end_time6">/02:51</p>

			   <span id="speed_aud6" class="choice_speed_84" @click="Show_speed6('.sp_block_84')">x1</span>

			   <div class="Speed_block6 sp_block_84">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_84" @click="First_speed_6('.x_first_84', '.aud84', '.choice_speed_84', '.repl84', '.down84')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_84" @click="Second_speed_6('.x_second_84', '.aud84', '.choice_speed_84', '.repl84', '.down84')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_84" @click="Third_speed_6('.x_third_84', '.aud84', '.choice_speed_84', '.repl84', '.down84')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_84" @click="Fourth_speed_6('.x_fourth_84', '.aud84', '.choice_speed_84', '.repl84', '.down84')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_84" @click="Fifth_speed_6('.x_fifth_84', '.aud84', '.choice_speed_84', '.repl84', '.down84')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_84" @click="Six_speed_6('.x_six_84', '.aud84', '.choice_speed_84', '.repl84', '.down84')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl84" @click="Replay6('.aud84', '.r_icon_84')" @mouseover="S6('.repl84')" @mouseout="hide_repeat6('.repl84')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_84" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down84" @click="Download6('.down84', 'Death Stranding - Bones')" @mouseout="down_hide6('.down84')">
			   	  <vue-fontawesome icon="download" class="d_icon_84" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio6 Aud_t84">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl85', '.down85')">
			   <p class="name6">#10 Heartman</p>

			   <div class="audio_pole_m6 audio_p85_m6" @click="Perek6($event, '.aud85', '.audio_p85_m6')" @mouseover="Show_time6('.Aud_t85')" @mousemove="Run_block6($event, '.audio_p85_m6', '.aud85', '.Aud_t85')" @mouseout="Time_out6('.Aud_t85')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl85', '.l_of_v85', '.repl85', '.down85')" @mouseover="Over6('.l_of_v85')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v85" @mouseover="Over6('.l_of_v85')" @mouseout="Ov6('.l_of_v85')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v85', '.aud85', '.repl85', '.down85')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v85', '.aud85', '.repl85', '.down85')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v85', '.aud85', '.repl85', '.down85')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v85', '.aud85', '.repl85', '.down85')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud85', '.aud84', '.repl85', '.r_icon_85', '.down85')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl85" @click="Play6('.pl85', '.repl85', '.down85')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud85" @timeupdate="Update6('.aud85', '.st85', '.audio_p85_m6')" src="../sound/Death Stranding/Heartman.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud85', '.aud86', '.repl85', '.r_icon_85', '.down85')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st85">00:00</p><p class="end_time6">/02:08</p>

			   <span id="speed_aud6" class="choice_speed_85" @click="Show_speed6('.sp_block_85')">x1</span>

			   <div class="Speed_block6 sp_block_85">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_85" @click="First_speed_6('.x_first_85', '.aud85', '.choice_speed_85', '.repl85', '.down85')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_85" @click="Second_speed_6('.x_second_85', '.aud85', '.choice_speed_85', '.repl85', '.down85')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_85" @click="Third_speed_6('.x_third_85', '.aud85', '.choice_speed_85', '.repl85', '.down85')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_85" @click="Fourth_speed_6('.x_fourth_85', '.aud85', '.choice_speed_85', '.repl85', '.down85')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_85" @click="Fifth_speed_6('.x_fifth_85', '.aud85', '.choice_speed_85', '.repl85', '.down85')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_85" @click="Six_speed_6('.x_six_85', '.aud85', '.choice_speed_85', '.repl85', '.down85')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl85" @click="Replay6('.aud85', '.r_icon_85')" @mouseover="S6('.repl85')" @mouseout="hide_repeat6('.repl85')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_85" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down85" @click="Download6('.down85', 'Death Stranding - Heartman')" @mouseout="down_hide6('.down85')">
			   	  <vue-fontawesome icon="download" class="d_icon_85" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t85">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl86', '.down86')">
			   <p class="name6">#11 The Machine</p>

			   <div class="audio_pole_m6 audio_p86_m6" @click="Perek6($event, '.aud86', '.audio_p86_m6')" @mouseover="Show_time6('.Aud_t86')" @mousemove="Run_block6($event, '.audio_p86_m6', '.aud86', '.Aud_t86')" @mouseout="Time_out6('.Aud_t86')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl86', '.l_of_v86', '.repl86', '.down86')" @mouseover="Over6('.l_of_v86')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v86" @mouseover="Over6('.l_of_v86')" @mouseout="Ov6('.l_of_v86')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v86', '.aud86', '.repl86', '.down86')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v86', '.aud86', '.repl86', '.down86')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v86', '.aud86', '.repl86', '.down86')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v86', '.aud86', '.repl86', '.down86')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud86', '.aud85', '.repl86', '.r_icon_86', '.down86')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl86" @click="Play6('.pl86', '.repl86', '.down86')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud86" @timeupdate="Update6('.aud86', '.st86', '.audio_p86_m6')" src="../sound/Death Stranding/The Machine.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud86', '.aud87', '.repl86', '.r_icon_86', '.down86')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st86">00:00</p><p class="end_time6">/05:37</p>

			   <span id="speed_aud6" class="choice_speed_86" @click="Show_speed6('.sp_block_86')">x1</span>

			   <div class="Speed_block6 sp_block_86">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_86" @click="First_speed_6('.x_first_86', '.aud86', '.choice_speed_86', '.repl86', '.down86')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_86" @click="Second_speed_6('.x_second_86', '.aud86', '.choice_speed_86', '.repl86', '.down86')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_86" @click="Third_speed_6('.x_third_86', '.aud86', '.choice_speed_86', '.repl86', '.down86')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_86" @click="Fourth_speed_6('.x_fourth_86', '.aud86', '.choice_speed_86', '.repl86', '.down86')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_86" @click="Fifth_speed_6('.x_fifth_86', '.aud86', '.choice_speed_86', '.repl86', '.down86')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_86" @click="Six_speed_6('.x_six_86', '.aud86', '.choice_speed_86', '.repl86', '.down86')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl86" @click="Replay6('.aud86', '.r_icon_86')" @mouseover="S6('.repl86')" @mouseout="hide_repeat6('.repl86')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_86" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down86" @click="Download6('.down86', 'Death Stranding - The Machine')" @mouseout="down_hide6('.down86')">
			   	  <vue-fontawesome icon="download" class="d_icon_86" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Time_of_audio6 Aud_t86">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl87', '.down87')">
			   <p class="name6 TE3 text5_mobile_12">#12 Don't Be so Serious</p>

			   <div class="audio_pole_m6 audio_p87_m6" @click="Perek6($event, '.aud87', '.audio_p87_m6')" @mouseover="Show_time6('.Aud_t87')" @mousemove="Run_block6($event, '.audio_p87_m6', '.aud87', '.Aud_t87')" @mouseout="Time_out6('.Aud_t87')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl87', '.l_of_v87', '.repl87', '.down87')" @mouseover="Over6('.l_of_v87')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v87" @mouseover="Over6('.l_of_v87')" @mouseout="Ov6('.l_of_v87')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v87', '.aud87', '.repl87', '.down87')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v87', '.aud87', '.repl87', '.down87')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v87', '.aud87', '.repl87', '.down87')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v87', '.aud87', '.repl87', '.down87')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud87', '.aud86', '.repl87', '.r_icon_87', '.down87')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl87" @click="Play6('.pl87', '.repl87', '.down87')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud87" @timeupdate="Update6('.aud87', '.st87', '.audio_p87_m6')" src="../sound/Death Stranding/dont-be-so-serious.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud87', '.aud88', '.repl87', '.r_icon_87', '.down87')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st87">00:00</p><p class="end_time6">/06:13</p>

			   <span id="speed_aud6" class="choice_speed_87" @click="Show_speed6('.sp_block_87')">x1</span>

			   <div class="Speed_block6 sp_block_87">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_87" @click="First_speed_6('.x_first_87', '.aud87', '.choice_speed_87', '.repl87', '.down87')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_87" @click="Second_speed_6('.x_second_87', '.aud87', '.choice_speed_87', '.repl87', '.down87')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_87" @click="Third_speed_6('.x_third_87', '.aud87', '.choice_speed_87', '.repl87', '.down87')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_87" @click="Fourth_speed_6('.x_fourth_87', '.aud87', '.choice_speed_87', '.repl87', '.down87')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_87" @click="Fifth_speed_6('.x_fifth_87', '.aud87', '.choice_speed_87', '.repl87', '.down87')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_87" @click="Six_speed_6('.x_six_87', '.aud87', '.choice_speed_87', '.repl87', '.down87')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl87" @click="Replay6('.aud87', '.r_icon_87')" @mouseover="S6('.repl87')" @mouseout="hide_repeat6('.repl87')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_87" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down87" @click="Download6('.down87', 'Death Stranding - Don`t be so serious')" @mouseout="down_hide6('.down87')">
			   	  <vue-fontawesome icon="download" class="d_icon_87" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t87">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl88', '.down88')">
			   <p class="name6 TE4 text5_mobile_13">#13 The Face of Our New Hope</p>

			   <div class="audio_pole_m6 audio_p88_m6" @click="Perek6($event, '.aud88', '.audio_p88_m6')" @mouseover="Show_time6('.Aud_t88')" @mousemove="Run_block6($event, '.audio_p88_m6', '.aud88', '.Aud_t88')" @mouseout="Time_out6('.Aud_t88')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl88', '.l_of_v88', '.repl88', '.down88')" @mouseover="Over6('.l_of_v88')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v88" @mouseover="Over6('.l_of_v88')" @mouseout="Ov6('.l_of_v88')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v88', '.aud88', '.repl88', '.down88')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v88', '.aud88', '.repl88', '.down88')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v88', '.aud88', '.repl88', '.down88')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v88', '.aud88', '.repl88', '.down88')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud88', '.aud87', '.repl88', '.r_icon_88', '.down88')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl88" @click="Play6('.pl88', '.repl88', '.down88')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud88" @timeupdate="Update6('.aud88', '.st88', '.audio_p88_m6')" src="../sound/Death Stranding/The Face of Our New Hope.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud88', '.aud89', '.repl88', '.r_icon_88', '.down88')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			   <p class="start_time6 st88">00:00</p><p class="end_time6">/03:26</p>

			   <span id="speed_aud6" class="choice_speed_88" @click="Show_speed6('.sp_block_88')">x1</span>

			   <div class="Speed_block6 sp_block_88">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_88" @click="First_speed_6('.x_first_88', '.aud88', '.choice_speed_88', '.repl88', '.down88')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_88" @click="Second_speed_6('.x_second_88', '.aud88', '.choice_speed_88', '.repl88', '.down88')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_88" @click="Third_speed_6('.x_third_88', '.aud88', '.choice_speed_88', '.repl88', '.down88')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_88" @click="Fourth_speed_6('.x_fourth_88', '.aud88', '.choice_speed_88', '.repl88', '.down88')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_88" @click="Fifth_speed_6('.x_fifth_88', '.aud88', '.choice_speed_88', '.repl88', '.down88')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_88" @click="Six_speed_6('.x_six_88', '.aud88', '.choice_speed_88', '.repl88', '.down88')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl88" @click="Replay6('.aud88', '.r_icon_88')" @mouseover="S6('.repl88')" @mouseout="hide_repeat6('.repl88')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_88" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down88" @click="Download6('.down88', 'Death Stranding - The Face of Our New Hope')" @mouseout="down_hide6('.down88')">
			   	  <vue-fontawesome icon="download" class="d_icon_88" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t88">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl89', '.down89')">
			   <p class="name6">#14 BB's theme</p>

			   <div class="audio_pole_m6 audio_p89_m6" @click="Perek6($event, '.aud89', '.audio_p89_m6')" @mouseover="Show_time6('.Aud_t89')" @mousemove="Run_block6($event, '.audio_p89_m6', '.aud89', '.Aud_t89')" @mouseout="Time_out6('.Aud_t89')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl89', '.l_of_v89', '.repl89', '.down89')" @mouseover="Over6('.l_of_v89')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v89" @mouseover="Over6('.l_of_v89')" @mouseout="Ov6('.l_of_v89')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v89', '.aud89', '.repl89', '.down89')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v89', '.aud89', '.repl89', '.down89')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v89', '.aud89', '.repl89', '.down89')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v89', '.aud89', '.repl89', '.down89')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud89', '.aud88', '.repl89', '.r_icon_89', '.down89')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl89" @click="Play6('.pl89', '.repl89', '.down89')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud89" @timeupdate="Update6('.aud89', '.st89', '.audio_p89_m6')" src="../sound/Death Stranding/BB's Theme.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud89', '.aud90', '.repl89', '.r_icon_89', '.down89')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time6 st89">00:00</p><p class="end_time6">/05:17</p>

			   <span id="speed_aud6" class="choice_speed_89" @click="Show_speed6('.sp_block_89')">x1</span>

			   <div class="Speed_block6 sp_block_89">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_89" @click="First_speed_6('.x_first_89', '.aud89', '.choice_speed_89', '.repl89', '.down89')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_89" @click="Second_speed_6('.x_second_89', '.aud89', '.choice_speed_89', '.repl89', '.down89')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_89" @click="Third_speed_6('.x_third_89', '.aud89', '.choice_speed_89', '.repl89', '.down89')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_89" @click="Fourth_speed_6('.x_fourth_89', '.aud89', '.choice_speed_89', '.repl89', '.down89')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_89" @click="Fifth_speed_6('.x_fifth_89', '.aud89', '.choice_speed_89', '.repl89', '.down89')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_89" @click="Six_speed_6('.x_six_89', '.aud89', '.choice_speed_89', '.repl89', '.down89')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl89" @click="Replay6('.aud89', '.r_icon_89')" @mouseover="S6('.repl89')" @mouseout="hide_repeat6('.repl89')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_89" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down89" @click="Download6('.down89', 'Death Stranding - BB`s theme')" @mouseout="down_hide6('.down89')">
			   	  <vue-fontawesome icon="download" class="d_icon_89" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t89">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
		     <div class="sound_block6" @mouseover="show_repeat6('.repl90', '.down90')">
			   <p class="name6">#15 Easy Way Out</p>

			   <div class="audio_pole_m6 audio_p90_m6" @click="Perek6($event, '.aud90', '.audio_p90_m6')" @mouseover="Show_time6('.Aud_t90')" @mousemove="Run_block6($event, '.audio_p90_m6', '.aud90', '.Aud_t90')" @mouseout="Time_out6('.Aud_t90')">
				   <div class="aud_p6"></div>
			   </div>

			   <button id="vol6" @click="Vol6('.pl90', '.l_of_v90', '.repl90', '.down90')" @mouseover="Over6('.l_of_v90')"><vue-fontawesome icon="volume-up" size="2.25" color="black"></vue-fontawesome></button>

			    <div class="l_of_vol6 l_of_v90" @mouseover="Over6('.l_of_v90')" @mouseout="Ov6('.l_of_v90')">
			   	  <div class="vL_1" @click="C1_6('.l_of_v90', '.aud90', '.repl90', '.down90')"></div>
			   	  <div class="vL_2" @click="C2_6('.l_of_v90', '.aud90', '.repl90', '.down90')"></div>
			   	  <div class="vL_3" @click="C3_6('.l_of_v90', '.aud90', '.repl90', '.down90')"></div>
			   	  <div class="vL_4" @click="C4_6('.l_of_v90', '.aud90', '.repl90', '.down90')"></div>
			   </div>

			   <button class="prev6" @click="Prev6('.aud90', '.aud89', '.repl90', '.r_icon_90', '.down90')"><vue-fontawesome icon="step-backward" size="1.25" color="black"></vue-fontawesome></button>
			   <button class="play6 pl90" @click="Play6('.pl90', '.repl90', '.down90')"><vue-fontawesome icon="play" size="1.75" color="black"></vue-fontawesome><audio class="aud90" @timeupdate="Update6('.aud90', 'st90', '.audio_p90_m6')" src="../sound/Death Stranding/Easy Way Out.mp3"></audio></button>
			   <button class="next6" @click="Next6('.aud90', '.aud76', '.repl90', '.r_icon_90', '.down90')"><vue-fontawesome icon="step-forward" size="1.25" color="black"></vue-fontawesome></button>

			    <p class="start_time6 st90">00:00</p><p class="end_time6">/04:48</p>

			   <span id="speed_aud6" class="choice_speed_90" @click="Show_speed6('.sp_block_90')">x1</span>

			   <div class="Speed_block6 sp_block_90">
			   	   <div class="contain6">
			   	   	  <div class="X6_25 b6 x_first_90" @click="First_speed_6('.x_first_90', '.aud90', '.choice_speed_90', '.repl90', '.down90')"><p>x.25</p></div>
			   	      <div class="X6_5 b6 x_second_90" @click="Second_speed_6('.x_second_90', '.aud90', '.choice_speed_90', '.repl90', '.down90')"><p>x.5</p></div>
			   	      <div class="X6_1 b6 x_third_90" @click="Third_speed_6('.x_third_90', '.aud90', '.choice_speed_90', '.repl90', '.down90')"><p>x1</p></div>
			   	      <div class="X6_1_25 b6 x_fourth_90" @click="Fourth_speed_6('.x_fourth_90', '.aud90', '.choice_speed_90', '.repl90', '.down90')"><p>x1.25</p></div>
			   	      <div class="X6_15 b6 x_fifth_90" @click="Fifth_speed_6('.x_fifth_90', '.aud90', '.choice_speed_90', '.repl90', '.down90')"><p>x1.5</p></div>
			   	      <div class="X6_2 b6 x_six_90" @click="Six_speed_6('.x_six_90', '.aud90', '.choice_speed_90', '.repl90', '.down90')"><p>x2</p></div>
			   	   </div>
			   </div>

			   <div class="Replay_button6 repl90" @click="Replay6('.aud90', '.r_icon_90')" @mouseover="S6('.repl90')" @mouseout="hide_repeat6('.repl90')">
			   	  <vue-fontawesome icon="retweet" class="r_icon_90" size="3" color="white"></vue-fontawesome>
			   </div>

			    <div class="Download_button6 down90" @click="Download6('.down90', 'Death Stranding - Easy Way Out')" @mouseout="down_hide6('.down90')">
			   	  <vue-fontawesome icon="download" class="d_icon_90" size="3" color="white"></vue-fontawesome>
			   </div>

			   <div class="Time_of_audio6 Aud_t90">
			   	   <span id="t6">00:00</span>
			   </div>
		    </div> 
	    </div>
	</div>
</template>
<script>
	export default {
		name: "Death_Stranding",
		methods: {
        Play6(el1, Repl_elem_1, Down_elem_1) {
      	 let vl = document.querySelector(el1);
      	 let opov_4_block = document.querySelector('.opoveshenie_block');
      	 let opov_4_name = vl.parentElement.children[0].textContent;
      	 let REPL_ELEM_4 = document.querySelector(Repl_elem_1);
      	 let DOWN_ELEM_4 = document.querySelector(Down_elem_1);

      	 if(vl.children[1].paused) {
      	 	vl.children[1].play();
            
            opov_4_block.children[0].children[0].textContent = `${opov_4_name} - играет`;

            REPL_ELEM_4.classList.add('Rep_8');
            DOWN_ELEM_4.classList.add('d_first_anim6');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_7');
               DOWN_ELEM_4.classList.remove('d_first_move6');
               REPL_ELEM_4.classList.remove('Rep_8');
               DOWN_ELEM_4.classList.remove('d_first_anim6');
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

      	     REPL_ELEM_4.classList.add('Rep_8');
      	     DOWN_ELEM_4.classList.add('d_first_anim6');

      	    setTimeout(() => {
               REPL_ELEM_4.classList.remove('Rep_7');
               DOWN_ELEM_4.classList.remove('d_first_move6');
               REPL_ELEM_4.classList.remove('Rep_8');
               DOWN_ELEM_4.classList.remove('d_first_anim6');
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

      Vol6(el2, lvl1, Repl_elem_2, Down_elem_2) {
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

            REPL_ELEM_2.classList.add('Rep_8');
            DOWN_ELEM_2.classList.add('d_first_anim6');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_7');
               DOWN_ELEM_2.classList.remove('d_first_move6');
               REPL_ELEM_2.classList.remove('Rep_8');
               DOWN_ELEM_2.classList.remove('d_first_anim6');
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

            REPL_ELEM_2.classList.add('Rep_8');
            DOWN_ELEM_2.classList.add('d_first_anim6');

      	    setTimeout(() => {
               REPL_ELEM_2.classList.remove('Rep_7');
               DOWN_ELEM_2.classList.remove('d_first_move6');
               REPL_ELEM_2.classList.remove('Rep_8');
               DOWN_ELEM_2.classList.remove('d_fist_anim6');
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
      Download6(d_button, d_name) {
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

      Over6(el3) {
      	  let vl3 = document.querySelector(el3);
          vl3.classList.add('L_show6');
      },

      Ov6(el4) {
      	  let vl4 = document.querySelector(el4);
      	  vl4.classList.remove('L_show6');
      },

      C1_6(el5, volm1, Repl_elem_3, Down_elem_3) {
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

          REPL_ELEM_3.classList.add('Rep_8');
          DOWN_ELEM_3.classList.add('d_first_anim6');

      	  setTimeout(() => {
            REPL_ELEM_3.classList.remove('Rep_7');
            DOWN_ELEM_3.classList.remove('d_first_move6');
            REPL_ELEM_3.classList.remove('Rep_8');
            DOWN_ELEM_3.classList.remove('d_first_anim6');
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

      C2_6(el6, volm2, Repl_elem_4, Down_elem_4) {
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

          REPL_ELEM_4.classList.add('Rep_8');
          DOWN_ELEM_4.classList.add('d_fist_anim6');

      	 setTimeout(() => {
            REPL_ELEM_4.classList.remove('Rep_7');
            DOWN_ELEM_4.classList.remove('d_first_move6');
            REPL_ELEM_4.classList.remove('Rep_8');
            DOWN_ELEM_4.classList.remove('d_first_anim6');
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

      C3_6(el7, volm3, Repl_elem_5, Down_elem_5) {
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

           REPL_ELEM_5.classList.add('Rep_8');
           DOWN_ELEM_5.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_ELEM_5.classList.remove('Rep_7');
            DOWN_ELEM_5.classList.remove('d_first_move6');
            REPL_ELEM_5.classList.remove('Rep_8');
            DOWN_ELEM_5.classList.remove('d_first_anim6');
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


      C4_6(el8, volm4, Repl_elem_6, Down_elem_6) {
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

          REPL_ELEM_6.classList.add('Rep_8');
          DOWN_ELEM_6.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_ELEM_6.classList.remove('Rep_7');
            DOWN_ELEM_6.classList.remove('d_first_move6');
            REPL_ELEM_6.classList.remove('Rep_8');
            DOWN_ELEM_6.classList.remove('d_first_anim6');
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

      Update6(volm5, time_b1, prog) {
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

      Prev6(AUDIO_1, AUDIO_2, REPLAY_1, Rep_icon_1, DOWNLOAD_1) {
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

         REPL_1.classList.add('Rep_8');
         DOWN_1.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_1.classList.remove('Rep_7');
            DOWN_1.classList.remove('d_first_move6');
            REPL_1.classList.remove('Rep_8');
            DOWN_1.classList.remove('d_first_anim6');
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

      Next6(AUDIO_3, AUDIO_4, REPLAY_2, Rep_icon_2, DOWNLOAD_2) {
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

         REPL_2.classList.add('Rep_8');
         DOWN_2.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_2.classList.remove('Rep_7');
            DOWN_2.classList.remove('d_first_move6');
            REPL_2.classList.remove('Rep_8');
            DOWN_2.classList.remove('d_first_anim6');
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

      Perek6(event, Aud, m_pole) {
      	  let audi = document.querySelector(Aud);
      	  let main_pole = document.querySelector(m_pole);
      	  let check = event.offsetX / main_pole.offsetWidth * audi.duration;

      	  audi.currentTime = check;
      },  

      Show_time6(t_block5) {
          let time_block = document.querySelector(t_block5);
      	  time_block.classList.add('T_aud_6');
      },

      Time_out6(t_block5) {
      	  let time_block = document.querySelector(t_block5);
      	  time_block.classList.remove('T_aud_6');
      },

      Run_block6(event, M_Pole, Aud2, t_block4) {
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
          
      show_repeat6(n_rep, d_rep) {
          let nrep = document.querySelector(n_rep);
          let drep = document.querySelector(d_rep);

          nrep.classList.add('Rep_7');
          drep.classList.add('d_first_move6');
      },

      hide_repeat6(rep2) {
      	  let replay2 = document.querySelector(rep2);

      	  replay2.classList.add('Rep_8');

      	  setTimeout(() => {
             replay2.classList.remove('Rep_7');
             replay2.classList.remove('Rep_8');
      	  }, 1100);
      },

      down_hide6(dow2) {
         let d2 = document.querySelector(dow2);

         d2.classList.add('d_first_anim6');

         setTimeout(() => {
            d2.classList.remove('d_first_move6');
            d2.classList.remove('d_first_anim6');
         }, 1100);
      },

      Replay6(AUD, Icon1) {
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

      S6(rep3) {
      	  let rep = document.querySelector(rep3);
      	  rep.classList.add('Rep_7');
      },

      Show_speed6(sp1) {
      	  let speed_block = document.querySelector(sp1); //.Speed_block
      	  speed_block.classList.toggle('tgl_6');
      },

      First_speed_6(first, a, ch_one, Repl_elem_7, Down_elem_7) {
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

           REPL_ELEM_7.classList.add('Rep_8');
           DOWN_ELEM_7.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_ELEM_7.classList.remove('Rep_7');
            DOWN_ELEM_7.classList.remove('d_first_move6');
            REPL_ELEM_7.classList.remove('Rep_8');
            DOWN_ELEM_7.classList.remove('d_first_anim6');
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

      Second_speed_6(second, a2, ch_two, Repl_elem_8, Down_elem_8) {
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

           REPL_ELEM_8.classList.add('Rep_8');
           DOWN_ELEM_8.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_ELEM_8.classList.remove('Rep_7');
            DOWN_ELEM_8.classList.remove('d_first_move6');
            REPL_ELEM_8.classList.remove('Rep_8');
            DOWN_ELEM_8.classList.remove('d_first_anim6');
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

      Third_speed_6(third, a3, ch_three, Repl_elem_9, Down_elem_9) {
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

           REPL_ELEM_9.classList.add('Rep_8');
           DOWN_ELEM_9.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_ELEM_9.classList.remove('Rep_7');
            DOWN_ELEM_9.classList.remove('d_first_move6');
            REPL_ELEM_9.classList.remove('Rep_8');
            DOWN_ELEM_9.classList.remove('d_first_anim6');
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

      Fourth_speed_6(fourth, a4, ch_four, Repl_elem_10, Down_elem_10) {
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

           REPL_ELEM_10.classList.add('Rep_8');
           DOWN_ELEM_10.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_ELEM_10.classList.remove('Rep_7');
            DOWN_ELEM_10.classList.remove('d_first_move6');
            REPL_ELEM_10.classList.remove('Rep_8');
            DOWN_ELEM_10.classList.remove('d_first_anim6');
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

      Fifth_speed_6(fifth, a5, ch_five, Repl_elem_11, Down_elem_11) {
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

           REPL_ELEM_11.classList.add('Rep_8');
           DOWN_ELEM_11.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_ELEM_11.classList.remove('Rep_7');
            DOWN_ELEM_11.classList.remove('d_first_move6');
            REPL_ELEM_11.classList.remove('Rep_8');
            DOWN_ELEM_11.classList.remove('d_first_anim6');
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

      Six_speed_6(six, a6, ch_six, Repl_elem_12, Down_elem_12) {
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

           REPL_ELEM_12.classList.add('Rep_8');
           DOWN_ELEM_12.classList.add('d_first_anim6');

      	 setTimeout(() => {
            REPL_ELEM_12.classList.remove('Rep_7');
            DOWN_ELEM_12.classList.remove('d_first_move6');
            REPL_ELEM_12.classList.remove('Rep_8');
            DOWN_ELEM_12.classList.remove('d_first_anim6');
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

	.side_screen6 {
		position: absolute;
		left: 510px;
		height: 1499px;
		top: 100px;
		width: 1081px;
		background: url("../assets/img/Death_Stranding_background.jpg");
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

    .side_screen6 span {
    	position: absolute;
    	left: 295px;
    	top: 10px;
    	font-family: "Fira Sans", sans-serif;
    	font-weight: 500;
    	font-size: 45px;
        line-height: 54px;
        color: white;
    }

    .audio_collection_block6 {
    	position: absolute;
    	width: 725px;
    	top: 100px;
    	left: 170px;
    	height: 2961px;
    }

    .audio_collection_block6 > .sound_block6 {
    	display: block;
    	position: relative;
    	width: 725px;
    	height: 153px;
    	margin-top: 41px;
    	left: 0px;
    	border: 1px solid white;
    }

    .audio_collection_block6 .sound_block6 .name6 {
    	position: absolute;
    	left: 205px;
    	margin-top: 0;
    	font-family: 'Fira Sans', sans-serif;
    	font-size: 45px;
    	line-height: 54px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block6 .sound_block6 .TE1 {
    	left: 270px;
    }

    .audio_collection_block6 .sound_block6 .TE2 {
    	left: 295px;
    }

    .audio_collection_block6 .sound_block6 .TE3 {
    	left: 135px;
    }

    .audio_collection_block6 .sound_block6 .TE4 {
    	left: 55px;
    }

    .audio_collection_block6 .sound_block6 > button {
    	border: 0;
        cursor: pointer;
        transition: .7s;
        -o-transition: .7s;
        -mozila-transition: .7s;
        -webkit-transition: .7s;
    }

    .audio_collection_block6 .sound_block6 > button:hover {
    	transform: scale(.9);
    }

    .audio_collection_block6 .sound_block6 .audio_pole_m6 {
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

    .audio_collection_block6 .sound_block6 .audio_pole_m6:hover {
    	opacity: .7;
    }

    .audio_collection_block6 .sound_block6 .audio_pole_m6 .aud_p6 {
    	height: 5px;
    	position: absolute;
    	width: 0px;
    	background: yellow;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block6 .sound_block6 #vol6 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 43px;
        top: 89px;
        border-radius: 30px;

        background: #FCFCFC;
    }

    .audio_collection_block6 .sound_block6 .l_of_vol6 {
    	position: absolute;
    	height: 30px;
    	width: 48px;
    	top: 98px;
    	left: 97px;
    	display: none;
    }

    .audio_collection_block6 .sound_block6 .l_of_vol6.L_show6 {
    	display: block;
    }

    .audio_collection_block6 .sound_block6 .l_of_vol6 > div {
    	width: 5px;
    	position: absolute;
    	background: rgba(51, 204, 0, .8);
    	cursor: pointer;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .audio_collection_block6 .sound_block6 .l_of_vol6 > div:hover {
    	background: rgba(51, 204, 0, .8);
    	transform: scale(1.1);

    }

    .audio_collection_block6 .sound_block6 .l_of_vol6 .vL_1 {
    	height: 12px;
        left: 0;
        top: 9px;
    }

    .audio_collection_block6 .sound_block6 .l_of_vol6 .vL_2 {
    	height: 18px;
    	top: 6px;
    	left: 14px;
    }

    .audio_collection_block6 .sound_block6 .l_of_vol6 .vL_3 {
        height: 24px;
        top: 3px;
        left: 28px;
    }

    .audio_collection_block6 .sound_block6 .l_of_vol6 .vL_4 {
        height: 30px;
        top: 0;
        left: 42px;
    }
    
    .audio_collection_block6 .sound_block6 .prev6 {
    	position: absolute;
    	width: 33px;
        height: 33px; 
        left: 289px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block6 .sound_block6 .prev6:hover {
    	transform: translateX(-5px);
    }

    .audio_collection_block6 .sound_block6 .play6 {
    	position: absolute;
        width: 45px;
        height: 45px;
        left: 339px;
        top: 94px;
        border-radius: 30px;

        background: #FDFDFD;
    }

    .audio_collection_block6 .sound_block6 .next6 {
    	position: absolute;
        width: 33px;
        height: 33px;
        left: 401px;
        top: 100px;
        border-radius: 30px;

        background: #D55858;
    }

    .audio_collection_block6 .sound_block6 .next6:hover {
    	transform: translateX(5px);
    }

   .audio_collection_block6 .sound_block6 .start_time6 {
    	position: absolute;
    	left: 580px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block6 .sound_block6 .end_time6 {
    	position: absolute;
    	left: 630px;
    	top: 100px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    }

    .audio_collection_block6 .sound_block6 .Replay_button6 {
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

     .audio_collection_block6 .sound_block6 .Replay_button6.Rep_7 {
    	margin-left: 775px;
    	z-index: 2;
    }

    .audio_collection_block6 .sound_block6 .Replay_button6.Rep_8 {
    	animation: spek6 1s linear;
    	transform: scale(0);
    }

    @keyframes spek6 {
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

    .audio_collection_block6 .sound_block6 .Download_button6 {
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

    .audio_collection_block6 .sound_block6 .Download_button6:hover {
    	box-shadow: 0 0 25px gold;
    }

    .audio_collection_block6 .sound_block6 .Download_button6.d_first_move6 {
    	margin-left: -100px;
    	z-index: 2;
    }

    .audio_collection_block6 .sound_block6 .Download_button6.d_first_anim6 {
    	animation: down6 1s linear 1;
    	transform: scale(0);
    }

    @keyframes down6 {
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

    .audio_collection_block6 .sound_block6 .Time_of_audio6 {
    	height: 30px;
    	width: 80px;
    	position: absolute;
    	background: black;
    	margin-left: 38px;
    	margin-top: 45px;
    	display: none;
    }

    .audio_collection_block6 .sound_block6 .Time_of_audio6 span {
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	font-size: 25px;
    	position: absolute;
    	top: -10px;
    	left: 3px;
    }

    .audio_collection_block6 .sound_block6 .Time_of_audio6.T_aud_6 {
    	display: block;
    }

     .audio_collection_block6 .sound_block6 #speed_aud6 {
    	position: absolute;
    	left: 520px;
    	top: 106px;
    	font-family: "Fira Sans", sans-serif;
    	font-size: 20px;
    	font-weight: 500;
    	color: white;
    	cursor: pointer;
    }

    .audio_collection_block6 .sound_block6 .Speed_block6 {
    	height: 109px;
    	width: 60px;
    	position: absolute;
    	border: 1px solid black;
    	left: 499px;
    	top: 145px;
    	z-index: 4;
    	display: none;
    }

    .audio_collection_block6 .sound_block6 .Speed_block6.tgl_6 {
    	display: block;
    }

     .audio_collection_block6 .sound_block6 .Speed_block6 .contain6 {
    	height: 100px;
    	width: 60px;
    	position: absolute;
    	left: 0;
    	top: 0;
    }

    .audio_collection_block6 .sound_block6 .Speed_block6 .contain6 .b6 {
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

    .audio_collection_block6 .sound_block6 .Speed_block6 .contain6 .b6:hover {
    	border-color: black;
    	background: white;
    }

    .audio_collection_block6 .sound_block6 .Speed_block6 .contain6 .b6 p {
    	font-size: 15px;
    	position: relative;
    	font-family: 'Fira Sans', sans-serif;
    	color: white;
    	left: 15px;
    	margin-top: 1px;
    }

    .audio_collection_block6 .sound_block6 .Speed_block6 .contain6 .b6 p:hover {
        color: black;
    }

    @media only screen and (min-device-width: 260px) and (max-device-width: 480px) {
    	.side_screen6 {
    		height: 2685px;
    		top: 200px;
    	}

    	.side_screen6 span {
    		font-size: 55px;
    		left: 250px;
    	}

    	.audio_collection_block6 > .sound_block6 {
            width: 825px;
            height: 165px;
            left: -50px;
            margin-top: 45px;
    	}

    	.audio_collection_block6 .sound_block6 .audio_pole_m6 {
    		width: 748px; /* 748px */
            left: 38px;
            height: 9.5px;
            top: 82.5px;
    	}

    	.audio_collection_block6 .sound_block6 .audio_pole_m6 .aud_p6 {
    		height: 9.5px;
    	}

    	.audio_collection_block6 .sound_block6 #vol6 {
    	    position: absolute;
            width: 55px;
            height: 55px;
            left: 42px;
            top: 97px;
        } 

        .audio_collection_block6 .sound_block6 .play6 {
    	   position: absolute;
           width: 55px;
           height: 55px;
           left: 339px;
           top: 97px;
        }

        .audio_collection_block6 .sound_block6 .prev6 {
    	   width: 43px;
           height: 43px; 
           left: 289px;
           top: 103.25px;
        }
        
        .audio_collection_block6 .sound_block6 .next6 {
           width: 43px;
           height: 43px;
           left: 401px;
           top: 105px;
        }

        .audio_collection_block6 .sound_block6 .name6 {
    	   left: 255px;
        }

        .audio_collection_block6 .sound_block6 .Time_of_audio6 {
    	   height: 37px;
    	   width: 97px;
           margin-top: 44px;
        }

        .audio_collection_block6 .sound_block6 .Time_of_audio6 span {      
    	   font-size: 30px;
    	   top: -8px;
    	   left: 3px;
        }

        .audio_collection_block6 .sound_block6 .start_time6 {
    	   left: 652.5px;
    	   top: 105px;
    	   font-size: 25px;
        } 

        .audio_collection_block6 .sound_block6 .end_time6 {
    	   left: 715px;
    	   top: 105px;
    	   font-size: 25px;
        }

        .audio_collection_block6 .sound_block6 #speed_aud6 {
        	font-size: 25px;
        	top: 118px;
        	left: 585px;
        }

        .audio_collection_block6 .sound_block6 .Speed_block6 {
    	    height: 171px;
    	    width: 120px;
    	    left: 533px;
    	    top: 160px;
        }

        .audio_collection_block6 .sound_block6 .Speed_block6 .contain6 {
        	height: 169px;
        	width: 120px;
        }

        .audio_collection_block6 .sound_block6 .Speed_block6 .contain6 .b6 {
        	height: 27px;
        	width: 120px;
            top: -3px;
            left: -0.05px;
        }

        .audio_collection_block6 .sound_block6 .Speed_block6 .contain6 .b6 p {
            font-size: 20px; 
            top: 5px;
            left: 45px;
        }

        .audio_collection_block6 .sound_block6 .Replay_button6 {
    	    height: 80px;
    	    width: 80px;
    	    margin-left: 750px;
    	    margin-top: 40px;
        }

        .audio_collection_block6 .sound_block6 .Replay_button6.sh8 {
    	    margin-left: 850px;
        }

        .audio_collection_block6 .sound_block6 .Download_button6 {
    	    height: 80px;
    	    width: 80px;
    	    margin-top: 40px;
    	    margin-left: 0px;
        }

        .audio_collection_block6 .sound_block6 .l_of_vol6 {
    	   height: 40px;
    	   width: 58px;
    	   top: 107px;
    	   left: 102px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_1 {
        	left: 325px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_2 {
        	left: 225px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_3 {
        	left: 190px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_4 {
        	left: 310px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_5 {
        	left: 345px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_7 {
        	left: 315px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_8 {
        	left: 295px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_9 {
        	left: 325px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_12 {
        	left: 175px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_13 {
        	left: 110px;
        }

        .audio_collection_block6 .sound_block6 .text5_mobile_15 {
        	left: 125px;
        }
    }
</style>