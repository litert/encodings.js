/**
 * Copyright 2018 Angus.Fenying
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable:no-console
// tslint:disable-next-line:no-var-requires
import * as Enc from "../lib";

/**
 * The data for test.
 */
const tests = [
  {
    "base64": ``,
    "base62x": ``
  },
  {
    "base64": `uQ==`,
    "base62x": `k1`
  },
  {
    "base64": `4B0=`,
    "base62x": `u1D`
  },
  {
    "base64": `SqzZ`,
    "base62x": `IgpP`
  },
  {
    "base64": `TrGVxw==`,
    "base62x": `Jh6Ln3`
  },
  {
    "base64": `J1cuX0U=`,
    "base62x": `9rSkNq5`
  },
  {
    "base64": `Z1oAC6va`,
    "base62x": `Pre02wlQ`
  },
  {
    "base64": `dbEkm8zAng==`,
    "base62x": `TR4aczp0d2`
  },
  {
    "base64": `NlpOdoc/SG0=`,
    "base62x": `DbfETeSx3I6D`
  },
  {
    "base64": `tutU/MyRCU4N`,
    "base62x": `jkjKx3CoH2KuD`
  },
  {
    "base64": `sc9nzLIiNyZX0w==`,
    "base62x": `iSx1dpB8YDoPNq3`
  },
  {
    "base64": `TAhgD5IIzvDJ7RI=`,
    "base62x": `J0XW3v88pl39yH2`
  },
  {
    "base64": `BiDEJfj9oJFFST7G`,
    "base62x": `1Y349VZx1e955IJy6`
  },
  {
    "base64": `V4uMGYWYa3D5TlDdoQ==`,
    "base62x": `LukC6OMOQt3vJb3Te1`
  },
  {
    "base64": `u0IvrOLv5KKn5YJ1Tdc=`,
    "base62x": `kq8lhEBlvAAdvO9rJT7`
  },
  {
    "base64": `3wn/xrYYh+Vv+SctUFHz`,
    "base62x": `tmdx3nhOOXx2Llx2ISjK57p`
  },
  {
    "base64": `2XvS3S42cUIKEFm6danzXQ==`,
    "base62x": `sNlItIusSK8A45cwTQdpN1`
  },
  {
    "base64": `urOdYddwgSXZ+BVydGLqkJk=`,
    "base62x": `khETOTTmWINPx21LoT6Bga99`
  },
  {
    "base64": `AZvxrY+xR/Qda7p7fQaLYAh9`,
    "base62x": `0PlnhOx2nHx3GTQyfyVGQBO0Xx1`
  },
  {
    "base64": `+whoJkYDGqY/t+aa8XICk/uTPg==`,
    "base62x": `x2mXe9aO36gOx3jx2QQzN82ax3kJF2`
  },
  {
    "base64": `0iwneWhl0UUJNCYUUJET1FATnGU=`,
    "base62x": `qYmdUMXbqKK9D2OKK94Jr50Jd65`
  },
  {
    "base64": `NC3V7PxXJzdRXnXKWDGawbTqAen5`,
    "base62x": `D2tLyFnN9pTHNdNAM36QmRJg0Udv`
  },
  {
    "base64": `X2WM69+aICVNLwAPN04mKekLquywIg==`,
    "base62x": `NsMCwx1x2Q82LDBm0FDqucAUaBgkom82`
  },
  {
    "base64": `0zI/Z3E3Po7Jw1JYXPFlTAqHP3szaKA=`,
    "base62x": `qp8x3Pt4tFey9mr9ONF5bJ0g7FtipQA0`
  },
  {
    "base64": `ZE1Aq8lP9DHPt+Acc7Nb1jnka+C4deRO`,
    "base62x": `P4r0gzbFx137Fjx20SSyDRrZdaQx22uTUHE`
  },
  {
    "base64": `r9upe7LMxAPNo95C6De8GKH7jGRYnDnnqg==`,
    "base62x": `hx1kfUyBCn0FDex1v2w3Uz6A7yZ6HOd3ddg2`
  },
  {
    "base64": `Ua8BwbbQy/E90Ja5pPJhN3O2kJrIg61ydoY=`,
    "base62x": `KQz1mRRGox34x1q9QvfF9XDtEsa9h8WwroTe6`
  },
  {
    "base64": `HBrlFefB9NGjfJD/2bRPhAm+CvHI2ToX3SIS`,
    "base62x": `71hb5UV1x1D6ZV93x3sRHFX0cx22l78sJeNtI8I`
  },
  {
    "base64": `gnBLzwGpgRim9RhzbflXRRxegBbV7BYWDlhDZA==`,
    "base62x": `Wd1Bpm6fWHYcx1HXpRVbNHHnUW1RLy1OM3bX3P0`
  },
  {
    "base64": `LzNrvEhvcy/JWUL1BxqwkrQse38bh9diJMMzn3o=`,
    "base62x": `BpDhl4XlSox39MKBr1ngmahGiUtzRXx1TY9CCpdtA`
  },
  {
    "base64": `Z+wBRLmgmx9JPqJoxCFzbzupQWWAsd3tw6Dsonm5`,
    "base62x": `Px2m1HBcWcnx19Fg9en25pRpkfGMM0iTtjmw3iedcv`
  },
  {
    "base64": `6IXP1uH9818f0Yp0SGUUyKg3ZHUcnR7Z0uO5aLGIpA==`,
    "base62x": `w8NFrk7x1zrzVqOfqI6KKoAWtP7KSdHyPqkEvQB68f0`
  },
  {
    "base64": `b3Ii0Ss2Dh1X4prKlygC83hGEMci+9kX0qh+ladjcYM=`,
    "base62x": `Rt8YqIis3XrNufhAboW2ztX64CSYx2x1aNqgXx2bQTZSO3`
  },
  {
    "base64": `9Wnc4DZOwQ3jcvbfrcG4365gYuYpxs89FDfWJkMp0M/X`,
    "base62x": `x1MdSu3PEmGtZSlRVhS6utwvWOkOfnizx153VM9aCfqCx3N`
  },
  {
    "base64": `2QuPfCxjRu2/724NryjPyhPzAxt8tmDw4+fxzpW0hPdx/g==`,
    "base62x": `sGkFV2nZHksx3ysuDhoZFoXFp0njzjc3mux2VnpfMqXFTnx32`
  },
  {
    "base64": `PrNJhzwRhcBVXqZ4C2lDoQoZBGQRYMpB22ifQSYGGbee5e4=`,
    "base62x": `FhD9XpmHXS1LNgPu2sb3eGeP16GHOCf1ssYVGIO66RUUvUE`
  },
  {
    "base64": `hLSETI6A4chognmruMJ2OyDszVuc3ePcXT2mQ3vFAlj0GUSY`,
    "base62x": `XBI4J8w0uSXeWdchkC9sEo3ipLkStUFSNJscGtl50bZq6KIO`
  },
  {
    "base64": `LxOwJA4BvhrguxkvpErE5bG8k0MCDjlZ6GBRQZk97SRl/7RpUQ==`,
    "base62x": `BnEm90u1lXhWknalf4h4vR6zaqC23ZbPw61HGPax1yIHbx3yHfK1`
  },
  {
    "base64": `SmSgop2hlkh5iUipPGg/3EKz4agXnRoHTg1+LRzPpt9mjxuouMc=`,
    "base62x": `IcIWefsXbaXvYKYfF6Wx3t4ApuQWNdHe7JWrx2BHpFfjx1cZnkekC7`
  },
  {
    "base64": `blBzpGb3IeDtJ1XMOnRG0nSu2Lvo3mZHIe0n9bzpcXbWIU5nbdEG`,
    "base62x": `Rb1pf6Rt8U3j9rNCEdH6qdIksBletcP78Uqdx1RpfSNRM8KvdRT46`
  },
  {
    "base64": `/ggWwCKvp9bv5b6R/hMcF74t3TQslKwqH3umbuJRSECei6XklFv+2A==`,
    "base62x": `x3WWMm2Alfx1RlvRwHx3XCS5yujtJGibAmg7tkcRk9HI42UYwNab5lx2s0`
  },
  {
    "base64": `WBo2Yvvk9DSv1hWemJYmuL99sx0rMDz0xQtbh6bF4L/wXk/2PZTLhfc=`,
    "base62x": `M1esOllax13IlrXMUc9OckBx1x1inqhC3pqnGjRXwR5uBx3mNax3sFPJBXV7`
  },
  {
    "base64": `/3Dajnyo8uzDHK2FcBmbUBhc56PEoqpiDdgskyrJGDMH3T2+Zljb4RNw`,
    "base62x": `x3t3QZdoezkp37As5S1cRK1XSvwF4egfY3TWiaoh963C7tJsx2PbZRuHDm`
  },
  {
    "base64": `dmTnJlvSOtXsfuOt2K1fcD1i5PSlSd+8MIMorQ+Fstx7hvgGAQHXUmp4MQ==`,
    "base62x": `TcJd9blIEjNiVkEjsArVS3rYvFIbITx2zC8CehGx25ijnyXlW60G7NKcfuC1`
  },
  {
    "base64": `7wy1UABdN5GAsn6auQvqZH+wmyRuWEVVHOuoVtLVz6a4wAOusyswIbTWafg=`,
    "base62x": `ymorK01TDv60idwQkGlgP7x2mcoHkM4LL7EkeLjBLpwQum0Ekioim8RJMQV8`
  },
  {
    "base64": `0Mw3cfH52gP2fHFIkO8uhHGYz6wHVj2mTiPU78POVF4lCrwkPN8Y4RwFs6db`,
    "base62x": `qCmtSV7vsWFsV758aEzkX76Opwm7LZscJYFKyzFEL5ub2hmaFDzOuHm5iwTR`
  },
  {
    "base64": `2g8t+3PzlMrr8krwbGCIq1j4eg7oGja5fYMRSoyuuuYg8KTNXmB3Dm1ZaTSpUQ==
`,
    "base62x": `sWzjx2tFpbChhzahmR628grZuUWye6ZQvVOCHIeokkkOWzAJDNc1t3crPQJIfK1`
  },
  {
    "base64": `U8a/Tzdd7mGyFDaZ7o3E4NHvu38KCMm4cKtp6HTwpcwGD515rIvP7RaogiJkePg=
`,
    "base62x": `KzQx3JpTTyc6o53QPyet4uD7lktzA2CcuSAjfw7JmfSm63vrvh8lFyHQeWY9aUF8
`
  },
  {
    "base64": `bry8Y+pKGrkz20CaW4+7B8P00k63bvACzInwv5hI6bw55wFpo+Eu5SiS0465fntq
`,
    "base62x": `RhozOx2fA6hapsq2QMux2y1zFqqawtRl02p8dmlvX8wRmvvm5fex24kvIYIquwvV
djg`
  },
  {
    "base64": `fLCL8O8SUj4XVF2V4miZAbspF/RYvI/kcczBKn+aXjPfGqoNaOWPzCqc64Umkmhy
Pw==`,
    "base62x": `VB2BzEzIKZuNL5sLucYP0Rif5x3HOl8x3aSSp1Adx2QNZFV6geDQEMFp2gSwuKca
cXoF3`
  },
  {
    "base64": `9Y5x6COXoxV7SEkXyKzXarqfiCClKqPAbfFHb/fA8/Yewp670g9wOGs1FcA/JXpS
xA4=`,
    "base62x": `x1Ovnw2ENenLyI4aNoApNQhgVY22bAgF0RV57Rx3V0zx3OUmfwyqWx1mE6ir5S0x
39NfIn0E`
  },
  {
    "base64": `nrqTbmHDct7YcBSZ6XGLLK3rmiA/2za0mjOeRWUrgapniYwG+eAc9I8WDSNmIczS
2W66`,
    "base62x": `dhgJRc73SjyOS1IPwN6BBAthcY0x3spQqcZEUHMKhWQfdYOm6x2U0Sx18zM3IDc8
SpIsMww`
  },
  {
    "base64": `Icak22Hfm+6QSlcIOFaoZL08G9onEDUTtsrg9NDBRoNQNCNDDC2noPGVN8HdYNdd
l0fpsQ==`,
    "base62x": `8SQass7Vcx2wGIbS8E5QePBqz6x1ed43KJjihWx1D31HeDGD2D332sdeF6LDz7TO
DTTbqVfi1`
  },
  {
    "base64": `+YZyctqx/m5F9r9TQBS5kDWVk9JFGtTLMVqFdu5TxG4KupI+WH2wENK5l6R7qau1
sKyA+UE=`,
    "base62x": `x2OPoSjgnx3cv5x1hx1JG1Iva3MLax1956jJBCLg5TkvJn6uAkf8x2M7sm4DAvbw
HygQkriAo0x2K1`
  },
  {
    "base64": `8zVuozTmJuC6ZpDwt72BOT2/X2FulpXFVxlNkuAS1yY69TRcj1vwRdtSsomeHNJL
AShCkb0h`,
    "base62x": `zpLkepJc9k2wPf3mjys1EJsx3Ns5kbfN5LnbDak0IroOwx1JHSZrlmHTjIiecU7D
9B0IX2aRqX`
  },
  {
    "base64": `ZOz4EshMWx/IzHaZNdeeGLK1J0KCvTTH/FzlR1CmWl5z06PIBKNSIjEDRlb3+XgM
mruRUnxJqw==`,
    "base62x": `PEpu4iXCMnx38p7QPDTUU6BAr9qA2lJJ7x35pbHr2cMbvpqwF81ADI8Z43HbRtx2
NWCchkHKdn9g3`
  },
  {
    "base64": `9qzlVI95lWdkb8chrwMBkOU3jawdwC1yadRNsnsHJP8i0YLHBOaZSM7JCY4bhYHm
C+vpDnGXoCQ=`,
    "base62x": `x1gpbL8x1vbMTaRzSXhmC1aEKtZQmTm2roQTHDidi79FzYqOB71EQPICy92OuRXO
7c2x2lf3d6Ne24`
  },
  {
    "base64": `HN8BlWc2YLMbuce6gZ0au0vYKif/VYk4PL7CmfKHJN0xAxWdRMuPqWv+79MEJfS9
Lt3HoinZog8n`,
    "base62x": `7Dz1bMSsOBCRkSUwWPqQkqlOAYVx3LOauFBy2cVA79Dqn0nMTHCkFgMlx2yx1C49
VIx1Bjt7eYdPeWzd`
  },
  {
    "base64": `UltPOc4DeaxSXJmxV8agLV0kcGb1HhxARzSoE8VkDMZiR70bKiyzTwksZnpp8G8h
ekbg70YaUEKY/A==`,
    "base62x": `KbjFESu3UQnIN9cnLzQWBLqaS6Rr7Xn0HpIe4zLa3CPYHyqRAYopJmaiPdffz6zX
UaRWyqOQK4AOx30`
  },
  {
    "base64": `SKhuYx5RwUbpRU2WR7nqKr1C/kxCj4I6eKG4djiqcmSxjVP+kXOxR3iApCEgKdpW
WeMWPPkIYI8Ul1w=`,
    "base62x": `IAXkOnvHmKRfHKsMHydgAhr2x3an2Zu8wUA6uTZYgScInZLFx2aNEnHtY0f24WAT
fMMUCMFFa8O8zKbrC`
  },
  {
    "base64": `O9IsOEFzW8AQzHHxHAg8as5nCTgrQuD7rDM7NgtPtibN+1UFPDta5RAQ8+3ssFu9
CBvJneh3qnIs3bdJ`,
    "base62x": `Ex18iE45pMz0Gp77n70WzQivd2JWhGk3yh3CyDWjFjYRDx2rK5F3jQvH0Gzx2tii
5kx121l9dUXtgd8itRT9`
  },
  {
    "base64": `BbW9E3RB2nd45EqA6jedbKcOM7KUX2pVqNdOMwoKx0dhDg2AQaX41DlXFq1GZtlK
0Iqu7c3VufhktCVaKg==`,
    "base62x": `1RMx14tH1sdTuv4g0wZUTRASECyAKNsfLgDTECmeAnqTX3Ws0GQNur3bN5gr6Pjb
Aq8gkyStLkVXaj2LQA2`
  },
  {
    "base64": `Lrhug9+t0xqZzVHv8KnVNY+b7QcIUxfjbAPdBHPcSrkAroHC021nRMbiI1GNgqNI
NByLArpQFUuA1fzMZ8c=`,
    "base62x": `BhXkWx1x2jqngPpL7lzAdLDOx2RyGS8KnVZR0FT17FSIha0he72qsrdHCRY8r6DW
gD8D1oB0hfG5Kk0rVpCPz7`
  },
  {
    "base64": `EYMRrxg0dSdf0Dgl5mRWVjct3LU4u75PHJY2OR2CmRqPCjDZG31MTe/MWUA/fU7o
T6Lf5QFnXJb6Ta5e64Qk`,
    "base62x": `4OCHhnWqTITVq3WbvcHMLZSjtBKukyvF79OsEHs2cHgF2Z3P6trCJUx3CMK0x3VK
yeJwBVvG5dN9RwJQvUwuGa`
  },
  {
    "base64": `JofjOzxq3JPwu39yyjDn0jCTdMF0FKohLLz7A9Okn2zqDDxfZRxIxSfBC+zT/UQA
e9veNVBBstBahfqPTTaxQg==`,
    "base62x": `9eVZEpngt9Fmktx1ooZ3dqZ2JTC5q5AeXBBpy0x1Eadspg33nVPHn8nIV12x2pJx
3KG0Ux1lUDL11ij1QXVgFJJQnG2`
  },
  {
    "base64": `DlO5ofEVbdNO1muEUf5REH8kaKQtxh4XX4HTCm768c/m2e7tEtWFTwa64M3VWvtn
dLu7ni6go7Ve+xr6WnZ5bj4=`,
    "base62x": `3bEveV4LRTDErck4KVvH47zaQAGjnXuNNu7J2cywzSx3csUyj4jM5JmQwuCtLMlj
dTBkydYwWeyLUx2nhwMdPvRZE`
  },
  {
    "base64": `7NePictS3Y6L/ejfkPrNVQ52+KdVbIXJqqTDXmnPdFt4DyGA3JsNw90QBzCXn0Am
u2gdUQog4UUJQ7j1Rq9PFEA9`,
    "base62x": `yDUFYSjItOwBx3UZVaFhDLGvsx2ATLR8N9ggJ3NcdFT5ju3o60t9iDmx1qG1p2Nd
q0cksWTKGeWuKK9GyZrHgx1F540x1`
  },
  {
    "base64": `5lonA+frdS6rdI04Bd450qd0pSmDZ9afiw01GYH3zRW7MTR5ANXdS0H4rzYix2nc
culTWGJJPSvBDHk6oKN8wSV4AA==`,
    "base62x": `vbed0x2VhTIwhT8qu1TuvqgTqfIc3Px1QVYmqr6O7tpHMyCJHv0DNTIq7uhpOYns
dSSkbJM699FIl137aweADzmILu00`
  },
  {
    "base64": `i+9+e/WwigrjOile8K5POlm9kUTQp/BAQbvpExiJJhr+e6aT9fJS163yardxIzdz
orAFy62itk96UXzbFyvWizqsKE0=`,
    "base62x": `Yx2x1x2Ux3MmYWhZEYbUzAvFEbcx1aKJGfx310GRlf4nY99Xhx2UwQJx1V9Irwto
QhTn8pTpeh05owsYjax1wKNpR5olMYpgiA4D`
  },
  {
    "base64": `nNOqdh9++eq7WAlmOkcP7+8yR+mnK0/GB6ZcziTRsanKtJsmeCKDPN82CdBJh6Di
QeCIOOGChsS1Bk7Q9Zm6DJZzaTeU`,
    "base62x": `dDEgTXx1x2x2UgyM0bcEaSFyx2zoHx2cdAqx361wPSpYJHiQdAj9icU2A3FDzs2T
19Xw3YGU28EE62XiIr1ayGx1Pcw39PpQJUK`
  },
  {
    "base64": `CR559jz+U+L1+pqvVgl7nhBlT5jLn1dMyEocUQ6ggejaaPzdyKKPkzxjKMgFO5mK
0sZ7eIPHSr0T9RVvMPLTYYyZNkEFQw==`,
    "base62x": `2Hvvx1Zpx2Kx2Brx2fglLWbydX1bJvZBdrTCo4eSKGwWWUZQQFpToAAFapnZACW5
EvcAqiPyU8F7IhqJx1HLlCFBJOOoPDa45G3`
  },
  {
    "base64": `N7lmJKwncRoLCHG77JtYG25lnPvZbYwrXvtSZV8cm+1RreVxir+iM/MfMo/6nBs2
YDj7//D2ervj9ElHB4mXwpiJdWcaWmY=`,
    "base62x": `Dybc9AmdSHeB276yy9jO6svbdFlPROmhNljIPLzScx2rHhULnYhx2YCx3CVCex3w
d1isO3Zyx3x33sUhlZx14b71ucNmfY9TMSQMc6`
  },
  {
    "base64": `8g+z5J+4EZONRGmmkjGMQInDWBOwylnwzTsIf8eCkRIa1ZdZwUsvg6fOIFQ2Qcc6
r0FYYMqU7rVQdIGiRIuN7U1Ag+OLz3Dc`,
    "base62x": `zWx2pv9x2u4PEDH6ccaZ6CG8d3M1EmobdmpJi8VzU2aH8QrPTPmKilWwVE85GsGS
Swhq5OOCgKyhLGT86YH8kDyKr0Wx2EBpt3S`
  },
  {
    "base64": `JJBxvpXH1yJntrynH5tONHX5+XiXSUB5wvMad3fdKXnIs7OG5ogOv9Zw7HTm7w9x
3U9RH0ui6Iv0jIWkbY22SobDlh2Dh9rQwA==`,
    "base62x": `991nlfN7ro9djhod7vjED7Nvx2NYNIK1vmlCQTtVTANd8iyE6veWElx1Pmy7Jcym
x1ntKx1H7qkYw8lqZ8MaROssIeR3bXs3Xx1hGm0`
  },
  {
    "base64": `2EtSD9JVpSy2dbAFO1LMWdqPtq1LNIfGa8nx9AmThCs4hvYP9+0kg95aWrzhLw7O
vXs/l6igZz9L9f4XCR7xzZhXweyD6bp1NvE=`,
    "base62x": `s4jI3x19LfIosTR05ErBCMTgFjgrBD8V6Qzdnx10cJX2iuXlOFx1x2qaWx1vQMhp
XBmyElNix3bwYWPpx1Bx1VuN2HynpPXNmUo3wRfrDl1`
  },
  {
    "base64": `/RXZdsGwa+ZDNo60Ze2eb8DrToSp2/Ui45hLxwdEqwjbLR/2AIrw74OS2vDw2y1c
noQvlH8Jkm9MjnYmJKj8HybAdsiwwSkQGv7K`,
    "base62x": `x3HNPTi6mQx2P3DewqPUsURz3hJeIfsx3KYuvXBnmT4gmZRBHx3s08hmyuEIsl3m
sorSdeGlb7z9acx1CZdOc9AZz7oR0TiYmmIaG6lyA`
  },
  {
    "base64": `07O4i31YQbe9A+rorb82T1smvodObCWIEzmSmVh9kC8CSUa9kxP0qP2buJ8Uaw8R
4kVq0ygB3VnxxnojPDj92rSmiik3m1veMCW2BA==`,
    "base62x": `qyEuYtrOGRUx10x2hehRzsJricleTER2M84pcIcLXx1a2z2IKQx1anFqgFsRk9zK
QmzHuaLgqoW1tLdnndeZF3Zx1shIcYYatcrlUC2Ms10`
  },
  {
    "base64": `DOFWlGT9TXVlvTWIq/ZE+miCz7Em9VxJnjWyxav2C28bcurNdMixTylLkd9kChsl
aO2078Gz/YO0mBfiozupgj6VdzHj94EHo2fnGPk=`,
    "base62x": `3E5Mb6Jx1JNLblJM8gx3P4x2cY2py4cx1Ln9dZMonQls2szRSkhDTCYnJobBaTx1
a2XibQEsqyz6px3OEqc1VYepkfWZwLTp7Zx1u47esVd6F9`
  },
  {
    "base64": `CNJpCTej7u5rF5fLUWgVbmjLiFFRptYggptdraOOjas4KgGi4Oo5FYZwemBq++JH
3Vy2RjawkxaE0/+0Zgak0U3+tv/Rz0MW43m+EAMd`,
    "base62x": `2D9f2JUZykvh5vVBKMWLRcZBY55HfjOWWfjThQEEZQiuAW6YuEev5OPmUc1gx2x2
97tLosHZQmanQ4qx3x2qPWQaqKtx2jlx3HpqCMutcx240CT`
  },
  {
    "base64": `Dp0tcFKDawCe1Rhx9Jgg2MZBafif1ahmaiWLjIhlTA839Y+/EDs/tkdXfpw3SGAo
F6I8uAGQ03eDKtBUEi44tYZRe7SbLtSW2NQ/BtpJDg==`,
    "base62x": `3fqjS5A3Qm2UrHXnx19WWsCP1QVYVrQXcQYMBZ8XbJ0ztx1Ox2x343ix3jaTNVfm
tI60e5w8zk06GqtU3Aj1K4YuujOPHUyIRBjIMsDGx31jf932`
  },
  {
    "base64": `sZlqr0hL98CYCNc/qMKRW5cI6Ft4WAjYqVPSbieIBHl1XP62Ol96rmuhdEg54UQl
XtJjTuDxPH3nL5ZMVH291KBFeMzQdC5T2fmy/IpLDzU=`,
    "base62x": `iPbghqXBx1z2O2DSx3gCAHMvS8w5juM0ZOgLFIRYU817brNFwsEbx1whckXT4Wvu
KGbNj9ZJk3nF7tdBvPCL7sx1rA15UCpGT2vJsVcox38fB3p5`
  },
  {
    "base64": `hCirwDvaQLuETFHX9HMBIxj8nAcgsvxf/t6yBxaLTrrnGAbRGuoHBAnxSN0cC2+E
NmE18SnpNpEX5U7kpV/feh+q7OHl1PlF1c/ExJhXORyX`,
    "base62x": `X2Yhm3lQGBk4J57Nx17C18nZzd0SWilnVx3jwo1nQBJhhd60RH6ke710dnIDqS2s
x24Dc4rzIdfDf4NvKyafLx3VUXx2gyE7brFb5rSx34n9XNEHoN`
  },
  {
    "base64": `RJxutISh29r7E71iIZ+BtsmrnscdDHeXn5F5MVM0ihK6U9rz5eJhMQqSTCwP/KJa
iquhThAaMh4pKj0y7AeTsnkrrmVIWV0XlHGaQv9aazXrhA==`,
    "base62x": `H9nkj8IXsx1hy4yrY8Px21jichdiST37UNdv5vCLCqYXAwKx1hpvU9XCGgIJ2mFx
3A9QYgkXJX0QCXufAZqoy0UJidahhcL8MLqNb76QGlx1QQpNhX0`
  },
  {
    "base64": `tH3v1J1o1iej2UIuec5xYlyjb42Ia+YVRm4prwvBfUtt1/MwzxebzxPqwKWhcEwb
RfRGbntgqLJJmMnuuPaGjnBuXP7bg1pkQ4R6lvLV+oLUKFA=`,
    "base62x": `j7tlr9rerYUZsK8kUSvnOboZRus8Qx2OLHcufhml1VKjjrx3CmpnURpnFgmAMXS4
mRHVH6RdjWgB99cCdkkFQ6Zd1kNFyRWrfaGuHwblBLx2eBKA50`
  },
  {
    "base64": `F9GAaIEzIHDv2VAsc05P68nvglkieWpfQ4qnqJ6pr95iyYseyMSnlCL0DkT0pB73
jb+o3A8MJ7vnVyX9ZzZX0ZlGdmU2Hmmi8z/0+V2cZUmr8XTr`,
    "base62x": `5x160Q84p873lsL0iSqvFwzdlWbaYUMfVGugdg9wfhx1vYoOiUoCIdb2Bq3aJqf1
ytZRx2et0zC9yldLoNx1PpPNqPb6TcKs7ccYzpx3qx2LsSPKchzNJh`
  },
  {
    "base64": `KS3jl1wEN1djMUs3Iwu3RSHSX4GyBZLTy1ySaYlvqgSTDFtGNwtBGfwrT0iP6X5i
mYvRmxeS5FJUJ6VYA5Ly9RWhh3+jVv/qQ34qVztGHhzlNrY4fA==`,
    "base62x": `AItZbrm4DrTZCKit8mktHI7INu6o1PBJoroIQOblgWIJ35j6Dmj16VmhJqYFwNvY
cOlHcnUIv59K9wLO0vBox1HMXXtx2ZLlx3gGtugLpj67XpbDhOuV0`
  },
  {
    "base64": `RlMIXNuDOtCGsJrq/oFONwtRtmnF94L/ixUshbDZ5PBijeteEYj2jRrsF/WP8Yy6
9K3LbwYGke+wjb9qbpZVhmwP1nZh+ztXGEKxRtjbEzsPVULQfYY=`,
    "base62x": `HbC8NDk3Ej26i9hgx3e5EDmjHjcd5x1uBx3YnKiXR3PvF1YZUjU4OZsZHhi5x3MF
zOowx1AtBRmO6aUx2mZRx1gRfPLXcmFrdPXx2pjN64AnHjZR4piFLKBGVO6`
  },
  {
    "base64": `DKqtZSvbdKfzK3jsagB8EsDtES/55E00Fy5pHIr13j7hOxfDSa8gZH+Y66fSR0lh
fhsQTjG8DWjuz5MdHAryJV5Dd2jHAu2AbM6cWYgwEHFAFe5ZNFj/`,
    "base62x": `3AgjPIlRTAVpAtZiQW1z4i3j4Ix3vv4qq5ovf78hrtZyXEnV3IQzWP7x2OwwVIHq
bXVXiGJZ6z3MZkpvCT70ho9Lv3TsZ70ks0RCwSMOWm47505UvPD5Zx3`
  },
  {
    "base64": `tD3NEa3HzFa9g7K9RVcgbtvl3Cr2wbxlx9CQchj7eNUCPd7x6cd5CVIE1+H62Yf/
rEYsYBJYGG65ZkmAaVmYC/pUASU6jZoPJWDTA0seAjTcuZsFyxQfhA==`,
    "base62x": `j3tD4Qt7p5Qx1WyAx1HLSWRjlbt2hsmRnbnx12GSXZyUDK2FTynwSTv2L84rx27w
sOVx3h4OiO19O66wvPac0QLcO2x3fK0IKwZPeF9M3J0qiU0ZJSkPi5onGVX0`
  },
  {
    "base64": `I+70MdTn8JH/Spyzq+LcWp+Zsfcmn3VuDcMRJcosgooKdAinXgHO4gjCzaZGioFo
yL6Q1CLglZB5wJgg2IoROBkUonWcbpFbUCK/U9eR3SX3YibPbwvvOcY=`,
    "base62x": `8x2yqCTJdz97x3Ifopgx2BSMfx2PiVScdtLk3SCH9SeiWeeAT0YdNW7EuWZ2pQP6
Ye5eoBwGr2BWbP1vm9WWs8eHE1aKedMSRf5RK2Ax3Kx1UHtINtOYRFRmllES6`
  },
  {
    "base64": `ehgCPgDLuZXZq30bCkuACGH78ASLJh0WfPFSbL4cVmNYL56B5uPtSXq7XseXjl/w
Z+ti+QkP4UFk4kvW9wgR8wZHagH6sdeWM728nLaa2JQPqtzgT4oQPZD3`,
    "base62x": `UXW2FW3BkPNPgtqR2ak0267yz0IB9XqMVF5IRBuSLcDOBvw1vkFjINgyNiUNZbx3
mPx2jYx2GaFuK5aualMx1mWHzmP7QW7wiTUMCyszdBQQs9GFgjpWJueGFP3t`
  },
  {
    "base64": `/peLiw1CLIop/gQK3iOtccPFUAJHsSmTiLyLU0ijplc8o0HUS8lWctxH5ajzuNsX
2HnFo1DqOz3ffdPgac1wQO0axrGyNUU1X4K0ajfevTEfKxi6wgcGyB8QgQ==`,
    "base62x": `x3fUBYmr2B8efx3WGAtYEjSSF5K097iIcJYBoBKqYZfbSzeq7KIzbMSjn7vQZpkD
iNs7d5er3gEptVVTFWQSrmGEqQnh6oDKKrNuAqQZVUlJ4VAnYwmWS6o1zGW1`
  },
  {
    "base64": `rOGscYSSchqo53+dmtzRR9wOx3ack6iTk4Dn52Qj6dF2rVHtDt/5OV7zicfROzeh
WVzd5P0XeD/3OuwSvr2w+NnnjziEIOmXx1KsF0y54Qds/2dfksFc8za1dQo=`,
    "base62x": `hE6iSOIISXgevtx2TcjpHHx1mEntQSawYJau3dvsGZwT5shL7j3jx3vELypYSVHE
pUXMLpTvFqNU3x3tEkmIlhsmx2DddZpY48EcNnrAi5qovuGTix3sTVai5SzpQrTG
A`
  },
  {
    "base64": `0eSJvNVi1MVqwtDxu9mH1frkka77lrbo53GDxUa/cFP5Qmm2m04iCRVDME6D3tgq
SmLzw2KEmStGFVA33Ec8IfKTKjvbCoCyWl0YdDRQ4xzMoU1vcLMLNZZcoohn`,
    "base62x": `qUI9lDLYrCLgmj3nkx1c7rVhaaQyybhRevt63nKQx3S5FvGccscquY2HL3C4w3tj
WgIcBpmsA4cIj65L0tt4Sz8VAJAZlR2e2oMbqOT3HGunpCeKrlSBCBDPPSeeXd`
  },
  {
    "base64": `TI2BgNF9m3THWdHsElUzlICpOeEpDIfH5i47M35NQ9qXSlGZwmDX9jp35qI46uV3
Qwa80cQ9YzWfH0rK9gCTdrgROovdP7Txc8Pcn13Wgf9bfCsSz7KZweDuwpqE/Q==
`,
    "base62x": `J8s1WD5x1ctJ7MT7i4bKpb82fEU4f38V7vYuyCtvDGx1gNIb6Pmc3Nx1Zftvg8uw
kLtGmQzqSGx1OpMV7qhAx1W2JThWHEelTFyJnSzFSdrtMWVx1RV2iIpyAPmU3kmf
g4x31`
  },
  {
    "base64": `IvtknOkDgqVarCmi/dNv+yLCqAQ5IizBpxfeI1wYxISOQ13lUZUQIcLqJ/HevHt+
wnOSRjGHuw3AyW+At2DT1rWq03AQBAWjGYAI0UdrqDGfLD5bAjREGKLBPiRZK7I=
`,
    "base62x": `8ljadEa3WgLQh2cYx3TDlx2oB2g0Gv8Yp1fnVU8rmOn8IEGrtbKPKG8SBg9x37Ul
7jx2mdEIHZ67kmt0oMx20js3JrhMgqt0G10MZ6O08qKThg36VB3vR0ZH46AB1FYH
PAy2`
  },
  {
    "base64": `Ij5Dohh1YF2q0vAlrESHyEj4PyFl0xtkfE0FFpKiw8QcQwE9nfXfcuy986Hi7mH5
dlu5qC+UYTCvGnaXEks+sqrllyB6ZgBHvlkHCuzEuRRFDFHyMrJF1zuihwT2CHiF
`,
    "base62x": `8Zv3eXXrO5sgql0bh4I7o4ZuFo5bqnjaV4q55fAYmzGSGm4x1dVNVSkox1zw7Yyc
7vTbkvg2x2KOJ2l6dQN4aix2ighbbo1wPW17lba72kp4kHH5357oCh95rpkYXmJs
27Y5`
  },
  {
    "base64": `LEC1y9CydEwsYuVl63ggqPq7qqYkkH7wjWeNdobnfTUvyfjshAeAuT/pBw6L9Nm9
wIbE27f1vVGEOtLL6qyYnsAonZr7bDDBvXtvbl+wLVpjiEIT1NaPH8WCDHwU9KLu
uA==`,
    "base62x": `B42rox12oT4miOkLbwtWWgFgyggOaa7ymZMUDTeRdVJKloVZiX0U0kJx3f1mwBx1
Dcx1m8R4syVrlL64EjBBwgoOdi0edPhyR331lNjlRbx2mBLfZY48JrDQF7zM237m
Kx1ABkk0`
  },
  {
    "base64": `pqK8NlC9rrjCpbn/9ljuHTVuNRVjojVests3qF7cY88UGwkLvt8J45rq9mtNb5oq
INpgAvcUdXwkD5L6NU5i9m3UT79XPD+tJF7P87kw5cD3e2PxMk0atWNUDTZXIelF
Ous=`,
    "base62x": `fgAzDb2x1hhZ2fRdx3x1bZk7JLkDHLZeZLUijitg5ySOzzK6maBljz9uvhgx1cjD
Rveg8DfW0lSKTNma3vBwDKvYx1ctKJyx1NF3x2j95yFzyamvS3tUsFnCaqQjMDK3
JPN8Ub5EkB`
  },
  {
    "base64": `u9NGanIUOQqxbLGsyEnn5MyrEyfI1Snf3qTkImGSllVj0ookmQ1PunzTxhQLsuyK
rvComh+6tq4NfYLIFERT/CPdNrrLrLvdaueVr/qq5UvzlzvdUdRyUlKhZyiO9ihn
XOfH`,
    "base62x": `kx1D6Qd8KEGgnRB6io4ddvCoh4oV8rIdVtgJa8c6IbbLZqeeacGrFkdpJnXGBiko
Ahl2ecXx2wjguDVOB854HJx32FTDhhBhBlTQkULhx3ggvKlpbplTKTHoKbAXPoYE
x1YXdNEV7`
  }
];

const base62x = Enc.createBase62xEncoder();

for (let item of tests) {

  item.base64 = item.base64.replace(/\n/g, "");
  item.base62x = item.base62x.replace(/\n/g, "");

  if (base62x.encode(Buffer.from(item.base64, "base64")) !== item.base62x) {

      console.error(item);
      process.exit(0);
  }
}

console.info("All encoding tests succeed.");

for (let item of tests) {

  item.base64 = item.base64.replace(/\n/g, "");
  item.base62x = item.base62x.replace(/\n/g, "");

  if (base62x.decode(item.base62x).compare(Buffer.from(item.base64, "base64"))) {

      console.error(item);
      process.exit(0);
  }
}

console.info("All decoding tests succeed.");
