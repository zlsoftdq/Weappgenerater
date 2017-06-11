<style scoped>
  .scroll {
    overflow-y: auto;
    flex: 1;
  }
</style>

<template>
  <div class="inner">
    <h1 class="page-header">{{$t('sidebar.actions.start')}}</h1>
    <div class="row scroll">
        <div class="col-md-12">
          <div class="form-group">
              {{$t('start.title')}}
              <hr/>
              {{$t('start.window.label')}}
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
          <label for="navigationBarBackgroundColor">{{$t('start.navigationBarBackgroundColor.title')}}</label>
          <input type="text" id="navigationBarBackgroundColor" v-model="item.class_name"  placeholder="{{$t('start.navigationBarBackgroundColor.placeholder')}}">
          </div>
          <div class="form-group">
          <label for="navigationBarBackgroundColor">{{$t('start.navigationBarBackgroundColor.title')}}</label>
          <input type="text" id="navigationBarBackgroundColor" v-model="item.class_name"  placeholder="{{$t('start.navigationBarBackgroundColor.placeholder')}}">
          </div>
          <div class="form-group">
          <label for="navigationBarBackgroundColor">{{$t('start.navigationBarBackgroundColor.title')}}</label>
          <input type="text" id="navigationBarBackgroundColor" v-model="item.class_name"  placeholder="{{$t('start.navigationBarBackgroundColor.placeholder')}}">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group"></div>
        </div>
        <div class="col-md-12">
            <button class="btn btn-primary btn-lg btn-block" @click="save()">{{$t('sidebar.actions.start')}}</button>
        </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'start',
    pathname: '/start',

    data () {
      this.$root.title = ''
      return {
        content: ''
      }
    },

    methods: {
      save () {
        if (!this.content) {
          return this.$dialog.error('笔记内容太少了，请再丰富一点吧!')
        }
        const stamp = this.$utils.getFilename()
        this.$storage.set(stamp, { content: this.content })
        this.$router.go({ name: 'watch', params: { item: stamp } })
      }
    }
  }
</script>
