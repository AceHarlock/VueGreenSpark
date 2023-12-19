<script setup lang="ts">
import { onMounted, reactive, computed, ref } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
  key: Number,
  id: Number,
  amount: Number,
  type: String,
  action: String,
  active: Boolean,
  linked: Boolean,
  selectedColor: String
})

const subColor = ref("");
const bgColor = ref("");

onMounted(() => {
    switch (props.selectedColor) {
        case "white":
          bgColor.value = '#2E3A8C'
          subColor.value = '#ffffff'
          break
        case "black":
          bgColor.value = '#3b755f'
          subColor.value = '#ffffff'
          break
        case "blue":
          bgColor.value = '#f2ebdb'
          subColor.value = '#3b755f'
          break
        case "green":
          bgColor.value = '#ffffff'
          subColor.value = '#3b755f'
          break
        case "beige":
          bgColor.value = '#202020'
          subColor.value = '#ffffff'
          break
      }
})


function changeColor(color: Number) {
    switch (color) {
        case 1:
          bgColor.value = '#2E3A8C'
          subColor.value = '#ffffff'
          break
        case 2:
          bgColor.value = '#3b755f'
          subColor.value = '#ffffff'
          break
        case 3:
          bgColor.value = '#f2ebdb'
          subColor.value = '#3b755f'
          break
        case 4:
          bgColor.value = '#ffffff'
          subColor.value = '#3b755f'
          break
        case 5:
          bgColor.value = '#202020'
          subColor.value = '#ffffff'
          break
      }
      const payload = {'color': color, 'id': props.id};
    //   handleClick(payload)
}

const isHovered = ref(false);
const isTooltipHovered = ref(false);

function showDiv() {
    isHovered.value = true;
}

function hideDiv () {
    setTimeout(() => {
        isHovered.value = false;
    }, 200);
}

function showTooltip() {
    isTooltipHovered.value = true;
}

function hideTooltip() {
    isTooltipHovered.value = false;
}

const checkBoxClassName = ref("");
function handleCheckboxChange() {
    store.dispatch({
        type: "handleCheck",
        id: props.id
    })

    checkBoxClassName.value = `ios-toggle-check`;
}

const iosToggleId = ref("")

onMounted(() => {
    props.active ? checkBoxClassName.value = `ios-toggle-check` : checkBoxClassName.value = "";
    iosToggleId.value = `ios-toggle-${props.id}`
})

</script>

<template>
    <div class="item">
        <div class="item-header d-flex rounded bg-blue-800 text-white mb-3" :style="{'background-color': bgColor}">
            <div class="logo my-auto mx-3">
                <svg id="greenspark_logo" width="33" height="33" viewBox="0 0 33 33" fill="green" xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="myPath"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.7594 0.296997C7.85226 0.296997 0.631592 7.51767 0.631592 16.4248C0.631592 25.332 7.85226 32.5526 16.7594 32.5526C25.6666 32.5526 32.8872 25.332 32.8872 16.4248C32.8872 7.51767 25.6666 0.296997 16.7594 0.296997ZM17.7055 27.199C11.0821 27.647 5.98988 15.3899 8.37926 13.009C10.5591 10.837 11.4244 11.6134 11.8337 13.4321C12.0624 14.4477 11.8927 15.6938 11.7398 16.8168C11.6069 17.7927 11.4866 18.6756 11.6515 19.2334C12.0061 20.4331 12.6146 21.3839 13.3152 21.3164C14.0159 21.2489 15.1022 19.3642 12.7643 12.1573C11.0417 6.84704 15.6649 5.01134 16.0884 6.11656C16.2796 6.6155 16.0174 7.43242 15.7094 8.39211C15.3352 9.55832 14.8933 10.9354 15.115 12.2088C15.2964 13.251 15.4695 13.8299 15.6241 14.3469C15.8139 14.9814 15.9758 15.5226 16.0909 16.7129C16.1397 17.2168 16.1162 17.8618 16.0913 18.5473C16.0284 20.2787 15.956 22.2693 17.0136 22.9027C18.4899 23.7869 19.1374 19.4874 17.7159 11.7192C16.4394 4.74359 21.0207 6.89465 21.1415 9.00927C21.2624 11.1239 21.1284 14.3007 20.2738 18.7428C19.4193 23.185 20.0408 23.5508 21.1415 22.4336C22.2423 21.3164 22.3038 20.5267 21.6661 16.1227C21.2314 13.1211 25.9298 11.5922 25.4232 15.5363C24.9132 19.5063 22.6049 26.8676 17.7055 27.199Z"
                        :style="{'fill': subColor}"
                    />
                </svg>
                <p>greenspark</p>
            </div>
            <div class="item-header-text my-auto mx-0">
                <p class="product-type font-normal mb-0" :style="{'color': subColor}">This product {{ action }}</p>
                <p class="product-amount font-normal mb-0" :style="{'color': subColor}">{{ amount }} {{ type }}</p>
            </div>
        </div>
        <div class="item-link w-full d-flex justify-between mb-3">
            <p class="">Link to Public Profile
                <span class="absolute">
                    <span @mouseover="showDiv" @mouseleave="hideDiv">
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 9.47363H6.5V6.47363H5.5V9.47363ZM6 1.97363C3.24 1.97363 1 4.21363 1 6.97363C1 9.73363 3.24 11.9736 6 11.9736C8.76 11.9736 11 9.73363 11 6.97363C11 4.21363 8.76 1.97363 6 1.97363ZM6 10.9736C3.795 10.9736 2 9.17863 2 6.97363C2 4.76863 3.795 2.97363 6 2.97363C8.205 2.97363 10 4.76863 10 6.97363C10 9.17863 8.205 10.9736 6 10.9736ZM5.5 5.47363H6.5V4.47363H5.5V5.47363Z" fill="#3B755F"/>
                            <path d="M5.5 4.47363H6.5V5.47363H5.5V4.47363ZM5.5 6.47363H6.5V9.47363H5.5V6.47363Z" fill="#3B755F"/>
                            <path d="M6 1.97363C3.24 1.97363 1 4.21363 1 6.97363C1 9.73363 3.24 11.9736 6 11.9736C8.76 11.9736 11 9.73363 11 6.97363C11 4.21363 8.76 1.97363 6 1.97363ZM6 10.9736C3.795 10.9736 2 9.17863 2 6.97363C2 4.76863 3.795 2.97363 6 2.97363C8.205 2.97363 10 4.76863 10 6.97363C10 9.17863 8.205 10.9736 6 10.9736Z" fill="#3B755F"/>
                        </svg>
                    </span>
                    <span class="tooltip-header">
                        <div class="tooltip-body" :class="{ active: isHovered }" @mouseover="showTooltip" @mouseleave="hideTooltip" v-show="isHovered || isTooltipHovered">
                            <div style="padding: 20px;">
                            This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.<br/><hr style="clear: both; visibility: hidden;" />
                            <span class="tooltip-link"><a>View Public Profile</a></span>
                            </div>
                        </div>
                    </span>
                </span>
            </p>
            <input type="checkbox" class="check"/>
        </div>
        <div class="item-color d-flex justify-between mb-4">
            <p>Badge color</p>
            <div class="btn-group">
                <button class="bg-blue-800" @click="changeColor(1)"></button>
                <button class="bg-green-800" @click="changeColor(2)"></button>
                <button class="bg-yellow-100" @click="changeColor(3)"></button>
                <button class="bg-white" @click="changeColor(4)"></button>
                <button class="bg-black" @click="changeColor(5)"></button>
            </div>
        </div>
        <div class="item-badge d-flex justify-between mb-3">
            <p>Activate badge</p>
            <div class="ios-toggle">
                <input :class="checkBoxClassName" type="checkbox" :id="iosToggleId" @change="handleCheckboxChange()" v-model="props.active"/>
                <label :for="iosToggleId" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    width: 221px;
    height: 167px;

    @media screen and (max-width: 460px) {
        margin-bottom: 30px;
        margin: 10px auto;
    }
}

.logo {
    width: 40px;
    height: 45px;
    font-size: 8px;
}

.product-type {
    font-family: "Cabin";
    font-size: 12px;
}
.product-amount {
    font-family: "Cabin";
    font-size: 17px;
}

.item-header {
    width: 221px;
    height: 66px;
}

.item-header-text {
    width: 144px;
    height: 41px;
}

.item-link {
    height: 24px;
    font-size: 14px;
}

.check{
  justify-content: center;
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  appearance:none;
  border: 2px solid black;
  border-radius: 20%;
  position:relative;
}
.check:checked{
  background-color:  #3B755F;
  border-color: #3B755F;
}
.check:checked:after {
  content: '\2713';
  color:white;
}
.check:checked:hover {
  opacity: 1 !important;
}
.check:not(:checked):hover:after {
  background-color: #D4DFDB;
  z-index: -1;
  content: '';
  position: absolute;
  top: -9px;
  left: -9px;
  right: -9px;
  bottom: -9px;
  border: 2px solid transparent;
  border-radius: 50%;
}
.check:hover{
  border-color: #b8b894;
}


.item-color {
    width: 221px;
    height: 17px;
    font-size: 14px;
}

.item-color button {
    width: 16px;
    height: 16px;
    margin-right: 2px;
}

.item-color button:hover {
  opacity: 0.8;
}
.item-color button:hover{
  border: 0px;
}
.item-color button:focus{
  transform: scale(0.95) !important;
  opacity: 0.95;
  border: 2px solid rgb(136, 134, 129);
}

.item-badge {
    height: 20px;
    font-size: 14px;
}

.ios-toggle {
  font-size: 8px;
  width: 5.8em;
  position: relative;
}

.ios-toggle input {
    display: none;
}
.ios-toggle [class^="ios-toggle-check"],
.ios-toggle [class^="ios-toggle-check"]:active {
  border: 0;
  height: 100%;
  opacity: 0;
  outline: none;
  position: absolute;
  width: 10;
  left: 13px;
  transform: scale(3.3, 1);
  z-index: 100000;
}
.ios-toggle label {
  background: #f8f8f8;
  border: 0.2em solid #ddd;
  border-radius: 1.6em;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 3.2em;
  padding: 1em;
  position: relative;
  transition: 0.3s ease-out;
  width: 100%;
}
.ios-toggle label::before {
  background: #ffffff;
  border-radius: 1.4em;
  box-shadow: 0 0.3em 0.3em rgba(0, 0, 0, 0.2), 0 0 0 0.1em #ddd;
  content: "";
  display: block;
  height: 2.8em;
  left: 0;
  position: absolute;
  right: auto;
  text-indent: 4em;
  top: 0;
  transition: 0.25s ease-in-out;
  width: 2.8em;
  z-index: 2;
}
.ios-toggle [class^="ios-toggle-check"]:hover + label::before {
  animation: none;
  opacity: 0.4;
  box-shadow: 0 0.3em 0.3em rgba(0, 0, 0, 0.2), 0 0 0 0.8em #ddd;
}
.ios-toggle label::after {
  background: #f8f8f8;
  border-radius: 1.4em;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: 0.25s ease-in-out;
  width: 2.8em;
  z-index: 1;
}
.ios-toggle [class^="ios-toggle-check"]:checked + label::after {
  background-color: #477D69;
  right: 1.4em;
  width: 100%;
}

.ios-toggle [class^="ios-toggle-check"]:checked + label::before {
  box-shadow: 0 0 0 0.1em transparent, 0 0.3em 0.3em rgba(0, 0, 0, 0.3);
  left: calc(100% - 2.8em);
}

.tooltip-header .tooltip-body {
  /* transition: opacity 2s ease; */
  width: 230px;
  height: 200px;
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  bottom: 19px;
  background-color: white;
  font-size: 15px;
  line-height: 18px;
  box-shadow: 0 0.3em 0.3em rgba(0, 0, 0, 0.2), 0 0 0 0.1em #ddd;
  z-index: 100000;
}
.tooltip-header .tooltip-body:hover {
  opacity: 1;
  display: block;
}
.tooltip-header .tooltip-body.active {
  display: block;
  opacity: 1;
}
.tooltip-header .tooltip-body .tooltip-link a {
  color:#3b755f;
  font-weight:600;
  cursor: pointer;
  margin-top: 10px;
}
</style>