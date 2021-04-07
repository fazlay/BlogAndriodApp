import React, {useState} from 'react'
import { View,Text,StyleSheet } from 'react-native'
import SearchBar from '../components/searchBar';
import useReasults from '../hooks/useReasults'
import ResultList from '../components/ReasultsList'
import { ScrollView } from 'react-native-gesture-handler';


const SearchScreen =() =>{
const [term, setTerm] = useState('');
const [searchApi, results, errorMessage]=useReasults();

console.log(results.name);
const filterReasultsByPrice=(price)=>{

    return results.filter(results=>{
        return results.price === price;
    })


}

return(
        <>
           
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            
            <ScrollView>
            <ResultList 
                results={filterReasultsByPrice('$')} 
                title = "Cost Effective"
                
            />
            <ResultList 
                results={filterReasultsByPrice('$$')} 
                title = "Bit Pricier"
                
            />
            <ResultList 
                results={filterReasultsByPrice('$$')} 
                title = "Big Spender"
                
                />
            </ScrollView>
        </>
    )
};

const style = StyleSheet.create({});

export default SearchScreen;