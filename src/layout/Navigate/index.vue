<template>

    <div class="nav-left">
        <div class="logo">湖南科技大学</div>

        <el-menu style="background-color: rgb(56, 153, 213)" :default-active="activeIndex" mode="horizontal"
            text-color="#fff" active-text-color="#ffd04b" :ellipsis=false>
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">就业创业服务</el-menu-item>
            <el-menu-item index="3">就业创业资讯</el-menu-item>
            <el-menu-item index="4">就业创业日程</el-menu-item>

        </el-menu>

    </div>

    <div class="nav-right">
        <el-button size="default" icon="Search" circle></el-button>
        <el-button size="default" icon="CameraFilled" circle></el-button>
        <el-button size="default" icon="PictureRounded" circle></el-button>
        <img src="@/assets/image/th.jpg" alt="" style="height: 40px; width: 40px;">

        <el-dropdown>
            <span class="el-dropdown-link">
                沈礼谦
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>

</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.logo {
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
}

.nav-left {
    display: flex;
}

.nav-right {
    height: 100%;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;

    img {
        margin: 0px 10px;
        border-radius: 50%;
    }
}
</style>