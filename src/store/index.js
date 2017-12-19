import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	// 未付款列表
	unPayList:[],
	currentShop:{}
}

const mutations = {
    // 添加未付款订单的逻辑  state参数指state对象
    ADD(state, product) {
        // 用来判断所添加的商品是否存在的标识
        let isExist = false

        // 存在的话，把当前订单中的商品对象数量+1
        for (let tempItem of state.unPayList) {
            if (tempItem.showOID == product.showOID) {
                // 把标识改成true
                isExist = true;
                tempItem.count++;
                    break
            }
        }

        // 如果不存在，则是新添加的商品
        if (!isExist) {
            // 设计未付款订单商品对象
            let cartProduct = {
                showOID: product.showOID,
                showName: product.showName,
                // name: item.showName,
                price: product.minPrice,
                srcImg: product.posterURL,
                time:product.latestShowTime_weekday,
                count: 1
            }
            state.currentShop = cartProduct;
            state.unPayList.push(cartProduct);
        }
    },
    // 订单中某个商品数量增加的逻辑
    UP(state, showOID) {
        for (let item of state.unPayList) {
            if (item.showOID == showOID) {
                item.count++;
                    break;
            }
        }
    },
    // 订单中某个商品数量减少的逻辑
    DOWN(state, showOID) {
        for (let item of state.unPayList) {
            if (item.showOID == showOID) {
                if (item.count > 1) {
                    item.count--;
                }
                break
            }
        }
    },
    // 删除订单中某个商品的逻辑
    REMOVE(state, showOID) {
        for (let index in state.unPayList) {
            if (state.unPayList[index].showOID == showOID) {
                state.unPayList.splice(index, 1)
                break;
            }
        }
    }

}

const actions = {
    add(context, product) {
        context.commit('ADD', product)
    },
    up({ commit }, showOID) {
        commit('UP', showOID)
    },
    down({ commit }, showOID) {
        commit('DOWN', showOID)
    },
    remove({ commit }, showOID) {
        commit('REMOVE', showOID)
    }
}

const getters = {
    // 获取商品总数
    totalCount(state) {
        let resultTotalCount = 0
        for (let item of state.unPayList) {
            resultTotalCount += Number(item.count)
        }
        return resultTotalCount;
    },
    // 获取商品总价格
    totalPrice(state) {
        let resultTotalPrice = 0
        for (let item of state.unPayList) {
            resultTotalPrice = Number(item.count * item.price)
        }
        return resultTotalPrice;
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
