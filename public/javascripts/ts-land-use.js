(function(ts) {
  var el = "ts-embed-1316073824233";
  ts.init = ts.init || function() {
    for (var key in ts.callbacks) {
      ts.callbacks[key]();
    }
  };
  ts.maps = ts.maps || {};
  ts.callbacks = ts.callbacks || {};
  ts.callbacks[el] = function() {
    if (!ts.maps[el]) {
      var map;
      var tilejson = {
        "name":"Untitled map",
        "el":"ts-embed-1316073824233",
        "api":"mm",
        "size":[940,500],
        "center":[175.79052734375,-40.21536064630218,8],
        "options":["zoomwheel","zoompan","legend","tooltips","zoombox","attribution","streetlevel"],
        "layers":["nz-regions-land-changes-2"],"basepath":"/","uiHost":"tilestream-iupiw63i.dotcloud.com","domain":"kuahyeow",
        "tileHost":["tilestream-iupiw63i.dotcloud.com"],
        "scheme":"tms",
        "minzoom":3,"maxzoom":10,
        "bounds":[166,-48,180,-33],
        "formatter":"function(o,d) { return {full:function anonymous(obj) {\nvar __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');}return __p.join('');\n}, teaser:function anonymous(obj) {\nvar __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<strong> ',obj.area_ha,' hectares </strong><br />\\n<em> Old Type: ',obj.prev_luc_name,' </em><br />\\n<em>New Type: ',obj.luc_name,'</em><br/>\\nRegion: ',obj.lum_reg_n,'\\n');}return __p.join('');\n}, location:function anonymous(obj) {\nvar __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');}return __p.join('');\n}}[o.format](d); }",
        "legend":"<ul>\n<li><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAXf2lDQ1BJQ0MgUHJvZmlsZQAAeAGtWWVYVU3Xnn0KOBwO3d3d3d3dKXDg0N2lIiFSSggoJYIIggoGJSIigigiggoYiIRIqqCCIiDvBvV5nx%2Ff%2B%2B%2Fb13X2vllzrzVrZs3M3msBAHMLITw8GEEFQEhodKSNoQ6Xk7MLF8kbQApoAB0QBjiCd1S4tpWVGfif1%2BY4gPYbn4vv2%2FqftP%2B7gZroE%2BUNAGQFN3sRo7xDYNwCAKLNOzwyGgDUvj3euOjwfZwPY7pI2EEY1%2B5jv9%2B4Yx97%2FcZDBxw7G12YMw0AKY5AiPQDALcKy7livf1gOxQ4ADA0ocSAUABouWCs4e1PIALA7AlzxEJCwvZxLoyFvP5lx%2B9fmEDw%2BscmgeD3D%2F49FlgT7lgvICo8mJBw8Mf%2F5y0kOAaer4OLAb7jwqN1bOAnEzxvTAHRxnYwpoOxlH%2BMkf0frJfob%2Be4z4XlTqFeFpYwpoEx0TtKF55LANuBYoPCTPft7HNyiT56%2BjCGVwV0NirW9i%2B%2BlOiva%2FGH4xRIMNmPGR7mdBAiYfS73wfh0Vb7PuzbfB0abGH2B6%2F5Rhrs24flCIxPlL4tjGEfEGzRkXb7cthnhIRvgIExjOF%2BETrhwQdrbp9jExljsz8WPhgTfULt%2F%2BpmEgl6prCcDZaXATOgC%2FQAF3wPA8HwLxIEACL8%2FCv3%2FpfcFiSCjyAU%2BIAoWOOA4RGQGvkXAwNAgPX94HbxP%2Fo6BxIfEAtr7f7lDa%2B2r%2F7Ff3S8%2FtEwAO8PbPyxIHVZaklq5y%2Bbi%2FKvXxh9jB7GCGOAEf4rgXv6PYrIA%2F9M4dH4gBjYlg%2Fc919%2F%2Fj2qmH8Y%2F5b%2BngObA60gmBHwt2%2FgcOBZwD%2B2TP%2BZmT9zgRJAyaDkUToodZQGShlwoRhQLEAcJYdSQmmjNFGqcJvyv%2Bb5j9Yf%2F8WB78FcxR54HwQ%2BwJ7DuzraJz4ajhXQDQtPiAzw84%2Fm0oZPCx8xLuNQbwkxLhkpaWmwf%2FbscwD4anNwpkAMT%2F8r81kEQA1eG2Qj%2F5UFngagsR8Axuz%2FygRc4f0rBsD1Z94xkbG%2F7aH2H2iABZTwSmMGHIAXCMHjlwEKQBVoAX1gAiyBHXAG7sAb%2BMP%2BRoI4cBikgAyQA%2FJBMSgDVeACuASughugHXSBe%2BABeAxGwBh4A6bBPFgBa2ATbEMQRAJRQLQQM8QJ8UOikAykBGlA%2BpAZZAM5Q56QHxQKxUCHoTQoByqEyqBqqAG6Dt2C7kGPoFHoFTQDLUFfoJ8IJAKHoEOwIwQQkgglhDbCFGGHOITwQ0QgEhHpiFOIs4gaxBVEG%2BIe4jFiDDGNWEFsIAGSHMmA5EaKI5WQukhLpAvSFxmJPIrMRpYga5BNyE7kAPI5chq5itxCYVC0KC6UOBxLI5Q9yhsVgTqKykWVoS6h2lB9qOeoGdQa6heaAs2GFkWroI3RTmg%2FdBw6A12CrkO3ovvRY%2Bh59CYGg2HACGIU4fXrjAnEJGFyMZWYZkwPZhQzh9kgISFhJhElUSexJCGQRJNkkJSSXCG5S%2FKMZJ7kByk5KSepDKkBqQtpKGkqaQlpI2k36TPSBdJtMioyfjIVMksyIlkCWR5ZLVkn2VOyebJtLDVWEKuOtcMGYlOwZ7FN2H7sJPYrOTk5D7kyuTV5APkx8rPk18gfks%2BQb%2BFocCI4XZwbLgZ3CleP68G9wn2loKAQoNCicKGIpjhF0UBxn2KK4geeFi%2BBN8YT8cn4cnwb%2Fhn%2BEyUZJT%2BlNqU7ZSJlCeVNyqeUq1RkVAJUulQEqqNU5VS3qCaoNqhpqaWpLalDqHOpG6kfUS%2FSkNAI0OjTEGnSaS7Q3KeZo0XS8tLq0nrTptHW0vbTztNh6ATpjOkC6XLortIN063R09DL0TvQx9OX09%2Bhn2ZAMggwGDMEM%2BQx3GAYZ%2FjJyM6ozejDmMXYxPiM8TsTK5MWkw9TNlMz0xjTT2YuZn3mIOYC5nbmtywoFhEWa5Y4lnMs%2FSyrrHSsqqzerNmsN1hfsyHYRNhs2JLYLrANsW2wc7Absoezl7LfZ1%2FlYODQ4gjkKOLo5ljipOXU4AzgLOK8y7nMRc%2BlzRXMdZarj2uNm43biDuGu5p7mHubR5DHnieVp5nnLS%2BWV4nXl7eIt5d3jY%2BTz5zvMN9lvtf8ZPxK%2FP78Z%2FgH%2BL8LCAo4CpwQaBdYFGQSNBZMFLwsOClEIaQpFCFUI%2FRCGCOsJBwkXCk8IoIQkRfxFykXeSqKEFUQDRCtFB0VQ4spi4WK1YhNiOPEtcVjxS%2BLz0gwSJhJpEq0S3yS5JN0kSyQHJD8JSUvFSxVK%2FVGmkbaRDpVulP6i4yIjLdMucwLWQpZA9lk2Q7ZdTlROR%2B5c3Iv5WnlzeVPyPfK7yooKkQqNCksKfIpeipWKE4o0SlZKeUqPVRGK%2BsoJyt3KW%2BpKKhEq9xQ%2Bawqrhqk2qi6qCao5qNWqzanzqNOUK9Wn9bg0vDUOK8xrcmtSdCs0ZzV4tUiatVpLWgLawdqX9H%2BpCOlE6nTqvNdV0X3iG6PHlLPUC9bb1ifRt9ev0x%2FyoDHwM%2FgssGaobxhkmGPEdrI1KjAaMKY3djbuMF4zUTR5IhJnynO1Na0zHTWTMQs0qzTHGFuYn7afNKC3yLUot0SWBpbnrZ8ayVoFWF12xpjbWVdbv3BRtrmsM2ALa2th22j7aadjl2e3Rt7IfsY%2B14HSgc3hwaH7456joWO006STkecHjuzOAc4d7iQuDi41LlsuOq7FrvOu8m7ZbiNHxI8FH%2FokTuLe7D7HQ9KD4LHTU%2B0p6Nno%2BcOwZJQQ9jwMvaq8Frz1vU%2B471C1CIWEZd81H0KfRZ81X0LfRf91P1O%2By35a%2FqX%2BK8G6AaUBawHGgVWBX4PsgyqD9oLdgxuDiEN8Qy5FUoTGhTaF8YRFh82Gi4anhE%2BHaESURyxFmkaWRcFRR2K6oimgz%2FyhmKEYo7HzMRqxJbH%2FohziLsZTx0fGj%2BUIJKQlbCQaJB4MQmV5J3Ue5j7cMrhmSPaR6qPQke9jvYm8yanJ88fMzx2KQWbEpTyJFUqtTD1W5pjWmc6e%2Fqx9LnjhscvZ%2BAzIjMmTqieqMpEZQZkDmfJZpVm%2FcomZg%2FmSOWU5OzkeucOnpQ%2Befbk3infU8N5Cnnn8jH5ofnjBZoFlwqpCxML506bn24r4irKLvpW7FH8qESupOoM9kzMmemzZmc7SvlK80t3yvzLxsp1ypsr2CqyKr5XEiufndM611TFXpVT9fN8wPmX1YbVbTUCNSUXMBdiL3yodagduKh0saGOpS6nbrc%2BtH76ks2lvgbFhoZGtsa8y4jLMZeXrrhdGbmqd7WjSbypupmhOecauBZzbfm65%2FXxG6Y3em8q3Wxq4W%2BpaKVtzW6D2hLa1tr926c7nDtGb5nc6u1U7Wy9LXG7vou7q%2FwO%2FZ28bmx3evfe3cS7Gz3hPav3%2FO7N9Xr0vrnvdP9Fn3XfcL9p%2F8MHBg%2FuD2gP3H2o%2FrDrkcqjW4NKg%2B2PFR63DckPtT6Rf9I6rDDc9lTxaceI8kjnqNpo9zPNZ%2Fee6z1%2F8ML4xeMxi7HRcfvxlxNuE9MviS8XXwW%2FWn8d%2B3r7zbFJ9GT2W6q3JVNsUzXvhN81TytM35nRmxmatZ19M%2Bc9t%2FI%2B6v3OfPoHig8lC5wLDYsyi11LBksjy67L8yvhK9urGR%2BpP1Z8EvrU8lnr89Ca09r8euT63pfcr8xf67%2FJfevdsNqY2gzZ3P6e%2FYP5x6Utpa2Bn44%2FF7bjdkh2zu4K73b%2BMv01uReytxdOiCQcfAsg4TvC1xeAL%2FVwLuAM5wAjAGDxv3ODAwYASAjmwNgB0kdoI5VQTGgshpREitSZLA17F4ehIODbqbDUwTSDdPL0FYyAKYh5mFWBLZ99hVOLK497lBfLp8zvLBAkGCLkJqwjwi6yLvpArFQ8SEJdkkLynVSz9DEZa1lu2Y9yt%2BSPK1grsinOKzUpx6toq2JVn6tVqBM1xDS%2BaLZrHdbW0cHpvNPt1mvUrzQoMDxqRDDWNGEyWTcdMmsyr7SotuyymrNB2zLbsdhTOSAddhy3nYELmSvejeIQ6tCG%2B6zHiGcP4aZXnXcpMdsnwdfPz85fJ0AuUCSIO5g5hDIUGfotbDZ8JOJ2ZG3UqejkmIzY1nhUgk9iz2FwROCoSrLxMdeUmNRTacXpScfljs9l5J2wyuTPIs8GOYhc6pNCpzTyLPIdC1wKXU47FTkU25VYn7E4a1pqWKZTrlGhXCl7TrxK5LxUtWlN2oXpi8Z1V%2BpXGqgb%2BS9LX1G9qtdk3ux4zeO6%2F43wm3EtR1tT2463Z3bk3MrrLL5d0VV3p6W7%2F%2B5Ez%2FS98d7m%2B759TH0P%2B0sexA34Pjz0yHHQ%2BrHpkOETo2G7pxEj50dfPSd%2FITmmO248of9S6RX%2Fa%2FzrrTeLky%2Ff3pu68C5t2m%2FGftZizvy95bzlB5MF5UXGxeml7GW55emVS6uJH40%2BkX5q%2BGz4eW7twnr8F%2Fevlt%2FMNwI3e3%2Bc%2BNm%2Bq7e39yf%2B0kgUcgk1jZ7DrJEiyRSw%2FuQVuGm8CGUc1QMaZtoEuhcMMoypTG9Z5Fkz2EY4WDiduAq4u3gmeTf4NvmXBZ4IXhCKFNYQIRV5IVolFiguL%2F5L4oHkKSlHaU7pBZkm2Vg5dXlIvl8hW9FSiVZpXLlUxVWVXXUSXgVuGswaE5pntFy1BbS3dcZ0r%2Bvl6vsYqBlSG34w6jIuNok19THzMve3CLMMsfKytrRRtRWxY7XHOyAcNh0XnMad77s0uZa7ZR9KdA%2FwcPLUI0h6MXlD3svEMZ8%2B31a%2FOv%2BSgPTAsCDnYK0QwVAKeCXMhE9FfIvijvaIKY29F%2Fcyfi5hNXHrMPkRjqNCyVzHMMfepbSm5qVFprsft89wOhGQmZZVmX01pzW37WTLqet5V%2FMbCi4Wnj9dXlRcnFeSdSb1bEJpWJlfeUDFscq7VcLnL9UIXiisfX5xqx5%2FiaWBt1EEXgeKVzWa9JrNrzlfD76RcfNCS3fraNtU%2B2LH107kbcYu0Tuq3Vp3FXu47yHuzfYO3G%2Ftq%2B8vf5A%2FcPxh4qPIwejHWUNdwwxPj4y8fcbyXPOF3Zjv%2BLGJiy%2Bfvvr2hmZS%2FK3ZVPi7M9O3Z57NTs3Nvl%2F5gIajn7I0ukK9KvVR%2FpPAZ8rPP9Y%2BrE98Gfx661v1RvKmw3fB75s%2FurYSf6pu43b0dpf%2BxF8CWkFUIt1RwmgS9DpmiWSZdJZsnRyL46fQxrtQplBdoR6l2aPjp9dnCGQ8zlTF3MLSz%2FqQ7QH7bY5qznguHa6f3LU8pjwrvJl8gny9%2FO78WwJFglKCg0J%2BwiTC9SJGIguiGWJCYv3i3hJAolJSTfKlVAz8ddMsYyazKJsmxyHXIW8jv6pwXJFTsR3%2BallUTlZhULmsqq36TM1b7ZN6kgaJRrmmnOa4VqI2h3aHjqXOK11%2F3T29Gn0rAzKD%2B4aHjeSMlo1rTNxMmUzHzYrNbS0oLR5ZplmpWn2zbrYJshW0fW9XbX%2FIgdnhhWOek5HTnnOrS7Arn%2Btbt5JDFoc23Ys8%2BD1aPLU9XxPivXi8XsLniL%2BPoa%2Bin7K%2FcQAhMCSIEKwZQhUyGXoxLCRcPnwn4n5kdpRVNH30m5iqWGKcQNyH%2BHMJ%2BgmTicFJdEnPD98%2B0n20L%2Fn%2BsVspDaklaWnpYcddM%2FRPiGSiM19klWa75PDlbOdOn3xy6lbe%2BfyjBa6FKqdZTm8VjRffKDlz5uTZwtLqspvlDypeVi6f2z5PUc1VI3vBqNbtYljd0fqsS7kNxxoJlxWv4K98ufqxaesa7jrHDZmbVi1JrS1tPzqUb4V3lt6%2B1tVx53b3o7sb9wx7b%2FXZ9m8MlDySHXwxdHLYc8T4mfYLnfHgV%2FjJldnh5Y1vW%2Fvx%2F10j2n8nYBQAOJ0CgFMGAPaaABT0ASAwBuedWACsKACwUwYIAV%2BAwA0BSGXmn%2FcHBJAAA8gBNVyf4QSCQAqowDUKS%2BAC58hRcHaZB86BJtANnoIZ8A3OHNkgacgQ8oDioALoCvQQ%2BoDAIIQQZogoRCWc5%2B3BeV0s8hbyF8oQdRo1i5ZFZ6LfYVQwpZhtOMMaJFUkrSdjJSvAkmOzyLHk%2BTgWXD2FHEUXXh3fSalEeZvKiOoNdTQNFc1VWj3aUTo7ulF6S%2FpnDB4MPxhLmdSZppiPsLCydLK6s5GxdbHHcshxfOW8wRXJLc%2B9wzPAW8Lnz68mgBeYFrwplCnsJaItKiCGF9sW%2FyTxXnJMqlU6SUZaZko2U05e7rN8h0KhYoISUdlMRUqVUQ2vLqFRriWqfVLnke5nfVIDekNmIzZjPhM5UwuzCPOzFn2WX6x5bRxtT9kNOKAc9ZwynIdcGdy8DjW6v%2FfEEKi9MF4b3vPESZ9lP0p%2F04DiwIVgtZCi0E%2FhJhGNUbjoiJjXcQbxHYniSXVHuI6WH2NIKUjDpqcc3zgRmLmSnZMbcqq1gPo0S9HHkoazHmUM5SOVJ6sMz2%2FU5NXSXcys27wU1PDlcv5V%2FWbqa%2Bs3PrQstq10LHTOda3fZbyne9%2B933PA9pHmY8knwk8VRkOf%2F5hAvSabrHpHO9M9j188vKL9sfnz9heFbwab2O8nfwxuLf6c336107Kb%2F8trT%2Brg%2FNiPPwlcU6OBaw7cQATIAnVgBNcZPOEKQxLIAqWgAdyC6whvwRqEhlggqYPoJ0BF0DVoGPqIoETIIlwQaYgbiHkkJ9IDWYtcRSmg0lFjaGF0CnoSjn05CSDxJxkj1SftIJMka8QKY6%2BQy5HfxVnh5iji8WT4Ykpuymtw%2FvqGOo6Ggaad1oH2I90Reiz9WQZxhkHGMCZGph7mABY6lh7WMDY%2Btkn2Ug4nTibOV1yV3EQeKV7A%2B4LvMn%2B6gJugHJzLLQsPidyE32J54mkShyWjpbyltWRwMsOy2XKm8ozy6wqvFAeU2pRrVHJVE9Vi1bM0OjS%2Fa8vqEHVz9Or02wxuG942umP8yGTGDGEuYuFgedyq3XrVls%2FOw77SYcqJxznQpc2N5JCje5lHv%2BcooderwTuTGOBj42vk5%2ByfGtATRBHsFdIVxhKeGPE2Sie6IZYyLjz%2BcSJ3UuzhkaPyybUprKlF6djjSRmrmYSs2ZzEk1J5iPy3hdeLYkvkznwpvV4eU6ly7uf5uhqZC5W1C3WC9f6XrjUyXq64qt708VrpDeWbw62Etu2Omk7rLnCn4a5Zz3pvVZ%2FXA5WH3IOox0%2BexD7FjGQ%2Fwz2vGfOYMH8V%2FKb%2B7cI056zV%2B5QP3UuMK%2FmfBNaefC3azN0y3pbZObf7%2Ftf6n%2FijABlcz2SCoy8K15p0gRVcYQoBR%2BCdXw1awEMwBe97HCQAaUGHoCSoHLoDzSDI4KgTEMWIESQ90gd5B8WGOoZaRjujn2B0MXfgeso9UjPSt2RRWErsNXIHHBLXThGBl8b%2FoOynKqWOoXGmNaYzobdmMGFUZBJmlmfxYE1gi2b34rDjtOAy5zbnMeM157Ph9xCIEjwp1Cj8UGRJjEJcUcJXskxqXIZFlijXLL%2BtaKX0RCVLzVkDrZmvtaNjqpsGR7DdoMuw22jYeNvU1KzNQsLyirWETZudrv24Y4gz1uWKm4M7tSe5lwfR1ee9n6p%2FTsCHIJvgoVDzsGcRrpGL0UmxHHFTCQ%2BSeo5UJtsf%2B5lane6QwXliLetOTu5J3zzDAubCx0W%2BxZtn0kqpy2oqFCqfVPlWQzUVtUoXx%2BpjGlgbH15JbjK8JnnDoCW5raYjr9O5i%2FHOxN3ye873SfouPpAbuP1If3BiKH5YcgQ5uvZ8cWx0ouCV4OvKN7%2Fe6k9lv3s8QzlrP3f%2B%2FdIH6YWgxfNLD5eXV9Ef2T5JfdZbc1wnfCF%2BtfrG821j4%2BQm22bjd%2BXvZd%2B3fjj%2BaNti2Ircatva%2Fqn1M%2F3no238tu32me2RHdIdrZ34nes7S7vcu867hbuDu7u%2FpH8Rf5359fjXrz3pPZ%2B9s3tD%2B%2FGP8pWV2X97AAinA5cfp%2Fb2vgoAQFIIwG7B3t52zd7e7gU42ZgEoCf49%2F8d9skYuMZZsbaPBrlP%2F9h%2F%2Fvv6D80xh2zorrydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVQoFWPc9HnTfwYSABMJasFKRzUQE2LDIZQAvyMDbvtx1ccAAAAASUVORK5CYII%3D\" /> forests</li>\n<li><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAXf2lDQ1BJQ0MgUHJvZmlsZQAAeAGtWWVYVU3Xnn0KOBwO3d3d3d3dKXDg0N2lIiFSSggoJYIIggoGJSIigigiggoYiIRIqqCCIiDvBvV5nx%2Ff%2B%2B%2Fb13X2vllzrzVrZs3M3msBAHMLITw8GEEFQEhodKSNoQ6Xk7MLF8kbQApoAB0QBjiCd1S4tpWVGfif1%2BY4gPYbn4vv2%2FqftP%2B7gZroE%2BUNAGQFN3sRo7xDYNwCAKLNOzwyGgDUvj3euOjwfZwPY7pI2EEY1%2B5jv9%2B4Yx97%2FcZDBxw7G12YMw0AKY5AiPQDALcKy7livf1gOxQ4ADA0ocSAUABouWCs4e1PIALA7AlzxEJCwvZxLoyFvP5lx%2B9fmEDw%2BscmgeD3D%2F49FlgT7lgvICo8mJBw8Mf%2F5y0kOAaer4OLAb7jwqN1bOAnEzxvTAHRxnYwpoOxlH%2BMkf0frJfob%2Be4z4XlTqFeFpYwpoEx0TtKF55LANuBYoPCTPft7HNyiT56%2BjCGVwV0NirW9i%2B%2BlOiva%2FGH4xRIMNmPGR7mdBAiYfS73wfh0Vb7PuzbfB0abGH2B6%2F5Rhrs24flCIxPlL4tjGEfEGzRkXb7cthnhIRvgIExjOF%2BETrhwQdrbp9jExljsz8WPhgTfULt%2F%2BpmEgl6prCcDZaXATOgC%2FQAF3wPA8HwLxIEACL8%2FCv3%2FpfcFiSCjyAU%2BIAoWOOA4RGQGvkXAwNAgPX94HbxP%2Fo6BxIfEAtr7f7lDa%2B2r%2F7Ff3S8%2FtEwAO8PbPyxIHVZaklq5y%2Bbi%2FKvXxh9jB7GCGOAEf4rgXv6PYrIA%2F9M4dH4gBjYlg%2Fc919%2F%2Fj2qmH8Y%2F5b%2BngObA60gmBHwt2%2FgcOBZwD%2B2TP%2BZmT9zgRJAyaDkUToodZQGShlwoRhQLEAcJYdSQmmjNFGqcJvyv%2Bb5j9Yf%2F8WB78FcxR54HwQ%2BwJ7DuzraJz4ajhXQDQtPiAzw84%2Fm0oZPCx8xLuNQbwkxLhkpaWmwf%2FbscwD4anNwpkAMT%2F8r81kEQA1eG2Qj%2F5UFngagsR8Axuz%2FygRc4f0rBsD1Z94xkbG%2F7aH2H2iABZTwSmMGHIAXCMHjlwEKQBVoAX1gAiyBHXAG7sAb%2BMP%2BRoI4cBikgAyQA%2FJBMSgDVeACuASughugHXSBe%2BABeAxGwBh4A6bBPFgBa2ATbEMQRAJRQLQQM8QJ8UOikAykBGlA%2BpAZZAM5Q56QHxQKxUCHoTQoByqEyqBqqAG6Dt2C7kGPoFHoFTQDLUFfoJ8IJAKHoEOwIwQQkgglhDbCFGGHOITwQ0QgEhHpiFOIs4gaxBVEG%2BIe4jFiDDGNWEFsIAGSHMmA5EaKI5WQukhLpAvSFxmJPIrMRpYga5BNyE7kAPI5chq5itxCYVC0KC6UOBxLI5Q9yhsVgTqKykWVoS6h2lB9qOeoGdQa6heaAs2GFkWroI3RTmg%2FdBw6A12CrkO3ovvRY%2Bh59CYGg2HACGIU4fXrjAnEJGFyMZWYZkwPZhQzh9kgISFhJhElUSexJCGQRJNkkJSSXCG5S%2FKMZJ7kByk5KSepDKkBqQtpKGkqaQlpI2k36TPSBdJtMioyfjIVMksyIlkCWR5ZLVkn2VOyebJtLDVWEKuOtcMGYlOwZ7FN2H7sJPYrOTk5D7kyuTV5APkx8rPk18gfks%2BQb%2BFocCI4XZwbLgZ3CleP68G9wn2loKAQoNCicKGIpjhF0UBxn2KK4geeFi%2BBN8YT8cn4cnwb%2Fhn%2BEyUZJT%2BlNqU7ZSJlCeVNyqeUq1RkVAJUulQEqqNU5VS3qCaoNqhpqaWpLalDqHOpG6kfUS%2FSkNAI0OjTEGnSaS7Q3KeZo0XS8tLq0nrTptHW0vbTztNh6ATpjOkC6XLortIN063R09DL0TvQx9OX09%2Bhn2ZAMggwGDMEM%2BQx3GAYZ%2FjJyM6ozejDmMXYxPiM8TsTK5MWkw9TNlMz0xjTT2YuZn3mIOYC5nbmtywoFhEWa5Y4lnMs%2FSyrrHSsqqzerNmsN1hfsyHYRNhs2JLYLrANsW2wc7Absoezl7LfZ1%2FlYODQ4gjkKOLo5ljipOXU4AzgLOK8y7nMRc%2BlzRXMdZarj2uNm43biDuGu5p7mHubR5DHnieVp5nnLS%2BWV4nXl7eIt5d3jY%2BTz5zvMN9lvtf8ZPxK%2FP78Z%2FgH%2BL8LCAo4CpwQaBdYFGQSNBZMFLwsOClEIaQpFCFUI%2FRCGCOsJBwkXCk8IoIQkRfxFykXeSqKEFUQDRCtFB0VQ4spi4WK1YhNiOPEtcVjxS%2BLz0gwSJhJpEq0S3yS5JN0kSyQHJD8JSUvFSxVK%2FVGmkbaRDpVulP6i4yIjLdMucwLWQpZA9lk2Q7ZdTlROR%2B5c3Iv5WnlzeVPyPfK7yooKkQqNCksKfIpeipWKE4o0SlZKeUqPVRGK%2BsoJyt3KW%2BpKKhEq9xQ%2Bawqrhqk2qi6qCao5qNWqzanzqNOUK9Wn9bg0vDUOK8xrcmtSdCs0ZzV4tUiatVpLWgLawdqX9H%2BpCOlE6nTqvNdV0X3iG6PHlLPUC9bb1ifRt9ev0x%2FyoDHwM%2FgssGaobxhkmGPEdrI1KjAaMKY3djbuMF4zUTR5IhJnynO1Na0zHTWTMQs0qzTHGFuYn7afNKC3yLUot0SWBpbnrZ8ayVoFWF12xpjbWVdbv3BRtrmsM2ALa2th22j7aadjl2e3Rt7IfsY%2B14HSgc3hwaH7456joWO006STkecHjuzOAc4d7iQuDi41LlsuOq7FrvOu8m7ZbiNHxI8FH%2FokTuLe7D7HQ9KD4LHTU%2B0p6Nno%2BcOwZJQQ9jwMvaq8Frz1vU%2B471C1CIWEZd81H0KfRZ81X0LfRf91P1O%2By35a%2FqX%2BK8G6AaUBawHGgVWBX4PsgyqD9oLdgxuDiEN8Qy5FUoTGhTaF8YRFh82Gi4anhE%2BHaESURyxFmkaWRcFRR2K6oimgz%2FyhmKEYo7HzMRqxJbH%2FohziLsZTx0fGj%2BUIJKQlbCQaJB4MQmV5J3Ue5j7cMrhmSPaR6qPQke9jvYm8yanJ88fMzx2KQWbEpTyJFUqtTD1W5pjWmc6e%2Fqx9LnjhscvZ%2BAzIjMmTqieqMpEZQZkDmfJZpVm%2FcomZg%2FmSOWU5OzkeucOnpQ%2Befbk3infU8N5Cnnn8jH5ofnjBZoFlwqpCxML506bn24r4irKLvpW7FH8qESupOoM9kzMmemzZmc7SvlK80t3yvzLxsp1ypsr2CqyKr5XEiufndM611TFXpVT9fN8wPmX1YbVbTUCNSUXMBdiL3yodagduKh0saGOpS6nbrc%2BtH76ks2lvgbFhoZGtsa8y4jLMZeXrrhdGbmqd7WjSbypupmhOecauBZzbfm65%2FXxG6Y3em8q3Wxq4W%2BpaKVtzW6D2hLa1tr926c7nDtGb5nc6u1U7Wy9LXG7vou7q%2FwO%2FZ28bmx3evfe3cS7Gz3hPav3%2FO7N9Xr0vrnvdP9Fn3XfcL9p%2F8MHBg%2FuD2gP3H2o%2FrDrkcqjW4NKg%2B2PFR63DckPtT6Rf9I6rDDc9lTxaceI8kjnqNpo9zPNZ%2Fee6z1%2F8ML4xeMxi7HRcfvxlxNuE9MviS8XXwW%2FWn8d%2B3r7zbFJ9GT2W6q3JVNsUzXvhN81TytM35nRmxmatZ19M%2Bc9t%2FI%2B6v3OfPoHig8lC5wLDYsyi11LBksjy67L8yvhK9urGR%2BpP1Z8EvrU8lnr89Ca09r8euT63pfcr8xf67%2FJfevdsNqY2gzZ3P6e%2FYP5x6Utpa2Bn44%2FF7bjdkh2zu4K73b%2BMv01uReytxdOiCQcfAsg4TvC1xeAL%2FVwLuAM5wAjAGDxv3ODAwYASAjmwNgB0kdoI5VQTGgshpREitSZLA17F4ehIODbqbDUwTSDdPL0FYyAKYh5mFWBLZ99hVOLK497lBfLp8zvLBAkGCLkJqwjwi6yLvpArFQ8SEJdkkLynVSz9DEZa1lu2Y9yt%2BSPK1grsinOKzUpx6toq2JVn6tVqBM1xDS%2BaLZrHdbW0cHpvNPt1mvUrzQoMDxqRDDWNGEyWTcdMmsyr7SotuyymrNB2zLbsdhTOSAddhy3nYELmSvejeIQ6tCG%2B6zHiGcP4aZXnXcpMdsnwdfPz85fJ0AuUCSIO5g5hDIUGfotbDZ8JOJ2ZG3UqejkmIzY1nhUgk9iz2FwROCoSrLxMdeUmNRTacXpScfljs9l5J2wyuTPIs8GOYhc6pNCpzTyLPIdC1wKXU47FTkU25VYn7E4a1pqWKZTrlGhXCl7TrxK5LxUtWlN2oXpi8Z1V%2BpXGqgb%2BS9LX1G9qtdk3ux4zeO6%2F43wm3EtR1tT2463Z3bk3MrrLL5d0VV3p6W7%2F%2B5Ez%2FS98d7m%2B759TH0P%2B0sexA34Pjz0yHHQ%2BrHpkOETo2G7pxEj50dfPSd%2FITmmO248of9S6RX%2Fa%2FzrrTeLky%2Ff3pu68C5t2m%2FGftZizvy95bzlB5MF5UXGxeml7GW55emVS6uJH40%2BkX5q%2BGz4eW7twnr8F%2Fevlt%2FMNwI3e3%2Bc%2BNm%2Bq7e39yf%2B0kgUcgk1jZ7DrJEiyRSw%2FuQVuGm8CGUc1QMaZtoEuhcMMoypTG9Z5Fkz2EY4WDiduAq4u3gmeTf4NvmXBZ4IXhCKFNYQIRV5IVolFiguL%2F5L4oHkKSlHaU7pBZkm2Vg5dXlIvl8hW9FSiVZpXLlUxVWVXXUSXgVuGswaE5pntFy1BbS3dcZ0r%2Bvl6vsYqBlSG34w6jIuNok19THzMve3CLMMsfKytrRRtRWxY7XHOyAcNh0XnMad77s0uZa7ZR9KdA%2FwcPLUI0h6MXlD3svEMZ8%2B31a%2FOv%2BSgPTAsCDnYK0QwVAKeCXMhE9FfIvijvaIKY29F%2Fcyfi5hNXHrMPkRjqNCyVzHMMfepbSm5qVFprsft89wOhGQmZZVmX01pzW37WTLqet5V%2FMbCi4Wnj9dXlRcnFeSdSb1bEJpWJlfeUDFscq7VcLnL9UIXiisfX5xqx5%2FiaWBt1EEXgeKVzWa9JrNrzlfD76RcfNCS3fraNtU%2B2LH107kbcYu0Tuq3Vp3FXu47yHuzfYO3G%2Ftq%2B8vf5A%2FcPxh4qPIwejHWUNdwwxPj4y8fcbyXPOF3Zjv%2BLGJiy%2Bfvvr2hmZS%2FK3ZVPi7M9O3Z57NTs3Nvl%2F5gIajn7I0ukK9KvVR%2FpPAZ8rPP9Y%2BrE98Gfx661v1RvKmw3fB75s%2FurYSf6pu43b0dpf%2BxF8CWkFUIt1RwmgS9DpmiWSZdJZsnRyL46fQxrtQplBdoR6l2aPjp9dnCGQ8zlTF3MLSz%2FqQ7QH7bY5qznguHa6f3LU8pjwrvJl8gny9%2FO78WwJFglKCg0J%2BwiTC9SJGIguiGWJCYv3i3hJAolJSTfKlVAz8ddMsYyazKJsmxyHXIW8jv6pwXJFTsR3%2BallUTlZhULmsqq36TM1b7ZN6kgaJRrmmnOa4VqI2h3aHjqXOK11%2F3T29Gn0rAzKD%2B4aHjeSMlo1rTNxMmUzHzYrNbS0oLR5ZplmpWn2zbrYJshW0fW9XbX%2FIgdnhhWOek5HTnnOrS7Arn%2Btbt5JDFoc23Ys8%2BD1aPLU9XxPivXi8XsLniL%2BPoa%2Bin7K%2FcQAhMCSIEKwZQhUyGXoxLCRcPnwn4n5kdpRVNH30m5iqWGKcQNyH%2BHMJ%2BgmTicFJdEnPD98%2B0n20L%2Fn%2BsVspDaklaWnpYcddM%2FRPiGSiM19klWa75PDlbOdOn3xy6lbe%2BfyjBa6FKqdZTm8VjRffKDlz5uTZwtLqspvlDypeVi6f2z5PUc1VI3vBqNbtYljd0fqsS7kNxxoJlxWv4K98ufqxaesa7jrHDZmbVi1JrS1tPzqUb4V3lt6%2B1tVx53b3o7sb9wx7b%2FXZ9m8MlDySHXwxdHLYc8T4mfYLnfHgV%2FjJldnh5Y1vW%2Fvx%2F10j2n8nYBQAOJ0CgFMGAPaaABT0ASAwBuedWACsKACwUwYIAV%2BAwA0BSGXmn%2FcHBJAAA8gBNVyf4QSCQAqowDUKS%2BAC58hRcHaZB86BJtANnoIZ8A3OHNkgacgQ8oDioALoCvQQ%2BoDAIIQQZogoRCWc5%2B3BeV0s8hbyF8oQdRo1i5ZFZ6LfYVQwpZhtOMMaJFUkrSdjJSvAkmOzyLHk%2BTgWXD2FHEUXXh3fSalEeZvKiOoNdTQNFc1VWj3aUTo7ulF6S%2FpnDB4MPxhLmdSZppiPsLCydLK6s5GxdbHHcshxfOW8wRXJLc%2B9wzPAW8Lnz68mgBeYFrwplCnsJaItKiCGF9sW%2FyTxXnJMqlU6SUZaZko2U05e7rN8h0KhYoISUdlMRUqVUQ2vLqFRriWqfVLnke5nfVIDekNmIzZjPhM5UwuzCPOzFn2WX6x5bRxtT9kNOKAc9ZwynIdcGdy8DjW6v%2FfEEKi9MF4b3vPESZ9lP0p%2F04DiwIVgtZCi0E%2FhJhGNUbjoiJjXcQbxHYniSXVHuI6WH2NIKUjDpqcc3zgRmLmSnZMbcqq1gPo0S9HHkoazHmUM5SOVJ6sMz2%2FU5NXSXcys27wU1PDlcv5V%2FWbqa%2Bs3PrQstq10LHTOda3fZbyne9%2B933PA9pHmY8knwk8VRkOf%2F5hAvSabrHpHO9M9j188vKL9sfnz9heFbwab2O8nfwxuLf6c336107Kb%2F8trT%2Brg%2FNiPPwlcU6OBaw7cQATIAnVgBNcZPOEKQxLIAqWgAdyC6whvwRqEhlggqYPoJ0BF0DVoGPqIoETIIlwQaYgbiHkkJ9IDWYtcRSmg0lFjaGF0CnoSjn05CSDxJxkj1SftIJMka8QKY6%2BQy5HfxVnh5iji8WT4Ykpuymtw%2FvqGOo6Ggaad1oH2I90Reiz9WQZxhkHGMCZGph7mABY6lh7WMDY%2Btkn2Ug4nTibOV1yV3EQeKV7A%2B4LvMn%2B6gJugHJzLLQsPidyE32J54mkShyWjpbyltWRwMsOy2XKm8ozy6wqvFAeU2pRrVHJVE9Vi1bM0OjS%2Fa8vqEHVz9Or02wxuG942umP8yGTGDGEuYuFgedyq3XrVls%2FOw77SYcqJxznQpc2N5JCje5lHv%2BcooderwTuTGOBj42vk5%2ByfGtATRBHsFdIVxhKeGPE2Sie6IZYyLjz%2BcSJ3UuzhkaPyybUprKlF6djjSRmrmYSs2ZzEk1J5iPy3hdeLYkvkznwpvV4eU6ly7uf5uhqZC5W1C3WC9f6XrjUyXq64qt708VrpDeWbw62Etu2Omk7rLnCn4a5Zz3pvVZ%2FXA5WH3IOox0%2BexD7FjGQ%2Fwz2vGfOYMH8V%2FKb%2B7cI056zV%2B5QP3UuMK%2FmfBNaefC3azN0y3pbZObf7%2Ftf6n%2FijABlcz2SCoy8K15p0gRVcYQoBR%2BCdXw1awEMwBe97HCQAaUGHoCSoHLoDzSDI4KgTEMWIESQ90gd5B8WGOoZaRjujn2B0MXfgeso9UjPSt2RRWErsNXIHHBLXThGBl8b%2FoOynKqWOoXGmNaYzobdmMGFUZBJmlmfxYE1gi2b34rDjtOAy5zbnMeM157Ph9xCIEjwp1Cj8UGRJjEJcUcJXskxqXIZFlijXLL%2BtaKX0RCVLzVkDrZmvtaNjqpsGR7DdoMuw22jYeNvU1KzNQsLyirWETZudrv24Y4gz1uWKm4M7tSe5lwfR1ee9n6p%2FTsCHIJvgoVDzsGcRrpGL0UmxHHFTCQ%2BSeo5UJtsf%2B5lane6QwXliLetOTu5J3zzDAubCx0W%2BxZtn0kqpy2oqFCqfVPlWQzUVtUoXx%2BpjGlgbH15JbjK8JnnDoCW5raYjr9O5i%2FHOxN3ye873SfouPpAbuP1If3BiKH5YcgQ5uvZ8cWx0ouCV4OvKN7%2Fe6k9lv3s8QzlrP3f%2B%2FdIH6YWgxfNLD5eXV9Ef2T5JfdZbc1wnfCF%2BtfrG821j4%2BQm22bjd%2BXvZd%2B3fjj%2BaNti2Ircatva%2Fqn1M%2F3no238tu32me2RHdIdrZ34nes7S7vcu867hbuDu7u%2FpH8Rf5359fjXrz3pPZ%2B9s3tD%2B%2FGP8pWV2X97AAinA5cfp%2Fb2vgoAQFIIwG7B3t52zd7e7gU42ZgEoCf49%2F8d9skYuMZZsbaPBrlP%2F9h%2F%2Fvv6D80xh2zorrydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVQoFWNk%2BA%2BEJAAmEtSClY5qICbEhkMoAQCrhgIWhJ9smwAAAABJRU5ErkJggg%3D%3D\"> planted forests</li>\n<li><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAXf2lDQ1BJQ0MgUHJvZmlsZQAAeAGtWWVYVU3Xnn0KOBwO3d3d3d3dKXDg0N2lIiFSSggoJYIIggoGJSIigigiggoYiIRIqqCCIiDvBvV5nx%2Ff%2B%2B%2Fb13X2vllzrzVrZs3M3msBAHMLITw8GEEFQEhodKSNoQ6Xk7MLF8kbQApoAB0QBjiCd1S4tpWVGfif1%2BY4gPYbn4vv2%2FqftP%2B7gZroE%2BUNAGQFN3sRo7xDYNwCAKLNOzwyGgDUvj3euOjwfZwPY7pI2EEY1%2B5jv9%2B4Yx97%2FcZDBxw7G12YMw0AKY5AiPQDALcKy7livf1gOxQ4ADA0ocSAUABouWCs4e1PIALA7AlzxEJCwvZxLoyFvP5lx%2B9fmEDw%2BscmgeD3D%2F49FlgT7lgvICo8mJBw8Mf%2F5y0kOAaer4OLAb7jwqN1bOAnEzxvTAHRxnYwpoOxlH%2BMkf0frJfob%2Be4z4XlTqFeFpYwpoEx0TtKF55LANuBYoPCTPft7HNyiT56%2BjCGVwV0NirW9i%2B%2BlOiva%2FGH4xRIMNmPGR7mdBAiYfS73wfh0Vb7PuzbfB0abGH2B6%2F5Rhrs24flCIxPlL4tjGEfEGzRkXb7cthnhIRvgIExjOF%2BETrhwQdrbp9jExljsz8WPhgTfULt%2F%2BpmEgl6prCcDZaXATOgC%2FQAF3wPA8HwLxIEACL8%2FCv3%2FpfcFiSCjyAU%2BIAoWOOA4RGQGvkXAwNAgPX94HbxP%2Fo6BxIfEAtr7f7lDa%2B2r%2F7Ff3S8%2FtEwAO8PbPyxIHVZaklq5y%2Bbi%2FKvXxh9jB7GCGOAEf4rgXv6PYrIA%2F9M4dH4gBjYlg%2Fc919%2F%2Fj2qmH8Y%2F5b%2BngObA60gmBHwt2%2FgcOBZwD%2B2TP%2BZmT9zgRJAyaDkUToodZQGShlwoRhQLEAcJYdSQmmjNFGqcJvyv%2Bb5j9Yf%2F8WB78FcxR54HwQ%2BwJ7DuzraJz4ajhXQDQtPiAzw84%2Fm0oZPCx8xLuNQbwkxLhkpaWmwf%2FbscwD4anNwpkAMT%2F8r81kEQA1eG2Qj%2F5UFngagsR8Axuz%2FygRc4f0rBsD1Z94xkbG%2F7aH2H2iABZTwSmMGHIAXCMHjlwEKQBVoAX1gAiyBHXAG7sAb%2BMP%2BRoI4cBikgAyQA%2FJBMSgDVeACuASughugHXSBe%2BABeAxGwBh4A6bBPFgBa2ATbEMQRAJRQLQQM8QJ8UOikAykBGlA%2BpAZZAM5Q56QHxQKxUCHoTQoByqEyqBqqAG6Dt2C7kGPoFHoFTQDLUFfoJ8IJAKHoEOwIwQQkgglhDbCFGGHOITwQ0QgEhHpiFOIs4gaxBVEG%2BIe4jFiDDGNWEFsIAGSHMmA5EaKI5WQukhLpAvSFxmJPIrMRpYga5BNyE7kAPI5chq5itxCYVC0KC6UOBxLI5Q9yhsVgTqKykWVoS6h2lB9qOeoGdQa6heaAs2GFkWroI3RTmg%2FdBw6A12CrkO3ovvRY%2Bh59CYGg2HACGIU4fXrjAnEJGFyMZWYZkwPZhQzh9kgISFhJhElUSexJCGQRJNkkJSSXCG5S%2FKMZJ7kByk5KSepDKkBqQtpKGkqaQlpI2k36TPSBdJtMioyfjIVMksyIlkCWR5ZLVkn2VOyebJtLDVWEKuOtcMGYlOwZ7FN2H7sJPYrOTk5D7kyuTV5APkx8rPk18gfks%2BQb%2BFocCI4XZwbLgZ3CleP68G9wn2loKAQoNCicKGIpjhF0UBxn2KK4geeFi%2BBN8YT8cn4cnwb%2Fhn%2BEyUZJT%2BlNqU7ZSJlCeVNyqeUq1RkVAJUulQEqqNU5VS3qCaoNqhpqaWpLalDqHOpG6kfUS%2FSkNAI0OjTEGnSaS7Q3KeZo0XS8tLq0nrTptHW0vbTztNh6ATpjOkC6XLortIN063R09DL0TvQx9OX09%2Bhn2ZAMggwGDMEM%2BQx3GAYZ%2FjJyM6ozejDmMXYxPiM8TsTK5MWkw9TNlMz0xjTT2YuZn3mIOYC5nbmtywoFhEWa5Y4lnMs%2FSyrrHSsqqzerNmsN1hfsyHYRNhs2JLYLrANsW2wc7Absoezl7LfZ1%2FlYODQ4gjkKOLo5ljipOXU4AzgLOK8y7nMRc%2BlzRXMdZarj2uNm43biDuGu5p7mHubR5DHnieVp5nnLS%2BWV4nXl7eIt5d3jY%2BTz5zvMN9lvtf8ZPxK%2FP78Z%2FgH%2BL8LCAo4CpwQaBdYFGQSNBZMFLwsOClEIaQpFCFUI%2FRCGCOsJBwkXCk8IoIQkRfxFykXeSqKEFUQDRCtFB0VQ4spi4WK1YhNiOPEtcVjxS%2BLz0gwSJhJpEq0S3yS5JN0kSyQHJD8JSUvFSxVK%2FVGmkbaRDpVulP6i4yIjLdMucwLWQpZA9lk2Q7ZdTlROR%2B5c3Iv5WnlzeVPyPfK7yooKkQqNCksKfIpeipWKE4o0SlZKeUqPVRGK%2BsoJyt3KW%2BpKKhEq9xQ%2Bawqrhqk2qi6qCao5qNWqzanzqNOUK9Wn9bg0vDUOK8xrcmtSdCs0ZzV4tUiatVpLWgLawdqX9H%2BpCOlE6nTqvNdV0X3iG6PHlLPUC9bb1ifRt9ev0x%2FyoDHwM%2FgssGaobxhkmGPEdrI1KjAaMKY3djbuMF4zUTR5IhJnynO1Na0zHTWTMQs0qzTHGFuYn7afNKC3yLUot0SWBpbnrZ8ayVoFWF12xpjbWVdbv3BRtrmsM2ALa2th22j7aadjl2e3Rt7IfsY%2B14HSgc3hwaH7456joWO006STkecHjuzOAc4d7iQuDi41LlsuOq7FrvOu8m7ZbiNHxI8FH%2FokTuLe7D7HQ9KD4LHTU%2B0p6Nno%2BcOwZJQQ9jwMvaq8Frz1vU%2B471C1CIWEZd81H0KfRZ81X0LfRf91P1O%2By35a%2FqX%2BK8G6AaUBawHGgVWBX4PsgyqD9oLdgxuDiEN8Qy5FUoTGhTaF8YRFh82Gi4anhE%2BHaESURyxFmkaWRcFRR2K6oimgz%2FyhmKEYo7HzMRqxJbH%2FohziLsZTx0fGj%2BUIJKQlbCQaJB4MQmV5J3Ue5j7cMrhmSPaR6qPQke9jvYm8yanJ88fMzx2KQWbEpTyJFUqtTD1W5pjWmc6e%2Fqx9LnjhscvZ%2BAzIjMmTqieqMpEZQZkDmfJZpVm%2FcomZg%2FmSOWU5OzkeucOnpQ%2Befbk3infU8N5Cnnn8jH5ofnjBZoFlwqpCxML506bn24r4irKLvpW7FH8qESupOoM9kzMmemzZmc7SvlK80t3yvzLxsp1ypsr2CqyKr5XEiufndM611TFXpVT9fN8wPmX1YbVbTUCNSUXMBdiL3yodagduKh0saGOpS6nbrc%2BtH76ks2lvgbFhoZGtsa8y4jLMZeXrrhdGbmqd7WjSbypupmhOecauBZzbfm65%2FXxG6Y3em8q3Wxq4W%2BpaKVtzW6D2hLa1tr926c7nDtGb5nc6u1U7Wy9LXG7vou7q%2FwO%2FZ28bmx3evfe3cS7Gz3hPav3%2FO7N9Xr0vrnvdP9Fn3XfcL9p%2F8MHBg%2FuD2gP3H2o%2FrDrkcqjW4NKg%2B2PFR63DckPtT6Rf9I6rDDc9lTxaceI8kjnqNpo9zPNZ%2Fee6z1%2F8ML4xeMxi7HRcfvxlxNuE9MviS8XXwW%2FWn8d%2B3r7zbFJ9GT2W6q3JVNsUzXvhN81TytM35nRmxmatZ19M%2Bc9t%2FI%2B6v3OfPoHig8lC5wLDYsyi11LBksjy67L8yvhK9urGR%2BpP1Z8EvrU8lnr89Ca09r8euT63pfcr8xf67%2FJfevdsNqY2gzZ3P6e%2FYP5x6Utpa2Bn44%2FF7bjdkh2zu4K73b%2BMv01uReytxdOiCQcfAsg4TvC1xeAL%2FVwLuAM5wAjAGDxv3ODAwYASAjmwNgB0kdoI5VQTGgshpREitSZLA17F4ehIODbqbDUwTSDdPL0FYyAKYh5mFWBLZ99hVOLK497lBfLp8zvLBAkGCLkJqwjwi6yLvpArFQ8SEJdkkLynVSz9DEZa1lu2Y9yt%2BSPK1grsinOKzUpx6toq2JVn6tVqBM1xDS%2BaLZrHdbW0cHpvNPt1mvUrzQoMDxqRDDWNGEyWTcdMmsyr7SotuyymrNB2zLbsdhTOSAddhy3nYELmSvejeIQ6tCG%2B6zHiGcP4aZXnXcpMdsnwdfPz85fJ0AuUCSIO5g5hDIUGfotbDZ8JOJ2ZG3UqejkmIzY1nhUgk9iz2FwROCoSrLxMdeUmNRTacXpScfljs9l5J2wyuTPIs8GOYhc6pNCpzTyLPIdC1wKXU47FTkU25VYn7E4a1pqWKZTrlGhXCl7TrxK5LxUtWlN2oXpi8Z1V%2BpXGqgb%2BS9LX1G9qtdk3ux4zeO6%2F43wm3EtR1tT2463Z3bk3MrrLL5d0VV3p6W7%2F%2B5Ez%2FS98d7m%2B759TH0P%2B0sexA34Pjz0yHHQ%2BrHpkOETo2G7pxEj50dfPSd%2FITmmO248of9S6RX%2Fa%2FzrrTeLky%2Ff3pu68C5t2m%2FGftZizvy95bzlB5MF5UXGxeml7GW55emVS6uJH40%2BkX5q%2BGz4eW7twnr8F%2Fevlt%2FMNwI3e3%2Bc%2BNm%2Bq7e39yf%2B0kgUcgk1jZ7DrJEiyRSw%2FuQVuGm8CGUc1QMaZtoEuhcMMoypTG9Z5Fkz2EY4WDiduAq4u3gmeTf4NvmXBZ4IXhCKFNYQIRV5IVolFiguL%2F5L4oHkKSlHaU7pBZkm2Vg5dXlIvl8hW9FSiVZpXLlUxVWVXXUSXgVuGswaE5pntFy1BbS3dcZ0r%2Bvl6vsYqBlSG34w6jIuNok19THzMve3CLMMsfKytrRRtRWxY7XHOyAcNh0XnMad77s0uZa7ZR9KdA%2FwcPLUI0h6MXlD3svEMZ8%2B31a%2FOv%2BSgPTAsCDnYK0QwVAKeCXMhE9FfIvijvaIKY29F%2Fcyfi5hNXHrMPkRjqNCyVzHMMfepbSm5qVFprsft89wOhGQmZZVmX01pzW37WTLqet5V%2FMbCi4Wnj9dXlRcnFeSdSb1bEJpWJlfeUDFscq7VcLnL9UIXiisfX5xqx5%2FiaWBt1EEXgeKVzWa9JrNrzlfD76RcfNCS3fraNtU%2B2LH107kbcYu0Tuq3Vp3FXu47yHuzfYO3G%2Ftq%2B8vf5A%2FcPxh4qPIwejHWUNdwwxPj4y8fcbyXPOF3Zjv%2BLGJiy%2Bfvvr2hmZS%2FK3ZVPi7M9O3Z57NTs3Nvl%2F5gIajn7I0ukK9KvVR%2FpPAZ8rPP9Y%2BrE98Gfx661v1RvKmw3fB75s%2FurYSf6pu43b0dpf%2BxF8CWkFUIt1RwmgS9DpmiWSZdJZsnRyL46fQxrtQplBdoR6l2aPjp9dnCGQ8zlTF3MLSz%2FqQ7QH7bY5qznguHa6f3LU8pjwrvJl8gny9%2FO78WwJFglKCg0J%2BwiTC9SJGIguiGWJCYv3i3hJAolJSTfKlVAz8ddMsYyazKJsmxyHXIW8jv6pwXJFTsR3%2BallUTlZhULmsqq36TM1b7ZN6kgaJRrmmnOa4VqI2h3aHjqXOK11%2F3T29Gn0rAzKD%2B4aHjeSMlo1rTNxMmUzHzYrNbS0oLR5ZplmpWn2zbrYJshW0fW9XbX%2FIgdnhhWOek5HTnnOrS7Arn%2Btbt5JDFoc23Ys8%2BD1aPLU9XxPivXi8XsLniL%2BPoa%2Bin7K%2FcQAhMCSIEKwZQhUyGXoxLCRcPnwn4n5kdpRVNH30m5iqWGKcQNyH%2BHMJ%2BgmTicFJdEnPD98%2B0n20L%2Fn%2BsVspDaklaWnpYcddM%2FRPiGSiM19klWa75PDlbOdOn3xy6lbe%2BfyjBa6FKqdZTm8VjRffKDlz5uTZwtLqspvlDypeVi6f2z5PUc1VI3vBqNbtYljd0fqsS7kNxxoJlxWv4K98ufqxaesa7jrHDZmbVi1JrS1tPzqUb4V3lt6%2B1tVx53b3o7sb9wx7b%2FXZ9m8MlDySHXwxdHLYc8T4mfYLnfHgV%2FjJldnh5Y1vW%2Fvx%2F10j2n8nYBQAOJ0CgFMGAPaaABT0ASAwBuedWACsKACwUwYIAV%2BAwA0BSGXmn%2FcHBJAAA8gBNVyf4QSCQAqowDUKS%2BAC58hRcHaZB86BJtANnoIZ8A3OHNkgacgQ8oDioALoCvQQ%2BoDAIIQQZogoRCWc5%2B3BeV0s8hbyF8oQdRo1i5ZFZ6LfYVQwpZhtOMMaJFUkrSdjJSvAkmOzyLHk%2BTgWXD2FHEUXXh3fSalEeZvKiOoNdTQNFc1VWj3aUTo7ulF6S%2FpnDB4MPxhLmdSZppiPsLCydLK6s5GxdbHHcshxfOW8wRXJLc%2B9wzPAW8Lnz68mgBeYFrwplCnsJaItKiCGF9sW%2FyTxXnJMqlU6SUZaZko2U05e7rN8h0KhYoISUdlMRUqVUQ2vLqFRriWqfVLnke5nfVIDekNmIzZjPhM5UwuzCPOzFn2WX6x5bRxtT9kNOKAc9ZwynIdcGdy8DjW6v%2FfEEKi9MF4b3vPESZ9lP0p%2F04DiwIVgtZCi0E%2FhJhGNUbjoiJjXcQbxHYniSXVHuI6WH2NIKUjDpqcc3zgRmLmSnZMbcqq1gPo0S9HHkoazHmUM5SOVJ6sMz2%2FU5NXSXcys27wU1PDlcv5V%2FWbqa%2Bs3PrQstq10LHTOda3fZbyne9%2B933PA9pHmY8knwk8VRkOf%2F5hAvSabrHpHO9M9j188vKL9sfnz9heFbwab2O8nfwxuLf6c336107Kb%2F8trT%2Brg%2FNiPPwlcU6OBaw7cQATIAnVgBNcZPOEKQxLIAqWgAdyC6whvwRqEhlggqYPoJ0BF0DVoGPqIoETIIlwQaYgbiHkkJ9IDWYtcRSmg0lFjaGF0CnoSjn05CSDxJxkj1SftIJMka8QKY6%2BQy5HfxVnh5iji8WT4Ykpuymtw%2FvqGOo6Ggaad1oH2I90Reiz9WQZxhkHGMCZGph7mABY6lh7WMDY%2Btkn2Ug4nTibOV1yV3EQeKV7A%2B4LvMn%2B6gJugHJzLLQsPidyE32J54mkShyWjpbyltWRwMsOy2XKm8ozy6wqvFAeU2pRrVHJVE9Vi1bM0OjS%2Fa8vqEHVz9Or02wxuG942umP8yGTGDGEuYuFgedyq3XrVls%2FOw77SYcqJxznQpc2N5JCje5lHv%2BcooderwTuTGOBj42vk5%2ByfGtATRBHsFdIVxhKeGPE2Sie6IZYyLjz%2BcSJ3UuzhkaPyybUprKlF6djjSRmrmYSs2ZzEk1J5iPy3hdeLYkvkznwpvV4eU6ly7uf5uhqZC5W1C3WC9f6XrjUyXq64qt708VrpDeWbw62Etu2Omk7rLnCn4a5Zz3pvVZ%2FXA5WH3IOox0%2BexD7FjGQ%2Fwz2vGfOYMH8V%2FKb%2B7cI056zV%2B5QP3UuMK%2FmfBNaefC3azN0y3pbZObf7%2Ftf6n%2FijABlcz2SCoy8K15p0gRVcYQoBR%2BCdXw1awEMwBe97HCQAaUGHoCSoHLoDzSDI4KgTEMWIESQ90gd5B8WGOoZaRjujn2B0MXfgeso9UjPSt2RRWErsNXIHHBLXThGBl8b%2FoOynKqWOoXGmNaYzobdmMGFUZBJmlmfxYE1gi2b34rDjtOAy5zbnMeM157Ph9xCIEjwp1Cj8UGRJjEJcUcJXskxqXIZFlijXLL%2BtaKX0RCVLzVkDrZmvtaNjqpsGR7DdoMuw22jYeNvU1KzNQsLyirWETZudrv24Y4gz1uWKm4M7tSe5lwfR1ee9n6p%2FTsCHIJvgoVDzsGcRrpGL0UmxHHFTCQ%2BSeo5UJtsf%2B5lane6QwXliLetOTu5J3zzDAubCx0W%2BxZtn0kqpy2oqFCqfVPlWQzUVtUoXx%2BpjGlgbH15JbjK8JnnDoCW5raYjr9O5i%2FHOxN3ye873SfouPpAbuP1If3BiKH5YcgQ5uvZ8cWx0ouCV4OvKN7%2Fe6k9lv3s8QzlrP3f%2B%2FdIH6YWgxfNLD5eXV9Ef2T5JfdZbc1wnfCF%2BtfrG821j4%2BQm22bjd%2BXvZd%2B3fjj%2BaNti2Ircatva%2Fqn1M%2F3no238tu32me2RHdIdrZ34nes7S7vcu867hbuDu7u%2FpH8Rf5359fjXrz3pPZ%2B9s3tD%2B%2FGP8pWV2X97AAinA5cfp%2Fb2vgoAQFIIwG7B3t52zd7e7gU42ZgEoCf49%2F8d9skYuMZZsbaPBrlP%2F9h%2F%2Fvv6D80xh2zorrydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVQoFWO89Wj%2BfwYSABMJasFKRzUQE2LDIZQAyIYDck%2BS11kAAAAASUVORK5CYII%3D\"> grasslands</li>\n<li><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAXf2lDQ1BJQ0MgUHJvZmlsZQAAeAGtWWVYVU3Xnn0KOBwO3d3d3d3dKXDg0N2lIiFSSggoJYIIggoGJSIigigiggoYiIRIqqCCIiDvBvV5nx%2Ff%2B%2B%2Fb13X2vllzrzVrZs3M3msBAHMLITw8GEEFQEhodKSNoQ6Xk7MLF8kbQApoAB0QBjiCd1S4tpWVGfif1%2BY4gPYbn4vv2%2FqftP%2B7gZroE%2BUNAGQFN3sRo7xDYNwCAKLNOzwyGgDUvj3euOjwfZwPY7pI2EEY1%2B5jv9%2B4Yx97%2FcZDBxw7G12YMw0AKY5AiPQDALcKy7livf1gOxQ4ADA0ocSAUABouWCs4e1PIALA7AlzxEJCwvZxLoyFvP5lx%2B9fmEDw%2BscmgeD3D%2F49FlgT7lgvICo8mJBw8Mf%2F5y0kOAaer4OLAb7jwqN1bOAnEzxvTAHRxnYwpoOxlH%2BMkf0frJfob%2Be4z4XlTqFeFpYwpoEx0TtKF55LANuBYoPCTPft7HNyiT56%2BjCGVwV0NirW9i%2B%2BlOiva%2FGH4xRIMNmPGR7mdBAiYfS73wfh0Vb7PuzbfB0abGH2B6%2F5Rhrs24flCIxPlL4tjGEfEGzRkXb7cthnhIRvgIExjOF%2BETrhwQdrbp9jExljsz8WPhgTfULt%2F%2BpmEgl6prCcDZaXATOgC%2FQAF3wPA8HwLxIEACL8%2FCv3%2FpfcFiSCjyAU%2BIAoWOOA4RGQGvkXAwNAgPX94HbxP%2Fo6BxIfEAtr7f7lDa%2B2r%2F7Ff3S8%2FtEwAO8PbPyxIHVZaklq5y%2Bbi%2FKvXxh9jB7GCGOAEf4rgXv6PYrIA%2F9M4dH4gBjYlg%2Fc919%2F%2Fj2qmH8Y%2F5b%2BngObA60gmBHwt2%2FgcOBZwD%2B2TP%2BZmT9zgRJAyaDkUToodZQGShlwoRhQLEAcJYdSQmmjNFGqcJvyv%2Bb5j9Yf%2F8WB78FcxR54HwQ%2BwJ7DuzraJz4ajhXQDQtPiAzw84%2Fm0oZPCx8xLuNQbwkxLhkpaWmwf%2FbscwD4anNwpkAMT%2F8r81kEQA1eG2Qj%2F5UFngagsR8Axuz%2FygRc4f0rBsD1Z94xkbG%2F7aH2H2iABZTwSmMGHIAXCMHjlwEKQBVoAX1gAiyBHXAG7sAb%2BMP%2BRoI4cBikgAyQA%2FJBMSgDVeACuASughugHXSBe%2BABeAxGwBh4A6bBPFgBa2ATbEMQRAJRQLQQM8QJ8UOikAykBGlA%2BpAZZAM5Q56QHxQKxUCHoTQoByqEyqBqqAG6Dt2C7kGPoFHoFTQDLUFfoJ8IJAKHoEOwIwQQkgglhDbCFGGHOITwQ0QgEhHpiFOIs4gaxBVEG%2BIe4jFiDDGNWEFsIAGSHMmA5EaKI5WQukhLpAvSFxmJPIrMRpYga5BNyE7kAPI5chq5itxCYVC0KC6UOBxLI5Q9yhsVgTqKykWVoS6h2lB9qOeoGdQa6heaAs2GFkWroI3RTmg%2FdBw6A12CrkO3ovvRY%2Bh59CYGg2HACGIU4fXrjAnEJGFyMZWYZkwPZhQzh9kgISFhJhElUSexJCGQRJNkkJSSXCG5S%2FKMZJ7kByk5KSepDKkBqQtpKGkqaQlpI2k36TPSBdJtMioyfjIVMksyIlkCWR5ZLVkn2VOyebJtLDVWEKuOtcMGYlOwZ7FN2H7sJPYrOTk5D7kyuTV5APkx8rPk18gfks%2BQb%2BFocCI4XZwbLgZ3CleP68G9wn2loKAQoNCicKGIpjhF0UBxn2KK4geeFi%2BBN8YT8cn4cnwb%2Fhn%2BEyUZJT%2BlNqU7ZSJlCeVNyqeUq1RkVAJUulQEqqNU5VS3qCaoNqhpqaWpLalDqHOpG6kfUS%2FSkNAI0OjTEGnSaS7Q3KeZo0XS8tLq0nrTptHW0vbTztNh6ATpjOkC6XLortIN063R09DL0TvQx9OX09%2Bhn2ZAMggwGDMEM%2BQx3GAYZ%2FjJyM6ozejDmMXYxPiM8TsTK5MWkw9TNlMz0xjTT2YuZn3mIOYC5nbmtywoFhEWa5Y4lnMs%2FSyrrHSsqqzerNmsN1hfsyHYRNhs2JLYLrANsW2wc7Absoezl7LfZ1%2FlYODQ4gjkKOLo5ljipOXU4AzgLOK8y7nMRc%2BlzRXMdZarj2uNm43biDuGu5p7mHubR5DHnieVp5nnLS%2BWV4nXl7eIt5d3jY%2BTz5zvMN9lvtf8ZPxK%2FP78Z%2FgH%2BL8LCAo4CpwQaBdYFGQSNBZMFLwsOClEIaQpFCFUI%2FRCGCOsJBwkXCk8IoIQkRfxFykXeSqKEFUQDRCtFB0VQ4spi4WK1YhNiOPEtcVjxS%2BLz0gwSJhJpEq0S3yS5JN0kSyQHJD8JSUvFSxVK%2FVGmkbaRDpVulP6i4yIjLdMucwLWQpZA9lk2Q7ZdTlROR%2B5c3Iv5WnlzeVPyPfK7yooKkQqNCksKfIpeipWKE4o0SlZKeUqPVRGK%2BsoJyt3KW%2BpKKhEq9xQ%2Bawqrhqk2qi6qCao5qNWqzanzqNOUK9Wn9bg0vDUOK8xrcmtSdCs0ZzV4tUiatVpLWgLawdqX9H%2BpCOlE6nTqvNdV0X3iG6PHlLPUC9bb1ifRt9ev0x%2FyoDHwM%2FgssGaobxhkmGPEdrI1KjAaMKY3djbuMF4zUTR5IhJnynO1Na0zHTWTMQs0qzTHGFuYn7afNKC3yLUot0SWBpbnrZ8ayVoFWF12xpjbWVdbv3BRtrmsM2ALa2th22j7aadjl2e3Rt7IfsY%2B14HSgc3hwaH7456joWO006STkecHjuzOAc4d7iQuDi41LlsuOq7FrvOu8m7ZbiNHxI8FH%2FokTuLe7D7HQ9KD4LHTU%2B0p6Nno%2BcOwZJQQ9jwMvaq8Frz1vU%2B471C1CIWEZd81H0KfRZ81X0LfRf91P1O%2By35a%2FqX%2BK8G6AaUBawHGgVWBX4PsgyqD9oLdgxuDiEN8Qy5FUoTGhTaF8YRFh82Gi4anhE%2BHaESURyxFmkaWRcFRR2K6oimgz%2FyhmKEYo7HzMRqxJbH%2FohziLsZTx0fGj%2BUIJKQlbCQaJB4MQmV5J3Ue5j7cMrhmSPaR6qPQke9jvYm8yanJ88fMzx2KQWbEpTyJFUqtTD1W5pjWmc6e%2Fqx9LnjhscvZ%2BAzIjMmTqieqMpEZQZkDmfJZpVm%2FcomZg%2FmSOWU5OzkeucOnpQ%2Befbk3infU8N5Cnnn8jH5ofnjBZoFlwqpCxML506bn24r4irKLvpW7FH8qESupOoM9kzMmemzZmc7SvlK80t3yvzLxsp1ypsr2CqyKr5XEiufndM611TFXpVT9fN8wPmX1YbVbTUCNSUXMBdiL3yodagduKh0saGOpS6nbrc%2BtH76ks2lvgbFhoZGtsa8y4jLMZeXrrhdGbmqd7WjSbypupmhOecauBZzbfm65%2FXxG6Y3em8q3Wxq4W%2BpaKVtzW6D2hLa1tr926c7nDtGb5nc6u1U7Wy9LXG7vou7q%2FwO%2FZ28bmx3evfe3cS7Gz3hPav3%2FO7N9Xr0vrnvdP9Fn3XfcL9p%2F8MHBg%2FuD2gP3H2o%2FrDrkcqjW4NKg%2B2PFR63DckPtT6Rf9I6rDDc9lTxaceI8kjnqNpo9zPNZ%2Fee6z1%2F8ML4xeMxi7HRcfvxlxNuE9MviS8XXwW%2FWn8d%2B3r7zbFJ9GT2W6q3JVNsUzXvhN81TytM35nRmxmatZ19M%2Bc9t%2FI%2B6v3OfPoHig8lC5wLDYsyi11LBksjy67L8yvhK9urGR%2BpP1Z8EvrU8lnr89Ca09r8euT63pfcr8xf67%2FJfevdsNqY2gzZ3P6e%2FYP5x6Utpa2Bn44%2FF7bjdkh2zu4K73b%2BMv01uReytxdOiCQcfAsg4TvC1xeAL%2FVwLuAM5wAjAGDxv3ODAwYASAjmwNgB0kdoI5VQTGgshpREitSZLA17F4ehIODbqbDUwTSDdPL0FYyAKYh5mFWBLZ99hVOLK497lBfLp8zvLBAkGCLkJqwjwi6yLvpArFQ8SEJdkkLynVSz9DEZa1lu2Y9yt%2BSPK1grsinOKzUpx6toq2JVn6tVqBM1xDS%2BaLZrHdbW0cHpvNPt1mvUrzQoMDxqRDDWNGEyWTcdMmsyr7SotuyymrNB2zLbsdhTOSAddhy3nYELmSvejeIQ6tCG%2B6zHiGcP4aZXnXcpMdsnwdfPz85fJ0AuUCSIO5g5hDIUGfotbDZ8JOJ2ZG3UqejkmIzY1nhUgk9iz2FwROCoSrLxMdeUmNRTacXpScfljs9l5J2wyuTPIs8GOYhc6pNCpzTyLPIdC1wKXU47FTkU25VYn7E4a1pqWKZTrlGhXCl7TrxK5LxUtWlN2oXpi8Z1V%2BpXGqgb%2BS9LX1G9qtdk3ux4zeO6%2F43wm3EtR1tT2463Z3bk3MrrLL5d0VV3p6W7%2F%2B5Ez%2FS98d7m%2B759TH0P%2B0sexA34Pjz0yHHQ%2BrHpkOETo2G7pxEj50dfPSd%2FITmmO248of9S6RX%2Fa%2FzrrTeLky%2Ff3pu68C5t2m%2FGftZizvy95bzlB5MF5UXGxeml7GW55emVS6uJH40%2BkX5q%2BGz4eW7twnr8F%2Fevlt%2FMNwI3e3%2Bc%2BNm%2Bq7e39yf%2B0kgUcgk1jZ7DrJEiyRSw%2FuQVuGm8CGUc1QMaZtoEuhcMMoypTG9Z5Fkz2EY4WDiduAq4u3gmeTf4NvmXBZ4IXhCKFNYQIRV5IVolFiguL%2F5L4oHkKSlHaU7pBZkm2Vg5dXlIvl8hW9FSiVZpXLlUxVWVXXUSXgVuGswaE5pntFy1BbS3dcZ0r%2Bvl6vsYqBlSG34w6jIuNok19THzMve3CLMMsfKytrRRtRWxY7XHOyAcNh0XnMad77s0uZa7ZR9KdA%2FwcPLUI0h6MXlD3svEMZ8%2B31a%2FOv%2BSgPTAsCDnYK0QwVAKeCXMhE9FfIvijvaIKY29F%2Fcyfi5hNXHrMPkRjqNCyVzHMMfepbSm5qVFprsft89wOhGQmZZVmX01pzW37WTLqet5V%2FMbCi4Wnj9dXlRcnFeSdSb1bEJpWJlfeUDFscq7VcLnL9UIXiisfX5xqx5%2FiaWBt1EEXgeKVzWa9JrNrzlfD76RcfNCS3fraNtU%2B2LH107kbcYu0Tuq3Vp3FXu47yHuzfYO3G%2Ftq%2B8vf5A%2FcPxh4qPIwejHWUNdwwxPj4y8fcbyXPOF3Zjv%2BLGJiy%2Bfvvr2hmZS%2FK3ZVPi7M9O3Z57NTs3Nvl%2F5gIajn7I0ukK9KvVR%2FpPAZ8rPP9Y%2BrE98Gfx661v1RvKmw3fB75s%2FurYSf6pu43b0dpf%2BxF8CWkFUIt1RwmgS9DpmiWSZdJZsnRyL46fQxrtQplBdoR6l2aPjp9dnCGQ8zlTF3MLSz%2FqQ7QH7bY5qznguHa6f3LU8pjwrvJl8gny9%2FO78WwJFglKCg0J%2BwiTC9SJGIguiGWJCYv3i3hJAolJSTfKlVAz8ddMsYyazKJsmxyHXIW8jv6pwXJFTsR3%2BallUTlZhULmsqq36TM1b7ZN6kgaJRrmmnOa4VqI2h3aHjqXOK11%2F3T29Gn0rAzKD%2B4aHjeSMlo1rTNxMmUzHzYrNbS0oLR5ZplmpWn2zbrYJshW0fW9XbX%2FIgdnhhWOek5HTnnOrS7Arn%2Btbt5JDFoc23Ys8%2BD1aPLU9XxPivXi8XsLniL%2BPoa%2Bin7K%2FcQAhMCSIEKwZQhUyGXoxLCRcPnwn4n5kdpRVNH30m5iqWGKcQNyH%2BHMJ%2BgmTicFJdEnPD98%2B0n20L%2Fn%2BsVspDaklaWnpYcddM%2FRPiGSiM19klWa75PDlbOdOn3xy6lbe%2BfyjBa6FKqdZTm8VjRffKDlz5uTZwtLqspvlDypeVi6f2z5PUc1VI3vBqNbtYljd0fqsS7kNxxoJlxWv4K98ufqxaesa7jrHDZmbVi1JrS1tPzqUb4V3lt6%2B1tVx53b3o7sb9wx7b%2FXZ9m8MlDySHXwxdHLYc8T4mfYLnfHgV%2FjJldnh5Y1vW%2Fvx%2F10j2n8nYBQAOJ0CgFMGAPaaABT0ASAwBuedWACsKACwUwYIAV%2BAwA0BSGXmn%2FcHBJAAA8gBNVyf4QSCQAqowDUKS%2BAC58hRcHaZB86BJtANnoIZ8A3OHNkgacgQ8oDioALoCvQQ%2BoDAIIQQZogoRCWc5%2B3BeV0s8hbyF8oQdRo1i5ZFZ6LfYVQwpZhtOMMaJFUkrSdjJSvAkmOzyLHk%2BTgWXD2FHEUXXh3fSalEeZvKiOoNdTQNFc1VWj3aUTo7ulF6S%2FpnDB4MPxhLmdSZppiPsLCydLK6s5GxdbHHcshxfOW8wRXJLc%2B9wzPAW8Lnz68mgBeYFrwplCnsJaItKiCGF9sW%2FyTxXnJMqlU6SUZaZko2U05e7rN8h0KhYoISUdlMRUqVUQ2vLqFRriWqfVLnke5nfVIDekNmIzZjPhM5UwuzCPOzFn2WX6x5bRxtT9kNOKAc9ZwynIdcGdy8DjW6v%2FfEEKi9MF4b3vPESZ9lP0p%2F04DiwIVgtZCi0E%2FhJhGNUbjoiJjXcQbxHYniSXVHuI6WH2NIKUjDpqcc3zgRmLmSnZMbcqq1gPo0S9HHkoazHmUM5SOVJ6sMz2%2FU5NXSXcys27wU1PDlcv5V%2FWbqa%2Bs3PrQstq10LHTOda3fZbyne9%2B933PA9pHmY8knwk8VRkOf%2F5hAvSabrHpHO9M9j188vKL9sfnz9heFbwab2O8nfwxuLf6c336107Kb%2F8trT%2Brg%2FNiPPwlcU6OBaw7cQATIAnVgBNcZPOEKQxLIAqWgAdyC6whvwRqEhlggqYPoJ0BF0DVoGPqIoETIIlwQaYgbiHkkJ9IDWYtcRSmg0lFjaGF0CnoSjn05CSDxJxkj1SftIJMka8QKY6%2BQy5HfxVnh5iji8WT4Ykpuymtw%2FvqGOo6Ggaad1oH2I90Reiz9WQZxhkHGMCZGph7mABY6lh7WMDY%2Btkn2Ug4nTibOV1yV3EQeKV7A%2B4LvMn%2B6gJugHJzLLQsPidyE32J54mkShyWjpbyltWRwMsOy2XKm8ozy6wqvFAeU2pRrVHJVE9Vi1bM0OjS%2Fa8vqEHVz9Or02wxuG942umP8yGTGDGEuYuFgedyq3XrVls%2FOw77SYcqJxznQpc2N5JCje5lHv%2BcooderwTuTGOBj42vk5%2ByfGtATRBHsFdIVxhKeGPE2Sie6IZYyLjz%2BcSJ3UuzhkaPyybUprKlF6djjSRmrmYSs2ZzEk1J5iPy3hdeLYkvkznwpvV4eU6ly7uf5uhqZC5W1C3WC9f6XrjUyXq64qt708VrpDeWbw62Etu2Omk7rLnCn4a5Zz3pvVZ%2FXA5WH3IOox0%2BexD7FjGQ%2Fwz2vGfOYMH8V%2FKb%2B7cI056zV%2B5QP3UuMK%2FmfBNaefC3azN0y3pbZObf7%2Ftf6n%2FijABlcz2SCoy8K15p0gRVcYQoBR%2BCdXw1awEMwBe97HCQAaUGHoCSoHLoDzSDI4KgTEMWIESQ90gd5B8WGOoZaRjujn2B0MXfgeso9UjPSt2RRWErsNXIHHBLXThGBl8b%2FoOynKqWOoXGmNaYzobdmMGFUZBJmlmfxYE1gi2b34rDjtOAy5zbnMeM157Ph9xCIEjwp1Cj8UGRJjEJcUcJXskxqXIZFlijXLL%2BtaKX0RCVLzVkDrZmvtaNjqpsGR7DdoMuw22jYeNvU1KzNQsLyirWETZudrv24Y4gz1uWKm4M7tSe5lwfR1ee9n6p%2FTsCHIJvgoVDzsGcRrpGL0UmxHHFTCQ%2BSeo5UJtsf%2B5lane6QwXliLetOTu5J3zzDAubCx0W%2BxZtn0kqpy2oqFCqfVPlWQzUVtUoXx%2BpjGlgbH15JbjK8JnnDoCW5raYjr9O5i%2FHOxN3ye873SfouPpAbuP1If3BiKH5YcgQ5uvZ8cWx0ouCV4OvKN7%2Fe6k9lv3s8QzlrP3f%2B%2FdIH6YWgxfNLD5eXV9Ef2T5JfdZbc1wnfCF%2BtfrG821j4%2BQm22bjd%2BXvZd%2B3fjj%2BaNti2Ircatva%2Fqn1M%2F3no238tu32me2RHdIdrZ34nes7S7vcu867hbuDu7u%2FpH8Rf5359fjXrz3pPZ%2B9s3tD%2B%2FGP8pWV2X97AAinA5cfp%2Fb2vgoAQFIIwG7B3t52zd7e7gU42ZgEoCf49%2F8d9skYuMZZsbaPBrlP%2F9h%2F%2Fvv6D80xh2zorrydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVQoFWNkYGD4D8REAyaiVUIVssA0%2FP%2F%2FnxHGxkYzMjKCXUKyDaMasAUnuhgo7Gkb0wAi%2FgYXojS9owAAAABJRU5ErkJggg%3D%3D\"> changed from 1990</li>\n</ul>",
        "attribution":"CC-BY 3.0 Ministry for the Environment (MfE)",
        "grids":["http://tilestream-iupiw63i.dotcloud.com/1.0.0/nz-regions-land-changes-2/{z}/{x}/{y}.grid.json"],
        "tiles":["http://tilestream-iupiw63i.dotcloud.com/1.0.0/nz-regions-land-changes-2/{z}/{x}/{y}.png"]
      };
      var mm = com.modestmaps;
      var map = new mm.Map(
        tilejson.el,
        new wax.mm.connector(tilejson),
        new mm.Point(940, 500),
        [ new mm.MouseWheelHandler(),
          new mm.DragHandler(),
          new mm.DoubleClickHandler(),
          new mm.TouchHandler()
        ]
      );

      wax.mm.zoomer(map, tilejson).appendTo(map.parent); 
      wax.mm.legend(map, tilejson).appendTo(map.parent); 
      wax.mm.interaction(map, tilejson); 
      wax.mm.zoombox(map, tilejson); 
      wax.mm.attribution(map, tilejson).appendTo(map.parent); 

      var center = new mm.Location(tilejson.center[1], tilejson.center[0]);
      map.setCenterZoom(center, tilejson.center[2]);

      ts.maps[el] = map;
    }
  };

  if (!document.getElementById('ts-css')) {
    var head = document.getElementsByTagName('head')[0];
    var css = document.createElement('link');
    css.id = 'ts-css';
    css.type = 'text/css';
    css.rel = 'stylesheet';
    css.href = 'http://a.tiles.mapbox.com/lib/mm/embed.css';
    head.appendChild(css);
  }
  if (!document.getElementById(el)) {
    var script = document.getElementById(el + '-script');
    var div = document.createElement('div');
    div.id = el;
    div.className = 'ts-map';
    div.style.width = '940px';
    div.style.height = '500px';
    deadsea.blockScrollInto(div);
    script.parentNode.insertBefore(div, script.nextSibling);
  }
  ts.init();
})(window.tsEmbed = window.tsEmbed || {});

