<template>
  <div class="index">

    <div>这是release分支新增的东西</div>

    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">

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
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$post("/ranklist")
      .then(res => {
        console.log(res.rankList);
        this.backMsg = res.rankList;
      })
      .catch(err => {
        console.log("err", err);
      });
    },
    loadTop() {
      // 加载更多数据
      this.init();
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      console.log('aaaa')
      // 加载更多数据
      this.$post("/ranklist")
      .then(res => {
        console.log(res);
        this.backMsg = this.backMsg.push(res.rankList);
      })
      .catch(err => {
        console.log("err", err);
      });
      // this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>

<style scoped lang="scss">
.index {
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
</style>
