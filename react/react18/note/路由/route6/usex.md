```
const location = useLocation();
useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
    //监听location 
  }, [location]);
```