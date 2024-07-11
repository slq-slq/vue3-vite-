<!-- <template>
    <el-button type="primary" size="default" @click="" :icon="Plus">按钮</el-button>
    <Test />
    <SvgIcon name="ad" />
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import Test from "@/components/test.vue";
</script>

<style scoped></style> -->
<template>
    <div>
        <div class="navbar">
            <Navigate/>
        </div>

        <div class="hero-section">
            <img src="@/assets/thumbnail1.jpg" alt="Hero Image">
            <div class="hero-text">
                <h1>校园招聘季开始啦</h1>
                <h2>2023年秋季师范专场招聘会举行</h2>
            </div>
            <div class="hero-thumbnails">
                <img src="@/assets/thumbnail1.jpg" alt="缩略图片1">
                <img src="@/assets/thumbnail2.jpg" alt="缩略图片2">
                <img src="@/assets/thumbnail3.jpg" alt="缩略图片3">
            </div>
        </div>

        <div class="services">
            <div class="service" v-for="(service, index) in services" :key="index">
                <!-- <img :src="service.icon" :alt="service.title"> -->
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <a href="#">去{{ service.actionText }} >></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navigate from '@/layout/Navigate/index.vue'
            services: [
                {
                    title: "我要做职业规划",
                    description: "职业规划，职业图谱，职业认知，能力分析",
                    //icon: "@/assets/icon1.png",
                    link: "#",
                    actionText: "做规划"
                },
                {
                    title: "我要指导",
                    description: "能力成长指导，创新创业技能指导，求职面试指导",
                    //icon: "@/assets/icon2.png",
                    actionText: "指导"
                },
                {
                    title: "我要训练",
                    description: "AI面试，AI社交，AI礼仪，AI简历",
                    //icon: "@/assets/icon3.png",
                    actionText: "训练"
                },
                {
                    title: "我要实习",
                    description: "实习岗位，实习管理",
                    //icon: "@/assets/icon4.png",
                    actionText: "实习"
                }
            ]

</script>

<style scoped>


.navbar {
    height: 60px;
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(56, 153, 213);
    color: rgb(255, 255, 255);
}


.navbar .nav-links {
    padding-top: 3px;
    display: flex;
    list-style: none;
}

.navbar .nav-links li {
    margin-left: 20px;
}

.navbar .nav-links a {
    color: white;
    text-decoration: none;
}



.hero-section {
    position: relative;
    text-align: center;
    color: white;
}

.hero-section img {
    width: 100%;
    height: auto;
}

.hero-section .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero-thumbnails {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.hero-thumbnails img {
    width: 100px;
    height: auto;
    margin: 0 10px;
}

.services {
    display: flex;
    justify-content: space-around;
    padding: 20px;
}

.service {
    text-align: center;
}

.service img {
    width: 50px;
    height: auto;
}

.service h3 {
    margin: 10px 0;
}

.service p {
    color: #666;
}

.service a {
    color: #0044cc;
    text-decoration: none;
}
</style>
