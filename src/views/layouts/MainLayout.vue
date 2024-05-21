<script setup>
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
import { useScreenWidth } from '@/composables/screenWidth'
const screenWidth = useScreenWidth()

const navList = ref([
  {
    icon: 'pi pi-home',
    active: false,
    route: '/user/profile',
    label: '用戶設定'
  },
  {
    icon: 'pi pi-bell',
    active: false,
    route: '/user/followings',
    label: '追蹤名單'
  },
  {
    icon: 'pi pi-thumbs-up',
    active: false,
    route: '/user/likeslist',
    label: '我按讚的文章'
  }
])
function gotoPage(path) {
  router.push(path)
}
</script>

<template>
  <div>
    <section class="">
      <!-- header -->
      <header>
        <section class="header_layout">
          <h1 class="header_title">MetaWall</h1>
          <div class="header_user">
            <div class="user_avatar">
              <div class="image">
                <img src="https://picsum.photos/500/500" alt="default" />
              </div>
            </div>
            <div class="user_name">
              <span>Member</span>
            </div>
          </div>
          <!-- aside -->
          <aside v-if="screenWidth >= 768">
            <section class="aside_layout">
              <Button label="張貼動態" class="aside_button" @click="gotoPage('/createPost')" />
              <div class="">
                <Menu :model="navList">
                  <template #item="{ item, props }">
                    <router-link
                      v-if="item.route"
                      v-slot="{ href, navigate }"
                      :to="item.route"
                      custom
                    >
                      <a
                        class="aside_item"
                        v-ripple
                        :href="href"
                        v-bind="props.action"
                        @click="navigate"
                      >
                        <div class="aside_icon"><span :class="item.icon" /></div>
                        <span>{{ item.label }}</span>
                      </a>
                    </router-link>
                  </template>
                </Menu>
              </div>
            </section>
          </aside>
          <Toolbar v-else class="navbar">
            <template #center>
              <div class="navbar_layout">
                <Button
                  v-for="item in navList"
                  :key="item.route"
                  class="navbar_btn"
                  :icon="item.icon"
                  rounded
                  outlined
                  :aria-label="item.label"
                  @click="gotoPage(item.route)"
                />
                <Button
                  class="navbar_btn plus"
                  icon="pi pi-plus"
                  rounded
                  aria-label="Home"
                  @click="gotoPage('/createPost')"
                />
              </div>
            </template>
          </Toolbar>
        </section>
      </header>
    </section>
    <!-- main -->
    <main>
      <section class="main_layout">
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
/* header */
header {
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  padding: 0 0.75rem;
  border-bottom: 2px solid var(--text-color);
}
.header {
  &_layout {
    position: relative;
    display: flex;
    gap: 1rem;
    max-width: 900px;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
  }
  &_title {
    color: var(--text-color);
    margin: 0;
  }
  &_user {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
}
.user {
  &_avatar {
    .image {
      border: 2px solid var(--text-color);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      overflow: hidden;
    }
  }
  &_name {
    position: relative;
  }
  &_name::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 2px;
    background: var(--text-color);
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* aside */
aside {
  position: absolute;
  right: 0;
  top: calc(100% + 0.75rem);
  width: 300px;
}
.aside {
  &_layout {
    padding: 0.75rem;
    background: #fff;
    border: 2px solid var(--text-color);
  }
  &_button {
    width: 100%;
    margin-bottom: 1rem;
    background: var(--main-color);
    color: #fff;
    box-shadow: -2px 2px 0px #000400;
    border: 2px solid #000400;
    border-radius: 8px;
  }
  &_button:active {
    background: #eec32a;
    color: #000400;
  }
  &_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      font-weight: 700;
    }
  }
  &_item:hover {
    color: var(--main-color);
    transition: all 0.15s ease-in;
  }
  &_item:hover &_icon {
    background: var(--main-color);
    color: #fff;
    transition: all 0.15s ease-in;
  }
  &_icon {
    border: 2px solid var(--text-color);
    border-radius: 50px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    background: #e2edfa;
  }
}
/* navbar : mobile */
.p-toolbar-group-center {
  width: 100% !important;
}
.navbar {
  position: fixed;
  z-index: 5;
  left: 50%;
  min-width: 300px;
  width: 90%;
  height: 65px;
  transform: translateX(-50%);
  bottom: 1rem;
  background: #efece7 0% 0% no-repeat padding-box;
  border: 3px solid #000400;
  border-radius: 32px;
  padding: 0rem;
  &_layout {
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    align-items: center;
  }
  &_btn {
    border: 3px solid #000400;
    background: #fff;
    color: #000;
  }
  &_btn.plus {
    color: #fff;
    background: var(--main-color);
  }
}

/* main */
main {
  margin-top: 60px;
  padding: 0 0.75rem;
  background: #efece7;
  height: calc(100vh - 60px);
  overflow-y: scroll;
}
.main {
  &_layout {
    max-width: 900px;
    margin: 0 auto;
    padding: 0.75rem 0;
    padding-bottom: calc(65px + 2rem);
  }
}
@media screen and (min-width: 768px) {
  .main {
    &_layout {
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: 0.75rem;
      padding-bottom: 0.75rem;
    }
  }
}
</style>
