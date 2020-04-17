<template>
    <div>
        <h1 class="title">jack`s left helper</h1>
        <ul>
            <li class="list">
                <router-link to='/cookbook'><wv-button title="标题文字" type="primary">菜谱</wv-button></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    margin-top: 20%;
    text-align: center;
}
.list{
    margin: 20px 10px;
}
</style>
