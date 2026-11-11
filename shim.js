firebase.initializeApp(window.FIREBASE_CONFIG);
const fs=firebase.firestore(),authP=firebase.auth().signInAnonymously().then(c=>c.user);
window.claude={use:async n=>{
 try{
  if(n==='db'){await authP;return fs}
  if(n==='user'){const u=await authP;return{isOwner:()=>false,canEdit:()=>false,id:async()=>u.uid}}
  if(n==='downloads')return{save:async({filename,data})=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'text/csv'}));a.download=filename;a.click()}};
 }catch(e){console.error(e)}
 return null}};
