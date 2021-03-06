import { createSlice, current } from "@reduxjs/toolkit";

const filter = {
  company_name: {},
  company_icon: {},
  departure_time: {},
  arrival_time: {},
  duration: {},
  from_location: {},
  to_location: {},
  price: {},
  stop: {},
  from_location_code: {},
  to_location_code: {},
  day: {},
  departure_date: {},
  arrival_date: {},
};

const flightDataSlice = createSlice({
  name: "flightData",
  initialState: { data: [], filter },
  reducers: {
    addFlightData(state, action) {
      state.data = action.payload;

      // Filter On company Name
      state.data.data = state.data.data.filter((elem) => {
        if (!Object.keys(state.filter.company_name).length) {
          return elem;
        }

        if (state.filter.company_name[elem.company_name]) {
          return elem;
        }
      });

      //Filter on stop
      state.data.data = state.data.data.filter((elem) => {
        if (!Object.keys(state.filter.stop).length) {
          return elem;
        }

        if (state.filter.stop[elem.stop]) {
          return elem;
        }
      });

      // Filter on price
      state.data.data = state.data.data.filter((elem) => {
        if (!Object.keys(state.filter.price).length) {
          return elem;
        }

        console.log(elem.price);
        let valArr = Object.keys(state.filter.price)
        let check = Number(valArr[valArr.length-1])
        if (Number(elem.price)<= check) {
          return elem;
        }
      });
    },
    sortHighToLow(state, action) {
      state.data.data.sort((a, b) => a[action.payload] - b[action.payload]);
      // state.data.sort((a,b)=>(a[action.payload]-b[action.payload]))
    },
    filterData(state, action) {
        // console.log(action.payload);
        let setProperty = action.payload[0]
        let valueProperty = action.payload[1]
        
        state.filter[setProperty][valueProperty] = valueProperty;
        // console.log(current(state).data.data);
    },
    removeFilter(state, action) {
      delete state.filter[action.payload[0]][action.payload[1]];
    },
    // priceFilter(state,action){
    //   state.data.data = state.data.data.filter((elem)=>{
    //     if(elem.price<=action.payload){
    //       return elem
    //     }
      
    //  })

    //  console.log(current(state).data.data);

    // }
  },
});

export const flightDataActions = flightDataSlice.actions;

export default flightDataSlice;
