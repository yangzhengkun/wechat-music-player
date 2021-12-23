package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
	port := flag.String("p", "4290", "port to server on")
	directory := flag.String("d", "/data/songs", "the directory to server on")
	flag.Parse()

	http.Handle("/", http.FileServer(http.Dir(*directory)))

	log.Printf("Sering %s on HTTP port %s\n", *directory, *port)
	log.Fatal(http.ListenAndServe(":"+*port, nil))
}
