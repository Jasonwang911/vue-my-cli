<template>
  <div class="index">

    <mt-loadmore 
    class="scroller"
    :bottom-method="loadBottom" 
    :bottom-all-loaded="allLoaded" 
    :auto-fill="false" 
    @bottom-status-change="handleBottomChange"
    ref="loadmore">
    
      <div class="list-cell" v-for="(value, index) in backMsg" :key="index">
        <div class="top clearfix">
            <img class="fl" :src="value.imgUrl" alt="">
            <div class="fl middle">
                <h3>{{value.name}}</h3>
                <div>
                  <span>额度范围：</span>
                  <span>{{value.range}}</span>
                </div>
            </div>
            <div class="fl last">
              <div>{{value.rate}}%</div>
              <div>{{value.rangeName}}</div>
            </div>
        </div>
        <div>{{value.info}}</div>
      </div>

      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">松手开始加载</span>
        <span v-show="bottomStatus === 'loading'">正在加载中</span>
      </div>

  </mt-loadmore>

  </div>
</template>

<script type="text/ecmascript-6">
import { Loadmore } from 'mint-ui';

export default {
  data() {
    return {
      backMsg: [],
      allLoaded: false,
      bottomStatus: ''
    };
  },
  created() {
    this.$post("/ranklist")
      .then(res => {
        this.backMsg = res.rankList;
      })
      .catch(err => {
        console.log("err", err);
      });
  },
  methods: {
    loadBottom: function() {
      console.log('aaaa')
      // 加载更多数据
      this.$post("/ranklist")
      .then(res => {
        console.log(res);
        this.backMsg = this.backMsg.concat(res.rankList);
        this.$refs.loadmore.onBottomLoaded();
      })
      .catch(err => {
        console.log("err", err);
      });
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
  }
};
</script>

<style scoped lang="scss">
.index {
  overflow: scroll;
  .scroller{
    // position: relative;
    // height: 10rem;
    .list-cell {
      width: 100%;
      border-bottom: 1px solid #ccc;
      font-size: 0.24rem;
      overflow:scroll;
      .top{
        width: 100%;
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 100%;
          margin: 0.2rem;
        }
        .middle {
          width: 5rem;
        }
      }

    }
  }
  
}
</style>
