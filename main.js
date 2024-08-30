import { bech32, bech32m } from "bech32";
import bs58check from "bs58check";

const P2PKH_ADDRESS = "13DU5LmMHxMwM4AuRmVWZnGtMprRBTEXfN";
const P2SH_ADDRESS = "39cyaGDTDvCJpjKVY6Te9gLbCER5SYnsU3";
const P2WPKH_ADDRESS = "bc1qc4kreypl0kz69dmxyrwfr4dvkfwhy3pwe436ht";
const P2WSH_ADDRESS =
  "bc1q0wu0tqp2u3rtunjl0h0rsl9pvf86acy6sep63st0lp7lgg67ykzqeq89pn";
const P2TR_ADDRESS =
  "bc1p8k4v4xuz55dv49svzjg43qjxq2whur7ync9tm0xgl5t4wjl9ca9snxgmlt";

// P2PKH
const decodedP2pkhData = bs58check.decode(P2PKH_ADDRESS);
const recipientP2pkh = Buffer.from(decodedP2pkhData.slice(1)).toString("hex");
const paddedHashP2pkh = recipientP2pkh.padEnd(64, "0");

// P2SH
const decodedP2shData = bs58check.decode(P2SH_ADDRESS);
const recipientP2sh = Buffer.from(decodedP2shData.slice(1)).toString("hex");
const paddedHashP2sh = recipientP2sh.padEnd(64, "0");

// P2WPKH
const decodedP2wpkhData = bech32.decode(P2WPKH_ADDRESS);
const recipientP2wpkh = Buffer.from(
  bech32.fromWords(decodedP2wpkhData.words.slice(1))
).toString("hex");
const paddedHashP2wpkh = recipientP2wpkh.padEnd(64, "0");

// P2WSH
const decodedP2wshData = bech32.decode(P2WSH_ADDRESS);
const hashP2wsh = Buffer.from(
  bech32.fromWords(decodedP2wshData.words.slice(1))
).toString("hex");

// P2TR
const decodedP2trData = bech32m.decode(P2TR_ADDRESS);
const hashP2tr = Buffer.from(
  bech32m.fromWords(decodedP2trData.words.slice(1))
).toString("hex");
