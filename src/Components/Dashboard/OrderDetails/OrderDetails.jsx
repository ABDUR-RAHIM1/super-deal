import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from "../../Spinner/Spinner"
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

function OrderDetails() {
    const { id } = useParams()

    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch("https://panda-backend.onrender.com/order/getOrder")
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const findOrder = order.find(order => order._id === id)

    if (!findOrder) {
        return <Spinner />
    }
    // total price counter 
    let totalPrice = 0;
    if (findOrder) {
        findOrder.order.forEach(element => { 
            totalPrice += element.price
        });
    }
    // shimpment cost 
    let shipping = 0;
    if (totalPrice <= 0) {
        shipping = 0
    } else if (totalPrice <= 100) {
        shipping = 32
    }
    else if (totalPrice >= 501) {
        shipping = 56
    }


    const styles = StyleSheet.create({
        body: {
            width: "100%",
            height: "100vh"
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: "row",
            borderTop: "10px solid #0D47A1"
        },
        textHeader: {
            fontSize: "20px",
            color: "#0D47A1",
            margin: "10px 0px",
            textTransform: "uppercase"
        },
        text: {
            fontSize: "12px",
            lineHeight: "1.5px",
            color: "#2E2C2C",
            textTransform :"capitalize"
        },
        invoiceAddress: {
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            flexDirection: "row",
            margin: "15px 0px",
            paddingBottom: "10px",
            borderBottom: "1px solid #0D47A1"
        },
        addCol: {
            width: "48%"
        },
        addTitle: {
            margin: "10px 0px",
            padding: "5px",
            backgroundColor: "#0D47A1",
            color: "white",
            fontSize: "16px",
            fontStyle: "italic",
            textTransform: "uppercase"
        },
        infoTitle: {
            fontSize: "14px",
            fontWeight: 'normal',
            textAlign: "center",
            margin: "10px 0px",
            color: "#2E2C2C"
        },
        image: {
            width: "20px",
            height: "20px"
        },
        flexBox: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            borderBottom: "1px solid #0D47A1",
            padding: "10px 0px"
        },
        flex : {
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            flexDirection: "row"
        },
        payTitle : {
          fontSize:"15px",
          backgroundColor :"#0D47A1",
          color:"white",
          padding :"4px",
          margin :"10px 0px"
        },
       
        footer : {
               backgroundColor :"#bfdbfe",
               padding :"30px 10px",
               color :"#1e3a8a",
               margin :"20px 0px"
        }


    })
    return (
        <div className=''>

            <PDFViewer style={styles.body}>
                <Document>
                    <Page size="A4" style={{ padding: "10px" }} >
                        <View style={styles.header} >
                            <View>
                                <Text style={styles.textHeader}>Invoice</Text>
                                <Text style={styles.text}>Invoice No : {findOrder._id} </Text>
                                <Text style={styles.text}>Date : {new Date(findOrder.orderDate).getDate()}/{new Date(findOrder.orderDate).getMonth() + 1}/{new Date(findOrder.orderDate).getFullYear()} </Text>
                            </View>

                            <View>
                                <Text style={styles.textHeader}>Super-deal</Text>
                                <Text style={styles.text}>Best Online Shopping Platform</Text>
                            </View>
                        </View>  {/** header end **/}


                        <View style={styles.invoiceAddress} >
                            <View style={styles.addCol}>
                                <Text style={styles.addTitle}>Order From</Text>
                                <Text style={styles.text}>City : {findOrder.city} </Text>
                                <Text style={styles.text}>Present Address : {findOrder.presentAddress} </Text>
                                <Text style={styles.text}>Permanent Address : {findOrder.permanentAddress} </Text>
                                <Text style={styles.text}>Zip Code : {findOrder.zip} </Text>
                            </View>
                            <View style={styles.addCol}>
                                <Text style={styles.addTitle}>Order To</Text>
                                <Text style={styles.text}>City : Rangpur</Text>
                                <Text style={styles.text}>Present Address : Rangpur</Text>
                                <Text style={styles.text}>permanent Address : Lalmonirhat -Road. 208</Text>
                                <Text style={styles.text}>Zip Code : 5400</Text>
                            </View>
                        </View>  {/* invoce addreess end */}


                        {/*  costomer table start here */}
                        <View >
                            <Text style={styles.infoTitle}>Costomer Information</Text>

                            <View style={styles.flexBox}>
                                <Text style={styles.text}>Costomer Name</Text>
                                <Text style={styles.text}>Phone Number</Text>
                                <Text style={styles.text}>Email</Text>
                            </View>
                            <View style={styles.flexBox}>
                                <Text style={styles.text}>{findOrder.name}</Text>
                                <Text style={styles.text}>{findOrder.phone}</Text>
                                <Text style={styles.text}>{findOrder.email}</Text>
                            </View>

                        </View>
                        {/*  costomer table end here */}


                        {/*  products information start here */}

                        <View style={{ margin: "20px 0px" }}>
                            <Text style={styles.infoTitle}>Product Information</Text>

                            <View>
                                <View style={styles.flexBox}>
                                    <Text style={styles.text}>SL No</Text>
                                    <Text style={styles.text}>Product Id</Text>
                                    <Text style={styles.text}>Image</Text>
                                    <Text style={styles.text}>Category</Text>
                                    <Text style={styles.text}>Price  </Text>
                                </View>
                                {
                                    findOrder &&
                                    findOrder.order.map((or, i) => (
                                        <View style={styles.flexBox}>
                                            <Text style={styles.text}>{i}</Text>
                                            <Text style={styles.text}>{or._id}</Text>
                                            <Image style={styles.image} src={or.image} />
                                            <Text style={styles.text}>{or.categorie}</Text>
                                            <Text style={styles.text}>{or.price} BDT </Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>

                        {/*  products information end here */}


                        {/*  payment area start here */}

                                <View style={styles.flex}>
                                    <View style={{width:"48%"}}>
                                         <Text style={styles.payTitle}>Payment Info</Text>
                                         <Text style={styles.text}>Cash On Delivary</Text>
                                         <Text style={styles.text}>Stay With Us For Better Services</Text>
                                    </View>
                                    <View style={{width:"48%"}}>
                                     <Text style={styles.text}>Total Items :{findOrder.order.length} </Text>
                                     <Text style={styles.text}>Shipping Cost : {shipping} BDT </Text>
                                     <Text style={styles.text}>Products Cost : {totalPrice} BDT </Text>
                                    <Text style={styles.payTitle}>Total Price : {totalPrice + shipping} BDT</Text>
                                    </View>
                                </View> 

                        {/*  payment area end here */}

                        <View style={styles.footer}>
                             <Text style={{fontSize :"30px", margin :"10px 0px"}}>THANK YOU !</Text>
                             <Text style={{fontSize :"13px"}}>for choosing Super-deal for your product needs. We appreciate  hope to continue serving you in the future. If you have any questions or concerns, please don't hesitate to reach out.</Text>
                        </View>

                    </Page>
                </Document>
            </PDFViewer>
        </div>

    )
}

export default OrderDetails