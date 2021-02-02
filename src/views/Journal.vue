<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Journal</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
                         </b-button-group>
                           <b-button variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" />New</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="SaveIcon" />Save</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="DeleteIcon" />Delete</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="CopyIcon" />Create a Copy</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="RotateCcwIcon" />Reverse</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="PaperclipIcon" />Attached File</b-button>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>

                <container>
                  <div class="card" style="--background:#3C3B3D; --text:white;">
  <div class="multi-button"><!--Don't need to say how many buttons there will be, handled on lines 42-93-->
    <button class="fas fa-heart"></button>
  </div>
  <div class="container"></div>
</div>
<div class="card">
  <div class="multi-button">
    <button class="fas fa-heart"></button>
    <button class="fas fa-clipboard"></button>
  </div>
  <div class="container"></div>
</div>
<div class="card" style="--background:#EC87C0; --text:white;">
  <div class="multi-button">
    <button class="fas fa-heart"></button>
    <button class="fas fa-comment"></button>
    <button class="fas fa-share-alt"></button>
  </div>
  <div class="container"></div>
</div>
<div class="card" style="--background:#5D9CEC; --text:white;">
  <div class="multi-button">
    <button class="fas fa-heart"></button>
    <button class="fas fa-comment"></button>
    <button class="fas fa-share-alt"></button>
    <button class="fas fa-trash"></button>
  </div>
  <div class="container"></div>
</div>
                  </container>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <p class="border-top"></p>
  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Document Centre', icon: 'ArchiveIcon' },
        null,
        { name: 'Upload', icon: 'UploadIcon' }
      ]
    }].concat(userDropdown)
  })
};
</script>
<style lang="scss">

    .card {
        --background:#FFFFFF;
        --text:black;
        position: relative;
        height:12rem;
        box-shadow:0 0 2rem -1rem rgba(0,0,0,.05);
        .multi-button {
            z-index:0;
            position: absolute;
            top:1.25rem;
            left:1.25rem;
            border-radius:100%;
            width:0rem;
            height:0rem;
            transform: translate(-50%, -50%);
            transition: .25s cubic-bezier(0.25, 0, 0, 1);
            button {
                display: grid;
                place-items: center;
                position: absolute;
                width:2rem;
                height:2rem;
                border:none;
                border-radius:100%;
                background:var(--background);
                color:var(--text);
                transform: translate(-50%, -50%);
                cursor: pointer;
                transition: .25s cubic-bezier(0.25, 0, 0, 1);
                box-shadow:0 0 0rem -.25rem var(--background);
                &:hover {
                    background:var(--text);
                    color:var(--background);
                    box-shadow:0 0 1rem -.25rem var(--background);
                }
                &:first-child:nth-last-child(1),
                &:first-child:nth-last-child(1) ~ * { //If there is 1 child
                    &:nth-child(1) {
                        left:25%;
                        top:25%;
                    }
                }
                &:first-child:nth-last-child(2),
                &:first-child:nth-last-child(2) ~ * { //If there are 2 children
                    &:nth-child(1) {
                        left:37.5%;
                        top:18.75%;
                    }
                    &:nth-child(2) {
                        left:18.75%;
                        top:37.5%;
                    }
                }
                &:first-child:nth-last-child(3),
                &:first-child:nth-last-child(3) ~ * { //If there are 3 children
                    &:nth-child(1) {
                        left:50%;
                        top:15.625%;
                    }
                    &:nth-child(2) {
                        left:25%;
                        top:25%;
                    }
                    &:nth-child(3) {
                        left:15.625%;
                        top:50%;
                    }
                }
                &:first-child:nth-last-child(4), //If there are 4 children, if first child is also 4th item from bottom get self, and
                &:first-child:nth-last-child(4) ~ * { //If there are 4 children, if first child is also 4th item from bottom get siblings
                    &:nth-child(1) {
                        left:62.5%;
                        top:18.75%;
                    }
                    &:nth-child(2) {
                        left:37.5%;
                        top:18.75%;
                    }
                    &:nth-child(3) {
                        left:18.75%;
                        top:37.5%;
                    }
                    &:nth-child(4) {
                        left:18.75%;
                        top:62.5%;
                    }
                }
            }
        }
        .container {
            position: absolute;
            width:100%;
            height:100%;
            border-radius:1rem;
            background:var(--background);
            color:var(--text);
        }
        &:hover .multi-button, .multi-button:focus-within { //Hover or a button inside is focused
            width:10rem;
            height:10rem;
        }
    }
</style>
