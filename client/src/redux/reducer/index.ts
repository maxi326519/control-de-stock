import { POST_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT } from "../actions/products";
import {
  POST_SUPPLIER,
  GET_SUPPLIER,
  UPDATE_SUPPLIER,
} from "../actions/suppliers";
import { POST_INVOICE, GET_INVOICE, UPDATE_INVOICE } from "../actions/invoices";
import { GET_STOCK, UPDATE_STOCK } from "../actions/inventory";
import { RootState } from "../../interfaces";
import { AnyAction } from "redux";

const initialState: RootState = {
  user: {
    name: "Cargando",
  },
  products: [],
  suppliers: [],
  stock: [],
  invoices: [],
};

export default function Reducer(
  state: RootState = initialState,
  action: AnyAction
) {
  switch (action.type) {
    /* POST METHOD*/
    case POST_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case POST_SUPPLIER:
      return {
        ...state,
        suppliers: [...state.suppliers, action.payload],
      };

    case POST_INVOICE:
      return {
        ...state,
        stock: [...state.stock, action.payload.inventory],
        invoices: [...state.invoices, action.payload.invoce],
      };

    /* GET METHOD*/
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case GET_SUPPLIER:
      return {
        ...state,
        suppliers: action.payload,
      };

    case GET_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };

    case GET_STOCK:
      return {
        ...state,
        stock: action.payload,
      };

    /* UPDATE METHOD*/
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };

    case UPDATE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };

    case UPDATE_STOCK:
      return {
        ...state,
        stock: state.stock.filter((s) =>
          s.id === action.payload.id ? action.payload : s
        ),
      };

    default:
      return state;
  }
}
