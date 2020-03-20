<template>
  <div id="KeyPad">
      <div class="keypad-profile">
          <i :style="{fontSize: '4rem', margin: '0px auto 0px 0px'}" class="material-icons">keyboard_arrow_left</i>
            <h1>PROFILE</h1>
          <i :style="{fontSize: '4rem', margin: '0px 0px 0px auto'}" class="material-icons">keyboard_arrow_right</i>
      </div>
      <div class="keypad-line">
          <Pad title="1"/>
          <Pad title="2"/>
          <Pad title="3"/>
          <Pad title="4"/>
      </div>
      <div class="keypad-line">
          <Pad title="5"/>
          <Pad title="6"/>
          <Pad title="7"/>
          <Pad title="8"/>
      </div>
      <div class="keypad-line">
          <Pad title="9"/>
          <Pad title="10"/>
          <Pad title="11"/>
          <Pad title="12"/>
      </div>
      <div class="keypad-line">
          <Pad title="13"/>
          <Pad title="14"/>
          <Pad title="15"/>
          <Pad title="16"/>
      </div>
      <p>ola</p>
  </div>
</template>

<script>
import Pad from '@/components/Pad/Pad'
export default {
    components: { Pad },
    data: () => ({
        pads: {}
    }),
    async mounted() {
        const data = await this.$GET('/drums');
        console.log(data);
    }
}
</script>

<style>
#KeyPad {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
}

.keypad-line {
    display: flex;
    flex-direction: row;
}

.keypad-profile {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    width: 100%;
    color: #0D0D0D;
}
</style>