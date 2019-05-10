<template>
  <section class="s-calculator">
    <div class="container">
      <div class="s-calculator__wrapper flex ai-c jc-sb">
        <div class="s-calculator__left">
          <StepCounter
            :current="step"
            :total="total"
            :counter="calculatorRes.stepText"
            @click.native="handleStepCounterClick"
          />

          <TitleImg
            view="CALCULATOR_SERVICES"
            :img="calculatorRes.titleImg"
            v-in-viewport
          />
          <transition name="calc-step">
            <StepContent :key="step" :step="step">
              <template slot="title">
                <Caption
                  :caption="currentData.caption"
                  view="CALCULATOR_SERVICES"
                />
              </template>
              <template slot="body">
                <StepItem
                  @click.native="handleItemClick(item)"
                  v-for="item, i in currentData.items"
                  :key="i"
                  v-show="step !== 5"
                  :item="item"
                  :activeColor="activeColor"
                />
                <Form
                  v-show="step === 5"
                  view="SECTION_CALCULATOR"
                  @submit.native.prevent="handleSubmit"
                  :form="calculatorRes.stepsData[calculatorRes.stepsData.length - 1]"
                  @handleFileInputChange="handleFileInputChanges"
                />
              </template>

            </StepContent>
          </transition>
        </div>
        <div class="s-calculator__right s-calculator__parts inline-flex ai-fs jc-fs">
          <StepNavigation
            :current="step"
            :navigation="calculatorRes.stepNavigation"
            :stepsData="calculatorRes.stepsData"
            @itemClicked="handleNavigationItemClick"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Caption from '~/components/Shared/Caption.vue'
  import StepCounter from '~/components/Calculator/StepCounter.vue'
  import StepContent from '~/components/Calculator/StepContent.vue'
  import StepItem from '~/components/Calculator/StepItem.vue'
  import StepNavigation from '~/components/Calculator/StepNavigation.vue'
  import Form from '~/components/Shared/Form'
  import ArtMarksTitleImg from '~/components/Shared/ArtMarksTitleImg'

  export default {
    components: {
      Caption,
      StepCounter,
      StepContent,
      StepItem,
      StepNavigation,
      Form,
      TitleImg: ArtMarksTitleImg
    },
    props: {
      calculator: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        step: 1,
        total: 5,
        activeColor: '',
        stepsData: [
          {
            stepStatus: {
              isActive: true
            },
            answer: {
              text: '',
              isAnswered: false
            }
          },
          {
            stepStatus: {
              isActive: false
            },
            answer: {
              text: '',
              isAnswered: false
            },
          },
          {
            stepStatus: {
              isActive: false
            },
            answer: {
              text: '',
              isAnswered: false
            },
          },
          {
            stepStatus: {
              isActive: false
            },
            answer: {
              text: '',
              isAnswered: false
            },
          },
          {
            caption: {
              view: 'CALCULATOR_SERVICES'
            },
            stepStatus: {
              isActive: false
            },
            inputs: {
              name: {
                view: 'input',
                type: 'text',
                name: 'username',
                value: ''
              },
              phone: {
                view: 'input',
                type: 'tel',
                name: 'userphone',
                value: '',
              },
              email: {
                view: 'input',
                type: 'email',
                name: 'useremail',
                value: ''
              },
              text: {
                view: 'textarea',
                name: 'usertext',
                value: ''
              },
              file: {
                view: 'input',
                type: 'file',
                name: 'userfile',
                value: [],
                id: 'header-modal-file1'
              }
            },
            btn: {
              type: 'button',
              view: 'SECTION_DISCUSS'
            },
            answer: {
              isAnswered: false,
              text: {
                name: '',
                phone: '',
                email: '',
                text: '',
                file: ''
              }
            }
          },
        ]
      }
    },
    created() {
      this.$root.$on('handleFileInputChange', this.handleFileInputChanges);
    },
    methods: {
      handleFileInputChanges(files) {
        this.stepsData[this.stepsData.length - 1].inputs.file.value = [...files];
      },
      handleSubmit (e) {
        const answers = {
          direction: this.stepsData[0].answer.text,
          type: this.stepsData[1].answer.text,
          status: this.stepsData[2].answer.text,
          start: this.stepsData[3].answer.text,
          form: {
            name: e.target.elements.username.value,
            phone: e.target.elements.userphone.value,
            email: e.target.elements.useremail.value,
            text: e.target.elements.usertext.value,
            file: e.target.elements.userfile.files
          }
        }
      },
      handleItemClick (item) {
        if (this.step === 1) {
          this.activeColor = item.color;
        }

        this.stepsData.forEach(item => {
          item.stepStatus.isActive = false
        })
        this.stepsData[this.step].stepStatus.isActive = true

        this.stepsData[this.step - 1].answer.text = item.title
        this.stepsData[this.step - 1].answer.isAnswered = true

        this.step += 1
      },
      setFirstStep () {
        this.activeColor = '';

        this.stepsData.forEach((item, i) => {
          if (i !== 0) {
            item.stepStatus.isActive = false;
            this.stepsData[i - 1].answer.isAnswered = false;
          }
        });

        this.stepsData[0].stepStatus.isActive = true;
        this.step = 1;
      },
      handleStepCounterClick() {
        if (this.step > 1) {
          if (this.step === 2) {
            this.setFirstStep();
          } else {
            this.stepsData.forEach((item, i) => {
              if (i >= this.step - 1) {
                item.stepStatus.isActive = false;
                this.stepsData[i - 1].answer.isAnswered = false;
              }
            });
            this.stepsData[this.step - 2].stepStatus.isActive = true;
            this.step -= 1;
          }
        }
      },
      handleNavigationItemClick(index, e) {
        this.step = index + 1;

        if (this.step + 1 === 2) {
          this.setFirstStep();
        } else {
          this.stepsData.forEach((item, i) => {
            if (i > this.step - 1) {
              item.stepStatus.isActive = false;
              this.stepsData[i - 1].answer.isAnswered = false;
            }
          });
        }

        this.stepsData[index].stepStatus.isActive = true;
      }
    },
    computed: {
      currentData() {
        return this.calculatorRes.stepsData[this.step - 1];
      },
      calculatorRes() {
        return this.extend(
          {},
          this.calculator,
          {
            stepsData: [
              ...this.$store.state.homePage.calculator.stepsData.map((item, i) => {
                return this.extend(
                  {},
                  item,
                  {
                    stepStatus: this.extend(
                      {},
                      item.stepStatus,
                      this.stepsData[i].stepStatus
                    )
                  },
                  {
                    answer: this.stepsData[i].answer
                  },
                  {
                    inputs: this.extend(
                      {},
                      item.inputs,
                      this.stepsData[i].inputs
                    )
                  },
                  {
                    caption: this.extend(
                      {},
                      item.caption,
                      this.stepsData[i].caption
                    )
                  },
                  {
                    btn: this.extend(
                      {},
                      item.btn,
                      this.stepsData[i].btn
                    )
                  },
                );
              })
            ]
          }
        )
      }
    }
  }
</script>

<style>
  .calc-step-leave,
  .calc-step-leave-active {
    position: absolute;
    opacity: 0;
    transition: none;
  }

  .calc-step-enter,
  .calc-step-enter-active {
    transition: .1s all cubic-bezier(.15,.95,.87,.95);
    transform: translateX(-20%);
    opacity: 0;
  }

  .s-calculator {
    background-color: #f0f5f7;
    padding: 4.0625rem 0 3.125rem;
  }

  .s-calculator__left {
    width: 74.75%;
    padding-right: 4.5%;
    min-height: 29.0625rem;
    position: relative;
  }

  .s-calculator__wrapper {
    position: relative;
    z-index: 0;
  }

  .s-calculator__right {
    border-left: 1px solid #ffffff;
    padding: 3rem 0 5.3125rem 4.5%;
    width: 25.25%;
  }


  @media screen and (max-width: 1199px) {
    .s-calculator__left {
      padding-right: 0;
    }
  }

  @media screen and (max-width: 1020px) {
    .s-calculator__right {
      display: none;
    }

    .s-calculator__left{
      width: 100%;
    }
  }

</style>
