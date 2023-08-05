<!-- components/TextFieldWithButtonWrapper.vue -->
<template>
    <div class="text-field-with-button-wrapper">
        <v-text-field
            v-bind="{ ...$attrs, ...commonAttrs }" 
            v-on="$listeners"
            ref="textField">
            <template
                v-for="(_, scopedSlotName) in $scopedSlots"
                #[scopedSlotName]="slotData">
                    <slot :name="scopedSlotName" v-bind="slotData" />
            </template>
            <template v-for="(_, slotName) in $slots" #[slotName]>
                <slot :name="slotName" />
            </template>
            <template #append>
                <v-btn @click="copyToClipboard"
                    color="#100073" height="40px"
                    :class="{'copied-button': isCopied}">
                    {{ isCopied ? 'Copied' : 'Copy'}}
                </v-btn>
            </template>
        </v-text-field>
        <div class="popup-message" v-if="isCopied">
            Text has been copied to clipboard
        </div>
    </div>
  </template>
  
  <script>
  export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    computed: {
        commonAttrs() {
        return {
            label: null,
            placeholder: this.label,
            persistentHint: true,
            outlined: true,
            dense: false,
            hideDetails: true,                      
            style: {
                backgroundColor: '#ffffff',
                color: '#000000',
                border: '2px solid #100073',
                height: '60px',
                
            }
        };
        }
    },
    data() {
        return {
            isCopied: false,
        };
    },
    methods: {
      async copyToClipboard() {
        try {
            await navigator.clipboard.writeText(this.$refs.textField.internalValue);
            this.isCopied = true;
            setTimeout(() => {
            this.isCopied = false;
            }, 3000); // Hide the "Copied" message after 3 seconds
            this.$emit('copied');
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
.text-field-with-button-wrapper {
  display: flex;
  align-items: baseline;
}

.copied-button {
    background-color: green;
}

.popup-message {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
}
</style>