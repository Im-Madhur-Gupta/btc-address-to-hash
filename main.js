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
// const decodedP2pkhData = bs58check.decode(P2PKH_ADDRESS);
// console.log("decoded P2PKH Data", decodedP2pkhData);
// // OUTPUT -> Uint8Array(21) [
// //     0,  24,  75, 216,  19, 135,
// //   160, 204,  69, 169, 113, 193,
// //   201, 213,  52,   0,  47,  61,
// //   101, 103, 242
// // ]
// const recipientP2pkh = Buffer.from(decodedP2pkhData.slice(1)).toString("hex"); // slice(1) is used to remove '00'
// console.log("Recipient P2PKH", recipientP2pkh, 'length', recipientP2pkh.length);
// // OUTPUT -> Recipient P2PKH 184bd81387a0cc45a971c1c9d534002f3d6567f2 length 40
// const paddedRecipientP2pkh = recipientP2pkh.padEnd(64, '0');
// console.log("Padded Recipient P2PKH", paddedRecipientP2pkh, 'length', paddedRecipientP2pkh.length);

// P2SH
// const decodedP2shData = bs58check.decode(P2SH_ADDRESS);
// console.log("decoded P2SH Data", decodedP2shData);
// const recipientP2sh = Buffer.from(decodedP2shData.slice(1)).toString("hex"); // slice(1) is used to remove '05'
// console.log("Recipient P2SH", recipientP2sh, 'length', recipientP2sh.length);
// const paddedRecipientP2sh = recipientP2sh.padEnd(64, '0');
// console.log("Padded Recipient P2SH", paddedRecipientP2sh, 'length', paddedRecipientP2sh.length);

// P2WPKH
// const decodedP2wpkhData = bech32.decode(P2WPKH_ADDRESS);
// console.log("decoded P2WPKH Data", decodedP2wpkhData);
// const recipientP2wpkh = Buffer.from(decodedP2wpkhData.words).toString("hex");
// console.log("Recipient P2WPKH", recipientP2wpkh, 'length', recipientP2wpkh.length);
// // Fix: Length is coming as 66, should have been 40
// const paddedRecipientP2wpkh = recipientP2wpkh.padEnd(64, '0');
// console.log("Padded Recipient P2WPKH", paddedRecipientP2wpkh, 'length', paddedRecipientP2wpkh.length);

// P2WSH
// const decodedP2wshData = bech32.decode(P2WSH_ADDRESS);
// console.log("decoded P2WSH Data", decodedP2wshData);
// const recipientP2wsh = Buffer.from(decodedP2wshData.words).toString("hex");
// console.log("Recipient P2WSH", recipientP2wsh, 'length', recipientP2wsh.length);
// // Fix: Length of output is wrong, should be 64
// const paddedRecipientP2wsh = recipientP2wsh.padEnd(64, '0');
// console.log("Padded Recipient P2WSH", paddedRecipientP2wsh, 'length', paddedRecipientP2wsh.length);

// P2TR
const decodedP2trData = bech32m.decode(P2TR_ADDRESS);
console.log("decoded P2TR Data", decodedP2trData.words);
const recipientP2tr = Buffer.from(decodedP2trData.words).toString("hex");
console.log("Recipient P2TR", recipientP2tr, 'length', recipientP2tr.length);
// Fix: Length of output is wrong, should be 64
const paddedRecipientP2tr = recipientP2tr.padEnd(64, '0');
console.log("Padded Recipient P2TR", paddedRecipientP2tr, 'length', paddedRecipientP2tr.length);
