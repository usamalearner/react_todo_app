import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    date: {
        marginLeft: 18,
        fontSize: 14,
        marginTop: 1,
        paddingLeft: 5,
        paddingBottom: 3,
        color: "gray",
    },
    Title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
    },
    list: {
        margin: 20,
    },
   title: {
        padding: 2,
        fontWeight: 700,
    },
})

export function PDf(props){
    console.log(props)
    return(
        <Document>
            <Page style={styles.page}>
                <Text style={styles.header} fixed>
                   Designed by Syed Usama Ali
                </Text>
            <View>
                     <Text style={styles.Title}>Items todo</Text>    
                    {props.data?
                    props.data.map((title,index)=>{
                        return(
                            <View key={index} style={styles.list}>
                            <Text style={styles.title}>{index + 1}. Name : {title.title}</Text>
                            <Text style={styles.date} >Date : {title.date.getDate()}-{title.date.getMonth() + 1}-{title.date.getFullYear()}</Text>
                           <Text style={styles.date}>
                            Time :
                             {title.date.getHours()<10?"0"+title.date.getHours():title.date.getHours()}
                           :
                           {title.date.getMinutes()<10?"0"+title.date.getMinutes():title.date.getMinutes()}
                           :
                           {title.date.getSeconds()<10?"0"+title.date.getSeconds():title.date.getSeconds()}
                           </Text>
                              </View>
                        )
                    }):""}
               

                
                
                
            </View>

             </Page>
        </Document>
    )
}