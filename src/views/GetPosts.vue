<script setup>
import { ref, onMounted } from 'vue';
// import axios from 'axios';

const posts = ref([]);

async function fetchPosts() {
  try {
    // 假資料
    const fakeData = [
      {
        id: 1,
        user: 'Member',
        avatar: 'https://picsum.photos/500/500',
        content: '文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容',
      },
      {
        id: 2,
        user: 'Member',
        avatar: 'https://picsum.photos/500/500',
        content: '文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容',
      },
      {
        id: 3,
        user: 'Member',
        avatar: 'https://picsum.photos/500/500',
        content: '文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容',
      },
    ];

    // 模擬 API 呼叫
    // const response = await axios.get('');
    // posts.value = response.data;

    // 使用假資料
    posts.value = fakeData;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div class="post_container">
    <div v-for="(post, index) in posts" :key="post.id" class="post_item" :class="{ 'no-border': index === posts.length - 1 }">
      <div class="post_header">
        <div class="post_avatar">
          <img :src="post.avatar" alt="default" />
        </div>
        <div class="post_user">
          <span>{{ post.user }}</span>
        </div>
      </div>
      <div class="post_body">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  &_container {
    border: 2px solid var(--text-color);
  }
  &_item {
    padding: 1rem;
    border-bottom: 1px solid var(--text-color);
    &.no-border {
      border-bottom: none;
    }
  }
  &_header {
    display: flex;
    gap: 1rem;
  }
  &_avatar {
    img {
      border: 2px solid var(--text-color);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      overflow: hidden;
    }
  }
  &_user {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
}
</style>
 